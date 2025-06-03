"use client";

import { useState, useEffect } from "react";

import DishModal from "@/components/DishModal";

import Image from "next/image";

import { fetchMenuFromSheet } from "@/lib/fetchMenuFromSheet";

import type { MenuCategory } from "@/lib/data/menuTypes";
import type { MenuItem } from "@/lib/data/menuTypes";

import GlutenIcon from "@/icons/allergens/gluten.svg";
import NutsIcon from "@/icons/allergens/nuts.svg";

export default function Menu() {
  const [menuData, setMenuData] = useState<Record<string, MenuCategory>>({});
  const [activeTab, setActiveTab] = useState<string>("breakfast");
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    async function loadMenu() {
      const data = await fetchMenuFromSheet();
      setMenuData(data);
      const firstTab = Object.keys(data)[0];
      setActiveTab(firstTab);
    }

    loadMenu();
  }, []);

  // ✅ Protect against missing data before render
  if (!menuData[activeTab]) return null;
  const category = menuData[activeTab];

  const allergenIconMap: Record<
    string,
    React.FC<React.SVGProps<SVGSVGElement>>
  > = {
    gluten: GlutenIcon,
    nuts: NutsIcon,
    // etc.
  };

  return (
    <section id="menu" className="menu-m" aria-label="Menu">
      <div className="content">
        <div className="menu">
          <div className="menu-wrapper">
            {/* Section Header */}
            <div className="menu-header">
              <div className="menu-title">Our Menu</div>
              <p className="menu-flavor-text">
                A curated selection of flavor & tradition.
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="menu-deco">
                <Image
                  src="/media/text-deco.png"
                  alt="Images from the Menu"
                  width={80} // or actual width of your image
                  height={40} // or actual height of your image
                  priority // optional: preload this image if it's above the fold
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="menu-tabs">
              {Object.entries(menuData).map(([key, value]) => (
                <button
                  key={key}
                  className={`menu-tab ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key as keyof typeof menuData)}
                >
                  {value.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="menu-grid">
              {/* Left Column */}
              <div className="menu-column">
                {category.sections
                  .filter((s) => s.column === 1)
                  .map((section) => (
                    <div key={section.label} className="menu-subsection">
                      <div className="menu-subsection-title">
                        {section.label}
                      </div>
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className="menu-item"
                          onClick={() => {
                            setSelectedDish(item);
                            setShowModal(true);
                          }}
                        >
                          <div className="menu-item-header">
                            <span className="menu-item-name">{item.name}</span>
                            <span className="menu-item-price">
                              {item.price}
                            </span>
                          </div>
                          <div className="menu-item-separator" />
                          <div className="menu-item-description-row">
                            <span className="menu-item-description">
                              {item.description}
                            </span>
                            {item.allergens?.map((a) => {
                              const Icon = allergenIconMap[a];
                              return Icon ? (
                                <span className="allergen-wrapper" key={a}>
                                  <Icon className="allergen-icon" />
                                  <title>{`${a} allergen`}</title>
                                </span>
                              ) : (
                                <span key={a} style={{ color: "red" }}>
                                  ⚠ missing icon: {a}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>

              {/* Right Column */}
              <div className="menu-column">
                {category.sections
                  .filter((s) => s.column === 2)
                  .map((section) => (
                    <div key={section.label} className="menu-subsection">
                      <div className="menu-subsection-title">
                        {section.label}
                      </div>
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className="menu-item"
                          onClick={() => {
                            setSelectedDish(item);
                            setShowModal(true);
                          }}
                        >
                          <div className="menu-item-header">
                            <span className="menu-item-name">{item.name}</span>
                            <span className="menu-item-price">
                              {item.price}
                            </span>
                          </div>
                          <div className="menu-item-separator" />
                          <p className="menu-item-description">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>

            {category.specials?.length && (
              <div className="menu-featured">
                <div className="menu-subsection-title">Chef’s Highlights</div>
                <div className="menu-featured-items">
                  {category.specials.map((item, index) => (
                    <div
                      key={index}
                      className="menu-item"
                      onClick={() => {
                        setSelectedDish(item);
                        setShowModal(true);
                      }}
                    >
                      <div className="menu-item-header">
                        <span className="menu-item-name">{item.name}</span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <div className="menu-item-separator" />
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <DishModal
          onClose={() => {
            setShowModal(false);
            setSelectedDish(null);
          }}
          selectedDish={selectedDish}
        />
      )}
    </section>
  );
}

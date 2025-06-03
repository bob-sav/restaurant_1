"use client";

import Image from "next/image";
import "../styles/globals.css";

const recipeImages = [
  { src: "/media/dishes/dish1.jpg", alt: "Truffle Pasta" },
  { src: "/media/dishes/dish2.jpg", alt: "Seared Salmon" },
  { src: "/media/dishes/dish3.jpg", alt: "Avocado Toast" },
  { src: "/media/dishes/dish4.jpg", alt: "Berry Pancakes" },
  { src: "/media/dishes/dish5.jpg", alt: "Herb Omelette" },
  { src: "/media/dishes/dish6.jpg", alt: "Bruschetta Mix" },
  { src: "/media/dishes/dish7.jpg", alt: "Bruschetta Mix" },
  { src: "/media/dishes/dish8.jpg", alt: "Bruschetta Mix" },
  { src: "/media/dishes/dish9.jpg", alt: "Bruschetta Mix" },
];

export default function Recipes() {
  return (
    <section id="recipes" className="recipes-m">
      <div className="content">
        <div className="recipes">
          <div className="recipes-wrapper">
            <h2 className="recipesTitle">From Our Kitchen</h2>
            <p className="recipesText">
              A peek behind the scenes — curated dishes and chef&#39;s
              favorites.
            </p>

            <div className="galleryGrid">
              {recipeImages.map((img, index) => (
                <div key={index} className="galleryItem">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="galleryImage"
                  />
                  <div className="imageOverlay">{img.alt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

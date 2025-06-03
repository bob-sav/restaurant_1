export type MenuItem = {
  name: string;
  price: string;
  description: string;
  allergens?: string[];
  ingredients?: string[];
  dishImage?: string;
};

export type MenuSection = {
  label: string; // e.g. "Soups"
  column: 1 | 2;
  items: MenuItem[];
};

export type MenuCategory = {
  label: string; // e.g. "Breakfast"
  sections: MenuSection[];
  specials?: MenuItem[];
};

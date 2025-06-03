import type { MenuCategory, MenuItem } from "@/lib/data/menuTypes";
import Papa from "papaparse";

export async function fetchMenuFromSheet(): Promise<
  Record<string, MenuCategory>
> {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfPoRmxt2vyKx1pzKZ_PHufiCua70gz9CNkq1YECAafhxb5xdsX1-p3U6WQ1oWtjCBso3lZ2pheou1/pub?output=csv"
  );
  const csv = await res.text();

  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  const rows = parsed.data as any[];

  const categories: Record<string, MenuCategory> = {};

  for (const row of rows) {
    const category = row.category?.trim() || "Uncategorized";
    const section = row.section?.trim() || "General";
    const column = parseInt(row.column?.trim() || "1", 10) as 1 | 2;
    const special =
      row.special?.toLowerCase().trim() === "yes" ||
      row.special?.toLowerCase().trim() === "true";

    const allergens = row.allergens
      ? row.allergens.split(",").map((a: string) => a.trim().toLowerCase())
      : [];

    const ingredients = row.ingredients
      ? row.ingredients.split(",").map((i: string) => i.trim())
      : [];

    const dishImage = row.dishImage || "";

    const item: MenuItem = {
      name: row.name?.trim(),
      price: row.price?.trim(),
      description: row.description?.trim(),
      allergens,
      ingredients,
      dishImage,
    };

    // Create category container if it doesn't exist
    if (!categories[category]) {
      categories[category] = {
        label: category,
        sections: [],
        specials: [],
      };
    }

    if (special) {
      categories[category].specials?.push(item);
    } else {
      // Find or create section
      let sectionObj = categories[category].sections.find(
        (s) => s.label === section && s.column === column
      );

      if (!sectionObj) {
        sectionObj = {
          label: section,
          column,
          items: [],
        };
        categories[category].sections.push(sectionObj);
      }

      sectionObj.items.push(item);
    }
  }

  return categories;
}

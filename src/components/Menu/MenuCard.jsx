import { useState } from "react";
import menuData from "../../Data/menuData";
import MenuHeader from "./MenuHeader.jsx";
import CategorySection from "./CatSection.jsx";
import "./MenuCard.css";

export default function MenuCard() {
  const [activeCategory, setActiveCategory] = useState("All Items");

  // Build tab list dynamically from menuData
  const tabs = ["All Items", ...menuData.map(cat => cat.category)];

  // Filter which categories to render
  const visibleCategories =
    activeCategory === "All Items"
      ? menuData
      : menuData.filter(cat => cat.category === activeCategory);

  return (
    <div className="menu-page">
      <MenuHeader
        tabs={tabs}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <main className="menu-page__content">
        {visibleCategories.map(category => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
    </div>
  );
}

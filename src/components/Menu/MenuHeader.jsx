import CategoryTabs from "./Categorytabs";
import "./MenuHeader.css";

export default function MenuHeader({ tabs, activeCategory, onSelect }) {
  return (
    <header className="menu-header">
      <div className="menu-header__title-block">
        <span className="menu-header__eyebrow">✦ Our ✦</span>
        <h1 className="menu-header__title">Menu</h1>
      </div>

      <CategoryTabs
        tabs={tabs}
        activeCategory={activeCategory}
        onSelect={onSelect}
      />
    </header>
  );
}
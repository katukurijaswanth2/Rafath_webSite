import "./CategoryTabs.css";

export default function CategoryTabs({ tabs, activeCategory, onSelect }) {
  return (
    <div className="category-tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`category-tabs__tab ${tab === activeCategory ? "category-tabs__tab--active" : ""}`}
          onClick={() => onSelect(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
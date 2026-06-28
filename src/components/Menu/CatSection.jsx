import MenuItemCard from "./MenuItemCard.jsx";
import "./CategorySection.css";

export default function CatSection({ category }) {
  return (
    <section className="category-section">

      {/* ── Section heading ── */}
      <div className="category-section__header">
        <span className="category-section__icon">{category.icon}</span>

        <div className="category-section__title-block">
          <h2 className="category-section__title">{category.category}</h2>
          {category.note && (
            <p className="category-section__note">{category.note}</p>
          )}
        </div>

        <div className="category-section__divider" />

        <span className="category-section__count">
          {category.items.length} items
        </span>
      </div>

      {/* ── Card grid ── */}
      <div className="category-section__grid">
        {category.items.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

    </section>
  );
}
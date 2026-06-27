import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import menuData from "../../Data/menuData";
import "./MenuCategories.css";

export default function MenuCategories({ onSelectCategory }) {
  const [activeId, setActiveId] = useState(null);
  const scrollRef = useRef(null);

//   function handleSelect(cat) {
//     setActiveId((prev) => (prev === cat.id ? null : cat.id));
//     if (onSelectCategory) onSelectCategory(cat);
//   }

  function scroll(direction) {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 300;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section className="menu-section">
      {/* Header */}
      <div className="menu-header">
        <h2 className="menu-title">OUR MENU CATEGORIES</h2>
        <div className="menu-divider">
          <span className="divider-line" />
          <span className="divider-icon">❧</span>
          <span className="divider-line" />
        </div>
      </div>

      {/* Scroll wrapper */}
      <div className="menu-scroll-wrapper">
        {/* Left arrow */}
        <button className="scroll-btn scroll-btn--left" onClick={() => scroll("left")} aria-label="Scroll left">
          <ChevronLeft size={22} />
        </button>

        {/* Scrollable row */}
        <div className="menu-track" ref={scrollRef}>
          {menuData.map((cat) => {
            const isActive = activeId === cat.id;

            return (
              <div
                key={cat.id}
                className={`menu-card ${isActive ? "menu-card--active" : ""}`}
                // onClick={() => handleSelect(cat)}
              >
                <div className="menu-card-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className="menu-card-img"
                  />
                </div>
                <span className="menu-card-label">{cat.category}</span>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button className="scroll-btn scroll-btn--right" onClick={() => scroll("right")} aria-label="Scroll right">
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
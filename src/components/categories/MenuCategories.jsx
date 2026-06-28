import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import menuData from "../../Data/menuData";
import "./MenuCategories.css";
import { SpecificHeader } from "../SpecificHeader";

export default function MenuCategories({ onSelectCategory }) {
  const [activeId, setActiveId] = useState(null);
  const scrollRef = useRef(null);

  // function handleSelect(cat) {
  //   setActiveId((prev) => (prev === cat.id ? null : cat.id));
  //   if (onSelectCategory) onSelectCategory(cat);
  // }

  function scroll(direction) {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 300;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="Cat-menu-section">
      {/* Header */}
      <SpecificHeader />

      {/* Scroll wrapper */}
      <div className="Cat-menu-scroll-wrapper">
        {/* Left arrow */}
        <button
          className="Cat-scroll-btn Cat-scroll-btn--left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Scrollable row */}
        <div className="Cat-menu-track" ref={scrollRef}>
          {menuData.map((cat) => {
            const isActive = activeId === cat.id;

            return (
              <div
                key={cat.id}
                className={`Cat-menu-card ${
                  isActive ? "Cat-menu-card--active" : ""
                }`}
                // onClick={() => handleSelect(cat)}
              >
                <div className="Cat-menu-card-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className="Cat-menu-card-img"
                  />
                </div>

                <span className="Cat-menu-card-label">
                  {cat.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          className="Cat-scroll-btn Cat-scroll-btn--right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
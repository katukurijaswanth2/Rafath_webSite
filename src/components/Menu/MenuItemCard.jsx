import { useState } from "react";
import TypeBadge from "./Typebadge.jsx";
import "./MenuItemCard.css";

const BESTSELLER_IDS = new Set([108, 118, 202, 306, 508]);
const NEW_IDS        = new Set([511, 512, 606]);

export default function MenuItemCard({ item }) {
  const [imgError, setImgError] = useState(false);
  const isBestseller = BESTSELLER_IDS.has(item.id);
  const isNew        = NEW_IDS.has(item.id);

  return (
    <div className="menuCard">
      {/* ── Image area ── */}
      <div className="menu-card__image-wrapper">
        {!imgError && (
          <img
            src={item.image}
            alt={item.name}
            className="menu-card__image"
            onError={() => setImgError(true)}
          />
        )}

        {isBestseller && (
          <span className="menu-card__badge menu-card__badge--bestseller">
            Bestseller
          </span>
        )}
        {isNew && !isBestseller && (
          <span className="menu-card__badge menu-card__badge--new">
            New
          </span>
        )}
      </div>

      {/* ── Info area ── */}
      <div className="menu-card__info">
        <div className="menu-card__title-row">
          <h3 className="menu-card__name">{item.name}</h3>
          <TypeBadge type={item.type} />
        </div>
        <p className="menu-card__description">{item.description}</p>
      </div>
    </div>
  );
}
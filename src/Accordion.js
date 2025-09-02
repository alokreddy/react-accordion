import { useState } from "react";
import { GoPlus, GoHorizontalRule } from "react-icons/go";

export default function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);
        let openCloseIcon = !isExpanded ? <GoPlus /> : <GoHorizontalRule />;
        return (
          <div className="accordion__item" key={value}>
            <button
              className="accordion__item-title"
              type="button"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSections(newOpenSections);
              }}
            >
              <span className="accordion__item-title-text">{title}</span>
              <span className="accordion__item-icon">{openCloseIcon}</span>
              <span
                aria-hidden={true}
                className={[
                  "accordion__item-arrow",
                  isExpanded && "accordion__item-arrow--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div className="accordion__item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useState } from "react";

export default function Accordion({ sections }) {
  const [openSections, setOpenSection] = useState(new Set());

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);
        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item-title"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSection(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  isExpanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}

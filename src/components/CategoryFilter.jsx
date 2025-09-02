import { useState } from "react";

const DEFAULT_CATEGORIES = [
  { id: "audio", label: "Audio", emoji: "🎧" },
  { id: "wearables", label: "Wearables", emoji: "⌚" },
  { id: "laptops", label: "Laptops", emoji: "💻" },
];

export default function CategoryFilter({ onChange, categories = DEFAULT_CATEGORIES }) {
  const [selected, setSelected] = useState(null); 

  const selectCategory = (id) => {
    const next = selected === id ? null : id; 
    setSelected(next);
    onChange?.(next); 
  };

  const clearSelection = () => {
    setSelected(null);
    onChange?.(null);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold">Categories</h3>
        <button
          type="button"
          onClick={clearSelection}
          className="text-sm rounded-xl px-3 py-1 border border-gray-200 hover:bg-gray-50 active:scale-[0.99] transition"
          disabled={!selected}
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-3">
        {categories.map((c) => {
          const active = selected === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => selectCategory(c.id)}
              className={[
                "group w-full rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                active
                  ? "border-blue-500 bg-blue-50 focus-visible:ring-blue-500"
                  : "border-gray-200 bg-white hover:border-gray-300 focus-visible:ring-gray-400",
              ].join(" ")}
              aria-pressed={active}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">{c.emoji}</span>
                <div className="flex-1">
                  <div className="font-medium">{c.label}</div>
                  <div className="text-xs text-gray-500">
                    {active ? "Selected" : "Tap to select"}
                  </div>
                </div>
                <span
                  className={[
                    "inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs",
                    active
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-gray-300 text-gray-400",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {active ? "✓" : "+"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

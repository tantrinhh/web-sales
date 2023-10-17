import { useState } from "react";

function ColorTabSelect({ colors, onSelect }: any) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color: any) => {
    setSelectedColor(color);
    onSelect(color);
  };
  return (
    <div className="px-2 py-5">
      <div className="flex space-x-4">
        {colors.map((item: any) => (
          <div
            key={item.id}
            onClick={() => handleColorSelect(item.color)}
            className={`cursor-pointer p-4 border rounded-lg ${
              selectedColor === item.color
                ? `border-[${item.color}] bg-[${item.color}]`
                : "border-gray-300 hover:border-gray-400"
            } ${
              selectedColor === item.color ? `bg-[${item.color}]` : "bg-white"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorTabSelect;

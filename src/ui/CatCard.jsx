import { useState } from "react";
import Like from "./Like";

function CatCard({ cat }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-all hover:scale-110 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={cat.url} className="h-56 w-56 object-cover" />
      {isHovered && (
        <Like
          className={`absolute bottom-4 right-2 cursor-pointer text-6xl text-red-600`}
          cat={cat}
        />
      )}
    </div>
  );
}

export default CatCard;

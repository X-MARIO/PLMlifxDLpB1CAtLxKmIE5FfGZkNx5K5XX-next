import React from "react";

export const ResetButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-4 px-3 rounded"
      onClick={onClick}
    >
      Очистить
    </button>
  );
};

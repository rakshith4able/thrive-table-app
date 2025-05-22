import React from "react";

interface VirtualizedTitleProps {
  title?: string;
}

const VirtualizedTitle: React.FC<VirtualizedTitleProps> = ({ title }) => {
  if (!title) return null;

  return (
    <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 px-2 sm:px-0">
      {title}
    </h2>
  );
};

export default VirtualizedTitle;

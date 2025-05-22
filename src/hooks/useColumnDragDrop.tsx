import { useState, useCallback } from "react";
import { type ColumnOrderState } from "@tanstack/react-table";

interface UseColumnDragDropProps {
  columnOrder: ColumnOrderState;
  setColumnOrder: React.Dispatch<React.SetStateAction<ColumnOrderState>>;
}

export const useColumnDragDrop = ({
  columnOrder,
  setColumnOrder,
}: UseColumnDragDropProps) => {
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);

  const handleDragStart = useCallback((id: string) => {
    setDraggedColumn(id);
  }, []);

  const handleDrop = useCallback(
    (targetId: string) => {
      if (!draggedColumn || draggedColumn === targetId) {
        setDraggedColumn(null);
        return;
      }

      const newColumnOrder = [...columnOrder];
      const sourceIndex = newColumnOrder.indexOf(draggedColumn);
      const targetIndex = newColumnOrder.indexOf(targetId);

      if (sourceIndex !== -1 && targetIndex !== -1) {
        newColumnOrder.splice(sourceIndex, 1);
        newColumnOrder.splice(targetIndex, 0, draggedColumn);
        setColumnOrder(newColumnOrder);
      }

      setDraggedColumn(null);
    },
    [draggedColumn, columnOrder, setColumnOrder]
  );

  return {
    draggedColumn,
    handleDragStart,
    handleDrop,
  };
};

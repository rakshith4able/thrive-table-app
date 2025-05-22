import React from "react";
import { type Table, type ColumnOrderState } from "@tanstack/react-table";
import { useVirtualizedTable } from "../../../hooks/useVirtualizedTable";
import { useColumnDragDrop } from "../../../hooks/useColumnDragDrop";
import VirtualizedContainer from "./VirtualizedContainer";
import VirtualizedFooter from "./VirtualizedFooter";
import VirtualizedTitle from "./VirtualizedTitle";

interface VirtualizedTableProps<T> {
  table: Table<T>;
  height?: number;
  title?: string;
  columnOrder: ColumnOrderState;
  setColumnOrder: React.Dispatch<React.SetStateAction<ColumnOrderState>>;
  emptyStateMessage?: string;
  emptyStateIcon?: React.ReactNode;
}

const VirtualizedTable = <T extends { id: string | number }>({
  table,
  height,
  title,
  columnOrder,
  setColumnOrder,
  emptyStateMessage,
  emptyStateIcon,
}: VirtualizedTableProps<T>) => {
  const {
    tableContainerRef,
    rowVirtualizer,
    virtualRows,
    totalHeight,
    containerStyle,
    rows,
  } = useVirtualizedTable({ table, height });

  const { draggedColumn, handleDragStart, handleDrop } = useColumnDragDrop({
    columnOrder,
    setColumnOrder,
  });

  const hasData = rows.length > 0;

  return (
    <div className="p-2 sm:p-4">
      <VirtualizedTitle title={title} />

      <VirtualizedContainer
        table={table}
        tableContainerRef={tableContainerRef}
        containerStyle={containerStyle}
        virtualRows={virtualRows}
        totalHeight={totalHeight}
        rowVirtualizer={rowVirtualizer}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        draggedColumn={draggedColumn}
        emptyStateMessage={emptyStateMessage}
        emptyStateIcon={emptyStateIcon}
        hasData={hasData}
      />

      <div className="px-2 sm:px-0">
        <VirtualizedFooter
          totalCount={rows.length}
          virtualRowsCount={virtualRows.length}
        />
      </div>
    </div>
  );
};

export default VirtualizedTable;

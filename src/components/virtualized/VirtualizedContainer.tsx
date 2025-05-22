import React, { type RefObject } from "react";
import { type Table } from "@tanstack/react-table";
import { type VirtualItem, type Virtualizer } from "@tanstack/react-virtual";
import TableHeader from "../table/TableHeader";
import VirtualizedTableBody from "./VirtualizedTableBody";
import EmptyState from "../table/EmptyState";

interface VirtualizedContainerProps<T> {
  table: Table<T>;
  tableContainerRef: RefObject<HTMLDivElement | null>;
  containerStyle: React.CSSProperties;
  virtualRows: VirtualItem[];
  totalHeight: number;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  onDragStart: (columnId: string) => void;
  onDrop: (columnId: string) => void;
  draggedColumn: string | null;
  emptyStateMessage?: string;
  emptyStateIcon?: React.ReactNode;
  hasData: boolean;
}

const VirtualizedContainer = <T extends { id: string | number }>({
  table,
  tableContainerRef,
  containerStyle,
  virtualRows,
  totalHeight,
  rowVirtualizer,
  onDragStart,
  onDrop,
  draggedColumn,
  emptyStateMessage,
  emptyStateIcon,
  hasData,
}: VirtualizedContainerProps<T>) => {
  return (
    <div
      ref={tableContainerRef}
      className="overflow-auto rounded border border-gray-200 w-full"
      style={containerStyle}
    >
      {!hasData ? (
        <EmptyState message={emptyStateMessage} icon={emptyStateIcon} />
      ) : (
        <div className="min-w-full">
          <table className="w-full divide-y divide-gray-200 min-w-max">
            <TableHeader
              table={table}
              onDragStart={onDragStart}
              onDrop={onDrop}
              draggedColumn={draggedColumn}
            />
            <VirtualizedTableBody
              table={table}
              virtualRows={virtualRows}
              totalHeight={totalHeight}
              rowVirtualizer={rowVirtualizer}
            />
          </table>
        </div>
      )}
    </div>
  );
};

export default VirtualizedContainer;

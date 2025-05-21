import React, { useRef, useEffect, useState } from "react";
import { type Table, type ColumnOrderState } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import EmptyState from "./EmptyState";

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
  height = 500,
  title,
  columnOrder,
  setColumnOrder,
  emptyStateMessage,
  emptyStateIcon,
}: VirtualizedTableProps<T>) => {
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        scrollPositionRef.current = tableContainerRef.current.scrollTop;
      }
    };

    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tableContainerRef.current) {
        tableContainerRef.current.scrollTop = scrollPositionRef.current;
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [table.getState().sorting]);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 41,
    overscan: 10,
  });

  const handleDragStart = (id: string) => {
    setDraggedColumn(id);
  };

  const handleDrop = (targetId: string) => {
    if (!draggedColumn || draggedColumn === targetId) return;

    const newColumnOrder = [...columnOrder];
    const sourceIndex = newColumnOrder.indexOf(draggedColumn);
    const targetIndex = newColumnOrder.indexOf(targetId);

    if (sourceIndex !== -1 && targetIndex !== -1) {
      newColumnOrder.splice(sourceIndex, 1);
      newColumnOrder.splice(targetIndex, 0, draggedColumn);
      setColumnOrder(newColumnOrder);
    }

    setDraggedColumn(null);
  };

  const totalHeight = rowVirtualizer.getTotalSize();
  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <div className="p-4">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

      <div
        ref={tableContainerRef}
        className="overflow-auto rounded border border-gray-200"
        style={{ height: `${height}px` }}
      >
        {rows.length === 0 ? (
          <EmptyState message={emptyStateMessage} icon={emptyStateIcon} />
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader
              table={table}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              draggedColumn={draggedColumn}
            />
            <tbody className="divide-y divide-gray-100 bg-white">
              {virtualRows.length > 0 && (
                <tr>
                  <td
                    style={{
                      height: `${virtualRows[0].start}px`,
                    }}
                    colSpan={table.getAllColumns().length}
                  />
                </tr>
              )}
              {virtualRows.map((virtualRow) => {
                const row = rows[virtualRow.index];
                return (
                  <TableRow
                    key={row.id}
                    row={row}
                    virtualIndex={virtualRow.index}
                    measureRef={(el) => rowVirtualizer.measureElement(el)}
                  />
                );
              })}

              {virtualRows.length > 0 && (
                <tr>
                  <td
                    style={{
                      height: `${
                        totalHeight - virtualRows[virtualRows.length - 1].end
                      }px`,
                    }}
                    colSpan={table.getAllColumns().length}
                  />
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <TableFooter
        totalCount={rows.length}
        virtualRowsCount={virtualRows.length}
      />
    </div>
  );
};

export default VirtualizedTable;

import { useRef, useEffect, useMemo, useCallback } from "react";
import { type Table } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { UI_CONSTANTS } from "../constants/ui";
import { VIRTUALIZED_TABLE_CONSTANTS } from "../constants/table";

interface UseVirtualizedTableProps<T> {
  table: Table<T>;
  height?: number;
}

export const useVirtualizedTable = <T extends { id: string | number }>({
  table,
  height = VIRTUALIZED_TABLE_CONSTANTS.TABLE_HEIGHT,
}: UseVirtualizedTableProps<T>) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  const handleScroll = useCallback(() => {
    if (tableContainerRef.current) {
      scrollPositionRef.current = tableContainerRef.current.scrollTop;
    }
  }, []);

  useEffect(() => {
    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const sortingState = useMemo(() => table.getState().sorting, [table]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tableContainerRef.current) {
        tableContainerRef.current.scrollTop = scrollPositionRef.current;
      }
    }, UI_CONSTANTS.SCROLL_TIMEOUT);

    return () => clearTimeout(timeoutId);
  }, [sortingState]);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => VIRTUALIZED_TABLE_CONSTANTS.ESTIMATED_ROW_SIZE,
    overscan: VIRTUALIZED_TABLE_CONSTANTS.OVERSCAN,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalHeight = rowVirtualizer.getTotalSize();

  const containerStyle = useMemo(
    () => ({
      height: `${height}px`,
      maxHeight: `calc(100vh - ${UI_CONSTANTS.VIEWPORT_OFFSET}px)`,
    }),
    [height]
  );

  return {
    tableContainerRef,
    rowVirtualizer,
    virtualRows,
    totalHeight,
    containerStyle,
    rows,
  };
};

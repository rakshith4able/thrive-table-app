import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnOrderState,
} from "@tanstack/react-table";

interface UseTableConfigProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  initialColumnOrder: ColumnOrderState;
}

const useTableConfig = <T,>({
  data,
  columns,
  initialColumnOrder,
}: UseTableConfigProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnOrder, setColumnOrder] =
    useState<ColumnOrderState>(initialColumnOrder);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
  });

  return {
    table,
    sorting,
    columnOrder,
    setColumnOrder,
  };
};

export default useTableConfig;

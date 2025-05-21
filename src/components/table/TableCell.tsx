import { flexRender, type Cell } from "@tanstack/react-table";

interface TableCellProps<T> {
  cell: Cell<T, unknown>;
}

const TableCell = <T,>({ cell }: TableCellProps<T>) => {
  return (
    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 max-w-0">
      <div className="truncate" title={String(cell.getValue())}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </div>
    </td>
  );
};

export default TableCell;

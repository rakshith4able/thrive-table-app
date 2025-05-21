import { flexRender, type Cell } from "@tanstack/react-table";

interface TableCellProps<T> {
  cell: Cell<T, unknown>;
}

const TableCell = <T,>({ cell }: TableCellProps<T>) => {
  return (
    <td className="px-4 py-2 text-sm text-gray-700">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default TableCell;

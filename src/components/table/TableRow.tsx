import { type Row } from "@tanstack/react-table";
import TableCell from "./TableCell";

interface TableRowProps<T> {
  row: Row<T>;
  virtualIndex: number;
  measureRef: (el: HTMLTableRowElement | null) => void;
}

const TableRow = <T,>({ row, virtualIndex, measureRef }: TableRowProps<T>) => {
  return (
    <tr className="hover:bg-gray-50" data-index={virtualIndex} ref={measureRef}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};

export default TableRow;

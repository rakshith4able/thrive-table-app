import { type Table } from "@tanstack/react-table";
import { type VirtualItem, type Virtualizer } from "@tanstack/react-virtual";
import TableRow from "../table/TableRow";

interface VirtualizedTableBodyProps<T> {
  table: Table<T>;
  virtualRows: VirtualItem[];
  totalHeight: number;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

const VirtualizedTableBody = <T extends { id: string | number }>({
  table,
  virtualRows,
  totalHeight,
  rowVirtualizer,
}: VirtualizedTableBodyProps<T>) => {
  const { rows } = table.getRowModel();

  if (virtualRows.length === 0) {
    return <tbody className="divide-y divide-gray-100 bg-white" />;
  }

  return (
    <tbody className="divide-y divide-gray-100 bg-white">
      <tr>
        <td
          style={{ height: `${virtualRows[0].start}px` }}
          colSpan={table.getAllColumns().length}
        />
      </tr>

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
    </tbody>
  );
};

export default VirtualizedTableBody;

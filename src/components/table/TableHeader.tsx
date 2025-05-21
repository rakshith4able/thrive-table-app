import { flexRender, type Table } from "@tanstack/react-table";
import {
  BiChevronDown as ChevronDown,
  BiChevronUp as ChevronUp,
} from "react-icons/bi";

interface TableHeaderProps<T> {
  table: Table<T>;
  onDragStart: (columnId: string) => void;
  onDrop: (columnId: string) => void;
  draggedColumn: string | null;
}

const TableHeader = <T,>({
  table,
  onDragStart,
  onDrop,
  draggedColumn,
}: TableHeaderProps<T>) => {
  return (
    <thead className="bg-gray-100 sticky top-0 z-10">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              onClick={(e) => {
                if (!draggedColumn) {
                  header.column.getToggleSortingHandler()?.(e);
                }
              }}
              className="px-4 py-2 text-left text-sm font-medium text-gray-700 cursor-pointer select-none hover:bg-gray-200"
              draggable
              onDragStart={() => onDragStart(header.column.id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onDrop(header.column.id);
              }}
            >
              <div className="flex items-center gap-1">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{
                  asc: <ChevronUp />,
                  desc: <ChevronDown />,
                }[header.column.getIsSorted() as string] ?? ""}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;

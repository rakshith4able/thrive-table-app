import React from "react";
import { type ColumnDef } from "@tanstack/react-table";
import VirtualizedTable from "../table/VirtualizedTable";
import useTableConfig from "../../hooks/useTableConfig";
import type { User } from "../../types/User";
import { calculateDaysSince } from "../../utils/dateUtils";
import Loader from "../common/Loader";

export const columnIds = {
  id: "id",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  city: "city",
  registeredDate: "registeredDate",
  fullName: "fullName",
  dsr: "dsr",
} as const;

export const initialColumnOrder: string[] = [
  columnIds.id,
  columnIds.firstName,
  columnIds.lastName,
  columnIds.email,
  columnIds.city,
  columnIds.registeredDate,
  columnIds.fullName,
  columnIds.dsr,
];

export const userColumns: ColumnDef<User>[] = [
  { id: columnIds.id, accessorKey: "id", header: "ID" },
  { id: columnIds.firstName, accessorKey: "firstName", header: "First Name" },
  { id: columnIds.lastName, accessorKey: "lastName", header: "Last Name" },
  { id: columnIds.email, accessorKey: "email", header: "Email" },
  { id: columnIds.city, accessorKey: "city", header: "City" },
  {
    id: columnIds.registeredDate,
    accessorKey: "registeredDate",
    header: "Registered Date",
  },
  {
    id: columnIds.fullName,
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: "Full Name",
  },
  {
    id: columnIds.dsr,
    accessorFn: (row) => calculateDaysSince(row.registeredDate),
    header: "DSR",
    cell: (info) => `${info.getValue()} days`,
  },
];

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  title?: string;
  height?: number;
}

const UsersTable: React.FC<UsersTableProps> = ({
  users,
  isLoading,
  title = "Virtualized Users Table",
  height = 500,
}) => {
  const { table, columnOrder, setColumnOrder } = useTableConfig({
    data: users,
    columns: userColumns,
    initialColumnOrder,
  });

  if (isLoading) return <Loader />;

  return (
    <VirtualizedTable
      table={table}
      height={height}
      title={`${title} (${users.length} Users)`}
      columnOrder={columnOrder}
      setColumnOrder={setColumnOrder}
      emptyStateMessage="No users found"
    />
  );
};

export default UsersTable;

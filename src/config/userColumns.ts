import { type ColumnDef } from "@tanstack/react-table";
import type { User } from "../types/user";
import { calculateDaysSince } from "../utils/dateUtils";
import { COLUMN_IDS } from "../constants/column";

export const userColumns: ColumnDef<User>[] = [
  { id: COLUMN_IDS.id, accessorKey: "id", header: "ID" },
  { id: COLUMN_IDS.firstName, accessorKey: "firstName", header: "First Name" },
  { id: COLUMN_IDS.lastName, accessorKey: "lastName", header: "Last Name" },
  { id: COLUMN_IDS.email, accessorKey: "email", header: "Email" },
  { id: COLUMN_IDS.city, accessorKey: "city", header: "City" },
  {
    id: COLUMN_IDS.registeredDate,
    accessorKey: "registeredDate",
    header: "Registered Date",
  },
  {
    id: COLUMN_IDS.fullName,
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: "Full Name",
  },
  {
    id: COLUMN_IDS.dsr,
    accessorFn: (row) => calculateDaysSince(row.registeredDate),
    header: "DSR",
    cell: (info) => `${info.getValue()} days`,
  },
];

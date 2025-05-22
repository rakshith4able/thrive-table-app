import React from "react";
import VirtualizedTable from "../virtualized/VirtualizedTable";
import Loader from "../common/Loader";
import useTableConfig from "../../hooks/useTableConfig";
import type { User } from "../../types/user";
import { INITIAL_COLUMN_ORDER } from "../../constants/column";
import { userColumns } from "../../config/userColumns";

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
    initialColumnOrder: INITIAL_COLUMN_ORDER,
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

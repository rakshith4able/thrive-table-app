interface TableFooterProps {
  totalCount: number;
  virtualRowsCount: number;
}

const TableFooter: React.FC<TableFooterProps> = ({
  totalCount,
  virtualRowsCount,
}) => {
  return (
    <div className="mt-2 text-sm text-gray-500">
      Showing {totalCount} items with virtualization (only rendering ~
      {virtualRowsCount} rows at a time)
    </div>
  );
};

export default TableFooter;

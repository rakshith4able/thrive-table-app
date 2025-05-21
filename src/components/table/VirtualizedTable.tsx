import TableHeader from "./TableHeader";

const TABLE_HEIGHT = 600;
const VirtualizedTable = () => {
  return (
    <div>
      <div className="overflow-auto" style={{ height: TABLE_HEIGHT }}>
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
        </table>
      </div>
    </div>
  );
};
export default VirtualizedTable;

interface EmptyStateProps {
  message?: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "No data available",
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-gray-500">
      {icon && <div className="mb-4">{icon}</div>}
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;

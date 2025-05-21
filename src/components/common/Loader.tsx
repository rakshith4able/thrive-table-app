export function Loader() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

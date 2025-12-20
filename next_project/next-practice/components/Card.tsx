export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      {children}
    </div>
  );
};

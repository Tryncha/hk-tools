interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ResetButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md border-2 border-gray-400 bg-gray-800 px-2 py-1 text-xl font-semibold hover:cursor-pointer hover:bg-gray-700"
    >
      {children}
    </button>
  );
};

export default ResetButton;

const SideTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 z-20 mt-16 flex h-screen w-[25vw] flex-col justify-center gap-2 overflow-y-auto border-r border-gray-700 bg-gray-900/80 backdrop-blur-md transition-all">
      {children}
    </div>
  );
};

export default SideTooltip;

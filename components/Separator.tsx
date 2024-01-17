const Separator = ({ className }: { className: string }) => {
  return (
    <div className={`h-full w-[1px] bg-gray-800 mx-4 ${className}`}>&nbsp;</div>
  );
};

export default Separator;

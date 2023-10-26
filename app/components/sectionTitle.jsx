const SectionTitle = ({ children }) => {
  return (
    <h2
      className={`flex items-center gap-2 text-lg font-extrabold tracking-wide whitespace-nowrap`}
    >
      <div className={`bg-black h-4 w-4`}></div>
      {children && children.toUpperCase()}
    </h2>
  );
};

export default SectionTitle;


const Tag: React.FC = ({children}) => {
  return (
    <span className="ps-2 pe-2 text-xs inline-block rounded border border-[#d9d9d9] bg-[#fafafa] p-0 m-0">
      {children}
    </span>
  );
};

export default Tag;

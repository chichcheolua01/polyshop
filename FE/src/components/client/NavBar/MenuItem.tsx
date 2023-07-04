type MenuItemProps = {
  label: string;
  onClick: () => void;
};

const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className="px-4 py-3 hover:bg-rose-100 transition font-semibold"
      >
        {label}
      </div>
    </>
  );
};

export default MenuItem;

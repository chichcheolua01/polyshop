type NavBarItemProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

const NavBarItem = ({ label, onClick, active }: NavBarItemProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className={
          active
            ? "text-rose-500 cursor-default"
            : "text-black hover:text-rose-500 cursor-pointer transition"
        }
      >
        {label}
      </div>
    </>
  );
};

export default NavBarItem;

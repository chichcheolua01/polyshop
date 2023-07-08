// Type để truyền dữ liệu giữa các props
type AvatarProps = {
  src?: string | null;
};

// Khởi tạo component
const Avatar = ({ src }: AvatarProps) => {
  return (
    <>
      <img
        width={100}
        height={100}
        alt="Avatar"
        className="rounded-full max-w-[2.5rem] max-h-[2.5rem]"
        src={src || "/images/user.jpg"}
      />
    </>
  );
};

export default Avatar;

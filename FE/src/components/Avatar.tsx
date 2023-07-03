type AvatarProps = {
  src: string | null | undefined;
};

const Avatar = ({ src }: AvatarProps) => {
  return (
    <>
      <img
        width="30"
        height="30"
        alt="Avatar"
        className="rounded-full"
        src={src || "/images/user.jpg"}
      />
    </>
  );
};

export default Avatar;

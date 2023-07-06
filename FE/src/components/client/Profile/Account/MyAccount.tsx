import { Link } from "react-router-dom";

type MyAccountProps = {
  url: string;
  title: string;
  text: string | null | undefined;
  email?: string;
  phone?: string;
};

const MyAccount = ({ title, url, text, email, phone }: MyAccountProps) => {
  return (
    <>
      <div className="shadow bg-white px-4 pt-6 pb-8 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">{title}</h3>

          <Link to={`/profile/${url}`} className="text-rose-500">
            Edit
          </Link>
        </div>

        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{text}</h4>

          <p className="text-gray-700">{email}</p>

          <p className="text-gray-700">{phone}</p>
        </div>
      </div>
    </>
  );
};

export default MyAccount;

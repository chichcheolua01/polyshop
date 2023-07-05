import { Link } from "react-router-dom";

type MyAccountProps = {
  title: string;
  url: string;
};

const MyAccount = ({ title, url }: MyAccountProps) => {
  return (
    <>
      <div className="shadow rounded bg-white px-4 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">{title}</h3>

          <Link to={`/profile/${url}`} className="text-rose-500">
            Edit
          </Link>
        </div>

        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">Lương</h4>

          <p className="text-gray-700">Email</p>

          <p className="text-gray-700">Phone</p>
        </div>
      </div>
    </>
  );
};

export default MyAccount;

import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "../Avatar";

import { IProfile, IUser } from "../../../interface";

type NavProfileProps = {
  user: IUser | null;
  profile: IProfile[];
  path?: string;
};

const NavProfile = ({ user, path, profile }: NavProfileProps) => {
  return (
    <>
      <div className="px-4 py-3 shadow flex items-center gap-4 bg-white rounded-xl">
        <div className="flex-shrink-0">
          <Avatar src={user?.image} />
        </div>

        <div className="flex-grow">
          <p className="text-gray-600">Hello,</p>

          <h4 className="text-gray-800 font-medium">{user?.name}</h4>
        </div>

        <div className="block md:hidden">
          <AiOutlineMenu />
        </div>
      </div>

      <div className="hidden md:block mt-6 bg-white shadow p-4 divide-y divide-gray-200 space-y-4 text-gray-500 rounded-xl">
        {profile.map(({ title, Icon, list, url }) => (
          <div key={title} className="space-y-1 pl-8 py-4">
            <div className="relative block font-medium capitalize transition">
              <span className="absolute -left-8 top-0 text-base text-rose-500">
                <Icon size={25} />
              </span>

              <Link
                to={`/profile/${url}`}
                className={`font-bold
              ${path === url ? "text-rose-500" : ""}
              `}
              >
                {title}
              </Link>
            </div>

            {list?.map(({ name, url }) => (
              <Link
                key={name}
                to={`/profile/${url}`}
                className={`relative hover:text-rose-500 block capitalize transition
                ${path === url ? "text-rose-500" : ""}
                `}
              >
                {name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavProfile;

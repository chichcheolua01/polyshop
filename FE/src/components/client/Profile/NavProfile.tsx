import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "../../../components/client/Avatar";

interface Profile {
  title: string;
  url: string;
  Icon: IconType;
  list?: { name: string; url: string }[];
}

type NavProfileProps = {
  name?: string;
  image?: string;
  path?: string;
  profile: Profile[];
};

const NavProfile = ({ name, image, path, profile }: NavProfileProps) => {
  return (
    <>
      <div className="px-4 py-3 shadow flex items-center gap-4 bg-white">
        <div className="flex-shrink-0">
          <Avatar src={image} />
        </div>

        <div className="flex-grow">
          <p className="text-gray-600">Hello,</p>

          <h4 className="text-gray-800 font-medium">{name}</h4>
        </div>

        <div className="block md:hidden">
          <AiOutlineMenu />
        </div>
      </div>

      <div className="hidden md:block mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-500">
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

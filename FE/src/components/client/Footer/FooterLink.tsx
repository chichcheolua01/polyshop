// Import các thư viện
import { Link } from "react-router-dom";

// Type để truyền dữ liệu giữa các props
type FooterLinkProps = {
  title: string;
  links: { name: string; url: string }[];
};

// Khởi tạo component
const FooterLink = ({ title, links }: FooterLinkProps) => {
  return (
    <>
      <ul>
        <h1 className="mb-1 font-semibold">{title}</h1>
        {links.map((item: { name: string; url: string }) => (
          <li key={item.name}>
            <Link
              to={item.url}
              className="text-black hover:text-rose-500 text-[12px]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLink;

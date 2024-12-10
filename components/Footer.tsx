import { footerItems, socialIcons } from "@/app/utils/NavItems";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="flex flex-col items-center">
        <ul className="list-none p-0">
          {footerItems.map((item, index) => (
            <li key={index} className="my-2">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.path}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-blue-500 hover:underline"
            >
              {icon.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

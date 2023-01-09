import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/Navbar.module.scss";
import Image from "next/image";

interface Props {}

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = (props: Props) => {
  const { pathname } = useRouter();

  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <Image width={60} height={60} src="/logo.png" alt="Logo" />
      </div>
      <div>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={
              pathname === path ? `${s.link} ${s.link_active} ` : s.link
            }
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

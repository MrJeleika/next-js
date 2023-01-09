import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}
// Default layout rendered on every page
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

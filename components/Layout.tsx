import { ReactElement } from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

type ChildrenType = {
  children?: ReactElement | undefined;
};

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;

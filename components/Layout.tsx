import { AuthContext } from '@/context/auth/AuthContext';
import { ReactElement, useContext } from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

type ChildrenType = {
  children?: ReactElement | undefined;
};

const Layout = ({ children }: ChildrenType) => {
  const {
    state: { user },
  } = useContext(AuthContext);
  return (
    <>
      <Meta />
      {user && <Navbar />}
      <main>{children}</main>
    </>
  );
};
export default Layout;

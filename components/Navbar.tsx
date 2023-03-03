import navbarStyles from '@/styles/Navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <div
      className={
        isScrolled
          ? `${navbarStyles.container} ${navbarStyles.scrolled}`
          : navbarStyles.container
      }
    >
      <div className={navbarStyles.item}>
        <h2 className={navbarStyles.logo}>Netflix Clone</h2>
      </div>
      <nav className={navbarStyles.nav}>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </nav>
      <div className={navbarStyles.item}>
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>Kids</li>
          <li>DVD</li>
          <li>
            <NotificationsIcon />
          </li>
          <li>
            <Image
              src="/images/blank-profile-picture.png"
              alt=""
              width={48}
              height={48}
              style={{ borderRadius: '5px' }}
            />
          </li>
          <li>
            <ArrowDropDownIcon fontSize="large" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

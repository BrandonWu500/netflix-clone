import navbarStyles from '@/styles/Navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/auth/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = useContext(AuthContext);
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
            <SearchIcon fontSize="large" />
          </li>
          <li>Kids</li>
          <li>DVD</li>
          <li>
            <NotificationsIcon fontSize="large" />
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
          <li
            className={navbarStyles.dropdown}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {showDropdown ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
            {showDropdown && (
              <div className={navbarStyles.dropdownMenu}>
                <ul>
                  <li>
                    <PersonOutlineIcon />
                    Account
                  </li>
                  <li>
                    <HelpOutlineIcon /> Help Center
                  </li>
                  <li onClick={logout}>Sign out of Netflix</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

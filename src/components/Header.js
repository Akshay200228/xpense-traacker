import React, { useState, useEffect } from 'react';
// import data
import { header } from '../data';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
// import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';
import Overview from './Overview';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';
import Product from './Product';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Hero from './Hero';
import { Menu, MenuButton, Image, MenuItem, MenuList } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import Cta from './Cta';
import Contact from './Contact';

const Header = ({ user }) => {
  const navigate = useNavigate();

  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <>
      <header
        className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
          } py-6 lg:py-4 fixed w-full transition-all z-10`}
      >
        <div className='container flex items-center justify-between mx-auto'>
          {/* logo */}
          <a href='#hero' data-aos='fade-down' data-aos-delay='1000'>
            <img src={logo} alt='' />
          </a>
          {/* nav - initially hidden - show on desktop mode */}
          <div
            className='hidden lg:flex'
            data-aos='fade-down'
            data-aos-delay='1200'
          >
            <Nav />
          </div>
          <Menu>
            <MenuButton>
                <Image
                  src={user?.photoURL? "https://e7.pngegg.com/pngimages/520/472/png-clipart-computer-icons-avatar-man-male-face-head-man-icon-miscellaneous-human.png":user?.photoURL }
                  width="40px"
                  height="40px"
                  rounded="full"
                  minWidth={"40px"}
                />
            </MenuButton>
            <MenuList shadow={"lg"}>
              <MenuItem
                flexDirection={"row"}
                alignItems="center"
                gap={4}
                onClick={() => {
                  localStorage.clear();
                  navigate("/signin", { replace: true });
                }}
              >
                Logout <IoLogOut fontSize={20} />
              </MenuItem>
            </MenuList>
          </Menu>

          {/* mobile nav trigger btn - hidden on desktop */}
          <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <HiOutlineX className='text-3xl text-accent' />
            ) : (
              <HiMenuAlt4 className='text-3xl text-accent' />
            )}
          </button>
          {/* mobile nav - hidden on desktop */}
          <div
            className={`${mobileNav ? 'left-0' : '-left-full'
              }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
          >
            <MobileNav />
          </div>
        </div>
      </header>
      <Hero />
      <Overview />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Product />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
};

export default Header;


import React from 'react'
import {useEffect, useState} from 'react';
import logo from '../images/Home/logo.png'

const NavLink = (props) =>{
  return (  
    <li className='[list-style:none] inline-block relative after:content-[""] after:h-[3px] after:w-0 after:[background:#9ACEB4] after:absolute after:bottom-[-5px] after:left-0 hover:after:w-full hover:after:transition-[0.5s]  max-[768px]:mx-0 max-[768px]:my-4'>
      <a href={props.link} className="nav-link text-[#8F584B] no-underline [font-family:'Montserrat',sans-serif] hover:text-[#009688]">
        {props.children}
      </a>
     </li>
  )

}

const HamburgerLine = () =>{
  return (
    <span className="bar block w-[25px] h-[3px] [-webkit-transition:all_0.3s_ease-in-out] transition-all duration-[0.3s] ease-[ease-in-out] bg-[#8F584B] mx-auto my-[5px]" />
  )

}

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  function NavMenuList(){
    if (windowSize.innerWidth < 769){
      return(
        <ul className={`fixed opacity-0 flex invisible gap-0 flex-col bg-[rgba(222,193,185,0.75)] w-full text-center transition-[0.3s] left-0 top-[70px] ${isActive ? 'visible opacity-100 transition-[0.3s] pt-8 left-0 top-20 flex-col': 'max-[768px]:hidden'} `}>
        <NavLink link="Home.jsx">
          Home
        </NavLink>
        <NavLink link="About.jsx">
          About
        </NavLink>
        <NavLink link="Menu.jsx">
        Menu
        </NavLink>
        <NavLink link="Hours_Location.jsx">
          Hours &amp; Location
        </NavLink>
        <NavLink link="FAQ.jsx">
        FAQ
        </NavLink>
      </ul>

      )
    } else{
      return(
        <ul className={`flex justify-between items-center gap-20 `}>
        <NavLink link="Home.jsx">
          Home
        </NavLink>
        <NavLink link="About.jsx">
          About
        </NavLink>
        <NavLink link="Menu.jsx">
        Menu
        </NavLink>
        <NavLink link="Hours_Location.jsx">
          Hours &amp; Location
        </NavLink>
        <NavLink link="FAQ.jsx">
        FAQ
        </NavLink>
      </ul>

      )
    
    
    }
  }

  return (
    <header className ="z-[9] w-full lg:bg-[rgba(222,193,185,0.75)] fixed bg-[rgba(222,193,185,1)] md:transition-[0.5s]" >
    <nav className="navbar min-h-[80px] flex justify-between items-center px-6 py-0">
      <img className="navbar-logo w-[120px] cursor-pointer pl-[10]" src={logo} />
      <ul className={`flex justify-between items-center gap-20 ${isActive ? 'visible opacity-100 transition-[0.3s] pt-8 left-0 top-20 flex-col': 'max-[768px]:hidden'} `}>
        <NavLink link="Home.jsx">
          Home
        </NavLink>
        <NavLink link="About.jsx">
          About
        </NavLink>
        <NavLink link="Menu.jsx">
        Menu
        </NavLink>
        <NavLink link="Hours_Location.jsx">
          Hours &amp; Location
        </NavLink>
        <NavLink link="FAQ.jsx">
        FAQ
        </NavLink>
      </ul>
      <br />
      <div onClick={handleToggle} className={`hamburger lg:hidden cursor-pointer md:block ${isActive ? '[&>*:nth-child(1)]:translate-y-2 [&>*:nth-child(1)]:rotate-45 [&>*:nth-child(2)]:opacity-0 [&>*:nth-child(3)]:-translate-y-2 [&>*:nth-child(3)]:-rotate-45': ' '}`}>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
        </div>
    </nav>
  </header>
  )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default Header;

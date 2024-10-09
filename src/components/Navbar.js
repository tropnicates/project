import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import './Navbar.css';
import { PiStarThin } from "react-icons/pi";
import { CiDollar, CiMedal } from "react-icons/ci";
import { LuPalette } from "react-icons/lu";
import { MdOutlineComputer } from "react-icons/md";
import { HiChevronLeft, HiChevronRight, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"; 

const Navbar = () => {
  const location = useLocation(); 
  const [showFullEntertainment, setShowFullEntertainment] = useState(false); 

  const isActive = (path) => location.pathname === path;

  const handleToggleEntertainment = () => {
    setShowFullEntertainment(!showFullEntertainment); 
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo"> 
          <img src="/assets/logo1.jpg" alt="Logo" />
        </div>
        <div className="navbar-discover">Discover</div> 
      </div>
    
      <nav className="navbar-nav">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <div className='image'>
            <HiChevronLeft />
          </div>
          <div className='image'>
            <PiStarThin /> 
          </div>
          <div className='span'>Top</div>
        </Link>
        <Link to="/tech" className={`nav-item ${isActive('/tech') ? 'active' : ''}`}>
          <div className='span'>Tech & Science</div>
        </Link>
        <Link to="/finance" className={`nav-item ${isActive('/finance') ? 'active' : ''}`}>
          <div className='image'>
            <CiDollar />
          </div>
          <div className='span'>Finance</div>
        </Link>
        <Link to="/arts" className={`nav-item ${isActive('/arts') ? 'active' : ''}`}>
          <div className='image'>
            <LuPalette />
          </div>
          <div className='span'>Arts & Culture</div>
        </Link>
        <Link to="/sports" className={`nav-item ${isActive('/sports') ? 'active' : ''}`}>
          <div className='image'>
            <CiMedal />
          </div>
          <div className='span'>Sports</div>
        </Link>
        <Link to="/entertainment" className={`nav-item ${isActive('/entertainment') ? 'active' : ''}`}>
          <div className='image'>
            <MdOutlineComputer />
          </div>
          <div className='span'>{showFullEntertainment ? "Entertainment" : "Entertain"}</div>
          <div className='image' onClick={handleToggleEntertainment}>
            {showFullEntertainment ? <HiChevronRight /> : <HiChevronRight />} 
          </div>
        </Link>
        <Link to="/shuffle" className={`nav-item ${isActive('/shuffle') ? 'active' : ''}`}>
          <div className='image'>
            <HiOutlineAdjustmentsHorizontal />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

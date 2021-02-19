import React from "react";

//todo styled and icons
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

//todo image
import threeBoxIcon from '../img/treboxIcon.png'

const NavbarStyles = styled.nav`
 margin-bottom : 30px;
 background-color : ;
`;

const LogoStyle = styled.img`
  color:white;
  width: 80px;
  height: 80px;
`;
function Navbar() {
  return (
    <NavbarStyles className='constainer navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href={"/"}>
          <LogoStyle
            src={threeBoxIcon}
            alt=''
            width='30'
            height='24'
            className='d-inline-block align-top'
          ></LogoStyle>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <a className='nav-link active' aria-current='page' href={"/home"}>
              Menu
            </a>
            <a className='nav-link active' href={"/"}>
              Tools
            </a>
    
                <BsFillPersonFill />
            
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;

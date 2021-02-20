import React from "react";
import { Link } from "react-router-dom";

//todo styled and icons
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillTool } from "react-icons/ai";

//todo image
import threeBoxIcon from "../img/treboxIcon.png";

const NavbarStyles = styled.nav`
  margin-bottom: 30px;
  background-color:#18262f;
`;

const LogoStyle = styled.img`
 
  width: 30px;
  height: 30px;
`;

const PersonStyle = styled.section`
  color: white;
`;

function Navbar() {
  return (
    <NavbarStyles className='constainer navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to={"/"}>
          <LogoStyle 
            src={threeBoxIcon}
            alt=''
            width='30'
            height='24'
            className='d-inline-block align-top'
          ></LogoStyle>
        </Link>

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
          <div className=' navbar-nav ml-auto'>
            <PersonStyle >
              <p>LearnFroce</p>
              <GiHamburgerMenu /> Menu
              <AiFillTool /> Tools
              <BsPerson />
            </PersonStyle>
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;

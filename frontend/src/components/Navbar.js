import React from "react";
import { Link } from "react-router-dom";

//todo styled and icons
import styled from "styled-components";
import { MdPerson } from "react-icons/md";
 import { GiHamburgerMenu } from "react-icons/gi";
 import { AiFillTool } from "react-icons/ai";

//todo image
import threeBoxIcon from "../img/treboxIcon.png";

const NavbarStyles = styled.nav`
  margin-bottom: 30px;
  background-color: #18262f;

`;

const LogoStyle = styled.img`
  width: 30px;
  height: 30px;
  
`;

const PersonStyle = styled.button`
  color: white;
  background-color: #204257;
  
`;

function Navbar() {
  return (
    <NavbarStyles className='navbar navbar'>
      <div className='container-fluid'>

        <button className='btn btn ' style={{backgroundColor: '#204257'}}>
        <Link className='navbar-brand ' href={"/"} style={{color: 'white'}}  >
          <LogoStyle
            src={threeBoxIcon}
            alt=''
            class='d-inline-block align-top'
          />
          LearnForce
        </Link>
        </button>

      
        <button className='btn btn ' style={{color: 'white'}}>
          <GiHamburgerMenu style={{ color: 'white' }} />
          Menu
        </button>

        <button className='btn btn ' style={{color: 'white'}}>
          <AiFillTool style={{ color: 'white' }} />
          Tool
        </button>
        <PersonStyle className='btn btn ' >
        < MdPerson size={30}/>
        </PersonStyle>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;

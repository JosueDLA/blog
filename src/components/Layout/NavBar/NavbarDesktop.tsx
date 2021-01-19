import * as React from "react";
import { FaBars } from "react-icons/fa";
import Toggle from "../../common/Toggle";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavLinks,
  NavItem,
  NavMenu,
  NavBtn,
} from "./NavbarDesktopItems";

export interface NavbarDesktopProps {
  toggleNav: () => void;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ toggleNav }) => {
  return (
    <React.Fragment>
      <Nav>
        <NavContainer>
          <NavLogo href="/blog">JosueDLA</NavLogo>
          <NavIcon onClick={toggleNav}>
            <FaBars />
          </NavIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/blog">Blog</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Toggle />
          </NavBtn>
        </NavContainer>
      </Nav>
    </React.Fragment>
  );
};

export default NavbarDesktop;

import React from "react";
import Toggle from "../../common/Toggle";
import {
  MobileContainer,
  Icon,
  CloseIcon,
  MobileWrapper,
  MobileMenu,
  MobileItem,
  MobileBtnWrap,
} from "./NavbarMobileItems";

export interface NavbarMobileProps {
  isOpen: boolean;
  toggleNav: () => void;
  NavLinks: Array<JSX.Element>;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isOpen,
  toggleNav,
  NavLinks,
}) => {
  const navLinks = NavLinks.map((item) => (
    <MobileItem>{<item.type {...item.props} onClick={toggleNav} />}</MobileItem>
  ));

  return (
    <MobileContainer isOpen={isOpen} onClick={toggleNav}>
      <Icon onClick={toggleNav}>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileMenu>{navLinks}</MobileMenu>
        <MobileBtnWrap>
          <Toggle />
        </MobileBtnWrap>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default NavbarMobile;

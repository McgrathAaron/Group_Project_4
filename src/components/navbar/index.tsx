import { useState } from "react";
import React from 'react';
import { StyledNavbar, FlexBetweenContainer, Logo, SearchIcon } from './style';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import logo from '@/assets/images/Logo.svg'

type Props = {};

const Navbar = (props: Props) => {
    return (
        <StyledNavbar>
          <FlexBetweenContainer>
            <Logo>
              <img src={logo} alt="Logo" />
            </Logo>
            <SearchIcon>
              <MagnifyingGlassCircleIcon />
            </SearchIcon>
          </FlexBetweenContainer>
        </StyledNavbar>
      );
};


export default Navbar;
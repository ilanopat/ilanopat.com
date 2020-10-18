import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import {useTheme} from './ThemeProvider';

export const HeaderWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    img {
        height: 30px
    }

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }
`

export const Header = () => {
  const { handleThemeChange } = useTheme();

  return (
    <HeaderWrapper>
      <Link to="/">
        <img src="./peach.png" alt="logo" />
      </Link>
      <Link to="/about">
        about
      </Link>
      <Link to="/blog">
        blog
      </Link>
      <button onClick={handleThemeChange}>Toggle theme</button>
    </HeaderWrapper>
  )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {
    return (
      <NavHeader>
          <LogoHeader>Jeff's Friends</LogoHeader>
          <nav>
              <StyledNavLink to={'/'}>Home</StyledNavLink>
              <StyledNavLink to={'/friendlist'}>Friend List</StyledNavLink>
              <StyledNavLink to={'/login'}>Login / Signup</StyledNavLink>
          </nav>
      </NavHeader>
    )
  }
  
  export default NavBar
  
  // styled components
  
  const NavHeader = styled.header`
      border-bottom: 1px solid black
      display: flex
      justify-content: space-around
      align-items: center
  `
  
  const LogoHeader = styled.h1`
    font-family: calibri
    font-size: 30px
  `
  
  
  const StyledNavLink = styled(NavLink)`
      text-decoration: none
      padding: 20px
      background: cyan
      border: 1px solid black
      margin: 10px 15px
      &:hover {
        background-color: red
      }
  `
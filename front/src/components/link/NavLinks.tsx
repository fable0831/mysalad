import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  children: string;
}

const NavLinks = (props : Props) => {

  const activeNav = {
    color: 'black',
    textDecoration: 'none',
  };

  const deactiveNav = {
    color: '#868e96',
    textDecoration: 'none',
    hover: {
      color: 'green'
    }
  };

  return (
    <StyledList>
      <NavLink to={props.to} style={({ isActive }) => {return isActive ? activeNav : deactiveNav}}>{props.children}</NavLink>
    </StyledList>

  )
}

const StyledList = styled.li`
  a{
    :hover{
      color: green !important;
      text-decoration: underline !important;
    }
  }
`



export default NavLinks
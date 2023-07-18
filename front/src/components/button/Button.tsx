import styled from "@emotion/styled";

interface Props {
  color: string;
  children?: string;
}

const Button = ({children, color}: Props) => {
  return (
    <StyledButton color={color} >{children}</StyledButton>
  )
}

const StyledButton = styled.button<Props>`
color: white;
background: ${(props) => props.color};
border: none;
outline: none;
border-radius: 1rem;
font-weight: bold;
height: 2rem;
padding: 0 1rem;
font-size: 1rem;
cursor: pointer;
:hover {
  opacity: 0.8;
}
`

export default Button
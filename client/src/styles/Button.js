import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "blue",
    "--accent": "white",
  },
  secondary: {
    "--main": "red",
    "--accent": "white",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
font-family: 'Helvetica Neue',Helvetica;
  cursor: pointer;
  font-size: 1rem;
  width: auto;
  height: auto;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: .5rem 1.5rem;
  margin: 2rem;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);
  
  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);
  
  &:hover {
    background: opacity 0.8;
  }
`;

export default Button;

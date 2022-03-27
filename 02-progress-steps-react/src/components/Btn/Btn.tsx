import { memo /* , useRef */ } from "react";
import StyledBtn from "./Btn.styled";

interface IBtnProps {
  children?: React.ReactChild;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Btn: React.FC<IBtnProps> = memo(
  ({ children, handleClick, disabled }) => {
    // let buttonRef = useRef(0);
    // console.log(children, "Button renderred", buttonRef.current++);

    return (
      <StyledBtn onClick={handleClick} disabled={disabled}>
        {children}
      </StyledBtn>
    );
  }
);

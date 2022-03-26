import { memo } from "react";
import StyledBtn from "./Btn.styled";

type BtnProps = {
  children?: React.ReactChild;
  handleClick?: () => void;
  disabled?: boolean;
};

export const Btn: React.FC<BtnProps> = ({
  children,
  handleClick,
  disabled,
}) => {
  console.log("render");
  return (
    <StyledBtn onClick={handleClick} disabled={disabled}>
      {children}
    </StyledBtn>
  );
};

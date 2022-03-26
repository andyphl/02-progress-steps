import { useEffect, useRef } from "react";
import { useProgress } from "../../hook/useProgress";
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
  const btnRef = useRef<null | HTMLButtonElement>(null);

  return (
    <StyledBtn ref={btnRef} onClick={handleClick} disabled={disabled}>
      {children}
    </StyledBtn>
  );
};

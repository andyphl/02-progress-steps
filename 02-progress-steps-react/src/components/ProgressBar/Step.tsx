import { memo } from "react";
import styled from "styled-components";

interface IStepProps {
  active: boolean;
}

const Step = memo(styled.div<IStepProps>`
  background-color: #fff;
  height: 2rem;
  width: 2rem;
  border: 5px solid
    ${(props) => (props.active ? "var(--progress-clr)" : "var(--progress-bg)")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  transition: border 0.1s ease-in-out;
`);

export default Step;

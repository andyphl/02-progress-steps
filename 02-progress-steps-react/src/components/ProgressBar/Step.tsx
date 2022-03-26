import styled from "styled-components";

type StepProps = {
  active: boolean;
};

const Step = styled.div<StepProps>`
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
`;

export default Step;
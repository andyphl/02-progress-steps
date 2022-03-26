import styled from "styled-components";

type ProgressProps = {
  progress: string;
};

const Progress = styled.div<ProgressProps>`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${(props) => props.progress};
  height: 5px;
  transform: translateY(-50%);
  z-index: -1;
  background-color: var(--progress-clr);
  transition: width 0.3s ease-in-out;
`;

export default Progress;

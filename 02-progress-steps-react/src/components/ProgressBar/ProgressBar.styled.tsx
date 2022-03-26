import styled from "styled-components";

const StyledProgressBar = styled.div`
  max-width: 500px;
  width: 90vw;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: var(--progress-bg);
    height: 5px;
    width: 100%;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

export default StyledProgressBar;

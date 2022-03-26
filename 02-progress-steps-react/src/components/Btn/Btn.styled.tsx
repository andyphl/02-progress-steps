import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 0.25rem 2rem;
  margin: 0 0.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 1rem;
  color: #fff;
  background-color: var(--progress-clr);
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: var(--progress-bg);
    pointer-events: none;
  }
`;

export default StyledBtn;

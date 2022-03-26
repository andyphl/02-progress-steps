import React, { useRef } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { ProgressBar, Container, Btn } from "./components";
import { useProgress } from "./hook/useProgress";

const App: React.FC = () => {
  const { steps, currentActive, setCurrentAcvite, setIsTransition } =
    useProgress();

  function handlePrevClick(): void {
    if (currentActive > 1) {
      setCurrentAcvite((prevCurrentActive) => prevCurrentActive - 1);
    }
  }

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    setIsTransition(false);
  }

  function handleNextClick(): void {
    if (currentActive < steps.length) {
      setCurrentAcvite((prevCurrentActive) => prevCurrentActive + 1);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <ProgressBar
          steps={steps}
          currentActive={currentActive}
          handleTransitionEnd={handleTransitionEnd}
        />
        <Btn handleClick={handlePrevClick} disabled={currentActive === 1}>
          Prev
        </Btn>
        <Btn
          handleClick={handleNextClick}
          disabled={currentActive === steps.length}
        >
          Next
        </Btn>
      </Container>
    </>
  );
};

export default App;

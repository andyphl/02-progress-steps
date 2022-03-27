import React, { useCallback /* , useEffect  */ } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { ProgressBar, Container, Btn } from "./components";
import { useProgress, ProgressActionType } from "./hook/useProgress";

const App: React.FC = () => {
  const { progressState, progressDispatch } = useProgress();

  const handlePrevClick = useCallback((): void => {
    progressDispatch({ type: ProgressActionType.SET_PREV_STEP });
  }, []);

  const handleNextClick = useCallback((): void => {
    progressDispatch({ type: ProgressActionType.SET_NEXT_STEP });
  }, []);

  const handleTransitionEnd = useCallback((): void => {
    progressDispatch({ type: ProgressActionType.TRANSITION, payload: false });
  }, []);

  const addStep = useCallback((): void => {
    progressDispatch({ type: ProgressActionType.ADD_STEP });
  }, []);

  // useEffect(() => {
  //   console.log("functions created");
  // }, [handleNextClick, handlePrevClick, handleTransitionEnd, addStep]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <ProgressBar
          steps={progressState.steps}
          currentActive={progressState.currentActive}
          handleTransitionEnd={handleTransitionEnd}
        />
        <Btn
          handleClick={handlePrevClick}
          disabled={progressState.currentActive === 1}
        >
          Prev
        </Btn>
        <Btn
          handleClick={handleNextClick}
          disabled={progressState.currentActive === progressState.steps.length}
        >
          Next
        </Btn>
        <Btn handleClick={addStep}>Add</Btn>
      </Container>
    </>
  );
};

export default App;

import { useEffect, useReducer } from "react";

export interface ISteps {
  id: number;
  active: boolean;
}

// Type of actions
export enum ProgressActionType {
  SET_NEXT_STEP = "SET_NEXT_STEP",
  SET_PREV_STEP = "SET_PREV_STEP",
  UPDATE_STEPS = "UPDATE_STEPS",
  TRANSITION = "TRANSITION",
  ADD_STEP = "ADD_STEP",
}

// An interface for progress states
export interface IProgressState {
  steps: ISteps[];
  currentActive: number;
  isTransition: boolean;
}

const progressInitialState: IProgressState = {
  steps: [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ],
  // steps: [...Array(5000).keys()].map((elm) => ({
  //   id: elm + 1,
  //   active: elm + 1 === 1,
  // })),
  currentActive: 1,
  isTransition: true,
};

// An interface for progress actions
export interface IProgressAction {
  type: ProgressActionType;
  payload?: any; // Use type assertion when payload is used
}

function progressReducer(state: IProgressState, action: IProgressAction) {
  switch (action.type) {
    case ProgressActionType.SET_PREV_STEP:
      return {
        ...state,
        currentActive: ((prevCurrentActive) => {
          // Use IIFE to check if currentActive is out of bound or not
          if (prevCurrentActive > 1) {
            return prevCurrentActive - 1;
          }
          return prevCurrentActive;
        })(state.currentActive),
        isTransition: true,
      };
    case ProgressActionType.SET_NEXT_STEP:
      return {
        ...state,
        currentActive: ((prevCurrentActive) => {
          // Use IIFE to check if currentActive is out of bound or not
          if (prevCurrentActive < state.steps.length) {
            return prevCurrentActive + 1;
          }
          return prevCurrentActive;
        })(state.currentActive),
        isTransition: true,
      };
    case ProgressActionType.UPDATE_STEPS:
      return {
        ...state,
        steps: state.steps.map((step) => {
          step.id <= state.currentActive
            ? (step.active = true)
            : (step.active = false);
          return step;
        }),
      };
    case ProgressActionType.TRANSITION:
      return {
        ...state,
        isTransition: action.payload as boolean,
      };
    case ProgressActionType.ADD_STEP:
      return {
        ...state,
        steps: [...state.steps, { id: state.steps.length + 1, active: false }],
      };
    default:
      return state;
  }
}

export const useProgress = () => {
  const [progressState, progressDispatch] = useReducer(
    progressReducer,
    progressInitialState
  );

  useEffect(() => {
    if (progressState.isTransition) return;

    progressDispatch({ type: ProgressActionType.UPDATE_STEPS });
  }, [progressState.isTransition, progressState.currentActive]);

  return {
    progressState,
    progressDispatch,
  };
};

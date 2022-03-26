import { useState, useEffect, useRef } from "react";

export interface ISteps {
  id: number;
  active: boolean;
}

export const useProgress = () => {
  const [steps, setSteps] = useState<ISteps[]>([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ]);
  const [currentActive, setCurrentAcvite] = useState<number>(1);
  const [isTransition, setIsTransition] = useState<boolean>(true);

  useEffect(() => {
    if (isTransition) return;
    setSteps((prevSteps) => {
      const steps = [...prevSteps];
      for (let i = 0; i < steps.length; i++) {
        if (i < currentActive) {
          steps[i].active = true;
        } else {
          steps[i].active = false;
        }
      }
      return steps;
    });
    setIsTransition(true);
  }, [isTransition, currentActive]);

  return {
    steps,
    currentActive,
    setCurrentAcvite,
    isTransition,
    setIsTransition,
  };
};

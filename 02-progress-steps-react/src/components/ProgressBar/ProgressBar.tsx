import StyledProgressBar from "./ProgressBar.styled";
import Step from "./Step";
import Progress from "./Progress";
import { ISteps } from "../../hook/useProgress";

interface IProgressBarProps {
  steps: ISteps[];
  currentActive: number;
  handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement>;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({
  steps,
  currentActive,
  handleTransitionEnd,
}) => {
  return (
    <StyledProgressBar>
      <Progress
        progress={`${(100 / (steps.length - 1)) * (currentActive - 1)}%`}
        onTransitionEnd={handleTransitionEnd}
      />
      {steps.map((step) => (
        <Step key={step.id} active={step.active}>
          {step.id}
        </Step>
      ))}
    </StyledProgressBar>
  );
};

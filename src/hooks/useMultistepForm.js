import { useState } from 'react';

const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    console.log('back');
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (index) => setCurrentStepIndex(index);

  const resetSteps = () => {
    console.log('resetSteps');
    setCurrentStepIndex(0);
  };

  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    resetSteps,
    goTo,
    next,
    back,
  };
};

export default useMultistepForm;

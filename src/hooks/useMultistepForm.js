import { useState } from 'react';

const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i;
      return i++;
    })
  };

  const back = () => {
    setCurrentStepIndex(i => {
      if (i <= steps.length - 1) return i;
      return i--;
    })
  };

  const goTo = (index) => setCurrentStepIndex(index);

  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back
  }
}

export default useMultistepForm;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export function useHookForm(steps: any) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: any, e?: any) {
    if (e) e.preventDefault();
    if (i < 0 || i >= steps.length) return;
    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}

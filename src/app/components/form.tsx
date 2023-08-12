import Step1 from "../steps/step1";
import Step2 from "../steps/step2";
import Step3 from "../steps/step3";
import Step4 from "../steps/step4";
import Step5 from "../steps/step5";
import Step6 from "../steps/step6";
import { level } from "../hooks/context";

export default function StepperForm({}) {
  return (
    <div>
      <div className="h-4"></div>
      {level.value === 1 && <Step1 />}
      {level.value === 2 && <Step2 />}
      {level.value === 3 && <Step3 />}
      {level.value === 4 && <Step4 />}
      {level.value === 5 && <Step5 />}
      {level.value === 6 && <Step6 />}
    </div>
  );
}

import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";

export default function ProgressMobileStepper({
  activeStep,
}: {activeStep: number}): React.JSX.Element {
  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className="MobileStepper"
      sx={{ flexGrow: 1, height: 3, width: '100%', position: "relative" ,background: 'transparent'}}
      backButton={undefined}
      nextButton={undefined}
    />
  );
}

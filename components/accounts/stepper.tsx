import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { ContainedInputs } from "./input";
import { ContainedSingleInput } from "./inputSingleField";

function StepperSimple() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Create an account">
          <ContainedInputs />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <ContainedSingleInput />
        </Stepper.Step>
        <Stepper.Completed>Verified</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next</Button>
      </Group>
    </>
  );
}

export default StepperSimple;

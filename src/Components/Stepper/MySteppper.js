import { Stepper, Step, StepIndicator, StepTitle, StepDescription, StepSeparator,
   StepStatus, Box, StepIcon, StepNumber, useBreakpointValue,  } from "@chakra-ui/react";

export default function MySteppper({steps,activeStep}) {
  const orientation =useBreakpointValue({
    base: 'vertical',
    md: 'horizontal'
  })
  return (
   
    <Stepper index={activeStep} orientation={orientation} height={['20rem','20rem','auto']} margin={'3rem'} marginY={'5rem'} gap={[0, 0,'auto']}>
        {steps.map((step, index) => (
        <Step className="hover:cursor-pointer" key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          
          <StepSeparator />
        </Step>
      ))}

        </Stepper>
       
 
  )
}
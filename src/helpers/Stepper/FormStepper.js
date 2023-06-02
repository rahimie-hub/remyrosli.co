import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import { renameKeys } from '../Functions/renameKeys';

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: 'green',
        },
        '&$active': {
          color: '#0069D9',
        },
        '&$error': {
          color: 'red',
        },
      },
      active: {},
      completed: {},
    },
  }
});

const Connector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#969696',
    },
  },
  completed: {
    '& $line': {
      borderColor: 'green',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const rootStyles = {
  width: '100%',
  backgroundColor: 'green'
};

const keysMap = {
  process: 'processCode',
  label: 'processLabel',
  priority: 'layerPriority'
};

const FormStepper = (props) => {
  useEffect(() => { }, [props.steps]);

  const renamedList = props.steps.map((item) => { return renameKeys(keysMap, item) });
  const sortedList = renamedList.sort((a, b) => (parseInt(a.layerPriority) > parseInt(b.layerPriority)) ? 1 : -1);

  return (
    <div style={rootStyles}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={props.activeStep} alternativeLabel connector={<Connector />} style={{ backgroundColor: '#F8F9FA' }}>
          {sortedList.map(data => {
            return (
              <Step key={data.processLabel}>
                <StepLabel>{data.processLabel}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </ThemeProvider>
    </div>
  );
}

export default FormStepper;
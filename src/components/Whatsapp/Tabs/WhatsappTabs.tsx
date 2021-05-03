import type { FunctionComponent } from 'react';

import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { buttonTabs } from './constants';
import type { ButtonTab } from './types';
import { Props } from './types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  buttonContainer: {
    margin: theme.spacing(0, 1, 1, 0),
  },
  activeButton: {
    background: theme.palette.coal[20],

    '&:hover': {
      background: theme.palette.coal[20],
    },
  },
}));

const WhatsappTabs: FunctionComponent<Props> = ({ activeTab, tabChanged }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {buttonTabs.map((buttonInfo: ButtonTab) => (
        <Box className={classes.buttonContainer}>
          <Button
            variant="outlined"
            size="small"
            aria-label="(tooltip)"
            classes={{ root: activeTab === buttonInfo.id ? classes.activeButton : undefined }}
            onClick={() => tabChanged(buttonInfo.id)}
            key={buttonInfo.id}
          >
            {buttonInfo.label}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default WhatsappTabs;

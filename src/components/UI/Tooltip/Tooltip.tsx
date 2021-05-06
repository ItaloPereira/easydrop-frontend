import { withStyles, Tooltip } from '@material-ui/core';

import { variantDictionary } from 'components/UI/Typography/constants';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.coal[100],
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '13px',
  },
  popper: {
    zIndex: 1200,
  },
  arrow: {
    color: theme.palette.coal[100],
  },
}))(Tooltip);

export default CustomTooltip;

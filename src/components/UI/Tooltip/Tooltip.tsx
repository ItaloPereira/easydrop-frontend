import { withStyles, Tooltip } from '@material-ui/core';

import { variantDictionary } from 'components/UI/Typography/constants';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.secondarySurfaces.carbonLight,
    padding: theme.spacing(1),
    ...variantDictionary.captionWeb.style,
  },
  popper: {
    zIndex: 1200,
  },
  arrow: {
    color: theme.palette.secondarySurfaces.carbonLight,
  },
}))(Tooltip);

export default CustomTooltip;

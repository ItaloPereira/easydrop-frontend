import type { FunctionComponent } from 'react';

import type { TypographyProps } from '@portal-types/ui/typography';

import { Typography as MuiTypography } from '@material-ui/core';
import type { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';

import { variantDictionary } from './constants';

const setCustomCssByVariant = (variant: TypographyProps['variant'], theme: Theme) => {
  const baseStyle = {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.black,
  };

  return {
    ...baseStyle,
    ...variantDictionary[variant].style,
  };
};

const useStyles = makeStyles((theme) => ({
  root: (props: TypographyProps) => setCustomCssByVariant(props.variant, theme),
}));

const Typography: FunctionComponent<TypographyProps> = (props = { variant: 'bodyWeb' }) => {
  const variantClassses = useStyles(props);
  const { classes: propsClasses, variant: propsVariant, component, ...rest } = props;

  const classes = deepmerge(variantClassses, propsClasses);

  return (
    <MuiTypography
      classes={classes}
      variant={undefined}
      component={component || variantDictionary[propsVariant].component}
      {...rest}
    />
  );
};

export default Typography;

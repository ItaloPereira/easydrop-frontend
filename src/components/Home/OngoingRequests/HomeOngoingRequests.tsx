import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Typography from 'components/UI/Typography';
import helpersFormatters from 'helpers/formatters';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gap: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  accordionRequest: {
    boxShadow: 'none',
    border: `1px solid ${theme.palette.carbon[10]}`,
    '&.Mui-expanded': {
      margin: 0,
    },
    borderRadius: 8,
    '&::before': {
      display: 'none',
    },
  },
  listSizeNumber: {
    marginRight: theme.spacing(1),
  },
  detailsLabel: {
    color: theme.palette.carbon[60],
  },
  detailsLink: {
    color: theme.palette.carbon[100],
  },
  listContent: {
    width: '100%',
  },
  listItemContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

type Props = {
  ongoingRequestsData?: any;
};

const HomeOngoingRequests: FunctionComponent<Props> = ({ ongoingRequestsData }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {ongoingRequestsData.map((el: any) => {
        return (
          <Accordion key={el.key} className={classes.accordionRequest}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="bodyWeb">
                <strong className={classes.listSizeNumber}>{el.total}</strong>
                {el.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List className={classes.listContent}>
                {el.data.map((item: any) => {
                  return (
                    <ListItem className={classes.listItemContent} key={item.key}>
                      <Typography className={classes.detailsLabel} variant="captionWeb">
                        {helpersFormatters.formatCnpj(item.organizationDocument)}
                      </Typography>
                      <Link to={item.details} className={classes.detailsLink}>
                        <Typography variant="captionWeb">Ver detalhes</Typography>
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default HomeOngoingRequests;

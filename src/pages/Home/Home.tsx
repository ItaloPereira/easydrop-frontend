import { useState } from 'react';

import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { ErrorAlert, SuccessAlert, WarningAlert } from 'components/Home/Alert';
import HomeBarChart from 'components/Home/BarChart';
import HomeCard from 'components/Home/Card';
import HomeClientsStats from 'components/Home/ClientsStats';
import DrawerNotifications from 'components/Home/DrawerNotifications';
import StatusModal from 'components/Home/Modal';
import NotificationBadge from 'components/Home/NotificationBadge';
import HomeOngoingRequests from 'components/Home/OngoingRequests';
import HomePieChart from 'components/Home/PieChart';
import PageTitle from 'components/UI/PageTitle';
import CustomTooltip from 'components/UI/Tooltip';
import Typography from 'components/UI/Typography';
import { getToday } from 'helpers/date/date';

import { barChartData, clientsStatsData, ongoingRequestsData, pieChartData } from './__mocks__';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    flexDirection: 'column',
  },
  pageSection1: {
    flex: 0,
    display: 'grid',
    gap: theme.spacing(3),
  },
  titleNotificationsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  notificationContainer: {
    display: 'block',
  },
  notificationButton: {
    // color: theme.palette.carbon[100],
    fontSize: '2rem',
    cursor: 'pointer',
  },
  pageSection2: {
    flex: 'auto',
    marginTop: theme.spacing(6),
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: theme.spacing(2),
  },
  cardCell: {
    gridColumnEnd: 'span 6',
    [theme.breakpoints.down('md')]: {
      gridColumnEnd: 'span 12',
    },
  },
  statusBadgeWarning: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  },
  statusBadgeSuccess: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
  },
  statusBadgeError: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    backgroundColor: '#FC6262',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  helpIconWarning: {
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
    // color: theme.palette.carbon[35],
  },
  helpIconSuccess: {
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
    // color: theme.palette.marble[60],
  },
  helpIconError: {
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
    // color: theme.palette.marble[60],
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [hasNotifications, setHasNotifications] = useState(true);
  const [serviceStatus, setServiceStatus] = useState<'success' | 'warning' | 'error'>('success');
  const [shouldShowNewNotifications, setShouldShowNewNotifications] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isStatusModalOpened, setIsStatusModalOpened] = useState(false);

  const alerts = {
    success: (
      <SuccessAlert severity="success" variant="filled" icon={<Box className={classes.statusBadgeSuccess} />}>
        <Box className={classes.messageContainer}>
          <Typography variant="bodyWeb">Estabilidade do serviço: operação normal</Typography>
          <HelpOutlineIcon className={classes.helpIconSuccess} onClick={() => setIsStatusModalOpened(true)} />
        </Box>
      </SuccessAlert>
    ),
    warning: (
      <WarningAlert severity="warning" variant="filled" icon={<Box className={classes.statusBadgeWarning} />}>
        <Box className={classes.messageContainer}>
          <Typography variant="bodyWeb">Estabilidade do serviço: operação instável</Typography>
          <HelpOutlineIcon className={classes.helpIconWarning} onClick={() => setIsStatusModalOpened(true)} />
        </Box>
      </WarningAlert>
    ),
    error: (
      <ErrorAlert severity="warning" variant="filled" icon={<Box className={classes.statusBadgeError} />}>
        <Box className={classes.messageContainer}>
          <Typography variant="bodyWeb">Estabilidade do serviço: operação paralisada</Typography>
          <HelpOutlineIcon className={classes.helpIconError} onClick={() => setIsStatusModalOpened(true)} />
        </Box>
      </ErrorAlert>
    ),
  };

  return (
    <Grid container className={classes.pageContainer}>
      <Grid item xs={12} className={classes.pageSection1}>
        <Box className={classes.titleNotificationsContainer}>
          <PageTitle title="Início" subtitle={`Seja bem vindo, hoje é ${getToday()}`} Icon={HomeIcon} />
          <Box className={classes.notificationContainer}>
            <CustomTooltip
              title="Você tem novas mensagens"
              aria-label="Você tem novas mensagens"
              placement="left"
              arrow
              open={shouldShowNewNotifications}
            >
              <NotificationBadge invisible={!hasNotifications} overlap="circle" variant="dot">
                <NotificationsIcon
                  className={classes.notificationButton}
                  onClick={() => {
                    setShouldShowNewNotifications(false);
                    setHasNotifications(false);
                    setOpenDrawer(true);
                  }}
                  aria-label="Ver notificações"
                />
              </NotificationBadge>
            </CustomTooltip>
          </Box>
        </Box>

        {alerts[serviceStatus]}

        <Box>
          <Button
            onClick={() => setServiceStatus('success')}
            aria-label="Botão para testar success status"
            variant="contained"
            color="primary"
            size="small"
          >
            Success
          </Button>
          <Button
            onClick={() => setServiceStatus('warning')}
            aria-label="Botão para testar warning status"
            variant="contained"
            color="primary"
            size="small"
          >
            Warning
          </Button>
          <Button
            onClick={() => setServiceStatus('error')}
            aria-label="Botão para testar error status"
            variant="contained"
            color="primary"
            size="small"
          >
            Error
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.pageSection2}>
        <div className={classes.cardsContainer}>
          <div className={classes.cardCell}>
            <HomeCard title="Clientes">
              <HomeClientsStats clientsStatsData={clientsStatsData} />
            </HomeCard>
          </div>
          <div className={classes.cardCell}>
            <HomeCard title="Volume Total de Pagamentos">
              <HomeBarChart chartData={barChartData} />
            </HomeCard>
          </div>
          <div className={classes.cardCell}>
            <HomeCard title="Mix de adquirentes">
              <HomePieChart chartData={pieChartData} />
            </HomeCard>
          </div>
          <div className={classes.cardCell}>
            <HomeCard title="Solicitações em andamento">
              <HomeOngoingRequests ongoingRequestsData={ongoingRequestsData} />
            </HomeCard>
          </div>
        </div>
      </Grid>
      <StatusModal
        isModalOpen={isStatusModalOpened}
        onClose={() => setIsStatusModalOpened(false)}
        status={serviceStatus}
      />
      <DrawerNotifications onClose={() => setOpenDrawer(false)} open={openDrawer} />
    </Grid>
  );
};

export default HomePage;

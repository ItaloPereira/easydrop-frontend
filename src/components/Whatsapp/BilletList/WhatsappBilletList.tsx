import type { FunctionComponent } from 'react';

import type { WhatsappBilletData } from '@portal-types/pages/whatsapp';

import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { SquareIconButton } from 'components/UI/SquareIconButton';

import type { Props } from './types';

const useStyles = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: theme.palette.coal[10],

    '& th': {
      fontWeight: 700,
    },
  },
  produtcImageContainer: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    overflow: 'hidden',

    '& img': {
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
  whatsappIcon: {
    color: theme.palette.success.main,
  },
}));

const WhatsappBilletList: FunctionComponent<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell>Mensagem</TableCell>
            <TableCell>Pedido</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((billetRow: WhatsappBilletData) => (
            <TableRow key={billetRow.id}>
              <TableCell>
                <Box className={classes.produtcImageContainer}>
                  <img src={billetRow.product_image} alt="imagem do produto" />
                </Box>
              </TableCell>
              <TableCell>
                <Badge badgeContent="enviada" invisible={!billetRow.is_sent} color="secondary">
                  <SquareIconButton aria-label="botão de enviar mensagem no whatsapp">
                    <WhatsAppIcon className={classes.whatsappIcon} />
                  </SquareIconButton>
                </Badge>
              </TableCell>
              <TableCell>Conteúdo 3</TableCell>
              <TableCell>Conteúdo 4</TableCell>
              <TableCell>Conteúdo 5</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WhatsappBilletList;

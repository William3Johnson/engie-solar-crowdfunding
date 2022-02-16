/* eslint-disable @next/next/no-img-element */
import { Box, Container, Paper } from '@mui/material';
import { FC } from 'react';
import { InfoCard, InfoCardProps } from '../../components';
import { useInfoContainerEffects } from './InfoContainer.effects';
import { useStyles } from './InfoContainer.styles';

export const InfoContainer: FC = () => {
  const classes = useStyles();
  const { infoItems } = useInfoContainerEffects();
  return (
    <Paper className={classes.paper}>
      <img className={classes.topBubble} src='/Bubbles1.png' alt='Engie bubble' />
      <Container maxWidth={false} className={classes.container}>
        <Box className={classes.wrapper}>
          {infoItems?.map((infoItem: InfoCardProps) => {
            return <InfoCard key={`${infoItem.title}-${infoItem.type}`} {...infoItem}></InfoCard>;
          })}
        </Box>
      </Container>
      <img className={classes.downRightBubble} src='/BubbleDownRight.png' alt='Engie bubble' />
      <img className={classes.downLeftBubble1} src='/BubbleDownLeft1.png' alt='Engie bubble' />
      <img className={classes.downLeftBubble2} src='/BubbleDownLeft2.png' alt='Engie bubble' />
    </Paper>
  );
};

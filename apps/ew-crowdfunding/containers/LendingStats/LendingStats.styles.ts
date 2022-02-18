import { makeStyles } from '@mui/styles';
import { theme } from '../../dsla-theme';

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start',
      gap: '20px',
      borderRadius: '16px',
      padding: '40px',
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
  };
});

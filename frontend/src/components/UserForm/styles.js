import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    mainBox: {
        margin: '10% 30%',
        padding: '2%',
        width: '36%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0 0 4px 3px #dcdcdc',
    },
    '@media (max-width: 1200px)': {
        mainBox: {
            width: '66%',
            margin: '20% 15%',
        },
    },
    '@media (max-width: 700px)': {
        mainBox: {
            width: '90%',
            margin: '25% 3%',
        },
    }
});
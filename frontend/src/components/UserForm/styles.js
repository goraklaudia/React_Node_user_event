import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainBox: {
        margin: '10% 20%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray',
        borderRadius: '5px',
        textAlign: 'center',
        // [theme.breakpoints.down('xs')]: {
        //     width: '90%',
        //     margin: '10% 5%',
        // }
    },
    boxField: {
        margin: '5% 5%',
        width: '96%',
    }
});
export default useStyles;
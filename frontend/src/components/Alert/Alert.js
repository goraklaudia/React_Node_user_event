import { Alert as AlertForm, Snackbar } from "@mui/material";
import { messages } from '../../utils/constants';

const Alert = ({ msg, open, setOpen }) => {
    const generateSeverity = () => {
        return msg === messages.USER_ADDED ? 'success' : 'error';
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        return setOpen({ msg: '', open: false });
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
        >
            <AlertForm
                onClose={handleClose}
                severity={generateSeverity()}
            >
                {msg}
            </AlertForm>
        </Snackbar>
    );
};

export default Alert;

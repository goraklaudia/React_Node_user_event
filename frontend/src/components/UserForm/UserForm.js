import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import useStyles from './styles';

const UserForm = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainBox}>
            <Typography variant="h3">
                User Form
            </Typography>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className={classes.boxField}
            />
        </div>
    );
};

export default UserForm;

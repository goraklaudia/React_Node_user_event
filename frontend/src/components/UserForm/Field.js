import { TextField } from "@mui/material";

export const Field = ({id, label, type, value, setValue, error}) => {
    return (
            <TextField
                id={id}
                label={label}
                type={type}
                value={value}
                margin="dense"
                fullWidth
                error={error.value}
                helperText={error.text}
                onChange={(e)=> {setValue(e.target.value)}}
                InputLabelProps={{ shrink: true }}
            />
    );
};
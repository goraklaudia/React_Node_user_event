import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useStyles } from "./styles";
import { Field } from "./Field";
import { validateDate, validateEmail } from "../../utils/validations";
import { fetchHandler } from '../../utils/fetchHandler';
import Alert from '../Alert/Alert';

const UserForm = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    const [errorFirstName, setErrorFirstName] = useState({});
    const [errorLastName, setErrorLastName] = useState({});
    const [errorEmail, setErrorEmail] = useState({});
    const [errorDate, setErrorDate] = useState({});

    const [alert, setAlert] = useState({})

    const generateArrayOfFields = () => {
        return [
            {
                id: "firstName",
                label: "First name *",
                type: "text",
                value: firstName,
                setValue: setFirstName,
                error: errorFirstName
            },
            {
                id: "lastName",
                label: "Last name *",
                type: "text",
                value: lastName,
                setValue: setLastName,
                error: errorLastName
            },
            {
                id: "email",
                label: "Email *",
                type: "email",
                value: email,
                setValue: setEmail,
                error: errorEmail
            },
            {
                id: "date",
                label: "Date *",
                type: "date",
                value: date,
                setValue: setDate,
                error: errorDate
            },
        ];
    };

    const validateFields = () => {
        let allFieldsValid = true;

        if (!date || !validateDate(date)) {
            setErrorDate({ value: true, text: 'Date is invalid' });
            allFieldsValid = false;
        } else {
            setErrorDate({ value: false, text: '' })
        }

        if (!email || !validateEmail(email)) {
            setErrorEmail({ value: true, text: 'Email is invalid' });
            allFieldsValid = false;
        } else {
            setErrorEmail({ value: false, text: '' });
        }

        if (!firstName) {
            setErrorFirstName({ value: true, text: 'First name is invalid' })
            allFieldsValid = false;
        } else {
            setErrorFirstName({ value: false, text: '' });
        }

        if (!lastName) {
            setErrorLastName({ value: true, text: 'Last name is invalid' });
            allFieldsValid = false;
        } else {
            setErrorLastName({ value: false, text: '' });
        }

        return allFieldsValid;
    };

    const handleSave = () => {
        const validField = validateFields();

        if (validField) {
            let options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    date
                })
            }
            fetchHandler('/user', options, setAlert);
        }
    };

    return (
        <div className={classes.mainBox}>
            <Alert msg={alert.msg} open={alert.open} setOpen={setAlert}/>
            <Typography variant="h4" className={classes.title}>
                User Form
            </Typography>
            {generateArrayOfFields().map(({ id, label, type, value, setValue, error }) => {
                return (
                    <Field
                        key={id}
                        id={id}
                        label={label}
                        type={type}
                        value={value}
                        setValue={setValue}
                        error={error}
                    />
                );
            })}
            <Button
                variant="contained"
                size="large"
                onClick={handleSave}
            >
                Save
            </Button>
        </div>
    );
};

export default UserForm;

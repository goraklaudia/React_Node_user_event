import { URL_SERVER } from './constants';

export const fetchHandler = async (endpoint, options, setAlert, successCallback) => {
    if (endpoint && options && setAlert) {
        fetch(`${URL_SERVER}${endpoint}`, options)
            .then((res) => res.json())
            .then((res) => {
                setAlert({ msg: res.msg, open: true });
                successCallback();
            })
            .catch((err) => {
                setAlert({ msg: 'Error during request', open: true });
            })
    }
}
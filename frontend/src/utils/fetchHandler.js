import { URL_SERVER } from './constants';

export const fetchHandler = (endpoint, options, setAlert) => {
    fetch(`${URL_SERVER}${endpoint}`, options)
    .then((res) => res.json())
    .then((res) => {
        setAlert({msg: res.msg, open: true});
    })
}
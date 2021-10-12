import { resStatuses } from './constants.js';

const sendResponse = (res, payload) => {
    if (typeof payload === 'string') {
        res.status(resStatuses[payload] || 200).json({ msg: payload });
    } else {
        const { result, ...data } = payload;
        res.status(resStatuses[result]).json({ msg: result, ...data });
    }
}

export default sendResponse;
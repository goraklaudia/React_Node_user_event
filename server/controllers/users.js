import { constants } from "../constants/constants.js";
import { addUserData } from "../services/users.js";
import sendResponse from "../constants/sendResponse.js";

export const addUser = async (req, res, database) => {
    const { firstName, lastName, email, date } = req.body;

    if (!firstName || !lastName || !email || !date) {
        sendResponse(res, constants.MISSING_PARAMS);
        return;
    }

    const result = await addUserData(database, { firstName, lastName, email, date });
    sendResponse(res, result);
};

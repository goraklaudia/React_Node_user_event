export const constants = {
    ERROR: 'Something went wrong.',
    USER_ADDED: 'User successfully added.',
    MISSING_PARAMS: 'Some parameters are missing.',
    WRONT_FORMAT_DATE: 'Date has wrong format',
    WRONT_FORMAT_EMAIL: 'Email has wrong format',
}

export const resStatuses = {
    [constants.ERROR]: 500,
    [constants.USER_ADDED]: 201,
    [constants.MISSING_PARAMS]: 400,
    [constants.WRONT_FORMAT_DATE]: 400,
    [constants.WRONT_FORMAT_EMAIL]: 400,
}

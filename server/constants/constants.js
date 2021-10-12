export const constants = {
    ERROR: 'Something went wrong.',
    SUCCESS: 'Success.',
    USER_ADDED: 'User successfully added.',
    MISSING_PARAMS: 'Some parameters are missing.'
}

export const resStatuses = {
    [constants.SUCCESS]: 200,
    [constants.ERROR]: 500,
    [constants.USER_ADDED]: 201,
    [constants.MISSING_PARAMS]: 400
}

export const Regex = Object.freeze({
    phoneNumber: /^\+?[1-9]\d{1,14}$/,
    postalCode: /^[0-9]{5}$/,
    strongPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
})

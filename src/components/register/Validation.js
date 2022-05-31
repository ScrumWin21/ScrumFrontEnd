export default function submitValidation(values) {
    
    let errors = {};

    if(!values.regUsername) {
        errors.regUsernameError = 'Username is required.';
    } else if(!/^([A-Za-z]).{1,}$/.test(values.regUsername)) {
        errors.regUsernameError = 'The username needs at least 2 characters.';
    }


    if(!values.regEmail) {
        errors.regEmailError = 'Email address is required.';
    } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.regEmail)) {
        errors.regEmailError= 'You need to use a valid email address.';
    }


    if(!values.regPassword) {
        errors.regPasswordError = 'Password is required.';
    } else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.regPassword)) {
        errors.regPasswordError = 'You need a strong password. Ex: BytMig123!';
    }

    return errors;
}
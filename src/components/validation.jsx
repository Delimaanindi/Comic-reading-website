const validation = (value) => {
    let errors = {};

    if(!value.firstname) {
        errors.firstname = 'This field is required'
    };

    if(!value.lastname) {
        errors.lastname = 'This field is required'
    };

    if(!value.username) {
        errors.username = 'This field is required'
    };

    if(!value.email) {
        errors.email = 'This field is required'
    };

    if(!value.email) {
        errors.email = 'This field is required'
    } else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email = 'email is invalid'
    } ;

    if(!value.password) {
        errors.password = 'This field is required'
    } else if(value.password.length < 7) {
        errors.password = 'Password must be more than seven characters'
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value.password)){
        errors.password = 'Password is invalid'
    };

    return errors;

}

export default validation;
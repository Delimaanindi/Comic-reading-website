const Correctval = (value) => {
    let correct = {};

    if(value.firstname) {
        correct.firstname = '../greencheck.png'
    };

    if(value.lastname) {
        correct.lastname = '../greencheck.png'
    };

    if(value.username) {
        correct.username = '../greencheck.png'
    };

    if(value.email) {
        correct.email = '../greencheck.png'
    } else if(/\S+@\S+\.\S+/.test(value.email)){
        correct.email = '../greencheck.png'
    } ;

    if(value.password) {
        correct.password = '../greencheck.png'
    } else if(value.password.length >= 7) {
        correct.password = '../greencheck.png'
    } else if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value.password)){
        correct.password = '../greencheck.png'
    };

    return correct;

}

export default Correctval;
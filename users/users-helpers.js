module.exports = {
    validateUser
}

function validateUser(user){

    let errors = [];

    if(!user.username || user.username.length < 3 ){
    errors.push('Your Username must be a minimum of 3 characters long.')
    }
    

    if(!user.password || user.password.length < 5){
    errors.push('Your Password must be a minimum of 5 characters long.')
    }
    

    return {
        isSuccessful: errors.length > 0 ? false: true,
        errors
    }
}
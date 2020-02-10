module.exports = {
    validateUser
}

function validateUser(user){

    let errors = [];

    if(!user.username || user.username.length < 5 ){
    errors.push('Your Username must be a minimum of 5 characters.')
    }
    

    if(!user.password || user.password.length < 8){
    errors.push('Your Password must be a minimum of characters long.')
    }
    

    return {
        isSuccessful: errors.length > 0 ? false: true,
        errors
    }
}
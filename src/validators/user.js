

function passwordValidate( password )
{
    const pattern = /[a-zA-Z0-9]{10}/;
    return pattern.test(password);
}

export {passwordValidate};
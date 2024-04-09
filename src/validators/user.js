

function passwordValidate( password )
{
    const pattern = /$[a-zA-Z0-9]{10}^/;
    return pattern.test(password);
}

function isUser(username, password)
{
    const users = {
        "rick": {
            "password": "garrafon"
        },
        "morty":
        {
            "password": "jessica"
        }
    }
    if (users[username] && users[username].password === password) {
        return true
    }
    return false

}

export { passwordValidate, isUser };
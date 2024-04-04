function checkToken()
{
    const token = localStorage.getItem("token");
    const tokenPattern = /\w+\-[a-zA-Z0-9]{30}/ 
    if(token)
    {
        return tokenPattern.test(token);
    }
    return false
}

export { checkToken }
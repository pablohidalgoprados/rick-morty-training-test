function setToken(seed)
{
    const randomGeneration = "123456789abcdefghijklmnopqrstuvwxyz"
    localStorage.setItem("token", seed + "-" + Array.from({ length: 30 }, () => randomGeneration.charAt(Math.floor(Math.random() * randomGeneration.length))).join(''))
}

export {setToken}
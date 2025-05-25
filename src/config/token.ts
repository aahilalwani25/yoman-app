
let bearerToken: string | null

const setBearerToken = (token: string) => {
    bearerToken=token
}

const getBearerToken = () => {
    return bearerToken;
}

const clearBearerToken= async()=>{
    bearerToken=null
}

export { setBearerToken, getBearerToken, clearBearerToken }

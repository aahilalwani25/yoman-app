
let userRole: string | null

const setUserRole = (token: string) => {
    userRole=token
}

const getUserRole = () => {
    return userRole;
}

const clearUserRole= async()=>{
    userRole=null
}

export { setUserRole, getUserRole, clearUserRole }

import { UserOutput } from "./user.output";

export const getUserProfile= (output: UserOutput)=>
    async()=>{
        try{
            return await output.getUserProfile();
        }catch(e:any){
            throw new Error(e.message)
        }
    }
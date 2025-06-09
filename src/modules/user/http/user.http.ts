import { UserInfoResponse } from "../domain/user";
import { UserOutput } from "../domain/user.output";

export class UserHttp implements UserOutput{
    getUserProfile(): Promise<UserInfoResponse> {
        return new Promise((resolve,reject)=>{
                try{
                    resolve({
                        username: "johndoe",
                        lastName: "Doe",
                        firstName: "John",
                        email: "johndoe@gmail.com"
                    })
                }catch(e){
                    reject("User not found")
                }
            }) 
        
    }
    
}
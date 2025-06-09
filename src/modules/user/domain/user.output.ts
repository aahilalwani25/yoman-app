import { UserInfoResponse } from "./user";

export interface UserOutput{
    
    getUserProfile():Promise<UserInfoResponse>;
}
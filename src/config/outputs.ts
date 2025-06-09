import { ProductHttp } from "../modules/products/http/products.http";
import { UserHttp } from "../modules/user/http/user.http";

export const outputs={
    productOutput: new ProductHttp(),
    userOutput: new UserHttp()
}
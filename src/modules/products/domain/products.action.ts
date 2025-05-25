import { ProductOutput } from "./products.output";

export const getAllProducts= (output: ProductOutput)=>
    async()=>{
        return output.getAllProducts();
    }
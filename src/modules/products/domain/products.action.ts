import { ProductOutput } from "./products.output";

export const getAllProducts= (output: ProductOutput)=>
    async()=>{
        return output.getAllProducts();
    }

export const getProductDetail = (output: ProductOutput)=>
    async(id: number)=>{
        return output.getProductById(id)
    }

export const searchProducts= (output: ProductOutput)=>
    async (searchText: string)=>{
        return output.searchProducts(searchText)
    }

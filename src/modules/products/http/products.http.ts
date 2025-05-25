import { publicAxios } from "@/src/config/public.axios";
import { ProductResponse, Categories } from "../domain/products";
import { ProductOutput } from "../domain/products.output";

export class ProductHttp implements ProductOutput{
    
    async getAllProducts(): Promise<ProductResponse[]> {
        try{
            const result= await publicAxios.get('/products');
            return result?.data;
        }catch(e:any){
            console.log(e);
            throw new Error(e);
        }

    }
    async getProductById(id: number): Promise<ProductResponse> {
        try{
            const result= await publicAxios.get(`/products/${id}`);
            return result?.data;
        }catch(e:any){
            console.log(e);
            throw new Error(e);
        }
    }

    getProductsByCategory(category: Categories): Promise<ProductResponse> {
        throw new Error("Method not implemented.");
    }

    
}
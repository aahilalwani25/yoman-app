import { Categories, ProductResponse } from "./products";

export interface ProductOutput{
    getAllProducts():Promise<ProductResponse[]>;
    getProductById(id:number):Promise<ProductResponse>;
    getProductsByCategory(category:Categories):Promise<ProductResponse>
    searchProducts(searchText:string): Promise<ProductResponse[]>
}
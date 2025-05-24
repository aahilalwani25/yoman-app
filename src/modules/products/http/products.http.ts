import { ProductResponse, Categories } from "../domain/products";
import { ProductOutput } from "../domain/products.output";

export class ProductHttp implements ProductOutput{
    getAllProducts(): Promise<ProductResponse[]> {
        throw new Error("Method not implemented.");
    }
    getProductById(id: number): Promise<ProductResponse> {
        throw new Error("Method not implemented.");
    }
    getProductsByCategory(category: Categories): Promise<ProductResponse> {
        throw new Error("Method not implemented.");
    }

    
}
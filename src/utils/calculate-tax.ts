export const calculateTax= (cost: number, taxPercentage: number)=>{
    return Number((cost*(taxPercentage/100)).toFixed(2));
}
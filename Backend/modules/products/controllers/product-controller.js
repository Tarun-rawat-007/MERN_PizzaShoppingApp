
import { addNewProduct, viewAllProduct } from "../services/product-operation.js";


export const addNewProd=async (request,response)=>{
    const product =request.body;
    console.log("Request data is: ",product);
    try{
        const doc=await addNewProduct(product);
        if(doc && doc._id){
    
            response.status(200).json({message:'Product Added ',doc:doc});
        }
        
        
    }catch(err){
        response.status(500).json({message:'Problem in product ADD'});

    }
   
}
export const viewAll =async (request,response)=>{
    const docs=await viewAllProduct();
    response.status(200).json({products: docs});

}
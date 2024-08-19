import mongoose, { SchemaTypes }  from "mongoose";
const ProductSchema=mongoose.Schema({
    name:{type:SchemaTypes.String, maxLength:25, minLength:3, required:true, unique:true},

    price:{type:SchemaTypes.Number, min:1, max:500, required:true},
    desc:{type:SchemaTypes.String},
    image:{type:SchemaTypes.String, required:true},
    
});
export const ProductModel=mongoose.model('products',ProductSchema);
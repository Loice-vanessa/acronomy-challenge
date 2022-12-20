import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true

    },
    description:{
        type:String,
        unique:true,
        
    }
    
},{timestamps:true}
);

const AcronomyModel = mongoose.model("acronommy",Schema );
  
export default AcronomyModel;
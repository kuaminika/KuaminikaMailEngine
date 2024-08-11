import mongoose, { model } from "mongoose";

let schemaDetails = {  
    name: { type: String, required:true, unique:true},
    emailAddress:{ type: String, required:true, unique:true},
    key:{ type: String, required:true, unique:true}
}


let schema = new mongoose.Schema(schemaDetails);

let OrganizationModel = new mongoose.model('Organization',schema);

export default OrganizationModel;
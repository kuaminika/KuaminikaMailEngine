import OrganizationModel from   "../Mongoosmodels/Organization.js";
import Organization  from "../Models/Organization.js"
import Encryptor from "../Utils/Encryptor.js";

import mongoose  from "mongoose";
import 'dotenv/config'
 





let encryptor = new Encryptor();
let adp = new DbAdapter();
let db = new DatabaseGateway(adp)
let or  = new OrganizationRepository(db);



let connect = mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_DB_USER}:${process.env.MONGOOSE_DB_PWD}@cluster0.lhpzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

connect.then(()=>{ console.log('connected to mongo');

    let dt = new Date();
    let name = "test1"+dt.getTime();
    let orgn = new Organization({name:name,emailAddress:`${name}@heartmindequation.com`,key:"fakekey"});


orgn.key = encryptor.encrypt(orgn.emailAddress);
    OrganizationModel.create(orgn).then(console.log).catch(console.log);
//TODO: handle case like this: E11000 duplicate key error collection: test.organizations index: emailAddress_1 dup key: { emailAddress: "test1@heartmindequation.com" }',
//TODO : handle cases like this :     errmsg: 'E11000 duplicate key error collection: test.organizations index: name_1 dup key: { name: "test1" }',

}).catch((err)=>{
    
        console.log('not connected' );
        console.log(err);
      

});
 


console.log("about to test adding an orgn",OrganizationModel,typeof(OrganizationModel),Organization);



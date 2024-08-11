import OrganizationModel from   "../Mongoosmodels/Organization.js";
import MongooseDBGateway from "../Utils/MongooseDBGateway.js";
import OrganizationRepository from "../OrganizationRepository.js"
import Organization  from "../Models/Organization.js"
import Encryptor from "../Utils/Encryptor.js";


import 'dotenv/config'
 





let encryptor = new Encryptor();
 
let db = new MongooseDBGateway(OrganizationModel )
let or  = new OrganizationRepository(db);

let dt = new Date();
let name = "test1"+dt.getTime();
let orgn = new Organization({name:name,emailAddress:`${name}@heartmindequation.com`,key:"fakekey"});


orgn.key = encryptor.encrypt(orgn.emailAddress);

or.add(orgn).then(console.log).catch(console)


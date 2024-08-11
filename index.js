

import mongoose  from "mongoose";
import 'dotenv/config'


let connect = mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_DB_USER}:${process.env.MONGOOSE_DB_PWD}@cluster0.lhpzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

connect.then(()=>{ console.log('connected to mongo');}).catch((err)=>{
    
        console.log('not connected',`-${process.env.MONGOOSE_DB_USER}:${process.env.MONGOOSE_DB_PWD}-`);
        console.log(err);
      

});
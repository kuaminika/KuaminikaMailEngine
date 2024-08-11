
import mongoose  from "mongoose";
import 'dotenv/config'
 


function MongooseDBGateway(Model)
{
    let self = this; 

    function doConnect(){
        let connect = mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_DB_USER}:${process.env.MONGOOSE_DB_PWD}@cluster0.lhpzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
     return connect;
    }
    self.performInsert = function(modelDetails){
         
      return doConnect().then(()=>{ Model.create(modelDetails).then(console.log)});
    }
}


export default MongooseDBGateway;
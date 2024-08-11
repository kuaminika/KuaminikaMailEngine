import OrganizationModel from   "./Mongoosmodels/Organization.js";


function OrganizationRepository(dBGateway){


    let self = this;

    self.add = function(model)
    {
      return   dBGateway.connect.then(()=>{
              return  OrganizationModel.create(model);//.then(console.log).catch(console.log);
        });
     }
}
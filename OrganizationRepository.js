import OrganizationModel from   "./Mongoosmodels/Organization.js";


function OrganizationRepository(dBGateway){


    let self = this;

    self.add = function(modelDetails)
    {
       // console.log("will add",modelDetails)
        return  dBGateway.performInsert(modelDetails);
     }
}

export default OrganizationRepository;
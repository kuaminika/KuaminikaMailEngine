
import Mailjet  from "node-mailjet"
import 'dotenv/config'
function Transporter(args)
{

    let self = this;

    

    self.send = function(){
        /**
         *
         * This call sends a message to one recipient.
         *
         */
        //const mailjet = require ('node-mailjet')
     //   mailjet.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

     const mailjet = new Mailjet({
        apiKey: process.env.MJ_APIKEY_PUBLIC || 'your-api-key',
        apiSecret: process.env.MJ_APIKEY_PRIVATE || 'your-api-secret'
      });
      console.log(mailjet);

        const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                    {
                            "From": {
                                    "Email": "pilot@heartmindequation.com",
                                    "Name": "Mailjet Pilot"
                            },
                            "To": [
                                    {
                                            "Email": "kuaminika@gmail.com",
                                            "Name": "passenger 1"
                                    }
                            ],
                            "Subject": "Your email flight plan!",
                            "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
                    }
            ]
        })
        request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })  




    }
}

export default Transporter;
function Organization(args)
{
    let self = this;

    self.name = args.name || "";
    self.emailAddress = args.emailAddress || "";
    self.key = args.key ||"";

}




export default Organization;
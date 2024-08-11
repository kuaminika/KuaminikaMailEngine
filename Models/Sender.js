function Sender(args) {
    let self = this;
    self.purpose = args.purpose;
    self.name = args.name;
    self.mailAddress = args.emailAddress || "";
}

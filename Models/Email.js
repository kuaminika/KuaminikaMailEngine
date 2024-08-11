function Email(args) {
    let self = this;
    self.sender = args.sender || new Sender();
    self.recipient = args.recipient || new Recipient();
    self.organization = args.organization || new Organization();
    self.subject = args.subject || "";
    self.html = args.html || "";
    self.text = args.text || "";
}

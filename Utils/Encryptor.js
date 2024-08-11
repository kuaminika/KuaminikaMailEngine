import crypto from 'crypto'

const algorithm = 'aes-256-ctr';
const ENCRYPTION_KEY= crypto.randomBytes(32);// or generate sample key Buffer.from('FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=', 'base64');
const IV_LENGTH = 16;
 
console.log("ENCRYPTION_KEY",ENCRYPTION_KEY)

function Encryptor()
{
    let self = this;
    function encrypt(text) {
        console.log(13)
        let iv = crypto.randomBytes(IV_LENGTH);
        console.log(15)
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
        console.log(17)
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    }
    
    function decrypt(text) {
        let textParts = text.split(':');
        let iv = Buffer.from(textParts.shift(), 'hex');
        let encryptedText = Buffer.from(textParts.join(':'), 'hex');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
    
    self.encrypt = encrypt;
    self.decrypt = decrypt;
    
}


export default Encryptor;
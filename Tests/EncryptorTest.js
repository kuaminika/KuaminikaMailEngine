import Encryptor from "../Utils/Encryptor.js";

console.log("I imported",Encryptor)

let encryptor = new Encryptor();
let thePrhase = "AyitiApChanje";
let encryptedTxt= encryptor.encrypt(thePrhase);

console.log(`the phrase "${thePrhase}" encrypted is:`,encryptedTxt);

console.log(`will now decrypt ${encryptedTxt}:`, encryptor.decrypt(encryptedTxt));



let encryptor2 = new Encryptor();

let encrypted2 = encryptor2.encrypt(thePrhase);

console.log(`I encrypted with a second decryptor...`,encrypted2)
console.log("they are the same:", encrypted2== encryptedTxt)
console.log("are the decypted the same:",encryptor.decrypt(encryptedTxt),encryptor2.decrypt(encrypted2))

console.log("are the decypted the same:",encryptor.decrypt(encryptedTxt)===encryptor2.decrypt(encrypted2))

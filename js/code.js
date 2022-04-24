const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const encrypt = () => {
    //catch the elements write by the user
    let text = document.querySelector('.textCrypto').value.toLowerCase().split('') 
    let key = resetKey(Number(document.querySelector('.key').value))
    let newText = ''
   for(let i in text) {
       if(text[i] === ' ') newText+= ' '
       for(let j = 0; j < alphabet.length; j++){
           if(text[i] === alphabet[j]){
               newText += alphabet[j + key]
               break
           }
       }
   }
    document.querySelector('.textDecrypto').value = newText
}

const decrypt = () => {
    let cryptText = document.querySelector('.textCrypto').value.toLowerCase().split('')
    let key = resetKey(Number(document.querySelector('.key').value))
    let textDecrypt = ''
    for(let i in cryptText){
        if(cryptText[i] === ' ') textDecrypt+= ' '
        for(let j = 0; j < alphabet.length; j++){
            if(cryptText[i] === alphabet[j]){
                textDecrypt += alphabet[(j+26) - key]
                break
            }
        }
    }
    document.querySelector('.textDecrypto').value = textDecrypt
}

const resetKey = key => {
    if(key > 26){
        if(key > 52){
            if(key > 78) {
                if(key > 104){
                    key -= 104
                }else key -= 78
            }else key -= 52
        }else key -= 26
   }

   return key
}


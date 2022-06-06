const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//DESKTOP DISPLAY

const encryptDesk = () => {
    //catch the elements write by the user
    let text = document.querySelector('.textCryptoDesk').value.toLowerCase().split('') 
    let key = resetKey(Number(document.querySelector('.keyDesk').value))
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
   if(newText.indexOf('undefined') != -1){
       newText = 'Chave Inválida'
   }
    document.querySelector('.textDecryptoDesk').value = newText
}

const decryptDesk = () => {
    let cryptText = document.querySelector('.textCryptoDesk').value.toLowerCase().split('')
    let key = resetKey(Number(document.querySelector('.keyDesk').value))
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
    if(textDecrypt.indexOf('undefined') != -1){
        textDecrypt = 'Chave Inválida'
    }
    document.querySelector('.textDecryptoDesk').value = textDecrypt
}

//MOBILE DISPLAY
const encryptMob = () => {
    //catch the elements write by the user
    let text = document.querySelector('.textCryptoMob').value.toLowerCase().split('') 
    let key = resetKey(Number(document.querySelector('.keyMob').value))
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
   if(newText.indexOf('undefined') != -1){
       newText = 'Chave Inválida'
   }
    document.querySelector('.textDecryptoMob').value = newText
}

const decryptMob = () => {
    let cryptText = document.querySelector('.textCryptoMob').value.toLowerCase().split('')
    let key = resetKey(Number(document.querySelector('.keyMob').value))
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
    if(textDecrypt.indexOf('undefined') != -1){
        textDecrypt = 'Chave Inválida'
    }
    document.querySelector('.textDecryptoMob').value = textDecrypt
}

//Reset the key

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


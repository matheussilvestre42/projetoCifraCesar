const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function encrypt() {
    //catch the elements write by the user
    let text = document.querySelector('.textCrypto').value.toLowerCase().split('')
    let key = Number(document.querySelector('.key').value)
    
    let newText = ''
    for(let i = 0; i < text.length; i++) {
        if(text[i] == ' ') newText += text[i]
        for(let j = 0; j < alphabet.length; j++){
            if(text[i] == alphabet[j]){
                /*
                *This section changes the key to suit the 26 different combinations
                *Thus creating 26 combinations of the text with the limit key 150
                *After this limit possibly some character will return as undefined
                 */
                if(key > 26) if(key > 52) {
                    if(key > 78){
                        if(key > 104){
                            key -= 104
                        }else key -= 78
                    }else key -= 52
                }else key -= 26

                newText += alphabet[j + key]
                break
            }
            
        }
    }
    document.querySelector('.textDecrypto').value = newText
}

function decrypt(){
    let cryptText = document.querySelector('.textCrypto').value.toLowerCase().split('')
    let key = Number(document.querySelector('.key').value)
    let textDecrypt = ''
    for(let i = 0; i < cryptText.length; i++) {
        if(cryptText[i] == ' ') textDecrypt += cryptText[i]
        for(let j = 0; j < alphabet.length; j++) {
            if(cryptText[i] == alphabet[j]){

                if(key > 26) if(key > 52) {
                    if(key > 78){
                        if(key > 104){
                            key -= 104
                        }else key -= 78
                    }else key -= 52
                }else key -= 26

                textDecrypt += alphabet[(j+26) - key]
                break
            }

        }
    }

    document.querySelector('.textDecrypto').value = textDecrypt
}


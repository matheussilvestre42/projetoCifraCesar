const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function encrypt() {
    let text = document.querySelector('.textCrypto').value
    let key = Number(document.querySelector('.key').value)
    let newText = ''
    text = text.split('')
    for(let i = 0; i < text.length; i++) {
        if(text[i] == ' ') newText += text[i]
        for(let j = 0; j < alphabet.length; j++){
            if(text[i] == alphabet[j]){
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


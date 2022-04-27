function showMessage(result) {
    console.log(result);
    document.getElementById("no-message").style.display="none";
    document.getElementById("btn-copy").style.display="block";
    let message = document.getElementById("result");
    message.style.display="block";
    //message.value =``;
    message.value = result;
}

function encryptText() {
    let text = document.querySelector("textarea").value.toLowerCase();
    text = text.replace(/á/gm,"a").replace(/é/gm,"e").replace(/í/gm,"i").replace(/ó/gm,"o").replace(/ú/gm,"u").replace(/ü/gm,"u");    
    let textEncrypted = "";
    
    for (let index = 0; index < text.length; index++) {        
        if (text[index] === "a") {
            textEncrypted = textEncrypted + "ai";
            
        }else if(text[index] === "e"){
            textEncrypted = textEncrypted + "enter";

        }else if(text[index] === "i"){
            textEncrypted = textEncrypted + "imes";

        }else if(text[index] === "o"){
            textEncrypted = textEncrypted + "ober";

        }else if(text[index] === "u"){
            textEncrypted = textEncrypted + "ufat";

        }else{                      
            textEncrypted = textEncrypted + text[index];
        }             
    }
    //console.log(textEncrypted); no-message
    showMessage(textEncrypted);
}

function decrypt() {
    let text = document.querySelector("textarea").value.toLowerCase();
    text = text.replace(/á/gm,"a").replace(/é/gm,"e").replace(/í/gm,"i").replace(/ó/gm,"o").replace(/ú/gm,"u").replace(/ü/gm,"u");  
    let textEncrypted = text.replaceAll("enter", "e").replaceAll("ai", "a").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");      
    showMessage(textEncrypted);
    
}

function copy() {
    let texContainer = document.getElementById("result");
    texContainer.select();
    document.execCommand('copy');
}

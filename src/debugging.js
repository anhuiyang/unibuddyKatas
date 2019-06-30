
function uppercaseString(str) {
    if(str){
        let uppercaseString = "";
        for (let i=0;i<str.length;i++) {
            let charCode = str.charCodeAt(i);
            if (charCode>=97&&charCode<123) {
                let upperCasedChar = String.fromCharCode(charCode - 32);
                uppercaseString += upperCasedChar;
            } else {
            uppercaseString += str[i];
            }
        }
        return uppercaseString;
    }else{
        return str
    }
}

module.exports = uppercaseString
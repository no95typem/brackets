module.exports = function check(str, bracketsConfig, pos, nextCorrectClosingBracket) {
    if(typeof(pos)=="undefined") pos = 0;
    mainloop: for(pos; pos < str.length; pos++) {
        if(typeof(nextCorrectClosingBracket)!="undefined" &&
        str[pos]==nextCorrectClosingBracket) return pos;
        for(let j = 0; j < bracketsConfig.length; j++) {
            // if there is open bracket
            if(bracketsConfig[j][0]==str[pos]) {
                pos++;
                let result = check(str, bracketsConfig, pos, bracketsConfig[j][1]);
                if(!result) return false;
                else pos = result;
                continue mainloop;
            }
        }
        return false;
    }
    if(typeof(nextCorrectClosingBracket)=="undefined") return true;
    else return false;
}
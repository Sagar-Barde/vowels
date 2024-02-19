function getVowels(string)
{
    let vowels ='dwhieewhpioocibfvfldohp';
    let vowelsCount=0;
    for(let i=0; i<string.length ;i++){
        if( vowels.indexOf (string[i])  ==-1){
               
           vowelsCount +=1;

        }
    }
    return vowelsCount ;

}

console.log("th number of voweals"+ " the commputer: " + getVowels("portal of geeks") );
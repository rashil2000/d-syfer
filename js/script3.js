function gcd(a,b){
    while(a!=a || b!=0){
        if (a==b){
            return a;
        }else if(a<b){
            b = b-a;
        }else{
            a = a-b;
        }
    }
    if (a==0){
        return b;
    }else{
        return a;
    }
}

function multiplicative_inverse(a,b,x,y){
    if(a==0){
        x = 0
        y = 1
        return (0,b,0,1)
    }
    temp = multiplicative_inverse(b%a,a,x,y);
    x1 = temp[2];
    y1 = temp[3];
    x = Math.floor(b/a)
    return [a,b,y1-x*x1,x1];
}


document.querySelector('.submitBTN4').addEventListener('click', (f) => {
    f.preventDefault()
    let key = parseInt(document.querySelector('#mkey').value);
    let akey = parseInt(document.querySelector('#akey').value);
    let cipher = "";
    if (gcd(key,26)!=1){
        alert("Enter a key so that GCD of key and 26 is 1");
    }else{
        let a = document.querySelector('#plaintext').value.toLowerCase();
        let n = a.length;
        let i;
        let inverse = multiplicative_inverse(key,n,1,1);
        for(i=0;i<n;i++){
            let ascii = a.charCodeAt(i);
            if (ascii>96 && ascii<123){
                ascii -= 97;
                ascii = ((ascii*key+akey)%26)+97;
                cipher += String.fromCharCode(ascii);
            }else if (ascii>64 && ascii<91){
                ascii -= 65;
                ascii = ((ascii*key+akey)%26)+65;
                cipher += String.fromCharCode(ascii);
            }else{
                cipher += a[i];
            }

        }
    }
    document.querySelector('#cipher').innerHTML = cipher
})
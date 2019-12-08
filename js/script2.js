document.querySelector('.submitBTN3').addEventListener('click', (f) => {
    f.preventDefault();
    let AlphabetShift = parseInt(document.querySelector('#CSRshift').value);
    let NumberShift = parseInt(document.querySelector('#CSRshift1').value);
    if (AlphabetShift>25||AlphabetShift<-25)
        alert("Enter Alphabet Shift between -25 and 25");
    else if(NumberShift>9||NumberShift<-9){
        alert("Enter Number Shift between -9 and 9");
    }
    else
    {
        let a = document.querySelector('#originalCSR').value;
        let n = a.length;
        let i, j, k, s="";
        for(i=0;i<n;i++)
        {
            j = a.charCodeAt(i);
            if (j>96&&j<123)
            {
                k = j+AlphabetShift;
                if (k>122)
                    k-=26;
                else if (k<97)
                    k+=26;
                s+=String.fromCharCode(k);
            }
            else if(j>47&&j<58){
                k=j+NumberShift;
                if(k>57)
                    k=k-10;
                else if(k<48)
                    k=k+10;
                s+=String.fromCharCode(k);
            }
            else if (j>64&&j<91)
            {
                k = j+AlphabetShift;
                if (k>90)
                    k-=26;
                else if (k<65)
                    k+=26;
                s+=String.fromCharCode(k);
            }
            else
                s+=String.fromCharCode(j);
        }
        document.querySelector('#encodedCSR').innerHTML = s;
    }
})
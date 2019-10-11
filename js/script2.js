document.querySelector('.submitBTN3').addEventListener('click', (f) => {
    f.preventDefault()
    let shift = parseInt(document.querySelector('#CSRshift').value)
    if (shift>25||shift<-25)
        alert("Enter shift between -25 and 25")
    else
    {
        let a = document.querySelector('#originalCSR').value
        let n = a.length
        let i, j, k, s=""
        for(i=0;i<n;i++)
        {
            j = a.charCodeAt(i)
            if (j>96&&j<123)
            {
                k = j+shift
                if (k>122)
                    k-=26
                else if (k<97)
                    k+=26
                s+=String.fromCharCode(k)
            }
            else if (j>64&&j<91)
            {
                k = j+shift
                if (k>90)
                    k-=26
                else if (k<65)
                    k+=26
                s+=String.fromCharCode(k)
            }
            else
                s+=String.fromCharCode(j)
        }
        document.querySelector('#encodedCSR').innerHTML = s
    }
})
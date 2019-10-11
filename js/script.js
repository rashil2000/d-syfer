document.querySelector('.submitBTN1').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#encodedText').innerHTML = document.querySelector('#originalText').value
})


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.mdb.modal', () => {
    myInput.focus()
})

function goToApp(){
    window.open("https://peru-stars.web.app/");
}
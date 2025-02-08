// ================> SELETORES <====================
const container  = document.querySelector('.container')
const btn        = document.querySelector("#qr-form button")
const input      = document.querySelector("#qr-form input")
const qrcode     = document.querySelector("#qr-code img")
const body       = document.querySelector('body')

// ================> FUNÇÕES <====================
const AlertErro = (descricao) => {

    Swal.fire({
        icon: 'error',
        title: `${descricao}`,
        // text: 'Verifique os campos preenchidos',
        confirmButtonText: 'Fechar'})
};

const AlertSucess = (descricao) =>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${descricao}`,
        showConfirmButton: false,
        timer: 1300
      });
}

// QrCode
function GeradorQrcode(){
    const ValorInput = input.value
    if(!ValorInput){
        AlertErro("Campo obrigatório")
        return;
    } 
    btn.innerHTML = "Gerando código..."
    qrcode.src    = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ValorInput}`

    qrcode.addEventListener("load", () =>{
        body.style.height = "100vh"
        container.classList.add("active")
        btn.innerHTML = "Código Gerado!"
        AlertSucess("Gerado com sucesso!")
    })


}

// ==============> EVENTOS <====================
btn.addEventListener('click', () => {
    GeradorQrcode()
    
});

input.addEventListener('keydown', (e) => {
    if(e.code === "Enter"){
        GeradorQrcode()
    }
});

// Limpar QRcode
input.addEventListener("keyup", () => {
    const ValorInput = input.value
    if(!ValorInput){
        container.classList.remove("active")
        body.style.height = "80vh"
        btn.innerHTML = "Enviar"
    }
})
function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        foto.src = './assets/morning.jpg'
        document.body.style.backgroundImage = "url('assets/morningBG.jpg')"
        document.body.style.backgroundSize = "cover";
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> 🌞`
    } else if (hora >= 12 && hora < 18) {
        foto.src = './assets/noon.jpg'
        document.body.style.backgroundImage = "url('assets/noonBG.jpg')"
        document.body.style.backgroundSize = "cover";
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> ⛅`
    } else {
        foto.src = './assets/night.jpg'
        document.body.style.backgroundImage = "url('assets/nightBG.jpg')"
        document.body.style.backgroundSize = "cover";
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> 🌙`
    }
}

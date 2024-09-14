const { shell } = require('electron')
const axios = require('axios')

const connectBtn = document.getElementById('connectBtn')
const serverStatus = document.getElementById('serverStatus')
const playerCount = document.getElementById('playerCount')

// Sunucu IP ve Portunu buraya girin
const serverIP = 'localhost'
const serverPort = '30120'

// Sunucuya Bağlanma İşlemi
connectBtn.addEventListener('click', () => {
    shell.openExternal(`fivem://connect/${serverIP}:${serverPort}`)
})

// Sunucu Durumunu ve Oyuncu Sayısını Kontrol Etme
function checkServerStatus() {
    axios.get(`http://${serverIP}:${serverPort}/players.json`)
        .then(response => {
            const players = response.data
            serverStatus.textContent = 'Sunucu Durumu: Aktif'
            playerCount.textContent = `Sunucudaki Oyuncu Sayısı: ${players.length}`
        })
        .catch(error => {
            serverStatus.textContent = 'Sunucu Durumu: Kapalı veya Ulaşılamıyor'
            playerCount.textContent = 'Sunucudaki Oyuncu Sayısı: -'
        })
}

// Uygulama açıldığında sunucu durumunu kontrol et
checkServerStatus()

// Her 30 saniyede bir sunucu durumunu ve oyuncu sayısını güncelle
setInterval(checkServerStatus, 30000)

// 'Canatan' yazısını harf harf gösterme
const copyrightTextElement = document.getElementById('copyrightText')
const text = '© Canatan'
let index = 0

function typeWriter() {
    if (index < text.length) {
        copyrightTextElement.innerHTML += text.charAt(index)
        index++
        setTimeout(typeWriter, 200) // Her harf arasındaki süre (ms cinsinden)
    }
}

// Pencere yüklendiğinde çalıştırılacak fonksiyonlar
window.onload = function() {
    // Diğer fonksiyonlarınızı burada çağırabilirsiniz
    checkServerStatus()
    typeWriter()
}

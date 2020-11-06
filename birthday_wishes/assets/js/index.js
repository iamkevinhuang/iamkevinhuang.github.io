const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))

async function openTheLight(){
    document.getElementById('cake').style.visibility = "visible" 
    document.getElementById('lampButton').style.display = 'none'
    document.getElementById('backgroud').style.background = '#f7f0a8'
    document.getElementById('backgroud').innerHTML += '<audio id="song" src="assets/songs/hbd_song.mp3" no-controls loop autoplay>Yah... Browser kamu gak support play lagu nih :(</audio>'
    document.getElementById('ballon').innerHTML += '<img src="assets/images/ballon_background.png" class="full-width">'
    document.getElementById('ballon').className = 'ballon'
    await sleep(5000)
    document.getElementById('ballon').innerHTML = ""
    document.getElementById('banner').innerHTML += '<img src="assets/images/birthday_banner.png" class="full-width bannar bannar-come">'
    document.getElementById('candleFire').style.visibility = "visible"
    while (true){
        document.getElementById('lamp').innerHTML = '<img src="assets/images/bulb_blue.png" class="bulb_size"><img src="assets/images/bulb.png" class="bulb_size"><img src="assets/images/bulb_orange.png" class="bulb_size"><img src="assets/images/bulb.png" class="bulb_size"><img src="assets/images/bulb_red.png" class="bulb_size"><img src="assets/images/bulb.png" class="bulb_size">'
        await sleep(1000)
        document.getElementById('lamp').innerHTML = '<img src="assets/images/bulb.png" class="bulb_size"><img src="assets/images/bulb_green.png" class="bulb_size"><img src="assets/images/bulb.png" class="bulb_size"><img src="assets/images/bulb_pink.png" class="bulb_size"><img src="assets/images/bulb.png" class="bulb_size"><img src="assets/images/bulb_yellow.png" class="bulb_size">'
        await sleep(1000) 
    }
}

async function offCandleFire(){
    alert("Jangan lupa Make a Wish !")
    document.getElementById('fire').innerHTML = ""
    document.getElementById('candleFire').style.visibility = 'hidden'
    document.getElementById('message').innerText = "Hari ini adalah..."
    await sleep(1000) 
    document.getElementById('message').innerText = "hari yang indah, seindah hari-hari lainnya"
    await sleep(1000) 
    document.getElementById('message').innerText = "tapi kamu sadarkah"
    await sleep(1000) 
    document.getElementById('message').innerText = "satu tahun lagi telah berlalu"
    await sleep(1000) 
    document.getElementById('message').innerText = "dalam sekejap mata"
    await sleep(1000) 
    document.getElementById('message').innerHTML = "<b>namun</b>"
    await sleep(1000) 
    document.getElementById('message').innerText = "Tahukah kamu ..? "
    await sleep(1000) 
    document.getElementById('message').innerText = "hari ini spesial"
    await sleep(1000) 
    document.getElementById('message').innerText = "sangat spesial untukmu"
    await sleep(1000) 
    document.getElementById('message').innerText = "itu sebabnya"
    await sleep(1000) 
    document.getElementById('message').innerText = "Mari kita buat ..."
    await sleep(1000) 
    document.getElementById('message').innerText = "perayaan terbaik yang pernah ada"
    await sleep(1000) 
    document.getElementById('message').innerText = "dan biarkan saya berbagi ..."
    await sleep(1000) 
    document.getElementById('message').innerText = "sebuah kebahagiaan bagimu"
    await sleep(1000) 
    document.getElementById('message').innerText = "Saya membuat semua ini ..."
    await sleep(1000) 
    document.getElementById('message').innerText = "sebagai hadiah ulang tahun untukmu"
    await sleep(1000) 
    document.getElementById('message').innerHTML = "terima kasih sudah ada di sana"
    await sleep(1000) 
    document.getElementById('message').innerText = "terima kasih atas persahabatan yang kami jalani"
    await sleep(1000) 
    document.getElementById('message').innerText = "terimakasih untuk semuanya"
    await sleep(1000) 
    document.getElementById('message').innerText = "saya berharap yang terbaik untukmu"
    await sleep(1000) 
    document.getElementById('message').innerText = "Semoga hidup Anda nyaman"
    await sleep(1000) 
    document.getElementById('message').innerText = "Semoga semua keinginan Anda menjadi kenyataan"
    await sleep(1000)
    document.getElementById('message').innerText = "Ingat"
    await sleep(1000) 
    document.getElementById('message').innerText = "ambisi Anda"
    await sleep(1000) 
    document.getElementById('message').innerText = "Anda hidup sebagai burung bebas ..."
    await sleep(1000) 
    document.getElementById('message').innerText = "terbang di langit biru"
    await sleep(1000) 
    document.getElementById('message').innerText = "Sekarang semuanya berbeda ..."
    await sleep(1000) 
    document.getElementById('message').innerHTML = "kisah nyata hidup Anda"
    await sleep(1000) 
    document.getElementById('message').innerText = "baru saja akan dimulai"
    await sleep(1000) 
    document.getElementById('message').innerText = "memang.."
    await sleep(1000) 
    document.getElementById('message').innerText = "tapi..."
    await sleep(1000) 
    document.getElementById('message').innerText = "jangan khawatir"
    await sleep(1000) 
    document.getElementById('message').innerText = "karena..."
    await sleep(1000)
    document.getElementById('message').innerText = "Tuhan mendukung Anda"
    await sleep(1000) 
    document.getElementById('message').innerText = "dan"
    await sleep(1000) 
    document.getElementById('message').innerText = "tahun ini akan lebih baik"
    await sleep(1000) 
    document.getElementById('message').innerText = "dan saya harap"
    await sleep(1000) 
    document.getElementById('message').innerText = "kamu akan menemukan..."
    await sleep(1000) 
    document.getElementById('message').innerHTML = "kebahagiaan di sepanjang jalan"
    await sleep(1000) 
    document.getElementById('message').innerText = "tetap semangat"
    await sleep(1000) 
    document.getElementById('message').innerText = "nikmati setiap momen ..."
    await sleep(1000) 
    document.getElementById('message').innerText = "yang Anda alami hari ini"
    await sleep(1000) 
    document.getElementById('message').innerText = "isi dengan senyum terindahmu"
    await sleep(1000) 
    document.getElementById('message').innerText = "dan jadikan itu memori terbaik .."
    await sleep(1000)

    document.getElementById('message').innerText = "terakhir..."
    await sleep(1000) 
    document.getElementById('message').innerText = "Saya ingin mengucapkan sekali lagi"
    await sleep(1000) 
    document.getElementById('message').innerText = "selamat ulang tahun kawan!"
}


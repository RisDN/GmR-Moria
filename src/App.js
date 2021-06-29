const egyseg = document.getElementById('egyseg')
const regisztracio_panel = document.getElementById('regisztracio')
const palya = document.getElementById('palya')
const palya_vege = document.getElementById('palya_vege')
const egysegek_kijelzo = document.getElementById('egysegKijelzo')
const elhagyhatja_kijelzo = document.getElementById('elhagyhatja')
const banya_hang = document.querySelector('audio')
const regisztracio_gomb = document.querySelector('button')
const gulag_szoveg = document.getElementById('gulagSzoveg')
var folyamatban = false
var kesleltetes
var egysegek_szama = 100



function jatek_inditasa() {
    egyseg.style.display = 'none'
    egysegek_kijelzo.style.display = 'none'
    regisztracio_panel.style.display = 'none'
    palya.style.display = 'block'
    gulag_szoveg.innerHTML = `<strong class="gulagFigyelem">Figyelem!</strong> <i>${jatekos.vezeteknev}  ${jatekos.keresztnev}</i> állampolgárt közmunkára ítélték!`
    egysegek_kijelzo.innerHTML = `Még <strong class="egysegek_szama">${egysegek_szama}</strong> egység van hátra!`
    randomSzam = Math.floor(Math.random() * 100) + 0
    randomPozicio = egysegek_helye[randomSzam]
    elvagottRandomPozicio = randomPozicio.split(' ')
    egyseg.style.top = elvagottRandomPozicio[1] + 'px'
    egyseg.style.left = elvagottRandomPozicio[0] + 'px'
    setInterval(function() {
        gulag_szoveg.style.display = 'none'
        egysegek_kijelzo.style.display = 'unset'
        egyseg.style.display = 'unset'
    }, 5000);
}

egyseg.addEventListener('click', function() {
    if (folyamatban == false) {
        egysegek_szama = egysegek_szama - 1
        banyaszas()
        if (egysegek_szama == 0) {
            folyamatban = false
            banyaszas_vege()
        }
    }
});

function banyaszas() {
    folyamatban = true
    banya_hang.play()
    egysegek_kijelzo.innerHTML = `Még <strong class="egysegek_szama">${egysegek_szama}</strong> egység van hátra!`
    randomSzam = Math.floor(Math.random() * 100) + 0
    randomPozicio = egysegek_helye[randomSzam]
    elvagottRandomPozicio = randomPozicio.split(' ')
    egyseg.style.top = elvagottRandomPozicio[1] + 'px'
    egyseg.style.left = elvagottRandomPozicio[0] + 'px'
    if (egysegek_szama != 0) {
        kesleltetes = setInterval(function() { folyamatban = false }, 2000);
    }
}



function banyaszas_vege() {
    palya.style.display = 'none';
    palya_vege.style.display = 'block';
    elhagyhatja_kijelzo.style.display = 'unset'
    elhagyhatja_kijelzo.innerHTML = `<strong class="gulagFigyelem">Figyelem!</strong> <i>${jatekos.vezeteknev}  ${jatekos.keresztnev}</i> végre elhagyhatja a bányát!`
}




let cimke = false

function címke() {
    if (cimke == false) {
        cimke = true;
        document.title = 'Lesújt az igazság!';
    } else if (cimke == true) {
        cimke = false;
        document.title = 'Minecraft GmR Moria';
    }
}
címke();
setInterval(címke, 1500)

var vezeteknev, keresztnev
var jatekos = {}
regisztracio_gomb.addEventListener('click', function() {
    vezeteknev = document.getElementById('nev1').value
    keresztnev = document.getElementById('nev2').value
    if (vezeteknev == '' || keresztnev == '') {
        alert('Kérlek adj meg vezetéknevet és keresztnevet egyaránt!')
    } else if (vezeteknev != '' || keresztnev != '') {
        jatekos = {
            keresztnev: keresztnev,
            vezeteknev: vezeteknev
        }
        jatek_inditasa()
    }
});






/*var helyekGyujtese = []
document.addEventListener('click', function(e) {
    let X = e.pageX
    let Y = e.pageY
    vegleges = `${X} ${Y}`
    helyekGyujtese.push(vegleges)
    console.log(helyekGyujtese)
});*/
function hitungPersegiPanjang() {

    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;

    let luas = panjang * lebar;

    if (panjang == "" || lebar == "") {
        document.getElementById("hasilPersegiPanjang").innerHTML = null;
        document.getElementById("alertNoInputPersegiPanjang").innerHTML = "Mohon diinput panjang atau lebar dari persegi panjang";
    }
    else {
        document.getElementById("alertNoInputPersegiPanjang").innerHTML = null;
        document.getElementById("hasilPersegiPanjang").innerHTML = "Luas Persegi Panjang = " + luas;
    }
}

function hitungBujurSangkar() {

    let sisi = document.getElementById("sisi").value;

    let luas = sisi ** 2;

    if (sisi == "") {
        document.getElementById("hasilBujurSangkar").innerHTML = null;
        document.getElementById("alertNoInputBujurSangkar").innerHTML = "Mohon diinput panjang sisi dari bujur sangkar";
    }
    else {
        document.getElementById("alertNoInputBujurSangkar").innerHTML = null;
        document.getElementById("hasilBujurSangkar").innerHTML = "Luas Bujur Sangkar = " + luas;
    }

}

function hitungSegitiga() {

    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;

    let luas = 0.5 * alas * tinggi;

    if (alas == "" || tinggi == "") {
        document.getElementById("hasilSegitiga").innerHTML = null;
        document.getElementById("alertNoInputSegitiga").innerHTML = "Mohon diinput alas atau tinggi dari persegi panjang";
    }
    else {
        document.getElementById("alertNoInputSegitiga").innerHTML = null;
        document.getElementById("hasilSegitiga").innerHTML = "Luas Segitiga = " + luas;
    }
}
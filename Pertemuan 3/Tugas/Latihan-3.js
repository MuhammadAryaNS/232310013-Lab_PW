function hitung() {
    var x = parseInt(document.getElementById("x").value);
    
    if (isNaN(x) || x < 0) {
        alert("Masukkan bilangan bulat positif!");
        return;
    }

    var faktorial = 1;
    for (var i = 1; i <= x; i++) {
        faktorial *= i;
    }

    var jumlahDeret = (x * (x + 1)) / 2;

    document.getElementById("faktorial").value = faktorial;
    document.getElementById("jumlah").value = jumlahDeret;
}
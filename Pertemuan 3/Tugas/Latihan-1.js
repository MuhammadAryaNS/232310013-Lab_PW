function tampilkanData() {
  var nim = document.fform.nim.value;
  var nama = document.fform.nama.value;
  var jenisKelamin = "";

  var jk = document.fform.jenis_kelamin;
  for (var i = 0; i < jk.length; i++) {
    if (jk[i].checked) {
      jenisKelamin = jk[i].value;
      break;
    }
  }

  var agama = document.fform.agama.value;
  var status = document.fform.status.value;
  var jurusan = document.fform.jurusan.value;
  var komentar = document.fform.komentar.value;

  alert(
    "Data Mahasiswa :\n" +
    "NIM : " + nim + "\n" +
    "Nama : " + nama + "\n" +
    "Jenis Kelamin : " + (jenisKelamin || "Tidak dipilih") + "\n" +
    "Agama : " + agama + "\n" +
    "Status : " + status + "\n" +
    "Jurusan : " + jurusan + "\n" +
    "Komentar : " + komentar
  );
}

function resetForm() {
  document.fform.reset();
}
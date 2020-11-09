var registrasi = document.getElementById("regist");
    registrasi.addEventListener("click", function registrasi() {
        var nama = document.getElementById("nama").value
        var usia = document.getElementById("usia").value
        var kerja = document.getElementById("kerja").value
        var dom = document.getElementById("dom").value
        var mail = document.getElementById("mail").value

        var judul = "Selamat Bergabung dalam Web Programming Community";
        var tampilan1 ="\nNama : "+nama
        var tampilan2 ="\nUsia : "+usia 
        var tampilan3 ="\nPekerjaan : "+kerja
        var tampilan4 ="\nDomisili : "+dom
        var tampilan5 ="\nE-mail : "+mail
        alert(judul + tampilan1 + tampilan2 + tampilan3 + tampilan4 + tampilan5);
    })

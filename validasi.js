function validasiKontak(dataform) {
    if (dataform.nama.value.trim() === "") {
        alert("Data nama belum diisi");
        dataform.nama.focus();
        return false;
    }
    
    if (dataform.ponsel.value.trim() === "") {
        alert("Nomor HP masih kosong");
        dataform.ponsel.focus();
        return false;
    } else if (!/^\d+$/.test(dataform.ponsel.value)) {
        alert("Nomor HP harus berupa angka");
        dataform.ponsel.focus();
        return false;
    }

    if (dataform.email.value.trim() === "") {
        alert("Data email masih kosong");
        dataform.email.focus();
        return false;
    } else {
        var vemail = dataform.email.value.trim();
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(vemail)) {
            alert("Alamat email belum benar");
            dataform.email.focus();
            return false;
        }
    }

    if (dataform.message.value.trim() === "") {
        alert("Pesan kosong");
        dataform.message.focus();
        return false;
    }

    alert("Form berhasil dikirim!");
    return true;
}

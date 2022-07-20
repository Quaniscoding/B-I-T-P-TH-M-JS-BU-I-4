//  Bài 1
document.getElementById("tinhNgayTruoc").onclick = function () {
    var ngay = document.getElementById('ngay').value * 1;
    var thang = document.getElementById('thang').value * 1;
    var nam = document.getElementById('nam').value * 1;
    thongBaoNTN = "";
    if (thang == "1" && ngay == "1") {
        thang = "12";
        ngay = "31";
        nam -= 1;
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "3" && ngay == "1") {
        ngay = "28";
        thang = "2";
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "1" && "1" <= ngay && ngay <= "30") {
        ngay -= 1;
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "3" && "2" <= ngay && ngay <= "31" || thang == "5" && "2" <= ngay && ngay <= "31" || thang == "7" && "2" <= ngay && ngay <= "31" || thang == "8" || thang == "10" && "2" <= ngay && ngay <= "31" || thang == "12" && "2" <= ngay && ngay <= "31") {
        ngay -= 1;
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "2" && "2" <= ngay && ngay <= "27") {
        ngay = ngay - 1;
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "5" && ngay == "1" || thang == "7" && ngay == "1" || thang == "8" && ngay == "1" || thang == "10" && ngay == "1" || thang == "12" && ngay == "1") {
        ngay = "30";
        thang = thang - 1;
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "2" && ngay == "1" || thang == "4" || thang == "6" || thang == "9" || thang == "11") {
        ngay = "31";
        thang = thang - 1;
        thongBaoNTN = "Ngày hôm qua là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "2" && ngay == "29" || thang == "2" && ngay == "30" || thang == "2" && ngay == "31") {
        thongBaoNTN = "Ngày không xác định";
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "4" && "2" <= ngay <= "29" || thang == "6" && "2" <= ngay <= "29" || thang == "9" && "2" <= ngay <= "29" || thang == "11" && "2" <= ngay <= "29") {
        ngay = ngay - 1;
        thongBaoNTN = "Ngày hôm trước là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "2" && ngay >= "29") {
        alert("Nhập ngày hợp lệ")
    }
}
document.getElementById("tinhNgaySau").onclick = function () {
    var ngay = document.getElementById('ngay').value * 1;
    var thang = document.getElementById('thang').value * 1;
    var nam = document.getElementById('nam').value * 1;
    thongBaoNTN = "";
    if (thang == "2" && ngay == "29" || thang == "2" && ngay == "30" || thang == "2" && ngay == "31") {
        thongBaoNTN = "Ngày không xác định";
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "12" && ngay == "31") {
        ngay = "1";
        thang = 1;
        nam += 1;
        thongBaoNTN = "Ngày hôm sau là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "2" & ngay == "28") {
        ngay = "1";
        thang = "3";
        thongBaoNTN = "Ngày hôm sau là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "4" && "2" <= ngay <= "29" || thang == "6" && "2" <= ngay <= "29" || thang == "9" && "2" <= ngay <= "29" || thang == "11" && "2" <= ngay <= "29") {
        ngay = ngay + 1;
        thongBaoNTN = "Ngày hôm sau là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "3" && "2" <= ngay <= "29" || thang == "5" && "2" <= ngay <= "29" || thang == "7" && "2" <= ngay <= "29" || thang == "8" && "2" <= ngay <= "29" || thang == "10" && "2" <= ngay <= "29" || thang == "12" && "2" <= ngay <= "29") {
        ngay = ngay + 1;
        thongBaoNTN = "Ngày hôm sau là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "2" && "1" <= ngay && ngay <= "27") {
        ngay = ngay + 1;
        thongBaoNTN = "Ngày hôm sau là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
    else if (thang == "1" && "1" <= ngay && ngay <= "30") {
        ngay += 1;
        thongBaoNTN = "Ngày hôm sau là: " + ngay + "/" + thang + "/" + nam;
        document.getElementById("thongBaoNTN").innerHTML = thongBaoNTN;
    }
}
// Bài 2
document.getElementById("btnTinhNgay").onclick = function () {
    var thang = document.getElementById("thangTinh").value * 1;
    var nam = document.getElementById("namTinh").value * 1;
    var thongBaoNgay = "";
    console.log(thang, nam);

    if (thang == "4" || thang == "6" || thang == "9" || thang == "11") {
        if ((nam % 4 == 0 && nam % 100 !== 0 && nam % 400 !== 0 || (nam % 100 === 0 && nam % 400 === 0))) {
            thongBaoNgay = "Tháng " + thang + " năm " + nam + " có 30 ngày";
            document.getElementById("thongBaoNgay").innerHTML = thongBaoNgay;
        }
    }
    else if (thang == "4" || thang == "6" || thang == "9" || thang == "11") {
        thongBaoNgay = "Tháng " + thang + " năm " + nam + " có 30 ngày";
        document.getElementById("thongBaoNgay").innerHTML = thongBaoNgay;
    }
    else if (thang == "1" || thang == "3" || thang == "5" || thang == "7" || thang == "8" || thang == "11" || thang == "12") {
        thongBaoNgay = "Tháng " + thang + " năm " + nam + " có 31 ngày";
        document.getElementById("thongBaoNgay").innerHTML = thongBaoNgay;
    }
    else if (thang == "2") {
        if ((nam % 4 == 0 && nam % 100 !== 0 && nam % 400 !== 0 || (nam % 100 === 0 && nam % 400 === 0))) {
            thongBaoNgay = "Tháng " + thang + " năm " + nam + " có 29 ngày";
            document.getElementById("thongBaoNgay").innerHTML = thongBaoNgay;
        }
    }
}
// Bài 3
var chuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");
function docSo3ChuSo(baso) {
    var tram;
    var chuc;
    var donvi;
    var KetQua = "";
    tram = parseInt(baso / 100);
    chuc = parseInt((baso % 100) / 10);
    donvi = baso % 10;
    if (tram == 0 && chuc == 0 && donvi == 0) return "";
    if (tram != 0) {
        KetQua += chuSo[tram] + " trăm ";
        if ((chuc == 0) && (donvi != 0)) KetQua += " linh ";
    }
    if ((chuc != 0) && (chuc != 1)) {
        KetQua += chuSo[chuc] + " mươi";
        if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh ";
    }
    if (chuc == 1) KetQua += " mười ";
    switch (donvi) {
        case 1:
            if ((chuc != 0) && (chuc != 1)) {
                KetQua += " mốt ";
            }
            else {
                KetQua += chuSo[donvi];
            }
            break;
        case 5:
            if (chuc == 0) {
                KetQua += chuSo[donvi];
            }
            else {
                KetQua += " lăm ";
            }
            break;
        default:
            if (donvi != 0) {
                KetQua += chuSo[donvi];
            }
            break;
    }
    return KetQua;
}
document.getElementById("doc").onclick = function () {
    var soNguyen = document.getElementById("soNguyen").value * 1;
    var doc = "";
    var docSo = docSo3ChuSo(soNguyen);
    document.getElementById('thongBaoCachDoc').innerHTML = docSo;
}

// bài 4
document.getElementById("timToaDo").onclick = function () {
    var toaDoX1 = document.getElementById("toaDoX1").value * 1;
    var toaDoX2 = document.getElementById("toaDoX2").value * 1;
    var toaDoX3 = document.getElementById("toaDoX3").value * 1;
    var toaDoY1 = document.getElementById("toaDoY1").value * 1;
    var toaDoY2 = document.getElementById("toaDoY2").value * 1;
    var toaDoY3 = document.getElementById("toaDoY3").value * 1;
    var toaDoX4 = document.getElementById("toaDoX4").value * 1;
    var toaDoY4 = document.getElementById("toaDoY4").value * 1;
    var toaDo1 = Math.sqrt(((toaDoX4 - toaDoX1) ** 2) + (toaDoY4 - toaDoY1) ** 2);
    var toaDo2 = Math.sqrt(((toaDoX4 - toaDoX2) ** 2) + (toaDoY4 - toaDoY2) ** 2);
    var toaDo3 = Math.sqrt(((toaDoX4 - toaDoX3) ** 2) + (toaDoY4 - toaDoY3) ** 2);
    var xaNhat = toaDo1;
    if (toaDo2 > toaDo1) {
        xaNhat = "Học sinh 2 xa trường nhất !"
        document.getElementById('thongBaoAiXaTruong').innerHTML = xaNhat;
    }
    else if (toaDo3 > toaDo2) {
        xaNhat = "Học sinh 3 xa trường nhất !"
        document.getElementById('thongBaoAiXaTruong').innerHTML = xaNhat;
    }
}

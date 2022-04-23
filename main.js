// Bài 1
/**Input: 3 số
 * Process: So sánh
 * Output: 3 số theo thứ tự tăng dần
 */

document.getElementById("btn-SapXep").onclick = function () {
  var soThuNhat = parseFloat(document.getElementById("soThuNhat").value);
  var soThuHai = parseFloat(document.getElementById("soThuHai").value);
  var soThuBa = parseFloat(document.getElementById("soThuBa").value);

  var n1 = 0;
  var n2 = 0;
  var n3 = 0;

  if (soThuNhat > soThuHai) {
    if (soThuNhat > soThuBa) {
      if (soThuHai > soThuBa) {
        n1 = soThuBa;
        n2 = soThuHai;
        n3 = soThuNhat;
      } else {
        n1 = soThuHai;
        n2 = soThuBa;
        n3 = soThuNhat;
      }
    } else {
      n1 = soThuHai;
      n2 = soThuNhat;
      n3 = soThuBa;
    }
  } else {
    if (soThuHai > soThuBa) {
      if (soThuNhat > soThuBa) {
        n1 = soThuBa;
        n2 = soThuNhat;
        n3 = soThuHai;
      } else {
        n1 = soThuNhat;
        n2 = soThuBa;
        n3 = soThuHai;
      }
    } else {
      n1 = soThuNhat;
      n2 = soThuHai;
      n3 = soThuBa;
    }
  }

  var result = n3 + ">" + n2 + ">" + n1;

  console.log(result);
  document.getElementById("ketqua-XapSep").innerHTML = result;
};

// Bài 2
/**
 * Input: Câu trả lời là ai?
 * Process: Dựa vào câu trả lời và đưa ra lời chào phù hợp
 * Output: Lời chào
 */

document.getElementById("btn-Chao").onclick = function () {
  var thanhVienValue = document.getElementById("thanhVien").value;
  console.log(thanhVienValue);

  var thanhVien = "";

  switch (thanhVienValue) {
    case "B":
      thanhVien = "Bố";
      break;
    case "M":
      thanhVien = "Mẹ";
      break;
    case "A":
      thanhVien = "Anh Trai";
      break;
    case "E":
      thanhVien = "Em gái";
      break;
    default:
      thanhVien = "Người lạ";
  }

  var result = "Chào " + thanhVien;

  document.getElementById("ketQua-Chao").innerHTML = result;
};

// Bài 3
/**
 * Imput: 3 số nguyên
 * Process :
 *  Tạo 1 biến count
 *  Kiểm tra từng số là số lẻ hay chẵn rồi tăng count
 *  Lấy tổng 3 số trừ count
 * Output: Số số chẵn, số số lẻ
 */

document.getElementById("btm-Dem").onclick = function () {
  var a = parseFloat(document.getElementById("soThu1").value);
  var b = parseFloat(document.getElementById("soThu2").value);
  var c = parseFloat(document.getElementById("soThu3").value);

  var count = 0;

  if (a % 2 == 0) {
    count++;
  }

  if (b % 2 == 0) {
    count++;
  }

  if (c % 2 == 0) {
    count++;
  }

  var soSoChan = count;
  var soSoLe = 3 - count;

  var result = "Số số chẵn là : " + soSoChan + "<br>Số số lẻ là : " + soSoLe;

  document.getElementById("ketQua-Dem").innerHTML = result;
};

// Bài 4
/**
 * Input: 3 cạnh
 * Process :
 * Đều: Nếu 3 cạnh bằng nhau.
 * Cân: Nếu 2 cạnh bằng nhau.
 * Vuông: c^2 = a^2 + b^2
 * Output: Loại tam giác
 */

document.getElementById("kiemTra").onclick = function () {
  var a = parseFloat(document.getElementById("canhThu1").value);
  var b = parseFloat(document.getElementById("canhThu2").value);
  var c = parseFloat(document.getElementById("canhThu3").value);

  var result = "";

  if (a == b && b == c) {
    result = "Đây là tam giác đều";
  } else if (a == b || a == c || b == c) {
    result = "Đây là tam giác cân";
  } else if (
    a * a == b * b + c * c ||
    b * b == a * a + c * c ||
    c * c == a * a + b * b
  ) {
    result = "Đây là tam giác vuông";
  } else {
    result = "Đây là tam giác thường";
  }

  document.getElementById("ketQua-KiemTra").innerHTML = result;
};

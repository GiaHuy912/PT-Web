## Phần A:

**Câu A1:**

1.  
Thứ tự các bước xảy ra:  
- Bước1: gửi DNS request chuyển domain shoppe.vn thành IP  
- Bước2: thiết lập TCP connection với server  
- Bước3: nếu là HTTPS thì thực hiện TLS handshake  
- Bước4: gửi HTTP request đến server  
- Bước5: server trả về HTTP response(HTML)  
- Bước6: trình duyệt parse HTML tải thêm CSS,JS  
- Bước7: xây dựng DOM + CSSOM -> Render Tree  
- Bước8: hiển thị nội dung  

2.  
Trong devTools của chrome tab NetWork hiển thị:  
- Danh sách tất cả request(HTML, CSS, JS, image…)  
- Status code (200, 404…)  
- Thời gian load  
- Kích thước file  
- Loại tài nguyên  

---

**Câu A2:**  

Trang bị đánh giá thấp vì: không sử dụng semantic HTML, dùng quá nhiều `<div>`  

Các lỗi:  
1. Không dùng `<header>`  
2. Menu không dùng `<nav>`  
3. Ảnh không có alt  

---

**Câu A3:**  

Kết quả hiển thị:  

Hộp 1  
Text A Text B  

Hộp 2  
Text C Text D  

Hộp 3  

Giải thích:  
`<div>` là block chiếm 1 dòng  
`<span>` nằm chung 1 dòng  
`<strong>` nằm chung 1 dòng  

---

**Câu A4:**  

`<thead>`: chứa tiêu đề của bảng  
`<tbody>`: chứa dữ liệu của bảng  
`<tfoot>`: chứa phần tổng kết  

Không nên dùng table để tạo layout vì:  
- Không semantic: table dùng cho dữ liệu dạng bảng  
- Khó bảo trì: có nhiều `<th>`, `<tr>`, khó đọc, khó sửa  
- Khó responsive: table khó co giãn trên mobile, layout dễ bị vỡ  

---

## Phần B

**Câu B3:**  

- Lỗi 1: Dòng 1 — Thiếu chuẩn DOCTYPE — Sửa thành `<!DOCTYPE html>`  
- Lỗi 2: Dòng 2 — Thiếu thuộc tính lang — Thêm `<html lang="vi">`  
- Lỗi 3: Dòng 4 — Thẻ `<title>` không đóng — Thêm `</title>`  
- Lỗi 4: Dòng 5 — charset sai "utf8" — Sửa thành UTF-8  
- Lỗi 5: Dòng 9 — Thẻ `<h1>` không đóng đúng — Sửa `</h1>`  
- Lỗi 6: Dòng 13 — Thẻ `<a>` không đóng — Thêm `</a>`  
- Lỗi 7: Dòng 19 — img thiếu dấu ngoặc kép và alt — Sửa `src="iphone.jpg"` + thêm alt  
- Lỗi 8: Dòng 21 — Sai thứ tự thẻ — Sửa thành `<strong>` bao ngoài  
- Lỗi 9: Dòng 26 — Table thiếu `<thead>` và `<th>` — Thêm cấu trúc bảng chuẩn  
- Lỗi 10: Dòng 36 — Dùng 2 thẻ `<main>` — Sửa cái thứ 2 thành `<aside>`  
- Lỗi 11: Dòng 41 — Thẻ `<p>` trong footer không đóng — Thêm `</p>`  
- Lỗi 12: Thiếu `</html>` — Thêm vào cuối file  

---

**Câu B4:**  

1.  
3 thẻ semantic HTML5 mà trang đó sử dụng  

- `<header>`: nằm ở phần đầu trang, chứa logo, thanh tìm kiếm và menu  
- `<main>`: bao quanh nội dung chính của trang (khu vực sản phẩm)  
- `<footer>`: nằm ở cuối trang, chứa thông tin công ty và liên kết  

---

2.  
Table đó hiển thị:  

- Bảng so sánh thông số kỹ thuật giữa các sản phẩm iPhone (ví dụ: iPhone 16 256GB và iPhone 17 256GB).  

Không thấy sử dụng `<thead>` hoặc `<tbody>`  

---

3.  
Form có:  

- action: tìm kiếm  
- method: Không thấy  

Các input types được dùng:  

- text  
- submit  

---

## Phần C:

**Câu C1:**  

```html
<p>Giá</p> <!-- p: thông tin -->
<p>Đánh giá sao</p>
<p>Mô tả sản phẩm</p>
</article>

</section>

<header> <!-- header: phần đầu trang -->
    <nav> <!-- nav: khu vực điều hướng chính -->
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
    </nav>
</header>

<main> <!-- main: nội dung chính của trang -->

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
        <ol>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <section>

        <article>
            <figure>
                <img src="#" alt="Ảnh 1">
                <figcaption>Ảnh 1</figcaption>
            </figure>
        </article>

        <article>
            <h1>Tên sản phẩm</h1>



**Câu C2:**

- Nói dùng `<div>` cho mọi thứ thì nhanh thật, nhưng về lâu dài lại không ổn.  
  Thứ nhất là SEO: Google không chỉ đọc nội dung mà còn nhìn cấu trúc trang.  
  Nếu dùng các thẻ như `<header>`, `<nav>`, `<article>` thì nó hiểu rõ phần nào là nội dung chính, phần nào là menu.  
  Còn nếu toàn `<div>` thì nhìn như một đống text, khó tối ưu hơn.  

- Thứ hai là accessibility.  
  Những người dùng screen reader (người khiếm thị) sẽ dựa vào semantic HTML để điều hướng.  
  Ví dụ có `<nav>` thì họ có thể nhảy nhanh tới menu, có `<main>` thì bỏ qua phần header.  
  Nếu toàn `<div>` thì họ phải nghe từ đầu tới cuối, rất bất tiện.  

- Ví dụ dễ thấy nhất là trang bán hàng:  
  mỗi sản phẩm nếu đặt trong `<article>` thì Google hiểu đó là một nội dung riêng, dễ hiển thị trên tìm kiếm hơn.  
  Đồng thời các công cụ đọc màn hình cũng đọc từng sản phẩm rõ ràng.  

- Tuy nhiên, `<div>` vẫn cần dùng, ví dụ để làm layout hoặc bọc nhóm phần tử khi không có thẻ semantic phù hợp.  

- Tóm lại:  
  Không phải bỏ `<div>`, nhưng cũng không nên lạm dụng.  
  Dùng semantic HTML vẫn là cách chuẩn và hiệu quả hơn.
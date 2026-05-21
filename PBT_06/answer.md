# PHIẾU BÀI TẬP 06 | CSS FRAMEWORKS — Bootstrap 5 / TailwindCSS
## TRACK A — BOOTSTRAP 5
### PHẦN A — ĐỌC HIỂU (20 điểm)
#### Câu A1 (10đ) — Grid System
|Kích thước|<768px|(xs/sm)768px - 991px |>= 992px (lg)|
|-|-|-|-|
|Số cột|1 cột|2 cột|4 cột|
|Box layout | Xếp chồng dọc 4 box (1x4)|Lưới 2 hàng, mỗi hàng 2 box (2x2)|Nằm ngang trên 1 hàng (4x1)|

- col-md-6 nghĩa là gì?
```
- Hệ thống lưới của Bootstrap chia chiều ngang màn hình thành 12 cột bằng nhau.  
- col-md-6 hiểu đơn giản là: Phần tử này sẽ chiếm 6 cột (tức là đúng một nửa, 50% màn hình).  
- Tuy nhiên, nó chỉ bắt đầu chia đôi như vậy khi giao diện hiển thị trên màn hình có kích thước từ mức md trở lên (Medium - màn hình rộng từ 768px trở lên, cỡ như máy tính bảng).
```
- Tại sao không cần viết col-sm-12?
```
- Bootstrap được thiết kế theo kiểu "Mobile-First" (tức là ưu tiên code giao diện cho màn hình điện thoại trước, sau đó mới tính đến màn hình to).

- Khi dùng class col-12, nó sẽ tự động áp dụng cho màn hình bé nhất (xs) và cứ thế giữ nguyên (kế thừa) lên các màn hình lớn hơn như sm.

- Giao diện sẽ chỉ thay đổi tỷ lệ khi nó chạm vào một class quy định mốc mới (trong trường hợp này là đến mốc 768px thì gặp thằng col-md-6 để đổi thành nửa màn hình).

- Vì vậy, ở các màn hình nhỏ (xs, sm), phần tử đã mặc định chiếm trọn 12 cột rồi. Việc viết thêm col-sm-12 vào là dư code, không cần thiết.
```
#### Câu A2 (10đ) — Utilities & Components
1. `d-none d-md-block`
```
- Ẩn trên các màn hình nhỏ (kích thước xs và sm, tức là màn hình bé hơn 768px). Class d-none (display: none) áp dụng mặc định từ màn hình nhỏ nhất.
- Hiển thị dưới dạng khối (display: block) trên các màn hình từ mốc md trở lên (>= 768px, ví dụ: máy tính bảng, laptop).
```
2. `5 spacing utilities (margin/padding)`
```
- mt-3: margin-top mức 3 (tạo khoảng cách đẩy lề phía trên, thường tương đương 16px).

- px-4: padding trục x (tạo khoảng đệm bên trong ở bên trái và phải) mức 4 (thường tương đương 24px).

- mb-auto: margin-bottom auto (khoảng cách lề dưới tự động tính toán, thường để đẩy phần tử khác xuống sát đáy).

- mx-auto: margin trục x tự động (khoảng lề trái và phải tự động chia đều, rất hay dùng để căn giữa phần tử theo chiều ngang).

- py-2: padding trục y (tạo khoảng đệm bên trong ở phía trên và dưới) mức 2 (thường tương đương 8px).
```
3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`
```
.container: Đặt chiều rộng tối đa (max-width) cố định cho từng mốc kích thước màn hình. Khi co kéo trình duyệt, bề ngang của nó sẽ thu/phóng theo từng bậc.

.container-fluid: Tràn viền. Luôn luôn chiếm 100% chiều rộng của màn hình ở mọi thiết bị.

.container-md: Chiếm 100% chiều rộng (như fluid) ở các màn hình nhỏ. Chỉ khi màn hình đạt đến kích thước md (>= 768px) trở lên, nó mới co lại và có max-width cố định giống như .container bình thường.
```

### PHẦN C — PHÂN TÍCH (20 điểm)
#### Câu C1 (10đ) — Tùy biến Bootstrap
1. Quy trình đổi màu primary từ xanh sang #E63946:
```
   Bước 1: Chuẩn bị công cụ
    - Cài Node.js
    - Cài Sass: npm install -g sass
    - Tải Bootstrap source code (file .scss) từ getbootstrap.com

    Bước 2: Tạo file tùy chỉnh
    - Tạo file custom.scss:

    ```
    scss$primary: #E63946;
    @import "bootstrap/scss/bootstrap";
    ```

    Bước 3: Compile
    - Chạy lệnh: sass custom.scss custom.css

    Bước 4: Dùng file CSS đã compile
    <link rel="stylesheet" href="custom.css">

    - Không sửa trực tiếp file Bootstrap gốc, mà tạo file custom.scss riêng, khai báo biến trước khi import Bootstrap.
```
2. Tại sao KHÔNG nên override trực tiếp?
Cách sai:
`css.btn-primary { background: red; }`

Lý do:
```
- Chỉ đổi được background, không đổi hover, active, disabled
- Phải override nhiều class: .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-outline-primary, .bg-primary, .text-primary, .border-primary...
- Tốn nhiều dòng code, dễ bỏ sót
- Khó bảo trì khi cần đổi màu lần 2
```
Cách dung (dùng SASS variables):
`$primary: #E63946;`
```
- Đổi 1 biến = tất cả class liên quan tự động đổi
- Bootstrap tự tính toán màu hover, active, disabled dựa trên màu gốc
- Dễ bảo trì, chỉnh sửa sau này
```



#### Câu C2 (10đ) — So sánh
CSS từ PBT_05: [responsive.css](../PBT_05/css/responsive.css)  
`Navbar:`
```
.header { ... }           /* 7 dòng */
.header .container { ... } /* 4 dòng */
.logo { ... }             /* 3 dòng */
.hamburger { ... }        /* 7 dòng */
.nav { ... }              /* 1 dòng */
.nav a { ... }            /* 4 dòng */
@media (min-width: 768px) {
    .hamburger { ... }    /* 2 dòng */
    .nav { ... }          /* 2 dòng */

=> Tổng navbar: 30 dòng CSS
}
```
`Product card:`
```
.product-card { ... }     /* 7 dòng */
.product-card img { ... } /* 4 dòng */
.product-card h3 { ... }  /* 3 dòng */
.price { ... }            /* 5 dòng */
.btn { ... }              /* 9 dòng */
@media (min-width: 768px) {
    .product-card h3 { ... } /* 2 dòng */
}
=>Tổng card: 30 dòng CSS
```
=> Tổng: 60 dòng CSS thuần
Bootstrap:
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler">...</button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">...</ul>
        </div>
    </div>
</nav>

<div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Tên sản phẩm</h5>
        <p class="card-text text-danger fw-bold">29.990.000đ</p>
        <button class="btn btn-primary w-100">Mua ngay</button>
    </div>
</div>
```
=> Tổng: 0 dòng CSS
2. So sánh chi tiết:  
|Tiêu chí|CSS thuần|Bootstrap|
|-|-|-|
|Số dòng CSS|Nhiều. Phải tự định nghĩa từ đầu mọi thuộc tính (padding, margin, flexbox, grid, breakpoints). Như ví dụ trên mất khoảng ~60 dòng|Gần như bằng 0. Chủ yếu chỉ cần gán các class có sẵn vào HTML (vd: navbar, card, d-flex, d-md-none).Gần như bằng 0. Chủ yếu chỉ cần gán các class có sẵn vào HTML (vd: navbar, card, d-flex, d-md-none).|
Thời gian viết code|lâu|nhanh|
|Hiểu logic|Cao. Kiểm soát hoàn toàn code, dễ dàng tạo ra giao diện riêng k có code dư thừa.|Thấp. Phải override các thuộc tính mặc định của Bootstrap (thường phải dùng !important hoặc setup SCSS phức tạp), giống các trang khác.|

4. Khi nào NÊN và KHÔNG NÊN dùng Bootstrap
Nên dùng Bootstrap khi:

- Làm bài tập trên trường (nộp nhanh)
- Dự án admin nội bộ công ty (không cần đẹp, chỉ cần chạy)
- Deadline gấp (làm trong 1-2 ngày)
- Làm prototype để demo cho khách hàng
- Team nhiều người (thống nhất code dễ hơn)
- Trang web cơ bản (blog cá nhân, trang tin tức)

Không nên dùng Bootstrap khi:

- Website thương mại lớn (Shopee, Tiki - cần design độc đáo)
- Landing page bán hàng (cần nổi bật, khác biệt đối thủ)
- Website portfolio (muốn thể hiện kỹ năng CSS)
- Dự án cần tối ưu tốc độ (Bootstrap nặng 180KB)
- Design phức tạp không khớp grid Bootstrap
- Muốn học sâu CSS (dùng Bootstrap nhiều sẽ không biết viết CSS thuần)

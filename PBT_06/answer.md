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

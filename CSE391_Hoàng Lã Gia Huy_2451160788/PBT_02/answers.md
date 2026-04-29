

Phần A
Câu A1:
   1. type="email" → Ô nhập text có kiểm tra định dạng email (phải có @ và domain) → Dùng cho đăng ký tài khoản / nhận thông tin đơn hàng
   2. type="password" → Ô nhập text bị ẩn ký tự (hiện dấu •••) → Dùng cho đăng nhập tài khoản
   3. type="text" → Ô nhập văn bản thông thường → Dùng nhập tên khách hàng, địa chỉ
   4. type="number" → Ô nhập số, có nút tăng/giảm → Chỉ cho nhập số hợp lệ → Dùng nhập số lượng sản phẩm
   5. type="tel" → Ô nhập số điện thoại → Có thể gợi ý bàn phím số trên mobile → Dùng nhập SĐT giao hàng
   6. type="url" → Ô nhập link, kiểm tra định dạng URL → Dùng nhập website (ví dụ shop đối tác)
   7. type="date" → Bộ chọn ngày (calendar) → Chỉ chọn ngày hợp lệ → Dùng chọn ngày giao hàng
   8. type="radio" → Nút chọn 1 trong nhiều lựa chọn → Chỉ chọn được 1 → Dùng chọn phương thức thanh toán (COD / Momo / Bank)
   9. type="checkbox" → Ô tích chọn nhiều lựa chọn → Có thể chọn nhiều → Dùng chọn nhiều sản phẩm / điều khoản
   10. type="file" → Nút upload file → Kiểm tra định dạng file (qua accept) → Dùng upload ảnh sản phẩm / ảnh chuyển khoản

Câu A2:

    Trường hợp 1
    <input type="text" required value="">
    Kết quả: Không submit được
    Lý do: required bắt buộc nhập, nhưng đang rỗng → trình duyệt chặn

    Trường hợp 2
    <input type="email" value="abc">
    Kết quả: Không submit được
    Lý do: type="email" yêu cầu đúng format email, “abc” không hợp lệ

    Trường hợp 3
    <input type="number" min="1" max="10" value="15">
    Kết quả: Không submit được
    Lý do: 15 vượt quá max="10" → vi phạm range

    Trường hợp 4
    <input type="text" pattern="[0-9]{10}" value="abc123">
    Kết quả: Không submit được
    Lý do: pattern yêu cầu đúng 10 chữ số, nhưng giá trị chứa chữ và thiếu độ dài

    Trường hợp 5
    <input type="password" minlength="8" value="123">
    Kết quả: Không submit được
    Lý do: chỉ có 3 ký tự < 8 → vi phạm minlength

Câu A3:

    1. <label for="email"> quan trọng vì:
    -<label> liên kết với <input> thông qua for và id
    Khi dùng screen reader, nó sẽ đọc tên trường (ví dụ: “Email”) khi người dùng focus vào input
    Nếu không có label, người dùng không biết ô đó dùng để nhập gì
    Ngoài ra, click vào label cũng sẽ focus vào input

    2. dùng <fieldset> và <legend> khi:
    -Có nhiều input liên quan cùng một nhóm.

    Mục đích:
    -Nhóm các trường lại rõ ràng
    -Screen reader sẽ đọc tên nhóm trước

    Ví dụ:
    <fieldset>
    <legend>Phương thức thanh toán</legend>

    <input type="radio" id="cod" name="pay">
    <label for="cod">Thanh toán khi nhận hàng</label><br>

    <input type="radio" id="momo" name="pay">
    <label for="momo">Ví MoMo</label>
    </fieldset>

    Khi dùng screen reader:
    -Nó sẽ đọc “Phương thức thanh toán” trước rồi mới đến từng lựa chọn

    3. aria-label dùng khi:
    -Không có label hiển thị trên giao diện

    Ví dụ:
    -<input type="text" aria-label="Tìm kiếm sản phẩm">

    Không nên dùng aria-label khi đã có <label> vì:
    -<label> là cách chuẩn của HTML
    -aria-label có thể ghi đè nội dung mà screen reader đọc
    -Dễ gây lệch giữa nội dung hiển thị và nội dung được đọc

    Nguyên tắc:
    -Có <label> thì dùng <label>
    -Chỉ dùng aria-label khi không có cách nào khác

    
Câu A4:

    1. loading="lazy" 
    -Là thuộc tính trên <img> để trì hoãn tải ảnh
    -Ảnh chỉ được tải khi gần xuất hiện trong viewport (khi người dùng scroll tới)
    Cải thiện:
    -Giảm thời gian load ban đầu của trang
    -Tiết kiệm băng thông
    -Tăng hiệu năng, đặc biệt với trang có nhiều ảnh (E-Commerce)
    KHÔNG nên dùng khi:
    -Ảnh ở trên màn hình đầu tiên (above the fold)
    -Ảnh quan trọng như banner, hero
    -Vì nếu lazy load, ảnh sẽ hiện chậm gây trải nghiệm xấu

    2. Nên dùng nhiều <source> trong <video> vì:
    -Trình duyệt khác nhau hỗ trợ format khác nhau
    -Nếu 1 format không chạy được → trình duyệt sẽ dùng source khác
    Ví dụ:
    <video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <source src="video.ogv" type="video/ogg">
    </video>
    3 format phổ biến:
    -MP4 
    -WebM
    -OGG 

    3. alt trên <img> dùng để:
    -Mô tả nội dung ảnh cho screen reader
    -Hiển thị khi ảnh bị lỗi không load
    -Hỗ trợ SEO
    Viết alt cho từng trường hợp:

    Ảnh sản phẩm iPhone 16

    alt="iPhone 16 màu đen, mặt trước và sau"

    Ảnh trang trí (decorative)

    alt="" (để trống để screen reader bỏ qua)

    Ảnh biểu đồ doanh thu Q1/2024

    alt="Biểu đồ doanh thu quý 1 năm 2024 tăng dần từ tháng 1 đến tháng 3"


Cấu A5:

    So sánh
    Cách 1: chỉ dùng <img>
    -Dùng khi ảnh đứng độc lập
    -Không cần chú thích thêm
    -Thông tin chính đã nằm trong alt hoặc nội dung xung quanh

    Cách 2: <figure> + <figcaption>
    -Dùng khi ảnh là một nội dung hoàn chỉnh
    -Cần chú thích rõ ràng đi kèm
    -<figcaption> cung cấp thông tin bổ sung (giá, mô tả, nguồn...)

    Dùng Cách 1 (<img>) khi:
    -Ảnh chỉ để hiển thị, không cần giải thích thêm
    -Ảnh nhỏ, icon, avatar, ảnh trong layout

    Ví dụ thực tế:

    -Ảnh avatar khách hàng trong trang tài khoản
    <img src="avatar.jpg" alt="Ảnh đại diện người dùng">
    -Icon sản phẩm trong giỏ hàng
    <img src="cart-icon.png" alt="Giỏ hàng">

    Dùng Cách 2 (<figure>)
    Ảnh cần mô tả chi tiết hoặc chú thích riêng
    Thường dùng trong bài viết, sản phẩm, dữ liệu

    Ví dụ thực tế:

    Ảnh sản phẩm kèm giá:
    <figure>
    <img src="iphone.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
    </figure>
    Ảnh biểu đồ trong báo cáo:
    <figure>
    <img src="chart.png" alt="Biểu đồ doanh thu quý 1 năm 2024">
    <figcaption>Doanh thu tăng trưởng đều qua 3 tháng</figcaption>
    </figure>




Phần C:

Câu C1:

    Lỗi 1: Dòng 2 — Input “Tên” không có <label for>
    Vi phạm accessibility 
    Sửa:
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>
    Lỗi 2: Dòng 4 — Input email không có <label>
    Chỉ dùng placeholder là không đủ cho accessibility
    Sửa:
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    Lỗi 3: Dòng 6 — Password không có <label>
    Không xác định được ý nghĩa input
    Sửa:
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required minlength="8">
    Lỗi 4: Dòng 7 — Nhập lại mật khẩu không có <label> và không phân biệt
    Thiếu ngữ nghĩa + không rõ field xác nhận
    Sửa:
    <label for="confirm">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm" name="confirm" required minlength="8">
    Lỗi 5: Dòng 9 — Phone dùng type="text"
    Không tận dụng validation của HTML5
    Sửa:
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
    Lỗi 6: Dòng 9 — Có sẵn value="0901234567"
    Không nên hardcode dữ liệu mặc định (bad UX, dễ submit nhầm)
    Sửa:
    <input type="tel" id="phone" name="phone" required>
    Lỗi 7: Dòng 11 — <select> không có label
    Người dùng không biết chọn cái gì
    Sửa:
    <label for="city">Thành phố:</label>
    <select id="city" name="city" required>
        <option value="">Chọn thành phố</option>
        <option value="hn">Hà Nội</option>
        <option value="hcm">TP.HCM</option>
    </select>
    Lỗi 8: Dòng 15 — Checkbox điều khoản sai cấu trúc
    Có <label> nhưng không gắn với input
    Sửa:
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">Tôi đồng ý điều khoản</label>

Câu C2:

    1. Regex pattern
    CMND/CCCD (12 chữ số):
    pattern="[0-9]{12}"
    Số tài khoản (10–15 chữ số):
    pattern="[0-9]{10,15}"

    2. HTML5 validation không đủ an toàn vì:
    HTML5 validation chỉ chạy ở frontend (trình duyệt)
    Người dùng có thể:
    Tắt validation (novalidate)
    Sửa code bằng DevTools
    Gửi request trực tiếp (bypass form)
    ->Không có tính bảo mật, chỉ giúp trải nghiệm người dùng tốt hơn

    3. 3 loại validation HTML5 không làm được:
    So sánh giữa các field
    -Ví dụ: xác nhận mật khẩu phải giống mật khẩu
    Kiểm tra dữ liệu đã tồn tại
    -Email đã đăng ký chưa
    -Số tài khoản có hợp lệ trong hệ thống không
    Logic phức tạp / nghiệp vụ
    -Kiểm tra CMND có hợp lệ theo quy tắc nhà nước
    -Tính checksum, validate nâng cao

    4. 2 rủi ro nếu chỉ validate frontend
    Dữ liệu giả / dữ liệu xấu vẫn được gửi lên server
    -Hacker bypass → gửi dữ liệu sai định dạng
    -Có thể phá hệ thống hoặc lưu dữ liệu bẩn
    Tấn công bảo mật (Injection)
    -Không validate backend → dễ bị SQL Injection, XSS
    -Gây rò rỉ dữ liệu hoặc chiếm quyền hệ thống
        
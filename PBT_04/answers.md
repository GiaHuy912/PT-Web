# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

## Câu A1 (10đ) — 5 Loại Positioning

### 1. static

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Vị trí mặc định của document
- Cuộn theo trang: Có
- Use case: Dùng cho layout bình thường

---
    
### 2. relative

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Chính vị trí ban đầu của nó
- Cuộn theo trang: Có
- Use case: Dịch chuyển nhẹ element bằng top, left,...

---

### 3. absolute

- Vẫn chiếm chỗ trong flow: Không
- Tham chiếu vị trí: Parent gần nhất có `position` khác `static`
- Cuộn theo trang: Có
- Use case: Tooltip, popup, dropdown

---

### 4. fixed

- Vẫn chiếm chỗ trong flow: Không
- Tham chiếu vị trí: Viewport (màn hình trình duyệt)
- Cuộn theo trang: Không
- Use case: Nút chat, menu cố định

---

### 5. sticky

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Parent/container khi scroll
- Cuộn theo trang: Ban đầu có, sau đó sẽ dính cố định
- Use case: Sticky navbar

---

# Câu hỏi thêm

## Khi nào `absolute` tham chiếu body?

Khi:
- không có parent nào có:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

thì element `absolute` sẽ lấy:

```text
body / viewport
```

làm mốc định vị.

---

## Khi nào `absolute` tham chiếu parent?

Khi parent gần nhất có:

```css
position != static
```

Ví dụ:

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
}
```

→ `.child` sẽ căn theo `.parent`.

---

## Nearest Positioned Ancestor là gì?

Là:

```text
Parent gần nhất có position khác static
```

Ví dụ:

```html
<div class="box">
    <div class="card">
        <p class="text"></p>
    </div>
</div>
```

```css
.box {
    position: relative;
}

.card {
    position: static;
}

.text {
    position: absolute;
}
```

→ `.text` sẽ căn theo `.box`
vì `.card` vẫn là `static`.

## Câu A2:
# Câu A2 (10đ) — Flexbox vs Grid

## Trường hợp 1

```css
.container {
    display: flex;
}

.item {
    flex: 1;
}
```

### Bố cục

- 4 items nằm trên cùng 1 hàng
- mỗi item rộng bằng nhau

```text
---------------------------------
| item | item | item | item |
---------------------------------
```

---

## Trường hợp 2

```css
.container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 45%;
    margin: 2.5%;
}
```

### Bố cục

- mỗi item khoảng 50%
- 2 item mỗi hàng
- 6 items → 3 hàng, 2 cột

```text
---------------------
| item | item |
---------------------
| item | item |
---------------------
| item | item |
---------------------
```

---

## Trường hợp 3

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Bố cục

- 3 items nằm trên cùng 1 hàng
- item đầu sát trái
- item cuối sát phải
- item giữa ở giữa
- căn giữa theo chiều dọc

```text
| item        item        item |
```

---

## Trường hợp 4

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
```

### Bố cục

- 3 cột:
  - cột trái: 200px
  - cột giữa: tự co giãn
  - cột phải: 200px

```text
-----------------------------------------
| 200px |    flexible    |   200px   |
-----------------------------------------
```

---

## Trường hợp 5

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

### Bố cục

- 3 cột bằng nhau
- 7 items

→ sẽ có:
- 3 hàng

### Phân bố

```text
-------------------------
| item | item | item |
-------------------------
| item | item | item |
-------------------------
| item |
-------------------------
```

- hàng 1: 3 items
- hàng 2: 3 items
- hàng 3: còn 1 item ở cột đầu tiên

## Câu C1 (10đ) — Flexbox vs Grid

### 1. Navigation bar ngang
→ Dùng: **Flexbox**

- Vì navbar là layout 1 chiều (ngang)
- Flexbox giúp căn trái, giữa, phải dễ dàng bằng:
```css
justify-content: space-between;
align-items: center;
```

---

### 2. Lưới ảnh Instagram
→ Dùng: **Grid**

- Vì cần layout nhiều hàng nhiều cột
- Grid giúp chia cột đều đẹp hơn Flexbox

```css
grid-template-columns: repeat(3, 1fr);
```

---

### 3. Layout blog: main content + sidebar
→ Dùng: **Grid**

- Vì đây là layout 2 chiều
- Dễ chia sidebar cố định + content co giãn

```css
grid-template-columns: 250px 1fr;
```

---

### 4. Footer với 4 cột thông tin
→ Dùng: **Grid**

- Vì cần chia đều nhiều cột
- Responsive dễ hơn

```css
grid-template-columns: repeat(4, 1fr);
```

---

### 5. Card sản phẩm
→ Dùng: **Flexbox**

- Vì nội dung trong card là layout dọc
- Dùng flex-direction: column để nút luôn dính đáy

```css
.card {
    display: flex;
    flex-direction: column;
}

button {
    margin-top: auto;
}
```

# Câu C2 (10đ) — Debug Flexbox

## Lỗi 1: Card không đều chiều cao

### Nguyên nhân
- Nội dung mỗi card khác nhau
- Button không được đẩy xuống đáy

### Cách sửa

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}

.card .btn {
    margin-top: auto;
}
```

### Kết quả
- Các card đều chiều cao
- Nút "Mua" luôn nằm dưới cùng

---

## Lỗi 2: Item không nằm giữa màn hình

### Nguyên nhân
- Chưa dùng justify-content và align-items

### Cách sửa

```css
.hero {
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}
```

### Kết quả
- Item nằm chính giữa cả ngang lẫn dọc

---

## Lỗi 3: Sidebar bị co lại

### Nguyên nhân
- Flexbox mặc định cho phép flex item co lại

### Cách sửa

```css
.layout {
    display: flex;
}

.sidebar {
    width: 250px;

    flex-shrink: 0;
}

.content {
    flex: 1;
}
```

### Kết quả
- Sidebar giữ nguyên 250px
- Không bị ép nhỏ khi content dài

---

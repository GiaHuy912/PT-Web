## Câu A1 (5đ) — Viewport & Mobile-First

### 1. Thẻ meta viewport chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Giải thích

- `width=device-width`
  → Chiều rộng trang web sẽ bằng đúng chiều rộng màn hình thiết bị.

- `initial-scale=1.0`
  → Mức zoom ban đầu là 100%.

---

### 2. Nếu thiếu thẻ viewport

- iPhone sẽ giả lập trang web như desktop.
- Trình duyệt tự thu nhỏ toàn bộ website để vừa màn hình.
- Chữ sẽ rất nhỏ.
- Người dùng phải zoom mới đọc được.

---

## 3. Mobile-First vs Desktop-First

### Mobile-First

- Viết CSS cho mobile trước.
- Sau đó dùng `min-width` để mở rộng cho tablet/desktop.

### Ví dụ

```css
body {
    background-color: lightblue;
}

@media (min-width: 768px) {

    body {
        background-color: orange;
    }

}
```

- Dưới 768px → mobile
- Từ 768px trở lên → tablet/desktop

---

### Desktop-First

- Viết CSS cho desktop trước.
- Sau đó dùng `max-width` để sửa cho mobile.

### Ví dụ

```css
body {
    background-color: orange;
}

@media (max-width: 768px) {

    body {
        background-color: lightblue;
    }

}
```

- Trên 768px → desktop
- Dưới 768px → mobile

---

## Tại sao Mobile-First được khuyên dùng?

- Mobile hiện được dùng nhiều hơn desktop.
- CSS nhẹ hơn vì chỉ thêm style khi màn hình lớn hơn.
- Tối ưu hiệu năng trên điện thoại.
- Responsive dễ quản lý hơn.
- Phù hợp xu hướng phát triển web hiện đại.

## Câu A2 (5đ) — Breakpoints

| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ grid sản phẩm |
|---|---|---|---|
| Extra Small (xs) | `<576px` | Điện thoại nhỏ | 1 cột |
| Small (sm) | `≥576px` | Điện thoại lớn | 2 cột |
| Medium (md) | `≥768px` | Tablet | 2-3 cột |
| Large (lg) | `≥992px` | Laptop | 4 cột |
| Extra Large (xl) | `≥1200px` | Desktop lớn | 5 cột |
| XXL | `≥1400px` | Màn hình rất lớn | 6 cột |

---

### Giải thích

- Màn hình nhỏ:
  → ít cột để chữ và ảnh dễ nhìn.

- Màn hình lớn:
  → nhiều cột hơn để tận dụng không gian.

- Responsive design sẽ đổi số cột theo từng breakpoint để website hiển thị đẹp trên mọi thiết bị.

## Câu A3 (5đ) — Media Queries

| Chiều rộng màn hình | `.container width` |
|---|---|
| 375px (iPhone SE) | `100%` |
| 600px | `540px` |
| 800px | `720px` |
| 1000px | `960px` |
| 1400px | `1140px` |

---

## Giải thích

### 375px
- Không đạt `min-width: 576px`
- Nên dùng CSS mặc định:

```css
.container {
    width: 100%;
}
```

---

### 600px
- Đạt `min-width: 576px`
- Width đổi thành:

```css
width: 540px;
```

---

### 800px
- Đạt:
  - `576px`
  - `768px`

- Rule sau cùng được áp dụng:

```css
width: 720px;
```

---

### 1000px
- Đạt:
  - `576px`
  - `768px`
  - `992px`

- Width cuối cùng:

```css
width: 960px;
```

---

### 1400px
- Đạt toàn bộ media queries
- Rule cuối cùng:

```css
width: 1140px;
```

## Câu A4 (5đ) — SCSS Basics

### 1. Variables

SCSS cho phép tạo biến để lưu màu sắc, font-size,...

### Ví dụ

```scss
$primary-color: blue;

h1 {
    color: $primary-color;
}
```

### Ưu điểm

- Dễ sửa toàn bộ project
- Code gọn hơn
- Tránh lặp lại giá trị

---

## 2. Nesting

SCSS cho phép viết CSS lồng nhau giống cấu trúc HTML.

### Ví dụ

```scss
nav {

    background: black;

    a {

        color: white;

    }

}
```

### Sau khi compile thành CSS

```css
nav {
    background: black;
}

nav a {
    color: white;
}
```

### Ưu điểm

- Code dễ đọc
- Nhìn rõ cấu trúc parent-child

---

## 3. Mixins

Mixin giúp tái sử dụng nhiều đoạn CSS.

### Ví dụ

```scss
@mixin center {

    display: flex;
    justify-content: center;
    align-items: center;

}

.box {

    @include center;

}
```

### Ưu điểm

- Tái sử dụng code
- Giảm lặp CSS
- Viết responsive nhanh hơn

---

## 4. @extend / Inheritance

Cho phép kế thừa style từ class khác.

### Ví dụ

```scss
.button {

    padding: 10px;
    border-radius: 5px;

}

.btn-primary {

    @extend .button;

    background: blue;

}
```

### Ưu điểm

- Dùng lại style cũ
- Code ngắn hơn
- Dễ maintain

---

## Tại sao trình duyệt không đọc được file .scss?

- Trình duyệt chỉ hiểu:
  - HTML
  - CSS
  - JavaScript

- `.scss` là ngôn ngữ mở rộng của CSS nên browser không thể chạy trực tiếp.

---

## Cần làm gì để SCSS thành CSS?

Cần compile (biên dịch) SCSS → CSS bằng Sass.

### Ví dụ lệnh:

```bash
sass style.scss style.css
```

Sau khi compile:

- `style.scss` → file gốc
- `style.css` → file browser đọc được


## Câu B3:

lệnh compile: sass scss/style.scss css/style.css

### Phần C

## Câu c1:

# Chọn trang web: YouTube

## 1. Mobile (375px)

### Phân tích:

- Navigation chuyển thành dạng mobile:
  - Menu sidebar bị ẩn
  - Xuất hiện icon hamburger ☰
  - Thanh search nhỏ hơn

- Lưới video:
  - Hiển thị 1 cột video

- Thành phần bị ẩn:
  - Sidebar bên trái
  - Một số icon menu
  - Text mô tả dài

- Font size:
  - Nhỏ hơn desktop để phù hợp màn hình điện thoại

---

## 2. Tablet (768px)

### Phân tích:

- Navigation:
  - Sidebar thu gọn thành icon
  - Thanh search lớn hơn mobile

- Lưới video:
  - Khoảng 2–3 cột video

- Thành phần bị ẩn:
  - Một số menu phụ

- Font size:
  - Trung bình, lớn hơn mobile

---

## 3. Desktop (1440px)

### Phân tích:

- Navigation:
  - Sidebar đầy đủ
  - Search bar dài
  - Hiển thị đầy đủ icon và menu

- Lưới video:
  - 5–6 cột video

- Thành phần bị ẩn:
  - Hầu như không có

- Font size:
  - Lớn và dễ đọc hơn

---

# Media Queries tìm được trong DevTools

## Media Query 1

```css
@media (max-width: 656px) {

    #guide {
        display: none;
    }

}
```

### Ý nghĩa:
Ẩn sidebar khi màn hình nhỏ.

---

## Media Query 2

```css
@media (min-width: 1000px) {

    .video-grid {
        grid-template-columns: repeat(5, 1fr);
    }

}
```

### Ý nghĩa:
Desktop sẽ hiển thị nhiều cột video hơn.

## Câu c2:
## Mobile (<768px)

- Header chỉ hiện logo và nút hamburger ☰
- Hero image full width
- Grid món ăn hiển thị 1 cột
- Form đặt bàn nằm dưới danh sách món ăn
- Google Maps nằm dưới form
- Footer full width

---

## Tablet (768px - 1023px)

- Header hiện menu ngang
- Hero image full width
- Grid món ăn hiển thị 2 cột
- Form đặt bàn nằm dưới grid
- Google Maps nằm dưới form
- Footer full width

---

## Desktop (≥1024px)

- Header gồm logo, menu và số điện thoại
- Hero image full width
- Layout chia 2 cột
- Form đặt bàn nằm bên trái giống sidebar
- Grid món ăn hiển thị 3 cột
- Google Maps full width phía dưới
- Footer full width

## CSS skeleton

```
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: Arial, sans-serif;
}

.container{
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
}

header,
footer,
.hero,
.map{
    background: #ddd;
    padding: 20px;
}

.food-grid{
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.food-card{
    background: #f4f4f4;
    padding: 20px;
}

.booking-form{
    background: #eee;
    padding: 20px;
}

/* Tablet */
@media (min-width: 768px){

    .food-grid{
        grid-template-columns: repeat(2,1fr);
    }

}

/* Desktop */
@media (min-width: 1024px){

    .main-layout{
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
    }

    .food-grid{
        grid-template-columns: repeat(3,1fr);
    }

}
```
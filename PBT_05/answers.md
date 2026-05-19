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
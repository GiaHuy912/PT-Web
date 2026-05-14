# PHIẾU BÀI TẬP 03

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — 3 Cách nhúng CSS

1. inline css
- VD:

```html
<h1 style="color: blue; font-size: 40px; text-align: center;">
    This is a styled heading
</h1>
```

- Ưu điểm:
  - Nhanh
  - Apply ngay lập tức
  - Không cần tạo file css riêng
  - Ưu tiên cao nhất
  - Tiện cho việc test 1 element cụ thể

- Nhược điểm:
  - Phải copy nhiều lần nếu muốn dùng lại
  - Khó đọc
  - Khó maintain
  - Rối mắt

- Khi nào nên dùng:
  - Debug/Test nhanh
  - Email HTML
  - Override Style trong trường hợp đặc biệt

---

2. internal css (đặt trong thẻ `<style></style>`)
- VD:

```html
<!DOCTYPE html>
<html>

<head>

    <style>

        body {
            background-color: lightblue;
        }

        h1 {
            color: navy;
            margin-left: 20px;
        }

    </style>

</head>

<body>

    <h1>Welcome to Internal CSS</h1>

    <p>
        Styles defined in the head apply to this entire page.
    </p>

</body>

</html>
```

- Ưu điểm:
  - Không cần tạo file CSS riêng
  - HTML và CSS nằm trong cùng 1 file
  - Dễ test/demo
  - Có thể dùng lại style trong cùng 1 trang

- Nhược điểm:
  - Không dùng lại được cho file HTML khác
  - File HTML sẽ dài hơn nếu CSS nhiều
  - Khó bảo trì với dự án lớn

- Khi nào nên dùng:
  - Trang đơn
  - Landing page
  - Website nhỏ
  - Bài tập thực hành

---

3. external css (tạo file css riêng)
- VD:

- file `styles.css`

```css
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}
```

- file `index.html`

```html
<!DOCTYPE html>
<html>

<head>

    <link rel="stylesheet" href="styles.css">

</head>

<body>

    <h1>This is a heading</h1>

    <p>This is a paragraph.</p>

</body>

</html>
```

- Ưu điểm:
  - File dễ đọc
  - Dễ bảo trì
  - Dùng được file css cho nhiều trang html khác
  - Chuyên nghiệp hơn

- Nhược điểm:
  - Cần HTTP request thêm
  - Phải quản lý nhiều file
  - Sai đường dẫn sẽ lỗi CSS

- Khi nào nên dùng:
  - Dự án thực tế
  - Website nhiều trang
  - Làm việc nhóm
  - Bảo trì lâu dài

---

### Câu hỏi thêm

Nếu cùng 1 element có cả inline css, internal css và external css thì:

```text
Inline CSS > Internal CSS > External CSS
```

- Giải thích:
  - Inline CSS có độ ưu tiên cao nhất vì được viết trực tiếp trong thẻ HTML.
  - Internal CSS ưu tiên cao hơn External CSS.
  - Nếu selector giống nhau thì CSS có độ ưu tiên cao hơn sẽ được áp dụng.

- Ví dụ:

```html
<!DOCTYPE html>
<html>

<head>

    <style>
        h1 {
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1 style="color: red;">
        Hello CSS
    </h1>

</body>

</html>
```

- file `style.css`

```css
h1 {
    color: green;
}
```

- Kết quả:
  - Chữ sẽ có màu đỏ vì Inline CSS thắng.


### Câu A2:
 
1. 'h1'
 -> chọn: **Shop tlu**
-Giải thích:
  - Selector `h1` chọn tất cả thẻ `<h1>` trong trang.
  - Trong HTML chỉ có 1 thẻ `<h1>` chứa text `ShopTLU`.

2. `.price`
→ Chọn:
- **25.990.000đ**
- **45.990.000đ**

- Giải thích:
  - Selector `.price` chọn tất cả elements có class `price`.
  - Có 2 thẻ `<p class="price">`.

3. `#app header`
→ Chọn:
- toàn bộ thẻ:

```html
<header class="top-bar dark">
```

- Giải thích:
  - `#app` chọn element có id `app`.
  - `header` chọn thẻ `<header>` nằm bên trong `#app`.

4. `nav a:first-child`
→ Chọn:
- **Home**

- Giải thích:
  - `a:first-child` chọn thẻ `<a>` đầu tiên trong `<nav>`.
  - Link đầu tiên có text `Home`.

5. `.product.featured h2`
→ Chọn:
- **MacBook Pro**

- Giải thích:
  - `.product.featured` chọn element có đồng thời class:
    - `product`
    - `featured`
  - `h2` chọn thẻ `<h2>` bên trong element đó.

6. `article > p`
→ Chọn:
- **25.990.000đ**
- **Mô tả sản phẩm...**
- **45.990.000đ**
- **Mô tả sản phẩm...**

- Giải thích:
  - `>` là child selector.
  - Chọn tất cả thẻ `<p>` là con trực tiếp của `<article>`.

7. `a[href="/"]`
→ Chọn:
- **Home**

- Giải thích:
  - Selector này chọn thẻ `<a>` có thuộc tính:

```html
href="/"
```
8. `.top-bar.dark h1`
→ Chọn:
- **ShopTLU**

- Giải thích:
  - `.top-bar.dark` chọn element có cả 2 class:
    - `top-bar`
    - `dark`
  - `h1` chọn thẻ `<h1>` bên trong element đó.

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


### Câu A3 

#### Trường hợp 1: content-box (mặc định)

```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

### Chiều rộng hiển thị

```text
400 + (20 x 2) + (5 x 2)
= 400 + 40 + 10
= 450px
```

→ Chiều rộng hiển thị = **450px**

---

### Không gian chiếm trên trang

```text
450 + (10 x 2)
= 450 + 20
= 470px
```

→ Không gian chiếm trên trang = **470px**

---

### Giải thích

- Với `content-box`, thuộc tính `width` chỉ tính phần content.
- `padding` và `border` sẽ cộng thêm vào kích thước thật.
- `margin` nằm ngoài box nên tiếp tục cộng thêm vào không gian chiếm trên trang.

---

## Trường hợp 2: border-box

```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

### Chiều rộng hiển thị

→ Chiều rộng hiển thị = **400px**

---

### Kích thước content thực tế

```text
400 - (20 x 2) - (5 x 2)
= 400 - 40 - 10
= 350px
```

→ Kích thước content thực tế = **350px**

---

### Không gian chiếm trên trang

```text
400 + (10 x 2)
= 400 + 20
= 420px
```

→ Không gian chiếm trên trang = **420px**

---

### Giải thích

- Với `border-box`, thuộc tính `width` đã bao gồm:
  - content
  - padding
  - border
- Trình duyệt sẽ tự thu nhỏ phần content để tổng kích thước vẫn bằng `400px`.

---

## Trường hợp 3: Margin collapse

```css
.box-a {
    margin-bottom: 25px;
}

.box-b {
    margin-top: 40px;
}
```

### Khoảng cách giữa box-a và box-b

→ Khoảng cách = **40px**

---

### Giải thích tại sao KHÔNG PHẢI 65px

- Margin theo chiều dọc có hiện tượng `margin collapse`.
- Khi hai margin chạm nhau:
  - trình duyệt KHÔNG cộng lại
  - mà chỉ lấy giá trị lớn hơn

Ở đây:

```text
25px và 40px
```

→ Trình duyệt lấy:

```text
40px
```

nên khoảng cách cuối cùng là:

→ **40px**

---

## Nâng cao — Margin âm

```css
.box-a {
    margin-bottom: -10px;
}

.box-b {
    margin-top: 40px;
}
```

### Khoảng cách giữa hai box

```text
40 + (-10)
= 30px
```

→ Khoảng cách = **30px**

---

### Giải thích

- Margin dương lớn nhất:
  
```text
40px
```

- Margin âm:
  
```text
-10px
```

→ Trình duyệt cộng hai giá trị lại:

```text
40 + (-10)
= 30px
```

nên khoảng cách cuối cùng là:

→ **30px**

### Câu A4 (5đ) — Specificity (Độ ưu tiên)

Cho các CSS rules:

```css
p {
    color: black;
}                   /* Rule A */

.price {
    color: blue;
}                  /* Rule B */

#main-price {
    color: red;
}                  /* Rule C */

p.price {
    color: green;
}                  /* Rule D */
```

Element:

```html
<p class="price" id="main-price">
```

---

## 1. Tính specificity score

### Rule A

```css
p
```

→ Specificity:

```text
(0, 0, 1)
```

- 0 ID
- 0 class
- 1 tag

---

### Rule B

```css
.price
```

→ Specificity:

```text
(0, 1, 0)
```

- 0 ID
- 1 class
- 0 tag

---

### Rule C

```css
#main-price
```

→ Specificity:

```text
(1, 0, 0)
```

- 1 ID
- 0 class
- 0 tag

---

### Rule D

```css
p.price
```

→ Specificity:

```text
(0, 1, 1)
```

- 0 ID
- 1 class
- 1 tag

---

## 2. Element sẽ có màu gì?

→ Element sẽ có màu:

```text
red
```

---

## Giải thích

Rule có specificity cao nhất là:

```css
#main-price
```

với:

```text
(1, 0, 0)
```

ID selector có độ ưu tiên cao hơn:
- class
- tag

nên:

```css
color: red;
```

được áp dụng cuối cùng.

---

## 3. Nếu thêm inline css

```html
<p class="price" id="main-price" style="color: orange;">
```

→ Element sẽ có màu:

```text
orange
```

---

## Giải thích

Inline CSS có độ ưu tiên cao hơn CSS thông thường.

nên:

```css
style="color: orange;"
```

sẽ ghi đè:
- Rule A
- Rule B
- Rule C
- Rule D

---

## 4. Nếu Rule A thêm !important

```css
p {
    color: black !important;
}
```

→ Element sẽ có màu:

```text
black
```

---

## Giải thích

`!important` có độ ưu tiên rất cao.

Dù selector `p` có specificity thấp hơn:
- `.price`
- `#main-price`

nhưng vì có:

```css
!important
```

nên rule này sẽ được ưu tiên áp dụng trước.

Chỉ khi nhiều rules cùng có `!important` thì trình duyệt mới tiếp tục so specificity.

## Câu B1:

# Các loại selectors đã sử dụng

```
1. Element selector:
   body, table, footer

2. Class selector:
   .active, .profile

3. ID selector:
   #main-header

4. Descendant selector:
   nav a
   .profile p

5. Pseudo-class selector:
   nav a:hover
   tr:hover
   tr:nth-child(even)
```


## Câu C1 (10đ) — Debug CSS Layout

### Đề bài

```css
.container {
    width: 960px;
    margin: 0 auto;
}

.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}

.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}
```

---

## 1. Tính chiều rộng thực tế của sidebar và content

### Sidebar

```text
width = 300px
padding = 20px x 2 = 40px
border = 1px x 2 = 2px
```

→ Chiều rộng thực tế:

```text
300 + 40 + 2 = 342px
```

---

### Content

```text
width = 660px
padding = 30px x 2 = 60px
border = 1px x 2 = 2px
```

→ Chiều rộng thực tế:

```text
660 + 60 + 2 = 722px
```

---

## Tổng chiều rộng

```text
342 + 722 = 1064px
```

---

## 2. Giải thích tại sao layout bị vỡ

Container chỉ rộng:

```text
960px
```

nhưng tổng chiều rộng thực tế của:

- sidebar
- content

lại là:

```text
1064px
```

→ lớn hơn container.

Do đang dùng:

```css
float: left;
```

nên khi không đủ chỗ trên cùng 1 hàng, phần tử `.content` sẽ bị đẩy xuống dòng mới.

Vì vậy layout bị vỡ.

---

# 3. Cách sửa thứ nhất — Dùng border-box

## debug_layout.css

```css
* {
    box-sizing: border-box;
}

.container {
    width: 960px;
    margin: 0 auto;
}

.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
    background-color: lightblue;
}

.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
    background-color: lightgreen;
}
```

---

## Giải thích

Khi dùng:

```css
box-sizing: border-box;
```

thì:
- padding
- border

được tính bên trong `width`.

Nên:

```text
sidebar = 300px
content = 660px
```

→ tổng:

```text
300 + 660 = 960px
```

layout sẽ nằm vừa container.

---

# 4. Cách sửa thứ hai — Không dùng border-box

## debug_layout.css

```css
.container {
    width: 960px;
    margin: 0 auto;
}

.sidebar {
    width: 258px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
    background-color: lightblue;
}

.content {
    width: 598px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
    background-color: lightgreen;
}
```

---

## Giải thích

### Sidebar

```text
258 + 40 + 2 = 300px
```

### Content

```text
598 + 60 + 2 = 660px
```

### Tổng

```text
300 + 660 = 960px
```

→ layout không bị vỡ nữa.

---

## Câu C2 (10đ) — Cascade Puzzle

### 1. "Sản phẩm A" (h2)

- font-size = **20px**
- color = **green**

### Giải thích

```css
.card .title {
    font-size: 20px;
}
```

→ áp dụng trực tiếp cho `.title`

```css
#featured .title {
    color: red;
}

.highlight {
    color: green !important;
}
```

→ `green !important` thắng `red`

---

### 2. "Mô tả sản phẩm" (p trong featured card)

- color = **blue**

### Giải thích

```css
.card {
    color: blue;
}

.card p {
    color: inherit;
}
```

→ `p` inherit màu từ `.card`

---

### 3. "Sản phẩm B" (h2)

- font-size = **20px**
- color = **blue**

### Giải thích

```css
.card .title {
    font-size: 20px;
}
```

→ áp dụng trực tiếp

```css
.card {
    color: blue;
}
```

→ h2 kế thừa màu blue từ `.card`

---

### 4. "Mô tả sản phẩm B" (p.highlight)

- color = **green**

### Giải thích

```css
.highlight {
    color: green !important;
}
```

→ `!important` ưu tiên cao nhất nên ghi đè màu blue.

---


### Phần A

## Câu A1:

## DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```

---

## Query Selector

### 1. Chọn thẻ `<h1>`

```javascript
document.querySelector("h1");
```

---

### 2. Chọn input trong form

```javascript
document.querySelector("#todoForm input");
```

---

### 3. Chọn tất cả `.todo-item`

```javascript
document.querySelectorAll(".todo-item");
```

---

### 4. Chọn link đang active

```javascript
document.querySelector("a.active");
```

---

### 5. Chọn `<li>` đầu tiên trong `#todoList`

```javascript
document.querySelector("#todoList li");
```

Hoặc:

```javascript
document.querySelector("#todoList li:first-child");
```

---

### 6. Chọn tất cả `<a>` bên trong `<nav>`

```javascript
document.querySelectorAll("nav a");
```

## Câu A2 

### 1. Sự khác nhau

| innerHTML | textContent |
|------------|------------|
| Đọc/Ghi nội dung HTML | Đọc/Ghi văn bản thuần |
| Hiểu các thẻ HTML | Không hiểu HTML |
| Có thể tạo phần tử mới | Chỉ hiển thị chữ |
| Chậm hơn | Nhanh hơn |
| Có nguy cơ XSS | An toàn hơn |

---

### 2. Ví dụ dùng innerHTML

Khi muốn thêm HTML động:

```javascript
document.querySelector("#content").innerHTML =
    "<h2>Xin chào</h2><p>Chào mừng bạn đến website</p>";
```

Kết quả:

```html
<h2>Xin chào</h2>
<p>Chào mừng bạn đến website</p>
```

---

### 3. Ví dụ dùng textContent

Khi chỉ muốn hiển thị văn bản:

```javascript
document.querySelector("#content").textContent =
    "<h2>Xin chào</h2>";
```

Kết quả hiển thị:

```text
<h2>Xin chào</h2>
```

---

## Bảo mật — XSS là gì?

XSS (Cross-Site Scripting) là lỗ hổng cho phép kẻ tấn công chèn JavaScript độc hại vào trang web.

Nếu dữ liệu người dùng được đưa trực tiếp vào `innerHTML`, trình duyệt sẽ thực thi mã HTML/JS đó.

---

### Ví dụ nguy hiểm

Người dùng nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

Code:

```javascript
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;
```

Khi ảnh lỗi tải, sự kiện `onerror` chạy:

```javascript
alert("Hacked!");
```

=> Đây là lỗ hổng XSS.

---

### Cách sửa an toàn

Dùng `textContent`:

```javascript
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
```

Kết quả:

```text
<img src=x onerror="alert('Hacked!')">
```

Chỉ hiển thị như văn bản, không thực thi JavaScript.

---

## Kết luận

- Dùng `innerHTML` khi cần chèn HTML.
- Dùng `textContent` khi hiển thị dữ liệu người dùng.
- Không đưa dữ liệu người dùng trực tiếp vào `innerHTML` để tránh XSS.
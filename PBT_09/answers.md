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

## Câu A3 

### Output khi click vào button

```javascript
document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
});
```

Kết quả:

```text
BUTTON
INNER
OUTER
```

---

### Giải thích

Sự kiện click xảy ra trên button trước.

Sau đó xảy ra **Event Bubbling** (nổi bọt):

```text
button
   ↑
inner
   ↑
outer
```

Sự kiện truyền từ phần tử con lên phần tử cha.

Thứ tự:

1. BUTTON
2. INNER
3. OUTER

---

### Nếu bỏ comment stopPropagation()

```javascript
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});
```

Kết quả:

```text
BUTTON
```

---

### Giải thích

`e.stopPropagation()` ngăn sự kiện tiếp tục nổi bọt lên các phần tử cha.

Luồng sự kiện:

```text
BUTTON
✖ Dừng tại đây
```

Không chạy:

```text
INNER
OUTER
```

---

### Kết luận

| Trường hợp | Output |
|------------|---------|
| Không dùng stopPropagation() | BUTTON → INNER → OUTER |
| Có stopPropagation() | BUTTON |

### Phần C

## Câu C1:


## Lỗi 1: Sai event name

### Sai

```javascript
document.querySelector("#decrementBtn").addEventListener("onclick", function() {
```

### Đúng

```javascript
document.querySelector("#decrementBtn").addEventListener("click", function() {
```

### Giải thích

`addEventListener()` nhận tên event là `"click"`, không phải `"onclick"`.

---

## Lỗi 2: countDisplay là const nhưng bị gán lại

### Sai

```javascript
countDisplay = count;
```

### Đúng

```javascript
countDisplay.textContent = count;
```

### Giải thích

`countDisplay` là phần tử DOM.

Không được gán số trực tiếp cho biến DOM.

---

## Lỗi 3: Xóa history sai cách

### Sai

```javascript
historyList.innerHTML = null;
```

### Đúng

```javascript
historyList.innerHTML = "";
```

### Giải thích

Nên reset HTML về chuỗi rỗng.

---

## Lỗi 4: remove thiếu ()

### Sai

```javascript
item.remove;
```

### Đúng

```javascript
item.remove();
```

### Giải thích

`remove` là method.

Phải gọi bằng dấu ngoặc.

---

## Lỗi 5: Load count từ localStorage trả về string

### Sai

```javascript
count = localStorage.getItem("count");
```

### Đúng

```javascript
count = Number(localStorage.getItem("count")) || 0;
```

### Giải thích

localStorage luôn trả về string.

Cần ép sang number.

---

## Lỗi 6: Không load lại history

### Thiếu

```javascript
historyList.innerHTML =
    localStorage.getItem("history") || "";
```

### Giải thích

Đang lưu history nhưng khi load lại trang không khôi phục.

---

## Lỗi 7: History sau khi load mất chức năng click

Sau khi:

```javascript
historyList.innerHTML =
localStorage.getItem("history");
```

các thẻ `<li>` mới tạo từ HTML không còn event listener.

### Cách sửa

Dùng Event Delegation:

```javascript
historyList.addEventListener("click", (e) => {

    if(e.target.tagName === "LI"){
        deleteHistory(e.target);
    }

});
```

Sau đó xóa đoạn:

```javascript
li.addEventListener("click", function() {
    deleteHistory(this);
});
```

---

## Lỗi 8: Decrement không lưu history

Increment có:

```javascript
const li = document.createElement("li");
```

Nhưng decrement không ghi lịch sử.

Nên thêm:

```javascript
const li = document.createElement("li");

li.textContent =
"Count changed to " + count;

historyList.append(li);
```

---

# Code sửa phần decrement

```javascript
document.querySelector("#decrementBtn")
.addEventListener("click", function() {

    count--;

    countDisplay.textContent = count;

    const li =
    document.createElement("li");

    li.textContent =
    "Count changed to " + count;

    historyList.append(li);

});
```

---

# Tổng cộng lỗi tìm được

1. `"onclick"` → `"click"`
2. Gán lại `countDisplay`
3. `innerHTML = null`
4. `item.remove`
5. localStorage trả về string
6. Không load history
7. Event listener mất sau reload
8. Decrement không lưu history

=> Có **8 lỗi**, yêu cầu đề bài chỉ cần tìm ít nhất 7 lỗi.
### Phần A

## Câu A1:

## Đoạn 1

```javascript
console.log(x);
var x = 5;
```

### Dự đoán output

```txt
undefined
```

### Giải thích

- `var` bị hoisting lên đầu.
- Biến được tạo nhưng chưa gán giá trị nên là `undefined`.

---

## Đoạn 2

```javascript
console.log(y);
let y = 10;
```

### Dự đoán output

```txt
ReferenceError
```

### Giải thích

- `let` có Temporal Dead Zone.
- Không được dùng trước khi khai báo.

---

## Đoạn 3

```javascript
const z = 15;
z = 20;
console.log(z);
```

### Dự đoán output

```txt
TypeError
```

### Giải thích

- `const` không thể gán lại giá trị.

---

## Đoạn 4

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

### Dự đoán output

```txt
[1, 2, 3, 4]
```

### Giải thích

- `const` không cho đổi biến sang mảng khác.
- Nhưng vẫn được thay đổi dữ liệu bên trong mảng.

---

## Đoạn 5

```javascript
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
```

### Dự đoán output

```txt
Trong block: 2
Ngoài block: 1
```

### Giải thích

- `let` có block scope.
- Biến trong block khác biến bên ngoài.

## Câu A2:

```javascript
console.log(typeof null);          // "object"
console.log(typeof undefined);     // "undefined"
console.log(typeof NaN);           // "number"

console.log("5" + 3);              // "53"
console.log("5" - 3);              // 2
console.log("5" * "3");            // 15

console.log(true + true);          // 2

console.log([] + []);              // ""
console.log([] + {});              // "[object Object]"
console.log({} + []);              // 0
```

---

## Giải thích

### `"5" + 3`

```txt
Toán tử + ưu tiên nối chuỗi.
Số 3 được ép thành chuỗi "3".
Kết quả: "53"
```

---

### `"5" - 3`

```txt
Toán tử - chỉ dùng cho toán học.
JavaScript ép "5" thành số 5.
Kết quả: 2
```

---

## Giải thích thêm

### `typeof null`

```txt
Đây là bug cũ của JavaScript.
null thực chất không phải object nhưng typeof vẫn trả về "object".
```

### `typeof NaN`

```txt
NaN nghĩa là Not a Number nhưng kiểu dữ liệu vẫn là number.
```

### `true + true`

```txt
true được ép thành 1.

1 + 1 = 2
```

### `[] + []`

```txt
Hai mảng rỗng bị ép thành chuỗi rỗng.

"" + "" = ""
```

### `[] + {}`

```txt
[] → ""
{} → "[object Object]"

Kết quả:
"[object Object]"
```

### `{} + []`

```txt
JavaScript hiểu {} là block code.

+[] → 0

Kết quả cuối:
0
```

## Câu A3:

```javascript
console.log(5 == "5");              // true
console.log(5 === "5");             // false

console.log(null == undefined);     // true
console.log(null === undefined);    // false

console.log(NaN == NaN);            // false

console.log(0 == false);            // true
console.log(0 === false);           // false

console.log("" == false);           // true
```

---

## Giải thích

### `==`

```txt
So sánh lỏng.
JavaScript sẽ tự ép kiểu dữ liệu trước khi so sánh.
```

Ví dụ:

```javascript
5 == "5"
```

→ `"5"` bị ép thành số `5`

→ kết quả `true`

---

### `===`

```txt
So sánh nghiêm ngặt.
So sánh cả giá trị và kiểu dữ liệu.
Không ép kiểu.
```

Ví dụ:

```javascript
5 === "5"
```

→ number khác string

→ kết quả `false`

---

## Trường hợp đặc biệt

### `NaN == NaN`

```txt
NaN không bao giờ bằng chính nó.
```

---

### `0 == false`

```txt
false bị ép thành 0

0 == 0 → true
```

---

### `"" == false`

```txt
Chuỗi rỗng bị ép thành 0
false cũng thành 0

0 == 0 → true
```

---

## Nên dùng `==` hay `===`?

```txt
Nên dùng ===
```

### Vì:

- An toàn hơn
- Không bị lỗi ép kiểu ngầm
- Dễ debug
- Code rõ ràng hơn

## Câu A4:

## Tất cả giá trị Falsy trong JavaScript

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

---

## Dự đoán kết quả

```javascript
if ("0") console.log("A");   // In
if ("") console.log("B");    // Không in
if ([]) console.log("C");    // In
if ({}) console.log("D");    // In
if (null) console.log("E");  // Không in
if (0) console.log("F");     // Không in
if (-1) console.log("G");    // In
if (" ") console.log("H");   // In
```

---

## Giải thích

### `"0"`

```txt
Chuỗi có ký tự nên là truthy.
```

---

### `""`

```txt
Chuỗi rỗng là falsy.
```

---

### `[]`

```txt
Mảng rỗng vẫn là object.
Object luôn truthy.
```

---

### `{}`

```txt
Object rỗng vẫn truthy.
```

---

### `null`

```txt
Falsy.
```

---

### `0`

```txt
Falsy.
```

---

### `-1`

```txt
Khác 0 nên truthy.
```

---

### `" "` (space)

```txt
Có chứa ký tự khoảng trắng nên không phải chuỗi rỗng.
→ truthy
```

## Câu A5:

## Cách 1

```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

---

## Cách 2

```javascript
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

---

## Cách 3

```javascript
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

---

## Giải thích

```txt
Template literal dùng dấu backtick ` `
và ${ } để chèn biến vào chuỗi.

Ưu điểm:
- Code dễ đọc hơn
- Không cần nối bằng dấu +
- Hỗ trợ xuống dòng trực tiếp
```

### Phần C

## Câu C1:

## Các lỗi trong code

### Lỗi 1 — Thiếu dấu `;`

```javascript
return "Phần trăm giảm không hợp lệ"
```

### Sửa

```javascript
return "Phần trăm giảm không hợp lệ";
```

---

### Lỗi 2 — `giaBan` là chuỗi `"100000"`

```javascript
const gia = tinhGiaGiamGia("100000", 20)
```

### Giải thích

```txt
"100000" là string, nên nên ép kiểu sang number.
```

### Sửa

```javascript
const gia = tinhGiaGiamGia(100000, 20);
```

---

### Lỗi 3 — Dùng `=` thay vì `===`

```javascript
if (giaSauGiam = 0)
```

### Giải thích

```txt
= là gán giá trị
=== mới là so sánh
```

### Sửa

```javascript
if (giaSauGiam === 0)
```

---

### Lỗi 4 — Không kiểm tra `giaBan` có phải số không

### Giải thích

```txt
Nếu nhập chuỗi hoặc ký tự sẽ lỗi logic.
```

### Sửa

```javascript
if (isNaN(giaBan)) {
    return "Giá bán không hợp lệ";
}
```

---

### Lỗi 5 — `phanTramGiam` không kiểm tra kiểu dữ liệu

### Sửa

```javascript
if (isNaN(phanTramGiam)) {
    return "Phần trăm giảm không hợp lệ";
}
```

---

### Lỗi 6 — Dùng `var` trong vòng lặp với `setTimeout`

```javascript
for (var i = 0; i < 5; i++)
```

### Giải thích

```txt
var không có block scope.
Sau 1 giây vòng lặp đã chạy xong nên i = 5.
Kết quả in ra:
Item 5
Item 5
Item 5
...
```

### Sửa bằng `let`

```javascript
for (let i = 0; i < 5; i++)
```

```txt
let có block scope nên mỗi vòng lặp giữ giá trị riêng.
```

---

## Code sau khi sửa

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {

    if (isNaN(giaBan)) {

        return "Giá bán không hợp lệ";

    }

    if (isNaN(phanTramGiam)) {

        return "Phần trăm giảm không hợp lệ";

    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {

        return "Phần trăm giảm không hợp lệ";

    }

    let giamGia = giaBan * phanTramGiam / 100;

    let giaSauGiam = giaBan - giamGia;
6
    if (giaSauGiam === 0) {

        console.log("Sản phẩm miễn phí!");

    }

    return giaSauGiam;

}

// Test

const gia = tinhGiaGiamGia(100000, 20);

console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);

console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log("Item " + i);

    }, 1000);

}
```
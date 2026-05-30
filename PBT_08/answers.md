### Phần A

## Câu A1:

## 1. Function Declaration

```javascript
function tinhThueBaoHiem(luong){

    let thue = 0;

    if(luong > 11000000){

        thue = luong * 0.1;

    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };

}
```

---

## 2. Function Expression

```javascript
const tinhThueBaoHiem = function(luong){

    let thue = 0;

    if(luong > 11000000){

        thue = luong * 0.1;

    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };

};
```

---

## 3. Arrow Function

```javascript
const tinhThueBaoHiem = (luong) => {

    let thue = 0;

    if(luong > 11000000){

        thue = luong * 0.1;

    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };

};
```

---

## Hoisting

### Function Declaration

```javascript
console.log(tinhTong(2,3));

function tinhTong(a,b){

    return a + b;

}
```

Kết quả:

```txt
5
```

Vì Function Declaration được hoisting toàn bộ.

---

### Function Expression

```javascript
console.log(tinhTong(2,3));

const tinhTong = function(a,b){

    return a + b;

};
```

Kết quả:

```txt
ReferenceError
```

Vì biến `const` chưa được khởi tạo.

---

### Arrow Function

```javascript
console.log(tinhTong(2,3));

const tinhTong = (a,b) => a + b;
```

Kết quả:

```txt
ReferenceError
```

Vì Arrow Function cũng được lưu trong biến `const`.

---

## Kết luận

- Function Declaration: Hoisting đầy đủ, gọi trước khi khai báo được.
- Function Expression: Không gọi trước khi khai báo được.
- Arrow Function: Không gọi trước khi khai báo được.
- Hiện nay thường dùng Arrow Function vì ngắn gọn và dễ đọc.

## Câu A2:

## Đoạn 1

```javascript
function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
```

### Output

```txt
1
2
3
2
2
```

### Giải thích

```txt
count được khai báo bên trong counter().

Các hàm increment, decrement, getCount
vẫn nhớ biến count dù counter() đã chạy xong.

Đây chính là Closure.

Ban đầu:
count = 0

increment() -> 1
increment() -> 2
increment() -> 3
decrement() -> 2
getCount() -> 2
```

---

## Đoạn 2

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

### Output

Sau khoảng 200ms:

```txt
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2
```

---

## Tại sao var và let khác nhau?

### Với var

```javascript
for (var i = 0; i < 3; i++)
```

```txt
var không có block scope.

Cả vòng lặp chỉ dùng chung 1 biến i.

Khi setTimeout chạy sau 100ms,
vòng lặp đã kết thúc:

i = 3

=> cả 3 callback đều nhìn thấy i = 3
```

Minh họa:

```txt
i
│
└── 3

callback1 ─┐
callback2 ─┼──> cùng trỏ tới i
callback3 ─┘
```

---

### Với let

```javascript
for (let j = 0; j < 3; j++)
```

```txt
let có block scope.

Mỗi vòng lặp tạo ra một biến j mới.

Lần 1: j = 0
Lần 2: j = 1
Lần 3: j = 2

Mỗi callback giữ giá trị riêng.
```

Minh họa:

```txt
callback1 -> j = 0
callback2 -> j = 1
callback3 -> j = 2
```

---

## Kết luận

```txt
var:
- Function scope
- Không tạo biến mới cho mỗi vòng lặp
- Dễ gây lỗi với setTimeout

let:
- Block scope
- Tạo biến riêng cho từng vòng lặp
- Nên dùng trong JavaScript hiện đại
```

## Câu A3:

```javascript
const nums = [1,2,3,4,5,6,7,8,9,10];
```

## 1. Lấy các số chẵn

```javascript
nums.filter(num => num % 2 === 0);
```

Kết quả:

```javascript
[2, 4, 6, 8, 10]
```

---

## 2. Nhân mỗi số với 3

```javascript
nums.map(num => num * 3);
```

Kết quả:

```javascript
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
```

---

## 3. Tính tổng tất cả

```javascript
nums.reduce((sum, num) => sum + num, 0);
```

Kết quả:

```javascript
55
```

---

## 4. Tìm số đầu tiên > 7

```javascript
nums.find(num => num > 7);
```

Kết quả:

```javascript
8
```

---

## 5. Kiểm tra có số > 10 không

```javascript
nums.some(num => num > 10);
```

Kết quả:

```javascript
false
```

---

## 6. Kiểm tra tất cả đều > 0

```javascript
nums.every(num => num > 0);
```

Kết quả:

```javascript
true
```

---

## 7. Tạo mảng "Số X là [chẵn/lẻ]"

```javascript
nums.map(num => `Số ${num} là ${num % 2 === 0 ? "chẵn" : "lẻ"}`);
```

Kết quả:

```javascript
[
 "Số 1 là lẻ",
 "Số 2 là chẵn",
 "Số 3 là lẻ",
 ...
]
```

---

## 8. Đảo ngược mảng (không mutate mảng gốc)

```javascript
[...nums].reverse();
```

Kết quả:

```javascript
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```
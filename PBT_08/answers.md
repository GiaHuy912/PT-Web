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
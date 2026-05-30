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

## Câu A4:

## Code

```javascript
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color);
console.log(specs);

// Spread
const updated = { ...product, price: 23990000, sale: true };

console.log(updated.price);
console.log(updated.sale);
console.log(product.price);

// Spread gotcha
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
```

---

## 1. Destructuring

```javascript
console.log(name, price, ram, color);
```

Output:

```txt
iPhone 16 25990000 8 Titan
```

---

```javascript
console.log(specs);
```

Output:

```txt
ReferenceError: specs is not defined
```

### Giải thích

Trong destructuring:

```javascript
const {
    name,
    price,
    specs: { ram, color }
} = product;
```

chỉ tạo ra các biến:

```javascript
name
price
ram
color
```

Không tạo biến `specs`.

---

## 2. Spread

```javascript
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
```

---

```javascript
console.log(updated.price);
```

Output:

```txt
23990000
```

---

```javascript
console.log(updated.sale);
```

Output:

```txt
true
```

---

```javascript
console.log(product.price);
```

Output:

```txt
25990000
```

### Giải thích

Spread tạo object mới.

```javascript
updated.price
```

đổi thành:

```txt
23990000
```

nhưng:

```javascript
product.price
```

vẫn giữ nguyên:

```txt
25990000
```

---

## 3. Spread Gotcha

```javascript
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
```

Output:

```txt
16
```

---

### Tại sao?

Spread chỉ copy nông (Shallow Copy).

```javascript
const copy = { ...product };
```

sao chép:

```javascript
name
price
```

nhưng object lồng bên trong:

```javascript
specs
```

vẫn dùng chung vùng nhớ.

Minh họa:

```txt
product
   │
   └── specs ──► { ram: 8 }

copy
   │
   └── specs ──► cùng object trên
```

Khi:

```javascript
copy.specs.ram = 16;
```

thì:

```javascript
product.specs.ram
```

cũng thành:

```txt
16
```

---

## Kết luận

```txt
console.log(name, price, ram, color);
→ iPhone 16 25990000 8 Titan

console.log(specs);
→ ReferenceError

console.log(updated.price);
→ 23990000

console.log(updated.sale);
→ true

console.log(product.price);
→ 25990000

console.log(product.specs.ram);
→ 16
```

### Phần C

## Câu C1:

## Refactor Code

### Code sau khi refactor

```javascript
const processOrders = orders =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
```

### Các kỹ thuật đã sử dụng

- Arrow Function

```javascript
const processOrders = orders => ...
```

- filter()

```javascript
.filter(({ status, total }) =>
    status === "completed" && total > 100000
)
```

- map()

```javascript
.map(({ id, customer, total }) => ({
    id,
    customer,
    total,
    discount: total * 0.1,
    finalTotal: total * 0.9
}))
```

- sort()

```javascript
.sort((a, b) => b.finalTotal - a.finalTotal)
```

- Destructuring

```javascript
({ status, total })
({ id, customer, total })
```

## Câu C2:

## Thiết kế miniArray

### Cài đặt

```javascript
const miniArray = {

    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }

        return result;
    },

    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }

        }

        return result;
    },

    reduce(arr, fn, initialValue) {

        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }

        return accumulator;
    }

};
```

---

### Test

```javascript
console.log(
    miniArray.map([1, 2, 3], x => x * 2)
);
// [2, 4, 6]

console.log(
    miniArray.filter([1, 2, 3, 4], x => x > 2)
);
// [3, 4]

console.log(
    miniArray.reduce(
        [1, 2, 3, 4],
        (a, b) => a + b,
        0
    )
);
// 10
```

---

### Kết quả

```text
[2, 4, 6]
[3, 4]
10
```

### Giải thích

- `map()`:
  - Duyệt qua từng phần tử.
  - Áp dụng hàm `fn`.
  - Lưu kết quả vào mảng mới.

- `filter()`:
  - Duyệt từng phần tử.
  - Nếu `fn()` trả về `true` thì thêm vào mảng kết quả.

- `reduce()`:
  - Dùng biến `accumulator` để tích lũy giá trị.
  - Mỗi vòng lặp gọi `fn(accumulator, currentValue)`.
  - Trả về kết quả cuối cùng.

- Không sử dụng:
  - `Array.prototype.map`
  - `Array.prototype.filter`
  - `Array.prototype.reduce`

- Chỉ sử dụng:
  - `for`
  - `if`
  - hàm callback truyền vào.

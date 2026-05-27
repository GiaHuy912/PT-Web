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
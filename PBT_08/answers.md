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
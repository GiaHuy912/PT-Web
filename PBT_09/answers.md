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
function createCart() {

    let items = [];
    let discount = 0;

    return {

        addItem(product, quantity = 1) {

            const existing = items.find(item => item.id === product.id);

            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity
                });
            }

        },

        removeItem(productId) {

            items = items.filter(item => item.id !== productId);

        },

        updateQuantity(productId, newQuantity) {

            const item = items.find(item => item.id === productId);

            if (item) {

                if (newQuantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = newQuantity;
                }

            }

        },

        getTotal() {

            let total = items.reduce((sum, item) => {
                return sum + item.price * item.quantity;
            }, 0);

            if (discount > 0) {
                total -= total * discount / 100;
            }

            return total;

        },

        applyDiscount(code) {

            if (code === "SALE10") {
                discount = 10;
            }
            else if (code === "SALE20") {
                discount = 20;
            }
            else if (code === "FREESHIP") {

                let total = this.getTotal() - 30000;

                console.log("Tổng sau FREESHIP:", total.toLocaleString() + "đ");

                return;
            }
            else {
                console.log("Mã giảm giá không hợp lệ!");
            }

        },

        printCart() {

            console.log("\n===== GIỎ HÀNG =====");

            console.log("STT | Tên SP | SL | Đơn giá | Thành tiền");

            items.forEach((item, index) => {

                const itemTotal = item.price * item.quantity;

                console.log(
                    `${index + 1} | ${item.name} | ${item.quantity} | ${item.price.toLocaleString()}đ | ${itemTotal.toLocaleString()}đ`
                );

            });

            console.log("------------------------");

            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString() + "đ"
            );

            console.log("========================\n");

        },

        getItemCount() {

            return items.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0);

        },

        clearCart() {

            items = [];
            discount = 0;

        }

    };

}


// ================= TEST =================

const cart = createCart();

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.addItem(
    { id: 3, name: "AirPods Pro", price: 6990000 },
    2
);

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);

console.log("Sau xóa:", cart.getItemCount());
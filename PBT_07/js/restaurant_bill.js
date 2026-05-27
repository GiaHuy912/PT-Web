const foods = [

    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
    { name: "Lẩu", price: 450000, quantity: 1 }

];

const isWednesday = true;

const hasTip = true;

let total = 0;

// Tính tổng

for(let i = 0; i < foods.length; i++){

    total += foods[i].price * foods[i].quantity;

}

// Giảm giá

let discountPercent = 0;

if(total > 1000000){

    discountPercent = 15;

} else if(total > 500000){

    discountPercent = 10;

}

if(isWednesday){

    discountPercent += 5;

}

let discount = total * discountPercent / 100;

let afterDiscount = total - discount;

// VAT

let vat = afterDiscount * 0.08;

// Tip

let tip = 0;

if(hasTip){

    tip = afterDiscount * 0.05;

}

// Thanh toán cuối

let finalTotal = afterDiscount + vat + tip;

// =======================
// IN HÓA ĐƠN
// =======================

console.log("╔══════════════════════════════════════╗");

console.log("║         HÓA ĐƠN NHÀ HÀNG            ║");

console.log("╠══════════════════════════════════════╣");

for(let i = 0; i < foods.length; i++){

    let item = foods[i];

    let itemTotal = item.price * item.quantity;

    console.log(
        `${i + 1}. ${item.name} x${item.quantity} = ${itemTotal.toLocaleString()}đ`
    );

}

console.log("╠══════════════════════════════════════╣");

console.log(
    "Tổng cộng: " + total.toLocaleString() + "đ"
);

console.log(
    "Giảm giá (" + discountPercent + "%): -" +
    discount.toLocaleString() + "đ"
);

console.log(
    "VAT (8%): " + vat.toLocaleString() + "đ"
);

console.log(
    "Tip (5%): " + tip.toLocaleString() + "đ"
);

console.log("╠══════════════════════════════════════╣");

console.log(
    "THANH TOÁN: " +
    finalTotal.toLocaleString() + "đ"
);

console.log("╚══════════════════════════════════════╝");
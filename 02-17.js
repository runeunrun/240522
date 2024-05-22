let p1 = {
    name: "아이패드",
    price: 200000,
    quantity: 2,
    amount: null,  // 초기 amount 값을 null로 설정
    order: function() {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액: " + this.amount);
    },
    discount: function(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
            console.log((100 * rate) + "% 할인된 금액으로 구매합니다.");
        } else {
            console.log("할인율은 0과 0.8 사이여야 합니다.");
        }
    }
};

p1.discount(0.2);
p1.order();

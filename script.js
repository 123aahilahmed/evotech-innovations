// script.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderName = document.getElementById('order-name');
    const orderEmail = document.getElementById('order-email');
    const orderAddress = document.getElementById('order-address');
    const orderQuantity = document.getElementById('order-quantity');
    const orderPayment = document.getElementById('order-payment');
    const deliveryDate = document.getElementById('delivery-date');

    if (orderName && orderEmail && orderAddress && orderQuantity && orderPayment && deliveryDate) {
        orderName.value = urlParams.get('name');
        orderEmail.value = urlParams.get('email');
        orderAddress.value = urlParams.get('address');
        orderQuantity.value = urlParams.get('quantity');
        orderPayment.value = urlParams.get('payment');

        // Calculate estimated delivery date (example: 7 days from today)
        const today = new Date();
        const delivery = new Date();
        delivery.setDate(today.getDate() + 7); // 7 days from today
        deliveryDate.value = delivery.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
});

function printOrder() {
    window.print();
}

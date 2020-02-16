export function CalculateTotal(subtotal, taxRate) {
  let total = Number(subtotal) + Number(subtotal * taxRate);
  return total.toFixed(2);
}
export function CalculateSubtotal(cart) {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  return subtotal.toFixed(2);
}

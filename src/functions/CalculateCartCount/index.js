export const CalculateCartCount = cart => {
  let cartCount = 0;
  for (let i = 0; i < cart.length; i++) {
    cartCount += cart[i].quantity;
  }
  return cartCount;
};

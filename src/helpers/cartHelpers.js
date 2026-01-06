export const calculateTotalItems = (cart) => {
  return cart.reduce((acc, item) => acc + item.qty, 0);
};
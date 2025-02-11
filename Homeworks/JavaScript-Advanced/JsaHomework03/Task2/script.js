async function fetchCartData() {
  try {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();
    const carts = data.carts;

    // 1. Get all product titles in all carts
    const allProductTitles = carts.flatMap((cart) =>
      cart.products.map((product) => product.title)
    );

    // 2. Total quantity of all products purchased
    const totalQuantity = carts.reduce(
      (sum, cart) => sum + cart.products.reduce((q, p) => q + p.quantity, 0),
      0
    );

    // 3. Check if any cart has a total value above $100,000
    const hasCartAbove100K = carts.some((cart) => cart.total > 100000);

    // 4. Total revenue from all carts (sum of all discountedTotal values)
    const totalRevenue = carts.reduce(
      (sum, cart) => sum + cart.discountedTotal,
      0
    );

    // 5. Cart with the highest total value
    const highestTotalCart = carts.reduce(
      (maxCart, cart) => (cart.total > maxCart.total ? cart : maxCart),
      carts[0]
    );

    // 6. Find all products with a discount greater than 15%
    const discountedProducts = carts.flatMap((cart) =>
      cart.products.filter((product) => {
        const discount =
          ((product.price - product.discountedPrice) / product.price) * 100;
        return discount > 15;
      })
    );

    // 7. User ID of the cart with the highest total quantity
    const highestQtyCart = carts.reduce(
      (maxCart, cart) => {
        const cartQty = cart.products.reduce((qty, p) => qty + p.quantity, 0);
        return cartQty > maxCart.qty
          ? { id: cart.userId, qty: cartQty }
          : maxCart;
      },
      { id: null, qty: 0 }
    ).id;

    // 8. Most expensive product in all carts (before discount)
    const mostExpensiveProduct = carts
      .flatMap((cart) => cart.products)
      .reduce((maxProduct, product) =>
        product.price > maxProduct.price ? product : maxProduct
      );

    // 9. Average discounted total per cart
    const averageDiscountedTotal = totalRevenue / carts.length;

    // 10. Top 3 most expensive products after discount
    const top3ExpensiveAfterDiscount = carts
      .flatMap((cart) => cart.products)
      .sort((a, b) => b.discountedPrice - a.discountedPrice)
      .slice(0, 3);

    console.log("All Product Titles:", allProductTitles);
    console.log("Total Quantity:", totalQuantity);
    console.log("Any cart above $100K:", hasCartAbove100K);
    console.log("Total Revenue:", totalRevenue);
    console.log("Cart with Highest Total:", highestTotalCart);
    console.log("Discounted Products (above 15%):", discountedProducts);
    console.log("User ID of Cart with Highest Quantity:", highestQtyCart);
    console.log(
      "Most Expensive Product (before discount):",
      mostExpensiveProduct
    );
    console.log("Average Discounted Total Per Cart:", averageDiscountedTotal);
    console.log(
      "Top 3 Most Expensive Products After Discount:",
      top3ExpensiveAfterDiscount
    );
  } catch (error) {
    console.error("ERROR !", error);
  }
}

fetchCartData();

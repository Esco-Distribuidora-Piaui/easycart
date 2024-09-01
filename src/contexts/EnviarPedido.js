export const formatCartMessage = (cartItems) => {
    const itemsList = cartItems.map((item) =>
      `Produto: ${item.name}\nQuantidade: ${item.quantity}\nPreço: ${item.price}`
    ).join('\n\n');
  
    const subtotal = cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace('R$', '').replace(',', '.').trim());
      return total + priceNumber * item.quantity;
    }, 0).toFixed(2);
  
    return `Olá, gostaria de fazer um pedido:\n\n${itemsList}\n\nSubtotal: R$${subtotal}\n\nPor favor, confirme o pedido.`;
};
  
export const sendMessage = (message) => {
    const formattedMessage = encodeURIComponent(message);
    const phoneNumber = '';
    const url = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
  
    window.open(url, '_blank');
};  
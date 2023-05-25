const calculateChange = () => {
  const amountPaidInput = document.getElementById('amountPaid');
  const quantityInput = document.getElementById('quantity');
  const changeResult = document.getElementById('changeResult');

  const amountPaid = parseFloat(amountPaidInput.value);
  const quantity = parseInt(quantityInput.value);

  const pricePerJar = 40;
  const discountPrice = 100;

  const totalPrice = Math.floor(quantity / 3) * discountPrice + (quantity % 3) * pricePerJar;
  const change = amountPaid - totalPrice;

  if (change >= 0) {
    changeResult.textContent = `Change: ${change} pesos`;
  } else {
    changeResult.textContent = "Insufficient Funds";
  }
};

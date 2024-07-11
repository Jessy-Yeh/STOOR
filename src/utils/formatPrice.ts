export const formatPrice = (price: number): string => {
  const priceStr = price.toString();

  if (priceStr.includes(".")) {
    const parts = priceStr.split(".");
    const wholePart = parts[0];
    let fractionalPart = parts[1];

    if (fractionalPart.length === 1) {
      fractionalPart += "0";
    } else if (fractionalPart.length === 0) {
      fractionalPart = "00";
    } else if (fractionalPart.length > 2) {
      fractionalPart = fractionalPart.slice(0, 2);
    }

    return `${wholePart}.${fractionalPart}`;
  } else {
    return priceStr;
  }
};

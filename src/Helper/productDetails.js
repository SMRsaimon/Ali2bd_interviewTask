// find % of main discount price
export const getPercentOfDiscount = (oldPrice, afterDiscountPrice) => {
  if (
    !oldPrice ||
    !afterDiscountPrice ||
    isNaN(oldPrice) ||
    isNaN(afterDiscountPrice)
  ) {
    return 0;
  } else {
    const discountOfMainPrice = Number(oldPrice) - Number(afterDiscountPrice);
    const percent = (discountOfMainPrice * oldPrice) / 100;
    return percent.toFixed(2);
  }
};

export const geSelectedVarientImageLink = (data, type) => {
  if (data.length) {
    return data.find((x) => x.vType === type)?.image || false;
  } else {
    return false;
  }
};

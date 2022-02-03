const formatter = (number) => {
  // Scientific notation Values and their corresponding suffixes
  const snValues = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: " k" },
    { value: 1e6, symbol: " Million" },
    { value: 1e9, symbol: " Billion" },
  ];

  // Find the suffix for the number
  const regX = /\.0+$|(\.[0-9]*[1-9])0+$/;

  let i;
  for (i = snValues.length - 1; i > 0; i--) {
    if (number >= snValues[i].value) {
      break;
    }
  }
  return (
    (number / snValues[i].value).toFixed(1).replace(regX, "$1") +
    snValues[i].symbol
  );
};

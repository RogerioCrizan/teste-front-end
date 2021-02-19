export const formatMoney = (val) =>
  val
    ? val === -1
      ? "--,--"
      : val
          .toFixed(2)
          .replace(".", ",")
          .replace(/(\d)(?=(\d{3})+,)/g, "$1.")
    : "0,00";

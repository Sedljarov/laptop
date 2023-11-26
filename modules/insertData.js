module.exports = function (templ, laptop) {
  let newStr = templ
    .replaceAll("{%ID%}", laptop.id)
    .replaceAll("{%PRODUCTNAME%}", laptop.productName)
    .replaceAll("{%IMAGE%}", laptop.image)
    .replaceAll("{%CPU%}", laptop.cpu)
    .replaceAll("{%RAM%}", laptop.ram)
    .replaceAll("{%STORAGE%}", laptop.storage)
    .replaceAll("{%SCREEN%}", laptop.screen)
    .replaceAll("{%PRICE%}", laptop.price)
    .replaceAll("{%DESCRIPTION%}", laptop.description);
  return newStr;
};

const replaceTemplate = (temp, product) => {
  let out = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
  out = out.replace(/{%IMAGE%}/g, product.image)
  out = out.replace(/{%NUTRIENTS%}/g, product.nutrients)
  out = out.replace(/{%PRICE%}/g, product.price)
  out = out.replace(/{%FROM%}/g, product.from)
  out = out.replace(/{%QUANTITY%}/g, product.quantity)
  out = out.replace(/{%DESCRIPTION%}/g, product.description)
  out = out.replace(/{%ID%}/g, product.id)
  if (!product.organic) out = out.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
  return out
}

module.exports = { replaceTemplate }

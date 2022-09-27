export function calculateTotal (items, tax) {
  if (tax < 0) tax *= -1

  let itemsTotal = 0
  let itemsWithTaxTotal = 0

  items.forEach(item => {
    if (item.taxable === true) {
      itemsWithTaxTotal += item.price * tax
    }
    itemsTotal += item.price
  });
  
  return itemsWithTaxTotal + itemsTotal
}

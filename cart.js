var carts = []

function addCart (cartId) {
  carts.push({
    cartId,
    products: [],
    total: 0,
    addProduct: function (product) {
      this.products.push(product)
      this.total += product.amount
    },
    removeProduct: function (product) {
      const matchProduct = this.products.find(p => p.name === product.name)
      this.products.splice(this.products.indexOf(matchProduct), 1)
      this.total -= matchProduct.amount
    }
  })
}

function getCart (cartId) {
  return carts.find(c => c.cartId === cartId)
}

var exports = module.exports = {}

exports.getCart = getCart
exports.addCart = addCart

const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const { addCart, getCart } = require('../../cart')

const uuid = function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)} // eslint-disable-line

Given('a new user', function () {
  this.cartId = uuid()
  addCart(this.cartId)
})

When('I don\'t add anything', function () {
  return 'no doing anything'
})

When(/I add a ((\d+) dollar )?coke/, function (int) {
  const cart = getCart(this.cartId)
  cart.addProduct({ name: 'Coke', amount: parseInt(int) })
})

When(/I add a ((\d+) dollar )?sprite/, function (int) {
  const cart = getCart(this.cartId)
  cart.addProduct({ name: 'Sprite', amount: parseInt(int) })
})

Then('I remove a coke', function () {
  const cart = getCart(this.cartId)
  cart.removeProduct({ name: 'Coke' })
})

Then('I remove a sprite', function () {
  const cart = getCart(this.cartId)
  cart.removeProduct({ name: 'Sprite' })
})

Then('the total should be {int} dollars', function (int) {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.total, int, `Total is not ${int}`)
})

Then('I should have {int} products in a basket', function (int) {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products.length, int, `Product length is not ${int}`)
})

Then('it better be a coke', function () {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products[0].name, 'Coke', 'Product is not a coke')
})

Then('it better be a sprite', function () {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products[0].name, 'Sprite', 'Product is not a coke')
})

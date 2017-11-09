const expect = chai.expect

describe('calculator', function () {
  it('calculates the divide by 0', function () {
    expect(calculate('3÷0=')).to.deep.equal('it is infinite')
  })
  it('calculates the multiplication', function () {
    expect(calculate('3x3=')).to.deep.equal(9)
  })
  it('calculates the division', function () {
    expect(calculate('3/3=')).to.deep.equal(1)
  })
  it('calculates the addition', function () {
    expect(calculate('3+3=')).to.deep.equal(6)
  })
  it('calculates the substraction', function () {
    expect(calculate('3-3=')).to.deep.equal(0)
  })
  it('doing consucutive calculation', function () {
    expect(calculate('5x4=')+calculate('-3=')).to.deep.equal(17)
  })
})
describe('replace symbol', function () {
  it('replace equal by empty string ', function () {
    expect(replaceSymbol('3÷0=')).to.deep.equal('3/0')
  })
  it('replace x by empty asterick ', function () {
    expect(replaceSymbol('3x0=')).to.deep.equal('3*0')
  })
  it('replace ÷ by empty frontSlash ', function () {
    expect(replaceSymbol('3÷0=')).to.deep.equal('3/0')
  })
})

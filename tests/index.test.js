const expect = require("chai")
const FUNCTION = require("../src/index")

describe('FUNCTION', () => {
    it('Is the answer correct?', () => {
      const expect = require('chai').expect
      const expected = RESULT //What's expected to be entered.
      const actual = FUNCTION(x, x) //What was entered. 
      expect(actual).to.equal(expected)
    })
})
const assert = require("assert");
const R = require("ramda");

module.exports = async function (helper) {
  
  const { answer1 } = helper.validationFields;

  try{
    assert.strictEqual(Number(21124), Number(answer1));
  }catch(e){
    return helper.fail(`
      Wrong Output!
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
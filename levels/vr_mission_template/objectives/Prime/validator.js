
const assert = require("assert");
const R = require("ramda");
/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.
The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer2 } = helper.validationFields;

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  // if (!answer1 || !isTwilio(answer1)) {
  //   return helper.fail(`
  //     The answer to the first question is incorrect. The company that
  //     makes TwilioQuest starts with a "T" and ends with a "wilio".
  //   `);
  // }

  // You can use npm or core Node.js dependencies in your validators!
  try{
    assert.strictEqual(Number(104743), Number(answer2));
  }catch(e){
    return helper.fail(`
      Wrong Output!
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    Hooray! You did it!
  `);
};
var myStepDefinitionsWrapper = function () {

  this.Given(/^Derp$/, function (callback) {
       callback();
       });

  this.When(/^Derpy$/, function (callback) {
    callback();
  });

  this.Then(/^Derps$/, function (callback) {
    callback();
  });

};
module.exports = myStepDefinitionsWrapper;

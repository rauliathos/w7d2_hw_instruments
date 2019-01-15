const PubSub = require('../helpers/pub_sub.js');



const SelectView = function(element){
  this.element = element;
  // console.log(element);
};



SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all', (evt) => {
    const allInstrumentFamilies = evt.detail;
    this.populateDropdown(allInstrumentFamilies);
      // console.log(allFamilies);

  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:selected', selectedIndex);
    // console.log(evt.target.value);
  });
};
module.exports = SelectView;

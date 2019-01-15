const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all', this.data);

  PubSub.subscribe('SelectView:selected', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentFamiliesDetail(selectedIndex);

  });
};

InstrumentFamilies.prototype.publishInstrumentFamiliesDetail = function(familyIndex){
  const selectedFamily = this.data[familyIndex]
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
}
module.exports = InstrumentFamilies;

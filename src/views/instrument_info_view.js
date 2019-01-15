const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
    const family = event.detail;
    this.renderFamilyInfo(family);
  });
};

module.exports = InstrumentInfoView

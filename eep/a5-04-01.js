"use strict";

// required for autocompletion
const RadioTelegram = require('../lib/esp3Packet').RadioTelegram;

/**
 * @param {RadioTelegram} telegram 
 */
module.exports = function (telegram) {
  // message
  let retValue = {};
  let lb = (telegram.userData[3] & 0x00000008) >> 3;
  let tempValue = telegram.userData[2];
  let humidityValue = telegram.userData[1];

  retValue['learn_button'] = (lb === 1);
  if (1 === lb) {
    let resultTempValue =  ((tempValue -250)*(40/250));
    let resultHumidityValue =  ((humidityValue -250)*(100/250));	
    retValue['temperature'] = resultTempValue.toFixed(2);
	retValue['humidity'] = resultHumidityValue.toFixed(2);
  }

  return retValue;
};

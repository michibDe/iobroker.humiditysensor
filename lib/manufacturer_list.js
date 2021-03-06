/* ------------------------------------------------------------------
* node-enocean-utils - node-enocean-utils-manufacturer.js
*
* Copyright (c) 2016 - 2017, Futomi Hatano, All rights reserved.
* Released under the MIT license
* Date: 2017-08-15
* ---------------------------------------------------------------- */
'use strict';
// Based on the EnOcean Link Reference
// https://www.enocean.com/fileadmin/redaktion/support/enocean-link/eo_manufacturer_8h.html

const EnoceanManufacturer = function() {
this.MANUFACTURER_MAP = {
0x001: 'PEHA',
0x002: 'THERMOKON',
0x003: 'SERVODAN',
0x004: 'ECHOFLEX SOLUTIONS',
0x005: 'OMNIO AG',
0x006: 'HARDMEIER ELECTRONICS',
0x007: 'REGULVAR INC',
0x008: 'AD HOC ELECTRONICS',
0x009: 'DISTECH CONTROLS',
0x00A: 'KIEBACK AND PETER',
0x00B: 'ENOCEAN GMBH',
0x00C: 'PROBARE',
0x00D: 'ELTAKO',
0x00E: 'LEVITON',
0x00F: 'HONEYWELL',
0x010: 'SPARTAN PERIPHERAL DEVICES',
0x011: 'SIEMENS',
0x012: 'T MAC',
0x013: 'RELIABLE CONTROLS CORPORATION',
0x014: 'ELSNER ELEKTRONIK GMBH',
0x015: 'DIEHL CONTROLS',
0x016: 'BSC COMPUTER',
0x017: 'S AND S REGELTECHNIK GMBH',
0x018: 'ZENO CONTROLS',
0x019: 'INTESIS SOFTWARE SL',
0x01A: 'VIESSMANN',
0x01B: 'LUTUO TECHNOLOGY',
0x01C: 'SCHNEIDER ELECTRIC',
0x01D: 'SAUTER',
0x01E: 'BOOT UP',
0x01F: 'OSRAM SYLVANIA',
0x020: 'UNOTECH',
0x21: 'DELTA CONTROLS INC',
0x022: 'UNITRONIC AG',
0x023: 'NANOSENSE',
0x024: 'THE S4 GROUP',
0x025: 'MSR SOLUTIONS',
0x26: 'GE',
0x027: 'MAICO',
0x28: 'RUSKIN COMPANY',
0x29: 'MAGNUM ENERGY SOLUTIONS',
0x02A: 'KMC CONTROLS',
0x02B: 'ECOLOGIX CONTROLS',
0x2C: 'TRIO 2 SYS',
0x02D: 'AFRISO EURO INDEX',
0x030: 'NEC ACCESSTECHNICA LTD',
0x031: 'ITEC CORPORATION',
0x32: 'SIMICX CO LTD',
0x033: 'PERMUNDO GMBH',
0x34: 'EUROTRONIC TECHNOLOGY GMBH',
0x35: 'ART JAPAN CO LTD',
0x36: 'TIANSU AUTOMATION CONTROL SYSTE CO LTD',
0x38: 'GRUPPO GIORDANO IDEA SPA',
0x39: 'ALPHAEOS AG',
0x3A: 'TAG TECHNOLOGIES',
0x3C: 'CLOUD BUILDINGS LTD',
0x3E: 'GIGA CONCEPT',
0x3F: 'SENSORTEC',
0x40: 'JAEGER DIREKT',
0x41: 'AIR SYSTEM COMPONENTS INC',
0x042: 'ERMINE CORP',
0x043: 'SODA GMBH',
0x044: 'EKE AUTOMATION',
0x045: 'HOLTER REGELARMUTREN',
0x046: 'ID RF',
0x047: 'DEUTA CONTROLS GMBH',
0x048: 'EWATCHH',
0x049: 'MICROPELT',
0x04A: 'CALEFFI SPA',
0x04B: 'DIGITAL CONCEPTS',
0x04C: 'EMERSON CLIMATE TECHNOLOGIES',
0x04D: 'ADEE ELECTRONIC',
0x04E: 'ALTECON',
0x04F: 'NANJING PUTIAN TELECOMMUNICATIONS',
0x050: 'TERRALUX',
0x051: 'MENRED',
0x052: 'IEXERGY GMBH',
0x053: 'OVENTROP GMBH',
0x054: 'BUILDING AUTOMATION PRODUCTS INC',
0x055: 'FUNCTIONAL DEVICES INC',
0x056: 'OGGA',
0x057: 'ITHO DAALDEROP',
0x058: 'RESOL',
0x059: 'ADVANCED DEVICES',
0x05A: 'AUTANI LCC',
0x05B: 'DR RIEGEL GMBH',
0x05C: 'HOPPE HOLDING AG',
0x7FF : 'MULTI USER MANUFACTURER'
};
};

EnoceanManufacturer.prototype.getManufacturerName = function(manufacturer_id) {
if(manufacturer_id in this.MANUFACTURER_MAP) {
return this.MANUFACTURER_MAP[manufacturer_id];
} else {
return '';
}
};

module.exports = new EnoceanManufacturer();
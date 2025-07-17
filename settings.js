const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'jcvLxGhzf3aBBkP' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.',
LANG: process.env.LANG || 'EN',
SUDO: process.env.SUDO === undefined ? '94704227534' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"privete" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};

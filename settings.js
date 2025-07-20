const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'WA-BOT=2Y8BzYKD#W06hxNWulcev5O4ffEbyuYnBHcXUCshDJz4rUye5BLg' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.',
LANG: process.env.LANG || 'EN',
SUDO: process.env.SUDO === undefined ? '94704227534' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"privete" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};

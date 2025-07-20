const { cmd, commands } = require('./lib/command')
const config = require('./settings');

var amsg =''
if(config.LANG === 'SI') amsg = 'බොට් ආරක්ෂිතව සජීවිකර ඇතිද නැද්ද පරීක්‍ෂා කරන්න.'
else amsg = "Check bot online or no."

cmd({
    pattern: "alive",
    react: "👋",
    alias: ["info", "online"],
    desc: amsg,
    category: "main",
    use: '.alive',
    filename: __filename
},
async ( m, { from, quoted, }) => {
    try {
            
const aliveMessage = `*WA BOT ALIVE NOW ✅*`;

await m.sendMessage(from, { 
        image: { url: "https://i.ibb.co/wFkjNGMj/61b1ec5e-37b8-45ff-b65f-9b8bf57461f0.jpg" }, 
        caption: aliveMessage,
}, { quoted: m });
                        
    } catch (e) {
        console.error(e);
        m(`*Error !!*`);
    }
});

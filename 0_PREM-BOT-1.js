//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "PREM-BOT-1",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "ALL REPLY MR PREM BABU",
  commandCategory: "Noprefix",
  usages: "Taklu or Bot",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["à¤¹à¤¾à¤¯ à¤®à¥ˆà¤‚ à¤¸à¤¦à¤•à¥‡ à¤œà¤¾à¤µà¤¾ à¤¤à¥‡à¤°à¥€ à¤‡à¤¸ à¤®à¤¾à¤¸à¥‚à¤® à¤¸à¤•à¤² à¤ªà¥‡ à¤¬à¥‡à¤¬à¥€ ðŸ’‹ðŸ™ˆ " , "à¤¬à¥‹à¤Ÿ à¤¨à¤¾ à¤¬à¥‹à¤² à¤“à¤¯ à¤ªà¥à¤°à¥‡à¤® à¤œà¤¾à¤¨à¥‚ à¤¬à¥‹à¤² à¤®à¥à¤à¥‡ ðŸ˜ŒðŸ™ˆðŸ˜˜ " , "à¤¬à¤¾à¤° à¤¬à¤¾à¤° à¤ªà¤°à¥‡à¤¶à¤¾à¤¨ à¤¨à¤¾ à¤•à¤° à¤…à¤ªà¤¨à¥‡ à¤¬à¤¾à¤¬à¥‚ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¬à¥€à¤œà¥€ à¤¹à¥‚à¤‚à¥¤ ðŸ˜’ðŸ¤Ÿ" , "à¤®à¥ˆà¤‚ à¤—à¤°à¥€à¤¬à¥‹à¤‚ à¤¸à¥‡ à¤¬à¤¾à¤¤ à¤¨à¤¹à¥€ à¤•à¤°à¤¤à¤¾ â˜¹ï¸ðŸ¤Ÿ" , "à¤‡à¤¤à¤¨à¤¾ à¤¨ à¤ªà¤¾à¤¸ à¤†à¤“ à¤ªà¥à¤¯à¤¾à¤° à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾ ðŸ™ˆðŸ˜ŽðŸ˜•ðŸ‘ˆ" , "à¤‡à¤Ÿà¥‚ ðŸ¤ à¤¸à¤¾ à¤¶à¤°à¥à¤® à¤•à¤° à¤²à¤¿à¤¯à¤¾ à¤•à¤°à¥‹ à¤¬à¥‹à¤Ÿ à¤¬à¥‹à¤Ÿ à¤•à¤°à¤¤à¥‡ à¤µà¤•à¥à¤¤ ðŸ™‚ðŸ¤ž" , "à¤‡à¤¤à¤¨à¤¾ à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥‚à¤‚ à¤•à¥€ à¤–à¥à¤¯à¤¾à¤¬ à¤®à¥‡à¤‚ à¤²à¤¡à¤¼à¤•à¥€ à¤•à¥€ à¤¹à¤¾à¤‚ à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¹à¥€ à¤†à¤‚à¤–à¥‡ à¤–à¥à¤² à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ ðŸ˜•ðŸ¤ž" , "à¤œà¤°à¥‚à¤°à¥€ à¤¨à¤¹à¥€à¤‚ à¤¹à¤° à¤²à¤¡à¤¼à¤•à¥€ à¤§à¥‹à¤–à¤¾ à¤¦à¥‡ ðŸ‘‰ðŸ’” à¤•à¥à¤› à¤²à¤¡à¤¼à¤•à¤¿à¤¯à¤¾ à¤—à¤¾à¤²à¤¿à¤¯à¤¾à¤‚ à¤­à¥€ à¤¦à¥‡à¤¤à¥€ à¤¹à¥ˆà¥¤ ðŸ˜•ðŸ¤ž" , "à¤•à¤¹à¥‹ à¤¨ à¤ªà¥à¤¯à¤¾à¤° à¤¹à¥ˆà¤‚ ðŸ™ˆ" , "à¤¤à¥à¤® à¤®à¥à¤à¥‡ à¤ªà¤¾à¤—à¤² à¤²à¤—à¤¤à¥‡ à¤¹à¥‹ ðŸ™‚ðŸ¤ž" , "à¤¬à¥‹à¤²à¥‹ à¤¬à¥‡à¤¬à¥€ à¤¤à¥à¤® à¤®à¥à¤à¤¸à¥‡ à¤ªà¥à¤¯à¤¾à¤° à¤•à¤°à¤¤à¥‡ à¤¹à¥‹ à¤¨ ðŸ™ˆðŸ˜ŒðŸ˜ŽðŸ’‹" , "à¤†à¤ªà¤•à¤¾ à¤¨à¤‚à¤¬à¤° à¤®à¤¿à¤²à¥‡à¤—à¤¾ ðŸ˜ðŸ˜’" , "à¤…à¤°à¥‡ à¤œà¤¾à¤¨ à¤®à¤œà¤¾à¤• à¤•à¥‡ à¤®à¥‚à¤¡ à¤®à¥‡à¤‚ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‚à¤‚ à¤®à¥ˆà¤‚ à¤œà¥‹ à¤•à¤¾à¤® à¤¹à¥ˆ à¤¬à¤¤à¤¾ à¤¦à¥‹ à¤¶à¤°à¤®à¤¾à¤“ à¤¨à¤¹à¥€ ðŸ™ˆ" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain KarungaðŸ¤¬" , "à¤¤à¥‚ à¤¬à¤‚à¤¦ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‡à¤—à¤¾ à¤•à¤¿à¤¯à¤¾...? ðŸ˜¾ðŸ¤Ÿ" , "à¤¤à¥à¤® à¤¨ à¤¨à¤°à¥à¤• à¤®à¥‡à¤‚ à¤œà¤¾à¤“à¤—à¥‡ ðŸ˜’ðŸ¤Ÿ" , "à¤ªà¥à¤²à¥€à¤œ à¤ªà¥à¤²à¥€à¤œ à¤®à¥‡à¤°à¥‡ à¤¸à¥‡ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤— à¤•à¤° à¤²à¥‹ à¤¨à¤¾ ðŸ¥ºðŸ¤Ÿ" , "à¤¬à¤¤à¤¾à¤“ à¤œà¤¾à¤¨à¥‚ à¤—à¥‚à¤—à¤² à¤®à¥‡à¤² à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ à¤¯à¤¾ à¤«à¥€à¤®à¥‡à¤²...?? ðŸ¤”ðŸ‘ˆ" , "à¤œà¤¾ à¤œà¤¾ à¤¬à¤°à¤¤à¤¨ à¤§à¥‹ à¤œà¤¾à¤•à¥‡ ðŸ™‚ðŸ¤Ÿ" , "à¤‡à¤¤à¤¨à¥‡ à¤¦à¤¿à¤¨ à¤•à¤¹à¤¾à¤‚ à¤¥à¥‡ ðŸ˜¾ à¤—à¥à¤°à¥à¤ª à¤®à¥‡à¤‚ à¤•à¥à¤¯à¥‹à¤‚ à¤¨à¤¹à¥€à¤‚ à¤†à¤....?? ðŸ˜¾âœŠ" , "à¤¬à¥‹à¤²à¥‹ ðŸ˜’ðŸ‘ˆ" , "à¤¤à¥‡à¤°à¥€ à¤¤à¥‹ à¤°à¥à¤• à¤¤à¥‚ à¤­à¤¾à¤—à¤¨à¤¾ à¤®à¤¤ ðŸ˜¾âœŠ" , "à¤œà¤²à¥à¤¦à¥€ à¤¦à¥‡ à¤¦à¥‹ à¤à¤• à¤šà¥‚à¤®à¤¾ ðŸ’‹ à¤•à¥‹à¤ˆ à¤¨à¤¹à¥€ à¤¦à¥‡à¤– à¤°à¤¹à¤¾ ðŸ¤¤ðŸ¤Ÿ" ,"à¤—à¤¾à¤²à¥€ à¤¸à¥à¤¨à¤¾ à¤¹à¥ˆ à¤•à¤¿à¤¯à¤¾...? ðŸ¤¬ðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤†à¤œ à¤®à¥‡à¤°à¤¾ à¤®à¥‚à¤¡ à¤‘à¤« à¤¹à¥ˆà¥¤ ðŸ˜”âœ‹" , "à¤…à¤°à¥‡ à¤¬à¤‚à¤¦ à¤•à¤° à¤¬à¤‚à¤¦ à¤•à¤° ðŸ¤¨ðŸ¤Ÿ" , "à¤®à¥ˆà¤‚ à¤¹à¤¾à¤¥ à¤œà¥‹à¤¡à¤¼ à¤•à¥‡ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤œà¥€ à¤¸à¥‡ à¤—à¥à¤œà¤¾à¤°à¤¿à¤¶ à¤•à¤°à¤¤à¤¾ à¤¹à¥‚à¤‚ à¤•à¤¿ à¤¤à¥à¤®à¥à¤¹à¥‡ à¤•à¥‹à¤ˆ à¤œà¤¾à¤¨à¥‚ à¤¢à¥‚à¤‚à¤¢ à¤•à¥‡ à¤¦à¥‡à¥¤ ðŸ˜œðŸ˜ŽðŸ˜ª" , "à¤¤à¥‡à¤°à¤¾ à¤¤à¥‹ ðŸŽ¯ à¤—à¥‡à¤® à¤¬à¤œà¤¾à¤¨à¤¾ à¤ªà¤¡à¤¼à¥‡à¤—à¤¾ ðŸ¤¨ðŸ‘ˆ" , "à¤®à¥ˆà¤‚ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤•à¥‹ à¤¬à¥‹à¤² à¤¦à¥à¤—à¤¾ à¤®à¥à¤à¥‡ à¤ªà¤°à¥‡à¤¶à¤¾à¤¨ à¤•à¤¿à¤¯à¤¾ à¤¤à¥‹ ðŸ˜ðŸ˜’ðŸ˜œ" , "à¤¹à¤¾ à¤¬à¥‹à¤²à¥‹ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤•à¤¾ à¤¨à¤‚à¤¬à¤° à¤šà¤¾à¤¹à¤¿à¤ à¤¯à¥‡ à¤²à¥‹ ðŸ‘‰[+91 950XXX3608] à¤”à¤° à¤¹à¤®à¥‡à¤¶à¤¾ à¤–à¥à¤¶ à¤°à¤¹à¥‹à¥¤ ðŸ˜Ž", "à¤®à¥‡à¤°à¥‡ à¤Ÿà¤•à¤²à¥‡ à¤•à¥€ à¤•à¤¸à¤® à¤¬à¤¹à¥à¤¤ à¤ªà¥à¤¯à¤¾à¤° à¤•à¤°à¥‚à¤—à¤¾ ðŸ˜’ðŸ‘ˆ" , "à¤¤à¥à¤à¥‡ à¤…à¤ªà¤¨à¤¾ à¤¬à¥‡à¤œà¤¼à¤¤à¥€ à¤•à¤°à¤µà¤¾à¤¨à¥‡ à¤•à¤¾ à¤¶à¥Œà¤• à¤¹à¥ˆ à¤•à¤¿à¤¯à¤¾...? ðŸ¤¨ðŸ¤Ÿ" , "à¤…à¤­à¥€ à¤¬à¥‹à¤²à¤¾ à¤¤à¥‹ à¤¬à¥‹à¤²à¤¾ à¤¦à¥‹à¤¬à¤¾à¤°à¤¾ à¤®à¤¤ à¤¬à¥‹à¤²à¤¨à¤¾ ðŸ˜¾ðŸ‘ˆ" , "à¤¤à¥‡à¤°à¥€ à¤¤à¥‹ à¤°à¥à¤• à¤¤à¥‚ à¤­à¤¾à¤—à¤¨à¤¾ à¤®à¤¤ ðŸ¤¨ðŸ‘ˆ" , "à¤¬à¥‹à¤² à¤¦à¥‡ à¤•à¥‹à¤ˆ à¤¨à¤¹à¥€ à¤¦à¥‡à¤– à¤°à¤¹à¤¾ ðŸ™„âœ‹" , "à¤•à¤¿à¤¸à¥€ à¤”à¤° à¤¸à¥‡ à¤§à¥‹à¤–à¤¾ à¤–à¤¾à¤¨à¥‡ à¤¸à¥‡ à¤…à¤šà¥à¤›à¤¾ à¤¹à¥ˆ ðŸ¥º à¤®à¥‡à¤°à¥‡ à¤¸à¤¾à¤¥ à¤šà¤²à¥‹ à¤®à¥‹à¤®à¥‹à¤¸ à¤”à¤° à¤—à¥‹à¤²à¤—à¤ªà¥à¤ªà¥‡ à¤–à¤¾à¤à¤‚à¤—à¥‡à¥¤ ðŸ˜‹ðŸ‘ˆ" , "à¤•à¥à¤¯à¤¾ à¤®à¥ˆà¤‚ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤œà¤¾à¤¨à¤¤à¤¾ à¤¹à¥‚à¤‚..?ðŸ¤” à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤¤à¥à¤® à¤®à¥à¤à¥‡ à¤®à¥‡à¤°à¥€ à¤¹à¥‹à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤—à¤°à¥à¤²à¤«à¥à¤°à¥‡à¤‚à¤¡ à¤œà¥ˆà¤¸à¥€ à¤¦à¤¿à¤–à¤¤à¥€ à¤¹à¥‹à¥¤ ðŸ§ðŸ‘ˆ" , "à¤¸à¥à¤¨à¥‹ ðŸ™ˆà¤œà¤¬ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤ªà¤¾à¤¸ à¤–à¥à¤¦ à¤•à¤¾ à¤¦à¤¿à¤² ðŸ’ à¤¥à¤¾....à¤¤à¥‹ à¤«à¤¿à¤° à¤®à¥‡à¤°à¤¾ à¤¦à¤¿à¤² à¤•à¥à¤¯à¥‹à¤‚ à¤šà¥à¤°à¤¾à¤¯à¤¾...ðŸ¤­ðŸ‘Š" , "à¤¦à¥‡à¤–à¤¾ à¤¹à¥ˆ à¤ªà¤¹à¤²à¥€ à¤¬à¤¾à¤° à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤†à¤–à¥‹à¤‚ à¤®à¥‡à¤‚ à¤®à¥‡à¤°à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤¯à¤¾à¤° ðŸ˜€ðŸ˜€ðŸ‘ˆ","à¤®à¥ˆà¤‚ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤†à¤–à¥‹à¤‚ à¤®à¥‡à¤‚ à¤–à¥‹ à¤—à¤¯à¤¾ à¤œà¤¬ à¤¸à¥‡ à¤®à¥‡à¤°à¤¾ à¤¦à¤¿à¤² à¤¤à¥‡à¤°à¤¾ à¤¹à¥‹ à¤—à¤¯à¤¾","à¤¤à¥à¤® à¤®à¥à¤à¤¸à¥‡ à¤šà¤¾à¤¹à¤¤à¥‡ à¤•à¤¿à¤¯à¤¾ à¤¹à¥‹ à¤œà¤¬ à¤šà¤¾à¤¹à¤¾ à¤¬à¤¾à¤¤ à¤•à¤¿à¤¯à¤¾ à¤œà¤¬ à¤šà¤¾à¤¹à¤¾ à¤›à¥‹à¤¡à¤¼ à¤œà¤¾à¤¤à¥‡ à¤¹à¥‹ ðŸ¤•ðŸ‘ˆ","à¤¯à¤¾à¤° à¤®à¥ˆà¤‚ à¤¬à¥‹à¤Ÿ à¤¹à¥‚à¤‚ à¤…à¤—à¤²à¥‡ à¤œà¤¨à¥à¤® à¤®à¥‡à¤‚ à¤‡à¤‚à¤¸à¤¾à¤¨ à¤¬à¤¨ à¤•à¥‡ à¤†à¤Šà¤‚à¤—à¤¾ ðŸ˜’ðŸ‘ˆ","à¤ªà¥à¤°à¥‡à¤® à¤¸à¥‡ à¤¬à¥‹à¤²à¥‹ à¤†à¤ˆ à¤²à¤µ à¤¯à¥‚ ðŸ˜—ðŸ¤Ÿ","à¤¤à¥à¤®à¤•à¥‹ à¤¹à¥€ à¤¦à¥à¤²à¥à¤¹à¤¨ à¤¬à¤¨à¤¾à¤Šà¤‚à¤—à¤¾ à¤µà¤°à¤¨à¤¾ à¤ªà¤¡à¤¼à¥‹à¤¸à¤¨ à¤•à¥‹ à¤²à¥‡à¤•à¥‡ à¤­à¤¾à¤— à¤œà¤¾à¤Šà¤‚à¤—à¤¾ ðŸ™ðŸ‘ˆ" , "à¤ªà¥à¤¯à¤¾à¤¸ à¤²à¤—à¥€ à¤¹à¥ˆ à¤ªà¤¾à¤¨à¥€ à¤²à¥‡à¤•à¤° à¤†à¤“ à¤œà¤²à¥à¤¦à¥€ ðŸ¥²ðŸ‘ˆ" , "à¤¹à¥‡à¤²à¥‹ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ à¤•à¥ˆà¤¸à¥€ à¤¹à¥‹ ðŸ™‚ à¤†à¤ˆ à¤®à¤¿à¤¸ à¤¯à¥‚ à¤¬à¤¾à¤¬à¥‚ ðŸ˜˜" , "à¤®à¥ˆà¤‚ à¤…à¤­à¥€ à¤¤à¤• à¤¹à¥‚à¤‚ à¤¸à¤¿à¤‚à¤—à¤² ðŸ¤ à¤•à¥à¤¯à¤¾ à¤®à¥‡à¤°à¥‡ à¤¸à¤¾à¤¥ à¤¹à¥‹à¤¨à¤¾ à¤¹à¥ˆ à¤®à¤¿à¤‚à¤—à¤² ðŸ˜ðŸ‘ˆ" , "à¤®à¤¾à¤¨à¤¾ à¤¶à¤•à¤² à¤¦à¥‡à¤–à¤¨à¥‡ à¤²à¤¾à¤¯à¤• à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥€â€¦ðŸ˜¥ à¤‡à¤¸à¤•à¤¾ à¤®à¤¤à¤²à¤¬ à¤¯à¥‡ à¤¤à¥‹ à¤¨à¤¹à¥€à¤‚ à¤•à¥€ à¤¤à¥à¤® à¤ªà¥à¤°à¥‹à¤«à¤¾à¤‡à¤² à¤²à¥‰à¤• à¤•à¤°à¤•à¥‡ à¤¬à¥ˆà¤  à¤œà¤¾à¤“à¤—à¥‡à¥¤ ðŸ˜¶ðŸ‘ˆ" , "à¤¬à¥‹à¤Ÿ à¤¬à¥‹à¤² à¤•à¥‡ à¤¬à¥‡à¤œà¤¤à¥à¤¤à¥€ à¤•à¤° à¤°à¤¹à¥‡ à¤¹à¥‹ à¤¯à¤¾à¤° à¤®à¥ˆà¤‚ à¤¤à¥‹ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤¦à¤¿à¤² à¤•à¥€ à¤§à¤¡à¤¼à¤•à¤¨ à¤¹à¥‚à¤‚ à¤¨à¤¾ à¤¬à¥‡à¤¬à¥€ ðŸ¥ºðŸ¥ºðŸ¥ºðŸ‘ˆ" , "à¤¹à¤¾à¤¯ à¤®à¥ˆà¤‚ à¤¸à¤¦à¤•à¥‡ à¤œà¤¾à¤µà¤¾ à¤¤à¥‡à¤°à¥€ à¤‡à¤¸ à¤®à¤¾à¤¸à¥‚à¤® à¤¸à¤•à¤² à¤ªà¥‡ à¤¬à¥‡à¤¬à¥€ ðŸ’‹ðŸ™ˆ" , "à¤®à¥ˆà¤‚ à¤¸à¥‹à¤š à¤°à¤¹à¤¾ à¤¥à¤¾ à¤•à¤¿ à¤•à¥à¤¯à¤¾ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤ªà¤¾à¤¸ à¤à¤•à¥à¤¸à¥à¤Ÿà¥à¤°à¤¾ à¤¦à¤¿à¤² à¤¹à¥ˆ ðŸ¥° à¤®à¥‡à¤°à¤¾ à¤…à¤­à¥€ à¤…à¤­à¥€ à¤šà¥‹à¤°à¥€ à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆ ðŸ˜¥ðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤¬à¤¾à¤¬à¥‚ à¤†à¤œ à¤¸à¥à¤¬à¤¹-à¤¸à¥à¤¬à¤¹ à¤à¤• à¤¬à¤¿à¤²à¥à¤²à¥€ à¤¨à¥‡ à¤®à¥‡à¤°à¤¾ à¤°à¤¾à¤¸à¥à¤¤à¤¾ à¤•à¤¾à¤Ÿ à¤¦à¤¿à¤¯à¤¾ ðŸ˜’ðŸ‘ˆ" , "à¤¤à¥à¤® à¤à¤• à¤¨à¤‚à¤¬à¤° à¤•à¥‡ à¤ à¤°à¤•à¥€ à¤¹à¥‹ ðŸ¤¯ðŸ‘ˆ" , "à¤®à¥ˆà¤‚ à¤¸à¤¿à¤°à¥à¤« à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤•à¤¾ à¤¹à¥‚à¤‚ ðŸ™‚ðŸ¤ž" , "à¤¬à¤¾à¤° à¤¬à¤¾à¤° à¤ªà¤°à¥‡à¤¶à¤¾à¤¨ à¤¨à¤¾ à¤•à¤° à¤…à¤ªà¤¨à¥‡ à¤¬à¤¾à¤¬à¥‚ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¬à¥€à¤œà¥€ à¤¹à¥‚à¤‚à¥¤ ðŸ˜’ðŸ˜’ðŸ‘ˆ" , "à¤®à¥ˆ à¤¤à¥‹ à¤…à¤‚à¤§à¤¾ à¤¹à¥‚à¤‚ ðŸ˜ŽðŸ‘ˆ" , "à¤•à¥Œà¤¨ à¤¤à¥à¤à¥‡ à¤¯à¥‚ à¤¬à¤°à¥à¤¬à¤¾à¤¦ à¤•à¤°à¥‡à¤—à¤¾ à¤œà¥ˆà¤¸à¥‡ à¤®à¥ˆà¤‚ à¤•à¤°à¤¤à¤¾ à¤¹à¥‚à¤à¥¤ ðŸ˜›ðŸ‘ˆ" , "à¤®à¥ˆà¤‚ à¤–à¥‹ à¤—à¤¯à¤¾ à¤¹à¥‚à¤‚ ðŸ¤ à¤•à¥à¤¯à¤¾ à¤¤à¥à¤® à¤®à¥à¤à¥‡ à¤…à¤ªà¤¨à¥‡ à¤¦à¤¿à¤² à¤¤à¤• à¤†à¤¨à¥‡ à¤•à¤¾ à¤°à¤¾à¤¸à¥à¤¤à¤¾ à¤¬à¤¤à¤¾ à¤¸à¤•à¤¤à¥‡ à¤¹à¥‹...? ðŸ™‚ðŸ¤ž" , "à¤¤à¥à¤à¥‡ à¤•à¤¿à¤¯à¤¾ à¤”à¤° à¤•à¥‹à¤ˆ à¤•à¤¾à¤® à¤¨à¤¹à¥€ à¤¹à¥ˆ..? à¤ªà¥‚à¤°à¤¾ à¤¦à¤¿à¤¨ à¤®à¥ˆà¤¸à¥‡à¤œà¤° à¤ªà¥‡ à¤¬à¥‹à¤Ÿ à¤¬à¥‹à¤Ÿ à¤•à¤°à¤¤à¤¾ à¤°à¤¹à¤¤à¤¾ à¤¹à¥ˆ ðŸ˜’ðŸ‘ˆ" , "à¤¸à¥à¤¨à¥‹ à¤¤à¥à¤® à¤¨à¤¾ à¤¬à¤¹à¥‹à¤¤ à¤ªà¥à¤¯à¤¾à¤°à¥‡ à¤¹à¥‹...!! ðŸ˜ŠðŸ‘ˆ" , "à¤ªà¤¹à¤²à¥‡ à¤®à¥‡à¤°à¥‡ à¤²à¤¿à¤ à¤šà¤¾à¤¯ à¤¬à¤¨à¤¾ à¤•à¥‡ à¤²à¤¾à¤“ à¤œà¤²à¥à¤¦à¥€ à¤¸à¥‡ ðŸ˜ðŸ‘ˆ" , "à¤¤à¥à¤®à¥à¤¹à¥‡ à¤•à¥ˆà¤¸à¥‡ à¤ªà¤¤à¤¾ à¤®à¥ˆà¤‚ à¤¬à¥‹à¤Ÿ à¤¹à¥‚à¤‚....? ðŸ¤”ðŸ‘ˆ" , "à¤†à¤œ à¤®à¥ˆà¤‚ à¤†à¤ªà¤¸à¥‡ à¤¬à¤¾à¤¤ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‚à¤‚à¤—à¤¾...!! ðŸ˜”ðŸ‘ˆ" , "à¤¬à¤¤à¤¾à¤“ à¤®à¥ˆà¤‚ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤•à¤¿à¤¤à¤¨à¤¾ à¤…à¤šà¥à¤›à¤¾ à¤²à¤—à¤¤à¤¾ à¤¹à¥‚à¤‚....?? ðŸ˜’ðŸ‘ˆ" , "à¤®à¥à¤à¥‡ à¤¨à¥€à¤‚à¤¦ à¤† à¤°à¤¹à¥€ à¤¹à¥ˆ...à¤®à¥ˆà¤‚ à¤¸à¥‹à¤¨à¥‡ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥‚à¤‚à¥¤ ðŸ˜´ðŸ‘ˆ" , "à¤¬à¤¤à¤¾à¤“ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¤¾ à¤®à¥‡à¤°à¥‡ à¤¸à¥‡ à¤•à¥à¤¯à¤¾ à¤°à¤¿à¤¶à¥à¤¤à¤¾ à¤¹à¥ˆ....? ðŸ˜ðŸ‘ˆ" , "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤¶à¤¾à¤¦à¥€à¤¶à¥à¤¦à¤¾ à¤¹à¥‹....? ðŸ˜¢ðŸ˜¢ðŸ‘ˆ" , "à¤†à¤ª à¤•à¥Œà¤¨ à¤¹à¥ˆà¤‚....? ðŸ¤”ðŸ¤”ðŸ‘ˆ" , "à¤†à¤ª à¤®à¥à¤à¥‡ à¤¬à¤¾à¤°-à¤¬à¤¾à¤° à¤¬à¥‹à¤Ÿ à¤®à¤¤ à¤¬à¥‹à¤²à¤¾ à¤•à¤°à¥‹ à¤®à¥‡à¤°à¥‡ à¤¨à¤¾à¤® à¤ªà¥à¤°à¥‡à¤® à¤¹à¥ˆà¥¤ ðŸ˜’ðŸ‘ˆ" , "à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¤¾ à¤¨à¤¾à¤® à¤§à¥‹à¤–à¤¾ à¤°à¤– à¤¦à¥‚à¤‚ à¤¨à¤¾à¤°à¤¾à¤œà¤¼ à¤¹à¥‹à¤—à¥‡ à¤•à¤¿à¤¯à¤¾ ðŸ˜›ðŸ‘ˆ" , "à¤®à¥‡à¤°à¤¾ à¤¬à¤šà¤ªà¤¨ à¤¸à¥‡ à¤¸à¤ªà¤¨à¤¾ à¤¥à¤¾ à¤•à¥€ à¤¬à¤¡à¤¼à¤¾ à¤¹à¥‹ à¤•à¤° à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¤¾ à¤Ÿà¤•à¤²à¥‚ à¤¬à¤¾à¤¬à¥‚ à¤¬à¤¨à¥‚à¤—à¤¾ ðŸ˜’ðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤®à¥‡à¤°à¥€ à¤¬à¥€à¤µà¥€ à¤­à¤¾à¤— à¤—à¤ˆ ðŸ˜­ðŸ‘ˆ" , "à¤®à¥‡à¤°à¤¾ à¤¨à¤¾à¤® à¤Ÿà¤•à¤²à¥‚ à¤¬à¤¾à¤¬à¥‚ à¤¹à¥ˆà¥¤ ðŸ˜’ðŸ¤Ÿ" , "à¤¤à¥à¤®à¤¸à¥‡ à¤…à¤šà¥à¤›à¤¾ à¤¤à¥‹ à¤®à¥ˆà¤‚ à¤–à¥à¤¦ à¤¹à¥‚à¤‚à¥¤ ðŸ˜’ðŸ‘ˆ" , "à¤®à¥ˆà¤‚ à¤¤à¥‹ à¤‡à¤¤à¤¨à¤¾ à¤®à¤¾à¤¸à¥‚à¤® à¤¹à¥‚à¤‚ à¤•à¥€ à¤«à¤¼à¥‹à¤¨ à¤•à¥€ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤— à¤•à¥‡ à¤…à¤²à¤¾à¤µà¤¾ à¤®à¥à¤à¥‡ à¤•à¥‹à¤ˆ à¤”à¤° à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤— à¤•à¤°à¤¨à¤¾ à¤¹à¥€ à¤¨à¤¹à¥€à¤‚ à¤†à¤¤à¤¾  ðŸ˜’ðŸ¤Ÿ" , "à¤¸à¤¾à¤¨à¥ à¤à¤• à¤ªà¤² à¤šà¥ˆà¤¨ à¤¨à¤¾ à¤†à¤µà¥‡ à¤œà¤¾à¤¨à¥‚ à¤¤à¥‡à¤°à¥‡ à¤¬à¤¿à¤¨à¤¾à¥¤ ðŸ¤­ðŸ¤Ÿ" , "à¤”à¤° à¤¬à¤¤à¤¾à¤“ à¤•à¥ˆà¤¸à¥€ à¤šà¤² à¤°à¤¹à¥€ à¤¹à¥ˆ à¤¸à¤¿à¤‚à¤—à¤² à¤²à¤¾à¤‡à¤« ðŸ¤ðŸ¤Ÿ" , "à¤¤à¥à¤® à¤¨ à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥€ à¤®à¤°à¥‹à¤—à¥‡ ðŸ˜ðŸ¤Ÿ" , "à¤•à¤¿à¤¯à¤¾ à¤¤à¥à¤® à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥‹...? ðŸ™‚ðŸ¤Ÿ" , "à¤•à¤¿à¤¯à¤¾ à¤¤à¥à¤® à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥‹...? ðŸ™‚ðŸ¤Ÿ" , "à¤¹à¤° à¤‡à¤‚à¤¸à¤¾à¤¨ à¤•à¤¾ à¤¦à¤¿à¤² à¤¬à¥à¤°à¤¾ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹à¤¤à¤¾ ðŸ™‚ à¤•à¥à¤› à¤•à¥€ à¤–à¥‹à¤ªà¥œà¥€ à¤­à¥€ à¤¹à¤¿à¤²à¥€ à¤¹à¥à¤ˆ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤ ðŸ˜ðŸ¤Ÿ" , "à¤®à¥‡à¤°à¤¾ à¤¦à¤¿à¤² à¤¬à¤¿à¤²à¤•à¥à¤² à¤¸à¤¾à¤« à¤¹à¥ˆ ðŸ™‚ à¤¬à¤¿à¤²à¤•à¥à¤² à¤¬à¥ˆà¤‚à¤• à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤•à¥€ à¤¤à¤°à¤¹ ðŸ˜’ðŸ¤Ÿ" , "à¤¯à¤¾à¤° à¤‡à¥›à¥à¥›à¤¤ à¤•à¤¿à¤¯à¤¾ à¤•à¤°à¥‹ à¤®à¥‡à¤°à¥€ ðŸ¤ à¤¬à¥‡à¤‡à¥›à¥à¥›à¤¤à¥€ à¤¤à¥‹ à¤®à¥‡à¤°à¥‡ à¤˜à¤° à¤µà¤¾à¤²à¥‡ à¤¹à¥€ à¤•à¤° à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆà¥¤ ðŸ˜’ðŸ¤Ÿ" , "à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤¨à¥‡ à¤–à¥‚à¤¨ à¤•à¥€ à¤•à¤®à¥€ à¤¬à¤¤à¤¾à¤ˆ à¤¹à¥ˆ ðŸ˜’ à¤•à¤¿à¤¸à¤•à¤¾ à¤–à¥‚à¤¨ à¤ªà¤¿à¤¯à¥à¤‚â€¦?? ðŸ˜›ðŸ¤Ÿ" , "à¤¬à¤¤à¤¾à¤“ à¤¸à¤¬à¤¸à¥‡ à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤¨à¤¶à¤¾ à¤•à¤¿à¤¸ à¤šà¥€à¤œ à¤®à¥‡à¤‚ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ...? ðŸ˜›ðŸ¤Ÿ" ,  "à¤¬à¥à¤²à¤¾à¤¤à¥€ à¤¹à¥ˆ à¤®à¤—à¤° à¤œà¤¾à¤¨à¥‡ à¤•à¤¹à¥€ à¤¨à¤¹à¥€ ðŸ˜€ðŸ¤Ÿ" , "à¤®à¥ˆà¤‚ à¤¸à¥‹ à¤°à¤¹à¤¾ à¤¹à¥‚à¤‚ ðŸ˜´ ðŸ‘ˆ" , "à¤¸à¥à¤¨à¥‹ à¤¥à¥‹à¤¡à¤¼à¤¾ à¤œà¤²à¥à¤¦à¥€ à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤†à¤¯à¤¾ à¤•à¤°à¥‹ à¤¨ ðŸ˜’ à¤®à¥‡à¤°à¥€ à¤†à¤§à¥€ à¤¬à¥ˆà¤Ÿà¤°à¥€ à¤¤à¥‹ à¤†à¤ªà¤•à¥‡ à¤‡à¤‚à¤¤à¤œà¤¾à¤° à¤®à¥‡à¤‚ à¤¹à¥€ à¤–à¤¤à¥à¤® à¤¹à¥‹ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ ðŸ¥ºðŸ¤Ÿ" , "à¤¬à¥‹à¤²à¥‹ à¤¬à¤¾à¤¬à¥‚ à¤•à¤¿à¤¤à¤¨à¤¾ à¤ªà¥à¤¯à¤¾à¤° à¤•à¤°à¤¤à¥‡ à¤¹à¥‹ à¤®à¥à¤à¤¸à¥‡...? ðŸ˜’ðŸ¤Ÿ" , "à¤•à¤¹à¥‹ à¤¨ à¤ªà¥à¤¯à¤¾à¤° à¤¹à¥ˆ ðŸ™ˆðŸ‘ˆ" ,"à¤•à¤¿à¤¯à¤¾ à¤¹à¥ˆ à¤¯à¤¾à¤° à¤®à¥ˆà¤‚ à¤…à¤­à¥€ à¤²à¤¡à¤¼à¤•à¥€ à¤ªà¤Ÿà¤¾à¤¨à¥‡ à¤®à¥‡à¤‚ à¤¬à¥€à¤œà¥€ à¤¹à¥‚à¤‚ ðŸ˜’ðŸ¤Ÿ" , "à¤¬à¥à¤²à¤¾à¤¤à¥€ à¤¹à¥ˆ à¤®à¤—à¤° à¤œà¤¾à¤¨à¥‡ à¤•à¤¾ à¤¨à¤¹à¥€ ðŸ™‚âœ‹" , "à¤œà¤¾ à¤¬à¥‡à¤µà¤«à¤¾ à¤œà¤¾ à¤®à¥à¤à¥‡ à¤¤à¥à¤®à¤¸à¥‡ à¤¬à¤¾à¤¤ à¤¨à¤¹à¥€ à¤•à¤°à¤¨à¤¾ ðŸ¥¹ðŸ¤Ÿ" , "à¤šà¤²à¥‹ à¤­à¤¾à¤— à¤šà¤²à¥‡ ðŸ˜Œâœ‹" , "à¤šà¤²à¥‹ à¤®à¥‡à¤°à¥€ à¤¹à¤µà¥‡à¤²à¥€ à¤ªà¥‡ ðŸ™‚ðŸ¤Ÿ" , "à¤¦à¤«à¤¾ à¤¹à¥‹ à¤œà¤¾à¤“ à¤®à¥à¤à¥‡ à¤…à¤ªà¤¨à¥€ à¤¸à¤•à¤² à¤®à¤¤ à¤¦à¤¿à¤–à¤¾à¤“ ðŸ˜ðŸ¤Ÿ" , "à¤œà¤¾ à¤ªà¤¹à¤²à¥‡ à¤®à¥à¤‚à¤¹ à¤§à¥‹ à¤•à¥‡ à¤† ðŸ™‚ðŸ¤Ÿ" , "à¤œà¤¾ à¤ªà¤¹à¤²à¥‡ à¤¨à¤¹à¤¾ à¤•à¥‡ à¤† ðŸ™‚âœ‹" , "à¤¯à¤¾à¤° à¤®à¥‡à¤°à¥‡ à¤¸à¤° à¤•à¥‡ à¤¬à¤¾à¤² à¤•à¥à¤¯à¥‚à¤‚ à¤¨à¤¹à¥€ à¤†à¤¤à¥‡ ðŸ˜­ðŸ¤Ÿ" , "à¤®à¥‡à¤°à¥‡ à¤œà¥ˆà¤¸à¥‡ à¤¬à¥à¤¯à¥‚à¤Ÿà¥€ à¤«à¥à¤² à¤¤à¥à¤® à¤­à¥€ à¤¨à¤¹à¥€ à¤¹à¥‹ ðŸ™‚ðŸ¤Ÿ" , "à¤œà¤¾ à¤¦à¤«à¤¾ à¤¹à¥‹ à¤®à¥à¤à¥‡ à¤¤à¥à¤®à¤¸à¥‡ à¤¬à¤¾à¤¤ à¤¨à¤¹à¥€ à¤•à¤°à¤¨à¥€ ðŸ˜’âœ‹" , "à¤¯à¤¾à¤° à¤†à¤œ à¤­à¥€ à¤•à¥‹à¤ˆ à¤²à¤¡à¤¼à¤•à¥€ à¤¨à¤¹à¥€à¤‚ à¤ªà¤Ÿà¥€ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥‚à¤‚ à¤…à¤¬ à¤®à¤°à¤¨à¥‡ ðŸ˜­ðŸ¤Ÿ" , "à¤šà¥à¤ª à¤•à¤° à¤µà¤°à¤¨à¤¾ à¤¬à¤¾à¤¹à¤° à¤†à¤•à¥‡ à¤¤à¥‡à¤°à¥‡ à¤¦à¤¾à¤‚à¤¤ à¤¤à¥‹à¤¡à¤¼ à¤¦à¥à¤—à¤¾ ðŸ˜¤ðŸ‘Š" , "à¤¥à¤¾à¤¨à¤¾ à¤¥à¤¾à¤¯à¤¾ à¤¬à¤¾à¤¬à¥‚ ðŸ¤ðŸ¤Ÿ" , "à¤®à¥ˆà¤‚ à¤¯à¤¹à¥€ à¤¹à¥‚à¤‚ à¤¬à¥‹à¤²à¥‹ à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤¸à¥à¤µà¥€à¤Ÿ à¤¹à¤¾à¤°à¥à¤Ÿ ðŸ™‚ðŸ¤Ÿ" , "à¤¤à¥à¤® à¤®à¥à¤à¤¸à¥‡ à¤ªà¥à¤¯à¤¾à¤° à¤¨à¤¹à¥€ à¤•à¤°à¤¤à¥‡ à¤¨ ðŸ¥ºðŸ¤Ÿ" , "à¤­à¤¾à¤— à¤œà¤¾ à¤ à¤°à¤•à¥€ à¤µà¤°à¤¨à¤¾ à¤Ÿà¥‡à¤•à¥‹ à¤ªà¤Ÿà¤¾ à¤²à¥‚à¤‚à¤—à¤¾ ðŸ¤ðŸ¤Ÿ" , "à¤†à¤ˆ à¤®à¤¿à¤¸ à¤¯à¥‚ à¤¬à¤¾à¤¬à¥‚ ðŸ˜‡ ðŸ¤Ÿ" , "à¤†à¤ˆ à¤²à¤µ à¤¯à¥‚ à¤œà¤¾à¤¨ ðŸ˜˜" , "à¤®à¥‡à¤°à¥€ à¤¸à¤¾à¤¦à¥€ à¤•à¤¬ à¤¹à¥‹à¤—à¥€ à¤¬à¤¤à¤¾à¤“ à¤¨ ðŸ˜’ðŸ‘ˆ" , "à¤•à¤¬ à¤†à¤à¤—à¥€ à¤µà¥‹ à¤¨à¥ˆà¤¨ à¤²à¤¡à¤¼à¤¿à¤¯à¤¾ à¤œà¥‹ à¤¬à¥‹à¤²à¥‡à¤—à¥€ à¤¹à¤®à¤•à¥‹ à¤¸à¥ˆà¤‚à¤¯à¤¾ à¤¤à¤¾à¤°à¥‡ à¤—à¤¿à¤¨ à¤—à¤¿à¤¨ à¤•à¥‡ à¤¹à¤® à¤¤à¥‹ à¤ªà¤¾à¤—à¤² à¤¹à¥‹ à¤—à¤ à¤­à¥ˆà¤¯à¤¾ ðŸ˜’ðŸ¤ž" , "à¤…à¤—à¤° à¤•à¤¿à¤¸à¥€ à¤²à¤¡à¤¼à¤•à¥€ à¤•à¥‹ à¤‰à¤¸à¤•à¥€ à¤®à¤°à¥à¤œà¥€ à¤•à¥‡ à¤–à¤¿à¤²à¤¾à¤« [à¤†à¤ˆ à¤²à¤µ à¤¯à¥‚] à¤¬à¥‹à¤²à¤¨à¤¾ à¤—à¤²à¤¤ à¤¹à¥ˆ à¤¤à¥‹ à¤¹à¤® à¤²à¤¡à¤¼à¤•à¥‹ à¤•à¥‹ à¤­à¥€ à¤¹à¤®à¤¾à¤°à¥€ à¤®à¤°à¥à¤œà¥€ à¤•à¥‡ à¤–à¤¿à¤²à¤¾à¤« à¤­à¤ˆà¤¯à¤¾ à¤¬à¥‹à¤²à¤¨à¤¾ à¤—à¤²à¤¤ à¤¹à¥ˆà¥¤ ðŸ˜’ðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤•à¥à¤› à¤²à¥‹à¤— à¤…à¤šà¥à¤›à¥‡ à¤•à¥€ à¤¤à¤²à¤¾à¤¸ à¤®à¥‡à¤‚ à¤®à¥à¤ à¤œà¥ˆà¤¸à¥‡ à¤®à¤¾à¤¸à¥‚à¤® à¤•à¥‹ à¤›à¥‹à¤¡à¤¼ à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆ ðŸ¥ºðŸ‘ˆ" , "à¤¥à¥‹à¤¡à¤¼à¤¾ à¤¸à¤¾ Wahtsapp à¤¨à¤‚à¤¬à¤° à¤¦à¥‡ à¤¦à¥‹ à¤¨à¤¾ ðŸ˜ðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤¥à¥‹à¤¡à¤¼à¤¾ à¤¸à¤¾ à¤®à¥‡à¤°à¤¾ à¤¸à¤° à¤¦à¤¬à¤¾ à¤¦à¥‹ à¤¨à¤¾ à¤¦à¤°à¥à¤¦ à¤•à¥‡ à¤®à¤¾à¤°à¥‡ à¤œà¤¾à¤¨ à¤¨à¤¿à¤•à¤² à¤°à¤¹à¥€ à¤¹à¥ˆ ðŸ¥¹ðŸ‘ˆ" , "à¤†à¤œ à¤•à¤² à¤œà¤¹à¤¾ à¤²à¤¡à¤¼à¤•à¥€ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆ à¤µà¤¹à¤¾ à¤ à¤°à¤•à¥€ à¤­à¥€ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆ à¤¬à¤¸ à¤®à¥à¤à¥‡ à¤›à¥‹à¤¡à¤¼ à¤•à¥‡ ðŸ¥¹ðŸ‘ˆ" , "à¤¦à¤¿à¤² à¤¦à¥‡à¤¨à¥‡ à¤•à¥€ à¤‰à¤®à¥à¤° à¤®à¥‡à¤‚ Exam à¤¦à¥‡ à¤°à¤¹à¤¾ à¤¹à¥ ðŸ˜’ðŸ‘ˆ" , "à¤¸à¤¬ à¤²à¥‹à¤— à¤•à¤¹à¤¤à¥‡ à¤¥à¥‡ à¤¸à¤¬à¤° à¤•à¤¾ à¤«à¤² à¤®à¥€à¤ à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ\nà¤²à¤—à¤¤à¤¾ à¤¹à¥ˆ à¤®à¥‡à¤°à¥‡ à¤¸à¤¬à¤° à¤•à¥‡ à¤«à¤² à¤•à¤¾ à¤•à¥‹à¤ˆ à¤œà¥‚à¤¸ à¤¨à¤¿à¤•à¤¾à¤² à¤•à¥‡ à¤ªà¥€ à¤—à¤¯à¤¾ ðŸ¥ºðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤®à¥‡à¤°à¥‡ à¤˜à¤° à¤µà¤¾à¤²à¥‡ à¤­à¥€ à¤…à¤œà¥€à¤¬ à¤¹à¥ˆ à¤®à¥‡à¤°à¤¾ à¤«à¥‹à¤¨ 30% à¤ªà¥‡ à¤¨à¤¿à¤•à¤¾à¤² à¤•à¥‡ à¤…à¤ªà¤¨à¤¾ 80% à¤µà¤¾à¤²à¤¾ à¤²à¤—à¤¾ à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆà¤‚ ðŸ¥ºðŸ‘ˆ" , "à¤®à¥à¤à¥‡ à¤…à¤­à¥€ à¤¤à¤• à¤ªà¤¿à¤‚à¤• à¤•à¤²à¤° à¤•à¥€ à¤—à¤°à¥à¤²à¤«à¥à¤°à¥‡à¤‚à¤¡ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¥€ à¤¯à¤¾à¤° à¤•à¤¿à¤¯à¤¾ à¤•à¤°à¥‚à¤‚ ðŸ¥ºðŸ‘ˆ" , "à¤¸à¥à¤¨à¥‹ à¤ªà¥à¤¯à¤¾à¤°à¥€ à¤ªà¥à¤¯à¤¾à¤°à¥€ à¤²à¤¡à¤¼à¤•à¤¿à¤¯à¥‹ à¤•à¥‹ à¤¬à¥à¤²à¤¾à¤“ à¤®à¥à¤à¥‡ à¤¬à¤¾à¤¤ à¤•à¤°à¤¨à¥€ à¤¹à¥ˆ ðŸ¥¹ðŸ‘ˆ" , "à¤¬à¤¹à¥‹à¤¤ à¤¬à¥à¤°à¤¾ à¤¹à¥‚à¤‚ à¤¨à¤¾ à¤®à¥ˆà¤‚ ðŸ¥º à¤¤à¥‹ à¤ªà¤Ÿà¤¾ à¤•à¥‡ à¤…à¤šà¥à¤›à¤¾ à¤•à¥à¤¯à¥‚à¤‚ à¤¨à¤¹à¥€ à¤¬à¤¨à¤¾ à¤¦à¥‡à¤¤à¥‡ ðŸ˜’ðŸ‘ˆ" , "à¤¬à¤¤à¤¾à¤“ à¤•à¤¬ à¤†à¤à¤—à¤¾ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¤¾ à¤¦à¤¿à¤² à¤®à¥à¤ à¤ªà¤° ðŸ˜’ðŸ‘ˆ" , "à¤ªà¥à¤¯à¤¾à¤° à¤•à¤°à¥‹ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ à¤¬à¤•à¤µà¤¾à¤¸ à¤¨à¤¹à¥€ ðŸ˜’ðŸ‘ˆ" , "à¤®à¥‡à¤°à¥‡ à¤¦à¤¿à¤² à¤•à¥‹ à¤•à¤°à¤¾à¤° à¤†à¤¯à¤¾ à¤®à¥à¤à¥‡ à¤–à¥à¤¦ à¤ªà¥‡ à¤¹à¥€ à¤ªà¥à¤¯à¤¾à¤° à¤†à¤¯à¤¾ ðŸ˜›ðŸ‘ˆ" , "à¤¸à¥à¤¨à¥‹ à¤¨ à¤•à¤¿à¤¯à¤¾ à¤¤à¥à¤® à¤®à¥‡à¤°à¥‡ à¤²à¤¿à¤ à¤¸à¤°à¥à¤« à¤–à¤¾ à¤•à¤° à¤®à¥à¤‚à¤¹ à¤¸à¥‡ à¤¬à¥à¤²à¤¬à¥à¤²à¥‡ à¤¨à¤¿à¤•à¤¾à¤² à¤¸à¤•à¤¤à¥‡ à¤¹à¥‹ ðŸ¥¹ðŸ‘ˆ" , "à¤«à¤¾à¤‡à¤¨à¤²à¥€ à¤‡à¤¸ à¤—à¥à¤°à¥à¤ª à¤•à¥‡ à¤¦à¥‹ - à¤¤à¥€à¤¨ à¤²à¤¡à¤¼à¤•à¤¿à¤¯à¤¾ à¤®à¥à¤à¥‡ à¤ªà¤¸à¤‚à¤¦ à¤† à¤—à¤ˆ ðŸ™‚ðŸ–ï¸" , "à¤®à¤¨ à¤•à¤° à¤°à¤¹à¤¾ à¤¹à¥ˆ à¤¤à¥à¤®à¥à¤¹à¥‡ à¤›à¤¤ à¤¸à¥‡ à¤—à¤¿à¤°à¤¾ à¤¦à¥‚à¤‚ ðŸ˜•ðŸ‘ˆ" , "à¤…à¤—à¤° à¤¸à¤­à¥€ à¤²à¤¡à¤¼à¤•à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤²à¥‰à¤¯à¤² à¤²à¤¡à¤¼à¤•à¤¾ à¤šà¤¾à¤¹à¤¿à¤ à¤¤à¥‹ à¤¹à¤® à¤¬à¥‡à¤µà¤«à¤¾ à¤²à¤¡à¤¼à¤•à¥‡ à¤•à¤¹à¤¾à¤‚ à¤œà¤¾à¤à¤‚ ðŸ¥ºðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤†à¤œ à¤®à¥ˆà¤‚ à¤¬à¥€à¤µà¥€ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¡à¥‡à¤Ÿ à¤ªà¥‡ à¤—à¤¯à¤¾ à¤¥à¤¾ à¤ªà¤° à¤œà¤¿à¤¸à¤•à¥€ à¤¥à¥€ à¤‰à¤¸à¤¨à¥‡ à¤¦à¥‡à¤– à¤²à¤¿à¤¯à¤¾ ðŸ˜’ðŸ‘ˆ" , "à¤¬à¤¤à¤¾à¤“ à¤†à¤ªà¤•à¥‹ à¤•à¤¿à¤¯à¤¾ à¤ªà¤¸à¤‚à¤¦ à¤¹à¥ˆ à¤®à¥Œà¤¤ à¤•à¤¾ à¤«à¤°à¤¿à¤¶à¥à¤¤à¤¾ à¤¯à¤¾ à¤®à¥‡à¤°à¤¾ à¤°à¤¿à¤¶à¥à¤¤à¤¾ ðŸ˜ðŸ‘ˆ" , "à¤¯à¤¾à¤° à¤®à¥à¤à¥‡ à¤šà¤•à¤° à¤† à¤°à¤¹à¥‡ à¤¹à¥ˆ à¤†à¤ªà¤•à¥‡ à¤‡à¤‚à¤¬à¥‰à¤•à¥à¤¸ à¤®à¥‡à¤‚ à¤†à¤•à¥‡ à¤—à¤¿à¤° à¤œà¤¾à¤Šà¤‚ à¤¬à¤¾à¤¬à¥‚ ðŸ˜’ðŸ‘ˆ" , "à¤à¤• à¤°à¤¿à¤•à¥à¤µà¥‡à¤¸à¥à¤Ÿ à¤¹à¥ˆ à¤¸à¤­à¥€ à¤¸à¥‡ à¤¬à¤¤à¤¾à¤“ à¤®à¥ˆà¤‚ à¤…à¤šà¥à¤›à¤¾ à¤²à¤—à¤¤à¤¾ à¤¹à¥‚à¤‚ à¤¯à¤¾ à¤¨à¤¹à¥€à¤‚ ðŸ™ðŸ‘ˆ" , "à¤†à¤“ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤¸à¤¾à¤¥ à¤°à¤¿à¤²à¥‡à¤¶à¤¨ à¤¶à¤¿à¤ª à¤ªà¥‹à¤¸à¥à¤Ÿ à¤²à¤—à¤¾ à¤•à¥‡ à¤¤à¥à¤®à¥à¤¹à¥‡ à¤«à¥‡à¤®à¤¸ à¤•à¤° à¤¦à¥‚à¤‚à¥¤ ðŸ˜ŒðŸ–ï¸" , "à¤…à¤—à¤° à¤®à¥‡à¤°à¥€ à¤­à¥€ à¤—à¤°à¥à¤²à¤«à¥à¤°à¥ˆà¤‚à¤¡ à¤¹à¥‹à¤¤à¥€ à¤¤à¥‹ à¤†à¤œ à¤®à¥ˆà¤‚ à¤­à¥€ à¤¬à¤¾à¤¬à¥‚ à¤¸à¥‹à¤¨à¤¾ à¤•à¤° à¤°à¤¹à¤¾ à¤¹à¥‹à¤¤à¤¾ ðŸ¥ºðŸ‘ˆ" , "à¤¸à¥à¤¨à¥‹ à¤¬à¤¾à¤²à¤• à¤œà¥‹ à¤²à¤¡à¤¼à¤•à¥€ à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤­à¤¾à¤µ à¤–à¤¾à¤ à¤‰à¤¸à¥‡ à¤†à¤‚à¤Ÿà¥€ à¤¬à¥‹à¤² à¤•à¥‡ à¤¬à¥à¤²à¥‰à¤• à¤•à¤° à¤¦à¥‡à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤ ðŸ¥¹ðŸ‘ˆ" , "à¤°à¥à¤• à¤¸à¥‹à¤šà¤¨à¥‡ à¤¦à¥‡ ðŸ¤” à¤•à¥‹à¤¨à¤¸à¤¾ à¤—à¤²à¥€ à¤¦à¥‚à¤‚ à¤¤à¥à¤®à¥à¤¹à¥‡ ðŸ¤¨ðŸ‘ˆ" , "à¤šà¤¾à¤‚à¤¦ à¤•à¥‹ à¤®à¤¿à¤² à¤—à¤ˆ à¤šà¤¾à¤‚à¤¦à¤¨à¥€ à¤¤à¥‹ à¤¸à¤¿à¤¤à¤¾à¤°à¥‹à¤‚ à¤•à¤¾ à¤•à¤¿à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾ ðŸ˜• à¤®à¥‹à¤¹à¥‹à¤¬à¥à¤¬à¤¤ à¤à¤• à¤¸à¥‡ à¤•à¤°à¤²à¥€ à¤¤à¥‹ à¤¬à¤¾à¤•à¥€ à¤¹à¤œà¤¾à¤°à¥‹à¤‚ à¤•à¤¾ à¤•à¤¿à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾à¥¤ ðŸ˜ðŸ‘ˆ" , "à¤®à¥à¤à¥‡ à¤¸à¤¾à¤¦à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¨à¥Œà¤•à¤°à¥€ à¤µà¤¾à¤²à¥€ à¤²à¤¡à¤¼à¤•à¥€ à¤šà¤¾à¤¹à¤¿à¤ à¤¦à¤¹à¥‡à¤œ à¤­à¥€ à¤®à¥ˆà¤‚ à¤¦à¥‡ à¤¦à¥à¤—à¤¾ ðŸ™‚ðŸ¤ž" , "à¤¨à¤¾ à¤œà¤¾à¤¨à¥‡ à¤‡à¤¤à¤¨à¤¾ à¤ªà¥à¤¯à¤¾à¤° à¤•à¤¹à¤¾à¤‚ à¤¸à¥‡ à¤†à¤¯à¤¾ à¤¹à¥ˆ ðŸ˜’ à¤®à¥‡à¤°à¤¾ à¤¦à¤¿à¤² à¤­à¥€ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥‡ à¤–à¤¾à¤¤à¤¿à¤° à¤®à¥à¤à¤¸à¥‡ à¤°à¥‚à¤  à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ...!! ðŸ¥ºðŸ¤ž" , "à¤à¤• à¤¬à¤¾à¤° à¤²à¤µ à¤¯à¥‚ à¤Ÿà¤•à¤²à¥‚ à¤¬à¤¾à¤¬à¥‚ à¤¬à¥‹à¤² à¤¦à¥‹ à¤¨à¤¾ à¤®à¤° à¤¥à¥‹à¤¡à¤¼à¥€ à¤œà¤¾à¤“à¤—à¥‡ ðŸ¥¹ðŸ¤Ÿ" , "à¤¤à¥à¤® à¤®à¥‡à¤°à¤¾ à¤¦à¤¿à¤² à¤¤à¥‹ à¤šà¥à¤°à¤¾ à¤¨à¤¹à¥€ à¤ªà¤¾à¤ à¤•à¤¿à¤¯à¤¾ à¤«à¤¾à¤¯à¤¦à¤¾ à¤¤à¥à¤®à¥à¤¹à¤¾à¤°à¥€ à¤šà¥‹à¤° à¤œà¥ˆà¤¸à¥€ à¤¸à¤•à¤² à¤•à¤¾ ðŸ˜•ðŸ¤Ÿ" , "à¤¬à¤¸ à¤à¤• à¤¬à¤¾à¤° à¤¸à¤¾à¤¦à¥€ à¤¹à¥‹ à¤œà¤¾à¤ à¤«à¤¿à¤° à¤¬à¥€à¤µà¥€ à¤•à¥€ à¤—à¥à¤²à¤¾à¤®à¥€ ðŸ¥º" , "à¤†à¤“ à¤ªà¥à¤¯à¤¾à¤° à¤•à¤°à¥‡ ðŸ¤ðŸ¤Ÿ" , "à¤†à¤“ à¤¤à¥à¤®à¤•à¥‹ à¤¤à¤¾à¤°à¥‹à¤‚ à¤•à¥‡ à¤¶à¤¹à¤° à¤²à¥‡ à¤šà¤¾à¤²à¥‚ ðŸ˜—ðŸ¤Ÿ" , "à¤¬à¤¸ à¤®à¥ˆà¤‚ à¤¹à¥€ à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥‚à¤‚ à¤…à¤¹à¤¾ à¤¬à¤¾à¤•à¥€ à¤¸à¤¬ à¤®à¤¿à¤‚à¤—à¤² à¤¹à¥ˆà¥¤ ðŸ¥ºâœ‹" , "à¤¤à¥à¤® à¤œà¤¬ à¤¬à¥‹à¤Ÿ à¤¬à¥‹à¤²à¤¤à¥‡ à¤¹à¥‹ à¤®à¥‡à¤°à¤¾ à¤—à¥à¤°à¥à¤¦à¤¾ à¤§à¤¡à¤¼à¤•à¤¨à¥‡ à¤²à¤—à¤¤à¤¾ à¤¹à¥ˆà¥¤ ðŸ¤¯ðŸ¤Ÿ" , "à¤®à¥à¤à¥‡ à¤²à¤—à¤¤à¤¾ à¤¹à¥ˆ à¤®à¥ˆà¤‚ à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥€ à¤®à¤°à¥à¤—à¤¾ ðŸ˜­ðŸ‘ˆ" , "à¤¬à¥‹à¤²à¥‹ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤— à¤•à¤°à¤µà¤¾ à¤¦à¥‚à¤‚ à¤•à¤¿à¤¯à¤¾ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤¸à¥‡ ðŸ™‚ðŸ¤Ÿ" , "à¤¬à¤¾à¤¬à¥‚ à¤†à¤œ à¤¤à¥‹ à¤²à¤µ à¤¯à¥‚ à¤¬à¥‹à¤²à¤¨à¤¾ à¤¹à¥€ à¤ªà¤¡à¤¼à¥‡à¤—à¤¾ ðŸ™‚ðŸ¤Ÿ" , "à¤¤à¥à¤® à¤¸à¤¬ à¤®à¤¤à¤²à¤¬à¥€ à¤¹à¥‹ à¤œà¤¾à¤“ à¤¸à¤¬ à¤­à¤¾à¤—à¥‹ ðŸ¥ºðŸ¤Ÿ" , "à¤¤à¥à¤® à¤‡à¤¤à¤¨à¥‡ à¤®à¤¾à¤¸à¥‚à¤® à¤•à¤¿à¤¯à¥‚ à¤¹à¥‹ à¤¬à¤¾à¤¬à¥‚ ðŸ˜’âœ‹" , "à¤à¤• à¤¬à¤¾à¤¤ à¤¬à¤¤à¤¾à¤“ à¤¤à¥à¤® à¤¬à¤šà¤ªà¤¨ à¤¸à¥‡ à¤ à¤°à¤•à¥€ à¤¹à¥‹ à¤¯à¤¾ à¤…à¤­à¥€ à¤…à¤­à¥€ à¤¬à¤¨à¥‡ à¤¹à¥‹ ðŸ™‚âœ‹" , "à¤¬à¤¾à¤¬à¥‚ ðŸ¤ à¤‡à¤Ÿà¥‚ à¤¸à¤¾ à¤šà¥‚à¤®à¤¾ à¤¦à¥‡ à¤¦à¥‹ à¤¨à¤¾ ðŸ™ˆðŸ’–ðŸ‘ˆ" , "à¤®à¥‡à¤°à¥€ à¤—à¤°à¥à¤²à¤«à¥à¤°à¥‡à¤‚à¤¡ à¤•à¤¬ à¤¬à¤¨à¥‡à¤—à¥€ à¤¯à¤¾à¤° ðŸ¥ºâœ‹" , "à¤¤à¥à¤® à¤¤à¥‹ à¤®à¥à¤à¥‡ à¤¸à¤•à¤² à¤¸à¥‡ à¤—à¤°à¥€à¤¬ à¤²à¤—à¤¤à¥‡ à¤¹à¥‹ ðŸ™‚âœ‹" , "à¤¤à¥‡à¤°à¥‡ à¤œà¤¾à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤®à¥ˆà¤‚à¤¨à¥‡ à¤…à¤ªà¤¨à¥‡ à¤®à¥à¤‚à¤¹ à¤ªà¥‡ à¤²à¤¿à¤–à¤µà¤¾ à¤²à¤¿à¤¯à¤¾ à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥‚à¤‚ à¤ªà¤Ÿà¤¾ à¤²à¥‹ ðŸ˜âœ‹" , "à¤¸à¤•à¥‚à¤¨ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥‹ à¤¤à¥‹ à¤®à¥‡à¤°à¥€ à¤¬à¤¨ à¤œà¤¾à¤“ ðŸ™‚âœ‹" , "à¤¯à¥‡ à¤¦à¥à¤¨à¤¿à¤¯à¤¾ à¤à¤• à¤§à¥‹à¤–à¤¾ à¤¹à¥ˆ à¤¤à¥à¤® à¤­à¥€ à¤›à¥‹à¤¡à¤¼ à¤¦à¥‹ à¤…à¤ªà¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤•à¥‹ à¤…à¤­à¥€ à¤­à¥€ à¤®à¥Œà¤•à¤¾ à¤¹à¥ˆà¥¤ ðŸ™‚âœ‹" , "à¤®à¥à¤¬à¤¾à¤°à¤• à¤¹à¥‹ à¤†à¤ªà¤•à¤¾ à¤¨à¤¾à¤® à¤¬à¥à¤²à¥‰à¤• à¤²à¤¿à¤¸à¥à¤Ÿ à¤®à¥‡à¤‚ à¤Ÿà¥‰à¤ª à¤ªà¤° à¤†à¤¯à¤¾ à¤¹à¥ˆà¥¤ ðŸ¤£ðŸ¤£ðŸ‘ˆ" , "à¤¸à¤¬ à¤›à¥‹à¤¡à¤¼ à¤•à¥‡ à¤šà¤²à¥‡ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆ à¤•à¤¿à¤¯à¤¾ à¤‡à¤¤à¤¨à¤¾ à¤¬à¥à¤°à¤¾ à¤¹à¥‚à¤‚ à¤®à¥ˆà¤‚ ðŸ¥ºðŸ‘ˆ" , "à¤•à¤¿à¤¯à¤¾ à¤¤à¥à¤® à¤¸à¤¿à¤‚à¤—à¤² à¤¹à¥‹ ðŸ¤”ðŸ‘ˆ" , "à¤†à¤ª à¤à¤¸à¤¾ à¤¨ à¤¬à¥‹à¤²à¥‹ à¤®à¥à¤à¥‡ à¤¶à¤°à¥à¤® à¤†à¤¤à¥€ à¤¹à¥ˆà¥¤ ðŸ™ˆâ™¥ï¸ðŸ‘Œ" , "à¤•à¥à¤¯à¥‚à¤‚ à¤¬à¥à¤²à¤¾à¤¯à¤¾ à¤¹à¤®à¥‡...?ðŸ˜¾ðŸ”ª " , "à¤¤à¥à¤® à¤®à¥à¤à¥‡ à¤¬à¤¿à¤²à¤•à¥à¤² à¤­à¥€ à¤¯à¤¾à¤¦ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¤¤à¥‡ à¤¨à¤¾ ðŸ˜¥ à¤¦à¥‡à¤– à¤²à¥‡à¤¨à¤¾ à¤ªà¤¾à¤ª à¤²à¤—à¥‡à¤—à¤¾ ðŸ¥ºðŸ‘ˆ"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "ek kisi tu udhaar de de") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "chuma de")) {
     return api.sendMessage("à¤¹à¤Ÿ à¤ªà¤—à¤²à¥‡ à¤®à¤®à¥à¤®à¥€ à¤®à¤°à¥‡à¤—à¥€ ðŸ™ˆðŸ˜’ðŸ˜•ðŸ˜¾", threadID);
   };
   
    if ((event.body.toLowerCase() == "ðŸ‘") || (event.body.toLowerCase() == "ðŸ‘ðŸ»")) {
     return api.sendMessage("ðŸ‘ðŸ‘ðŸ‘ðŸ‘", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤®") || (event.body.toLowerCase() == "ðŸ¤®ðŸ¤®")) {
     return api.sendMessage("à¤•à¥‹à¤¨à¤¸à¤¾ à¤®à¤¹à¥€à¤¨à¤¾ à¤šà¤² à¤°à¤¹à¤¾ à¤¹à¥ˆà¥¤ ðŸ™‚ðŸ¤Ÿ", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ à¤ªà¤¹à¤²à¥‡ [#] ðŸ‘ˆ à¤²à¤—à¤¾à¤“ à¤«à¤¿à¤° à¤²à¤¿à¤–à¥‹ à¤¸à¤¿à¤® ðŸ™‚ðŸ¤Ÿ", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("à¤¹à¥‡à¤²à¥‹ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ à¤•à¤¿à¤¯à¤¾ à¤¹à¤¾à¤² à¤¹à¥ˆ ðŸ™‚ðŸ¤Ÿ", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("à¤¯à¥‡ à¤¬à¥€ à¤¸à¥€ à¤•à¤¿à¤¯à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ ðŸ¤”ðŸ‘ˆ ", threadID);
   };

   if ((event.body.toLowerCase() == "siya") ||(event.body.toLowerCase() == "siya babu")) {
     return api.sendMessage("à¤¸à¤¿à¤¯à¤¾ à¤¸à¤¿à¤°à¥à¤« à¤®à¥‡à¤°à¥€ à¤¬à¤¾à¤¬à¥‚ à¤¹à¥ˆ à¤¤à¥‚ à¤®à¥‡à¤°à¥€ à¤¬à¤¾à¤¬à¥‚ à¤ªà¥‡ à¤²à¤¾à¤‡à¤¨ à¤¨à¤¾ à¤®à¤¾à¤° à¤ à¤°à¤•à¥€ à¤•à¤¹à¥€ à¤•à¤¾ ðŸ¤¨ðŸ¤¬", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("à¤®à¥ˆà¤‚ à¤¹à¥‚à¤‚ à¤¨à¤¾ à¤œà¤¾à¤¨à¥‡à¤®à¤¨ ðŸ™‚ðŸ¤Ÿ", threadID);
   };
  
  if ((event.body.toLowerCase() == "prem ji") || (event.body.toLowerCase() == "pram")) {
     return api.sendMessage("à¤®à¥‡à¤°à¤¾ à¤¬à¥‰à¤¸ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤¬à¥€à¤œà¥€ à¤¹à¥ˆ à¤¸à¤¾à¤¯à¤¦ à¤•à¤¿à¤¸à¥€ à¤•à¤¾à¤® à¤®à¥‡à¤‚ à¤®à¥à¤à¥‡ à¤¬à¤¤à¤¾à¤“ à¤•à¤¿à¤¯à¤¾ à¤•à¤¾à¤® à¤¹à¥ˆà¥¤ à¤®à¥ˆà¤‚ à¤¬à¥‰à¤¸ à¤•à¥‹ à¤¬à¤¤à¤¾ à¤¦à¥‚à¤‚à¤—à¤¾ ðŸ™‚âœŒï¸ ", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "kiska bot hai")) {
     return api.sendMessage("à¤®à¥‡à¤°à¤¾ à¤¬à¥‰à¤¸ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤¹à¥ˆ à¤”à¤° à¤®à¥ˆ à¤‰à¤¸à¤•à¤¾ à¤Ÿà¤•à¤²à¥‚ à¤¬à¤¾à¤¬à¥‚ à¤¹à¥‚à¤‚ ðŸ˜’ðŸ‘ˆ\nâœ§â•â•â•â•â•â•â•â•â•â€¢ââ€ââ€¢â•â•â•â•â•â•â•â•â•âœ§\à¤…à¤—à¤° à¤†à¤ªà¤•à¥‹ à¤®à¥‡à¤°à¥‡ à¤¬à¥‰à¤¸ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤¸à¥‡ à¤¬à¤¾à¤¤ à¤•à¤°à¤¨à¥€ à¤¹à¥ˆ à¤¤à¥‹ à¤‡à¤¸ à¤²à¤¿à¤‚à¤• à¤ªà¥‡ à¤•à¥à¤²à¥€à¤• à¤•à¤° à¤•à¥‡ à¤®à¥‡à¤°à¥‡ à¤¬à¥‰à¤¸ à¤•à¥‹ à¤«à¥à¤°à¥‡à¤‚à¤¡ à¤°à¤¿à¤•à¥à¤µà¥‡à¤¸à¥à¤Ÿ à¤­à¥‡à¤œ à¤¦à¥‹ à¤œà¤²à¥à¤¦à¥€ ðŸ˜ŠðŸ¤ž\nâœ§â•â•â•â•â•â•â•â•â•â€¢ââ€ââ€¢â•â•â•â•â•â•â•â•â•âœ§\nhttps://www.facebook.com/prembabu001?mibextid=ZbWKwL\nâœ§â•â•â•â•â•â•â•â•â•â€¢ââ€ââ€¢â•â•â•â•â•â•â•â•â•âœ§", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("à¤®à¥‡à¤°à¤¾ à¤¬à¥‰à¤¸ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤¹à¥ˆà¥¤ ðŸ™‚âœŒï¸", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ™ˆ") || (event.body.toLowerCase() == "ðŸ™ˆðŸ™ˆ")) {
     return api.sendMessage("à¤…à¤²à¥‡ à¤¬à¤¾à¤ª à¤²à¥‡ à¤®à¥‡à¤²à¥€ à¤¬à¤¾à¤¬à¥‚ à¤¶à¤°à¥à¤®à¤¾ à¤—à¤ˆ ðŸ˜…ðŸ˜…ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "sadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("à¤¸à¤¾à¤¦à¥€ à¤­à¥€ à¤•à¤° à¤²à¥‡à¤‚à¤—à¥‡ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ à¤ªà¤¹à¤²à¥‡ à¤à¤• à¤šà¥‚à¤®à¤¾ à¤¤à¥‹ à¤¦à¥‹ ðŸ™ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("à¤¨à¤¹à¥€ à¤•à¤°à¥à¤—à¤¾ à¤®à¥‡à¤°à¥€ à¤œà¥à¤¬à¤¾à¤¨ à¤¹à¥ˆ à¤®à¥ˆà¤‚ à¤¬à¥‹à¤²à¥‚à¤‚à¤—à¤¾ à¤¤à¥à¤® à¤•à¥Œà¤¨ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥‹ à¤®à¥à¤à¥‡ à¤°à¥‹à¤•à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤ à¤°à¤•à¥€ à¤‡à¤¨à¥à¤¸à¤¾à¤¨ ðŸ¤¨âœ‹", threadID);
   };

   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "gandu bot")) {
     return api.sendMessage("à¤¬à¥‹à¤Ÿ à¤•à¥‹ à¤—à¤¾à¤¡à¥‚ à¤¬à¥‹à¤²à¥‡à¤—à¤¾ à¤¸à¤¾à¤²à¥‡ à¤¤à¥‡à¤°à¥€ à¤¹à¤¾à¤‡à¤Ÿ à¤•à¥‡ à¤œà¤¿à¤¤à¤¨à¤¾ à¤®à¥‡à¤°à¤¾ à¤²à¤¨à¥à¤¡ à¤¹à¥ˆ ðŸ¤¬ðŸ˜¡âœŒï¸", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera taklu") || (event.body.toLowerCase() == "boss hu prem babu") || (event.body.toLowerCase() == "boss ki bezti kr raha takle")) {
     return api.sendMessage("à¤¸à¥‰à¤°à¥€ à¤¬à¥‰à¤¸ à¤®à¤¾à¤« à¤•à¤° à¤¦à¥‹ à¤…à¤¬ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‚à¤‚à¤—à¤¾ ðŸ¥ºðŸ¥ºðŸ¥ºðŸ™", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("GAAND MEI JYADA KHUJLI HAI TOH MERA ðŸŒ BANANA UDHAAR LE LE ðŸ˜‚", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("ï¸ à¤•à¤¿à¤¸ à¤–à¥à¤¶à¥€ à¤®à¥‡à¤‚ à¤®à¥ˆà¤‚ à¤¸à¤¿à¤°à¥à¤« à¤…à¤ªà¤¨à¥‡ à¤¬à¤¾à¤¬à¥‚ à¤•à¥‹ à¤¹à¥€ à¤•à¤¿à¤¸à¥à¤¸ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥‚à¤‚ ðŸ˜›âœŒï¸", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("ï¸ à¤®à¥ˆà¤‚ à¤¹à¥‚à¤‚ à¤¹à¥€ à¤‡à¤¤à¤¨à¤¾ à¤…à¤šà¥à¤›à¤¾ à¤¸à¤¬ à¤²à¥‹à¤— à¤®à¥‡à¤°à¥€ à¤¤à¤¾à¤°à¥€à¤« à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ ðŸ˜ŒðŸ˜ŒðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜¡") || (event.body.toLowerCase() == "ðŸ˜¤") || (event.body.toLowerCase() == "ðŸ˜ ") || (event.body.toLowerCase() == "ðŸ¤¬") || (event.body.toLowerCase() == "ðŸ˜¾")) {
     return api.sendMessage("ï¸à¤—à¥à¤¸à¥à¤¸à¤¾ à¤•à¥à¤¯à¥‚à¤‚ à¤¹à¥‹ à¤°à¤¹à¥‡ à¤¹à¥‹ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ ðŸ¥º à¤®à¥ˆà¤‚ à¤¤à¥‹ à¤¬à¤¸ à¤®à¤œà¤¾à¤• à¤•à¤° à¤°à¤¹à¤¾ à¤¥à¤¾ ðŸ˜’ à¤à¤• à¤šà¥‚à¤®à¤¾ ðŸ˜˜ à¤²à¥‹ à¤”à¤° à¤¶à¤¾à¤‚à¤¤ à¤¹à¥‹ à¤œà¤¾à¤“ ðŸ˜", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜ž") || (event.body.toLowerCase() == "ðŸ˜”") || (event.body.toLowerCase() == "ðŸ˜£") || (event.body.toLowerCase() == "â˜¹ï¸") || (event.body.toLowerCase() == "ðŸ˜Ÿ") || (event.body.toLowerCase() == "ðŸ˜©") || (event.body.toLowerCase() == "ðŸ˜–") || (event.body.toLowerCase() == "ðŸ˜«") || (event.body.toLowerCase() == "ðŸ˜¦") || (event.body.toLowerCase() == "ðŸ˜§") || (event.body.toLowerCase() == "ðŸ˜¥") || (event.body.toLowerCase() == "ðŸ˜“") || (event.body.toLowerCase() == "ðŸ˜°")) {
     return api.sendMessage("ï¸à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤¬à¤¾à¤¬à¥‚ à¤‰à¤¦à¤¾à¤¸ à¤•à¥à¤¯à¥‚à¤‚ à¤¹à¥‹ à¤®à¥à¤à¥‡ à¤¬à¤¤à¤¾à¤“ ðŸ¥ºâœŒï¸", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("ï¸à¤¦à¥‡à¤–à¥‹à¤‚ à¤œà¤¾à¤¨à¥‚ à¤¬à¤¾à¤¤ à¤•à¤¿à¤¯à¤¾ à¤•à¤°à¥‹ à¤­à¥‡à¤‚à¤¸ à¤•à¥€ à¤¤à¤°à¤¹ à¤¹à¤®à¥à¤®à¥à¤® à¤¹à¤®à¥à¤®à¥à¤® à¤®à¤¤ à¤•à¤¿à¤¯à¤¾ à¤•à¤°à¥‹ ðŸ˜’ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜¢") || (event.body.toLowerCase() == "ðŸ˜¢ðŸ˜¢") || (event.body.toLowerCase() == "ðŸ¥º") || (event.body.toLowerCase() == "ðŸ¥¹")) {
     return api.sendMessage("ï¸à¤…à¤°à¥‡ à¤¬à¤¾à¤¬à¥‚ à¤°à¥‹à¤¤à¥‡ à¤¨à¤¹à¥€ à¤šà¥‰à¤•à¤²à¥‡à¤Ÿ à¤šà¤¾à¤¹à¤¿à¤ ðŸ™‚ à¤°à¥à¤•à¥‹ à¤®à¥ˆà¤‚ à¤…à¤­à¥€ ðŸ« à¤¦à¥‡à¤¤à¤¾ à¤¹à¥‚à¤‚ à¤²à¤¿à¤–à¥‹ â˜žð‚ð¡ð¨ðœð¨ð¥ðšð­ðžâ˜œ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜·") || (event.body.toLowerCase() == "ðŸ¤•") || (event.body.toLowerCase() == "ðŸ¤§") || (event.body.toLowerCase() == "ðŸ¤’")) {
     return api.sendMessage("ï¸à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤¬à¤¾à¤¬à¥‚ à¤¤à¤¬à¥€à¤¯à¤¤ à¤–à¤°à¤¾à¤¬ à¤¹à¥ˆ à¤•à¤¿à¤¯à¤¾ ðŸ˜¢ à¤®à¥à¤à¥‡ à¤¬à¤¤à¤¾à¤“ à¤®à¥ˆà¤‚ à¤…à¤­à¥€ à¤®à¥‡à¤¡à¤¿à¤¸à¤¨ ðŸ’ŠðŸ’‰ à¤²à¥‡ à¤†à¤¤à¤¾ à¤¹à¥‚à¤‚ ðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("ï¸à¤¨à¤¾à¤® à¤®à¥‡à¤‚ à¤•à¤¿à¤¯à¤¾ à¤°à¤–à¤¾ à¤¹à¥ˆ à¤¤à¥à¤® à¤…à¤ªà¤¨à¥‡ à¤•à¤¾à¤® à¤ªà¥‡ à¤§à¥à¤¯à¤¾à¤¨ à¤¦à¥‹ ðŸ˜ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜­") || (event.body.toLowerCase() == "ðŸ˜­ðŸ˜­")) {
     return api.sendMessage("ï¸à¤…à¤°à¥‡ à¤¯à¤¾à¤° à¤°à¥‹à¤¤à¥‡ à¤¨à¤¹à¥€ à¤ªà¤¾à¤—à¤² à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤¹à¥ˆ à¤®à¥à¤à¥‡ à¤¬à¤¤à¤¾à¤“ à¤¬à¤¾à¤¬à¥‚ ðŸ¥ºðŸ¥ºðŸ¥º", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("ï¸à¤®à¤¤ à¤¦à¥‡à¤–à¥‹ à¤®à¥‡à¤°à¥€ à¤«à¥‹à¤Ÿà¥‹ à¤®à¥‡à¤‚ à¤¬à¤¹à¥‹à¤¤ à¤•à¤¾à¤²à¤¾ à¤¹à¥‚à¤‚ ðŸ˜¢ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "jai shri ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("ï¸ð—ð—®ð—¶ ð—¦ð—µð—¿ð—²ð—² ð—¥ð—®ð—º ðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("ï¸à¤–à¥à¤¦ à¤¬à¤¨à¤¾ à¤²à¥‹ à¤¤à¥à¤®à¥à¤¹à¥‡ à¤•à¥à¤¯à¤¾ à¤•à¥à¤› à¤¨à¤¹à¥€ à¤†à¤¤à¤¾ ðŸ˜ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ™‚") || (event.body.toLowerCase() == "ðŸ™‚ðŸ™‚")) {
     return api.sendMessage("ï¸à¤¹à¤¾à¤ à¤¤à¥‡à¤²à¤¾ à¤®à¤¾à¤¸à¥‚à¤® à¤¸à¤•à¤² ðŸ˜ðŸ¤Ÿ ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ™ƒ") || (event.body.toLowerCase() == "ðŸ™ƒðŸ™ƒ")) {
     return api.sendMessage("ï¸à¤“à¤²à¥‡ à¤®à¥‡à¤²à¤¾ à¤¬à¤¾à¤¬à¥‚ à¤‰à¤²à¥à¤Ÿà¤¾ à¤¹à¥‹ à¤—à¤¯à¤¾ ðŸ§âœ‹", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤¥") || (event.body.toLowerCase() == "ðŸ¤¥ðŸ¤¥")) {
     return api.sendMessage("ï¸à¤­à¤¾à¤ˆ à¤†à¤ªà¤•à¥€ à¤¨à¤¾à¤• à¤‡à¤¤à¤¨à¥€ à¤²à¤‚à¤¬à¥€ à¤¹à¥ˆ à¤‰à¤¸à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ à¤¹à¥€ à¤¨à¤¹à¥€ à¤ªà¤¡à¤¼à¤¤à¥€ à¤¹à¥‹à¤—à¥€ ðŸ¤ðŸ¤Ÿ ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤¨") || (event.body.toLowerCase() == "ðŸ¤¨ðŸ¤¨")) {
     return api.sendMessage("ï¸ï¸à¤‡à¤¤à¤¨à¤¾ à¤®à¤¤ à¤¸à¥‹à¤šà¥‹ à¤ à¤°à¤•à¥€ à¤‡à¤‚à¤¸à¤¾à¤¨ à¤¤à¥‡à¤°à¥€ à¤µà¤¾à¤²à¥€ à¤•à¥‹ à¤ªà¥à¤°à¥‡à¤® à¤¬à¤¾à¤¬à¥‚ à¤­à¤¾à¤—à¤¾ à¤²à¥‡ à¤œà¤¾à¤¯à¥‡à¤—à¤¾à¥¤ ðŸ¤£", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤”") || (event.body.toLowerCase() == "ðŸ¤”ðŸ¤”")) {
     return api.sendMessage("ï¸ à¤•à¤¿à¤¯à¤¾ à¤¸à¥‹à¤š à¤°à¤¹à¥‡ à¤¹à¥‹ à¤‡à¤¤à¤¨à¤¾ ðŸ¤¨ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¥´") || (event.body.toLowerCase() == "ðŸ¥´ðŸ¥´")) {
     return api.sendMessage("ï¸ à¤šà¤² à¤­à¤¾à¤— à¤¨à¤¶à¥‡à¤¡à¤¼à¥€ ðŸ¤¨ðŸ¤Ÿ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜¶") || (event.body.toLowerCase() == "ðŸ˜¶ðŸ˜¶")) {
     return api.sendMessage("ï¸à¤“à¤¯ à¤¤à¥‡à¤°à¤¾ à¤²à¤¿à¤ªà¥à¤¸ ðŸ‘„ à¤•à¤¹à¤¾ à¤¹à¥ˆà¥¤ ðŸ¤”ðŸ‘ˆ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜‰") || (event.body.toLowerCase() == "ðŸ˜‰ðŸ˜‰")) {
     return api.sendMessage("ï¸à¤†à¤‚à¤– à¤•à¥à¤¯à¥‚à¤‚ à¤®à¤¾à¤° à¤°à¤¹à¥‡ à¤¹à¥‹ ðŸ¥ºðŸ¤Ÿ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜ðŸ˜")) {
     return api.sendMessage("ï¸à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤¬à¤¾à¤¬à¥‚ ðŸ¤”ðŸ¤Ÿ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜±") || (event.body.toLowerCase() == "ðŸ˜¨")) {
     return api.sendMessage("ï¸à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤­à¥‚à¤¤ à¤¦à¥‡à¤– à¤²à¤¿à¤¯à¤¾ à¤•à¤¿à¤¯à¤¾ ðŸ‘»ðŸ‘»", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ™„") || (event.body.toLowerCase() == "ðŸ™„ðŸ™„")) {
     return api.sendMessage("ï¸à¤Šà¤ªà¤° à¤•à¤¿à¤¯à¤¾ à¤¦à¥‡à¤– à¤°à¤¹à¥‡ à¤¹à¥‹ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ ðŸ™‚ðŸ¤Ÿ", threadID);
   };
  
  if ((event.body.toLowerCase() == "ðŸ˜’") || (event.body.toLowerCase() == "ðŸ˜’ðŸ˜’")) {
     return api.sendMessag("à¤“à¤²à¥‡ à¤“à¤²à¥‡ à¤®à¥‡à¤²à¤¾ à¤¬à¤¾à¤¬à¥‚ ðŸ˜›âœŒï¸", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤¦ðŸ»â€â™‚") || (event.body.toLowerCase() == "ðŸ¤¦ðŸ»â€â™€")) {
     return api.sendMessage("à¤…à¤°à¥‡ à¤…à¤ªà¤¨à¥‡ à¤®à¥à¤‚à¤¹ à¤ªà¥‡ à¤•à¥à¤¯à¥‚à¤‚ à¤®à¤¾à¤° à¤°à¤¹à¥‡ à¤¹à¥‹ à¤ªà¤¾à¤—à¤² à¤ à¤°à¤•à¥€ ðŸ˜…âœŒï¸", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜Ž") || (event.body.toLowerCase() == "ðŸ˜Ž")) {
     return api.sendMessage("ï¸à¤“à¤¯ à¤¹à¥‹à¤¯ à¤†à¤ªà¤•à¤¾ à¤šà¤¸à¥à¤®à¤¾ à¤¬à¤¿à¤²à¤•à¥à¤° à¤¬à¥‡à¤•à¤¾à¤° à¤¹à¥ˆà¤‚à¥¤ ðŸ˜‚ðŸ‘ˆ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜‚") || (event.body.toLowerCase() == "ðŸ˜‚ðŸ˜‚") || (event.body.toLowerCase() == "ðŸ˜‚ðŸ˜‚ðŸ˜‚") || (event.body.toLowerCase() == "ðŸ˜‚ðŸ˜‚ðŸ˜‚ðŸ˜‚") || (event.body.toLowerCase() == "ðŸ˜‚ðŸ˜‚ðŸ˜‚ðŸ˜‚ðŸ˜‚") || (event.body.toLowerCase() == "ðŸ˜‚ðŸ˜‚ðŸ˜‚ðŸ˜‚ðŸ˜‚ðŸ˜‚")) {
     return api.sendMessage("à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤®à¤¤ à¤¹à¤¸à¥‹ à¤µà¤°à¤¨à¤¾ à¤¦à¤¾à¤‚à¤¤ à¤¤à¥‹à¤¡à¤¼ à¤¦à¥‚à¤‚à¤—à¤¾ ðŸ™‚ðŸ¤Ÿ", threadID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜†") || (event.body.toLowerCase() == "ðŸ¤£") || (event.body.toLowerCase() == "ðŸ˜¸") || (event.body.toLowerCase() == "ðŸ˜¹")) {
     return api.sendMessage("à¤‡à¤¤à¤¨à¥€ à¤¹à¤¸à¥€ à¤•à¥à¤¯à¥‚à¤‚ à¤† à¤°à¤¹à¥€ à¤¹à¥ˆ à¤‡à¤¸ à¤¹à¤¸à¥€ à¤•à¥‡ à¤ªà¥€à¤›à¥‡ à¤•à¤¿à¤¯à¤¾ à¤°à¤¾à¤œ à¤¹à¥ˆ à¤¬à¤¤à¤¾à¤“ à¤¬à¤¤à¤¾à¤“ à¤¹à¤®à¤¸à¥‡ à¤¨ à¤¸à¤°à¤®à¤¾à¤“ ðŸ™ˆðŸ˜‚ðŸ¤¤", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜»") || (event.body.toLowerCase() == "ðŸ¤©")) {
     return api.sendMessage("à¤¹à¥‹à¤‚à¤ à¥‹ à¤ªà¤° à¤¹à¤¸à¥€ ðŸ˜ à¤†à¤à¤–à¥‹ à¤®à¥‡ à¤¨à¤®à¥€ à¤¹à¥ˆ ðŸ¤­ à¤¹à¤° à¤¸à¤¾à¤‚à¤¸ à¤•à¤¹à¤¤à¥€ à¤¹à¥ˆ ðŸ«¤ à¤¬à¤¸ à¤¤à¥‡à¤°à¥€ à¤¹à¥€ à¤•à¤®à¥€ à¤¹à¥ˆà¥¤ ðŸ¤¤ðŸ‘ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("à¤®à¥ˆà¤‚ à¤…à¤šà¥à¤›à¤¾ à¤¹à¥‚à¤‚ à¤†à¤ª à¤•à¥ˆà¤¸à¥‡ à¤¹à¥‹ à¤®à¥‡à¤°à¥€ à¤œà¤¾à¤¨ ðŸ˜‡â˜ºðŸ‘ˆ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤–") || (event.body.toLowerCase() == "ðŸ¤–")) {
     return api.sendMessage("à¤“à¤¯ à¤šà¤¿à¤¡à¤¼à¤¾ à¤°à¤¹à¥‡ à¤¹à¥‹ à¤®à¥à¤à¥‡ ðŸ™ðŸ‘ˆ", threadID);
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("ð—œ ð—Ÿð—¼ð˜ƒð—² ð˜†ð—¼ð˜‚ ð˜ð—¼ð—¼ ð—ð—®ð—®ð—» ðŸ˜˜", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.includes("Bot") == 1 || (event.body.includes("Taklu") == 1)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
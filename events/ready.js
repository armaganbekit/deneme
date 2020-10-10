// Bu Altyapı Tamamen Shydra Codeye Aittir.
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log('[------------] BlueFire V12 [-------------]');
 console.log(`Yıkamayacaksınız <3`);
 console.log(`Artık V12 Yiz <3`);
 console.log(`Yakında Tikli Olucaz <3`);
 console.log(`Dblden Onay Alıcaz <3`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
  console.log('[------------] BlueFire V12 [-------------]'); 
  client.user.setStatus("online");
  var oyun = [
       "s-yardım V12 Beta 0.0.1"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};


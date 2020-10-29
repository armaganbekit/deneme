
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log('[------------] YouTube/4RM4G4N [-------------]');
 console.log(`YouTube/4RM4G4N`);
 console.log(`Abonel Ol`);
 console.log(`Like At`);
 console.log(`Takipde Kal`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
  console.log('[------------] YouTube/4RM4G4N [-------------]');
  client.user.setStatus("online");
  var oyun = [
       "YouTube/4RM4G4N"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};


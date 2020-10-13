const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Everlasting`)
.setDescription(`
   **Oyun Logoları**
= ${prefix}spartanhelmet Logo Üretir
= ${prefix}blackbear Logo Üretir
= ${prefix}arcade Logo Üretir
= ${prefix}bluefire Logo Üretir
= ${prefix}bluelion Logo Üretir
= ${prefix}spartanmascot Logo Üretir
= ${prefix}hipsterwolf Logo Üretir
= ${prefix}bluegamefire Logo Üretir
= ${prefix}pinkghoul Logo Üretir
= ${prefix}purpledragon Logo Üretir
= ${prefix}sabertooth Logo Üretir
= ${prefix}angrycat Logo Üretir
= ${prefix}pirateskull Logo Üretir
= ${prefix}twitch Logo Üretir
= ${prefix}greenangrycheetah Logo Üretir
= ${prefix}bluebear Logo Üretir
= ${prefix}hivegaming Logo Üretir
**Normal Logolar**
${prefix}logo1
${prefix}logo2
${prefix}logo3
${prefix}logo4
${prefix}logo5
${prefix}logo6
${prefix}logo7
${prefix}logo8
**Botumuz Yakında Discord Onayı Alabiliceği İçin Logo Komutlarını Azalttık**
`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['logolar'], 
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
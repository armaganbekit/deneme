const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
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
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
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
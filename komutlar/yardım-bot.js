
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
.setDescription(`
<a:bluefire1:761211197071687711> **Botumuzu Davet Et** 
▫️ Kullanım  \`${prefix}sil\`
<a:bluefire1:761211197071687711> **Botumuzun Pingini Öğren!** 
▫️ Kullanım \`${prefix}ping \`
`)
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bot'], 
  permLevel: 0
};

exports.help = {
  name: "bot",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};

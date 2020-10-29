
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`BlueFire`)
.setDescription(`
<a:bluefire1:761211197071687711> **Botumuzu Davet Et** 
▫️ Kullanım  \`${prefix}sil\`
<a:bluefire1:761211197071687711> **Botumuzun Pingini Öğren!** 
▫️ Kullanım \`${prefix}ping \`
`)
.setImage("https://media.tenor.com/images/3713680851494cff76ac9953272deacb/tenor.gif")
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

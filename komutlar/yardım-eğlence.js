
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
.setDescription(`
<a:bluefire1:761211197071687711> **Duello** 
▫️ Kullanım \`${prefix}duello\`
<a:bluefire1:761211197071687711> **Fbi-Gif** 
▫️ Kullanım \`${prefix}fbi\`
<a:bluefire1:761211197071687711> **Ters Yazı** 
▫️ Kullanım \`${prefix}tersyazı\`
<a:bluefire1:761211197071687711> **Wasted** 
▫️ Kullanım \`${prefix}wasted\`
`)
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};

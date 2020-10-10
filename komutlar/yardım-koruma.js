const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bleufire`)
.setDescription(`
<a:bluefire1:761211197071687711> **Kanal Koruma** 
▫️ Kullanım \`${prefix}kanal-koruma aç/kapat\`
<a:bluefire1:761211197071687711> **Sohbet Aç** 
▫️ Kullanım \`${prefix}sohbet-aç\`
<a:bluefire1:761211197071687711> **Sohbet Kapat** 
▫️ Kullanım \`${prefix}sohbet-kapat\`
`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['koruma'], 
  permLevel: 0
};

exports.help = {
  name: "koruma",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
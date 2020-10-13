const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Everlasting`)
.setDescription(`
<a:bluefire1:761211197071687711> **Kanal Koruma** 
▫️ Kullanım \`${prefix}kanal-koruma aç/kapat\`
<a:bluefire1:761211197071687711> **Sohbet Aç** 
▫️ Kullanım \`${prefix}sohbet-aç\`
<a:bluefire1:761211197071687711> **Sohbet Kapat** 
▫️ Kullanım \`${prefix}sohbet-kapat\`
`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")
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
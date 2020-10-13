
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Everlasting`)
.setDescription(`
<a:bluefire1:761211197071687711> **Avatar (birini etiketlesen bile olur)** 
▫️ Kullanım \`${prefix}Avatar\`
<a:bluefire1:761211197071687711> **Uluslar Arası Korona Tablosu ** 
▫️ Kullanım \`${prefix}korona\`
<a:bluefire1:761211197071687711> **Say Komudu** 
▫️ Kullanım  \`${prefix}eğlence\`
<a:bluefire1:761211197071687711> **Kullanıcı Bilgi ** 
▫️ Kullanım \`${prefix}bot\`
<a:bluefire1:761211197071687711> **Sunucu Bilgi Komutları.** 
▫️ Kullanım  \`${prefix}sunucu-bilgi\`
`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kullanıcı'], 
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
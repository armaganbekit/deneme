const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`BLUEFİRE`)
.setDescription(`
<a:bluefire1:761211197071687711> **Gelişmiş Forge Ban Sistemi** 
▫️ Kullanım \`${prefix}forge-ban\`
<a:bluefire1:761211197071687711> **Gelişmiş Çekiliş Sistemi** 
▫️ Kullanım  \`${prefix}çekiliş\`
<a:bluefire1:761211197071687711> **Gelişmiş Otorol Sistemi** 
▫️ Kullanım  \`${prefix}otorol\`
<a:bluefire1:761211197071687711> **Gelişmiş İnvite Sistemi** 
▫️ Kullanım  \`${prefix}invite\`
<a:bluefire1:761211197071687711> **Gelişmiş Ban Sistemi** 
▫️ Kullanım \`${prefix}ban\`
<a:bluefire1:761211197071687711> **Gelişmiş Küfür Engel Sistemi** 
▫️ Kullanım  \`${prefix}küfür-engel\`
<a:bluefire1:761211197071687711> **Gelişmiş Reklam Engel Sistemi** 
▫️ Kullanım \`${prefix}reklam-engel\`
<a:bluefire1:761211197071687711> **Gelişmiş Sa-As Sistemi** 
▫️ Kullanım  \`${prefix}sa-as\`
<a:bluefire1:761211197071687711> **Gelişmiş Un Ban**  
▫️ Kullanım    \`${prefix}unban\`
<a:bluefire1:761211197071687711> **Gelişmiş Yavaş Mod Sistemi** 
▫️ Kullanım    \`${prefix}yavaş-mod\`
<a:bluefire1:761211197071687711> **Gelişmiş Kick Sistemi**  
▫️ Kullanım  \`${prefix}kick\`
<a:bluefire1:761211197071687711> **Gelişmiş Mesaj Temizleme Sistemi** 
▫️ Kullanım  \`${prefix}sil\`
<a:bluefire1:761211197071687711> **Gelişmiş Duyuru Sistemi** 
▫️ Kullanım  \`${prefix}duyuru\`

`)
.setImage("https://media.tenor.com/images/3713680851494cff76ac9953272deacb/tenor.gif")
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
  name: "moderasyon",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
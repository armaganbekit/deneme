
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
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
<a:bluefire1:761211197071687711> **Öneri**  
▫️ Kullanım    \`${prefix}öneri\`
<a:bluefire1:761211197071687711> **Hata** 
▫️ Kullanım    \`${prefix}hata-bildir\`
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
  name: "kullanıcı",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
.setDescription(`
<a:bluefire1:761211197071687711> **Gelişmiş Mesaj Temizleme Sistemi** 
▫️ Kullanım  \`${prefix}sil\`
<a:bluefire1:761211197071687711> **Gelişmiş Forge Ban Sistemi** 
▫️ Kullanım \`${prefix}forge-ban\`
<a:bluefire1:761211197071687711> **Gelişmiş Çekiliş Sistemi** 
▫️ Kullanım  \`${prefix}çekiliş\`
<a:bluefire1:761211197071687711> **Gelişmiş Prefix Sistemi** 
▫️ Kullanım  \`${prefix}prefix\`
<a:bluefire1:761211197071687711> **Gelişmiş Otorol Sistemi** 
▫️ Kullanım  \`${prefix}otorol\`
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
  name: "moderasyon2",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
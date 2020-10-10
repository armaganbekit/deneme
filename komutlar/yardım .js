const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bleufire`)
.setDescription(`
<a:bluefire1:761211197071687711> **Moderasyon Komutları.** 
▫️ Kullanım \`${prefix}moderasyon\`
<a:bluefire1:761211197071687711> **Moderasyon2 Komutları.** 
▫️ Kullanım \`${prefix}moderasyon2\`
<a:bluefire1:761211197071687711> **Eğlence  Komutları.** 
▫️ Kullanım  \`${prefix}eğlence\`
<a:bluefire1:761211197071687711> **Botumuzun Komutları.** 
▫️ Kullanım \`${prefix}bot\`
<a:bluefire1:761211197071687711> **Kullanıcı Komutları.** 
▫️ Kullanım  \`${prefix}kullanıcı\`
<a:bluefire1:761211197071687711> **Logo Komutları.**  
▫️ Kullanım    \`${prefix}logo\`
<a:bluefire1:761211197071687711> **Koruma Komutları.** 
▫️ Kullanım    \`${prefix}koruma\`
<a:bluefire1:761211197071687711> **Ekonomi Komutları.** 
▫️ Kullanım  \`${prefix}ekonomi\`

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
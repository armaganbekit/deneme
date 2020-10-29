const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N Bot`)
.setDescription(`
 **Gelişmiş Çekiliş Sistemi** 
▫️ Kullanım  \`${prefix}çekiliş\`
 **Gelişmiş Ban Sistemi** 
▫️ Kullanım \`${prefix}ban\`
 **Gelişmiş Küfür Engel Sistemi** 
▫️ Kullanım  \`${prefix}küfür-engel\`
 **Gelişmiş Reklam Engel Sistemi** 
▫️ Kullanım \`${prefix}reklam-engel\`
 **Gelişmiş Sa-As Sistemi** 
▫️ Kullanım  \`${prefix}sa-as\`
 **Gelişmiş Un Ban**  
▫️ Kullanım    \`${prefix}unban\`
 **Gelişmiş Yavaş Mod Sistemi** 
▫️ Kullanım    \`${prefix}yavaş-mod\`
 **Gelişmiş Kick Sistemi**  
▫️ Kullanım  \`${prefix}kick\`
 **Gelişmiş Mesaj Temizleme Sistemi** 
▫️ Kullanım  \`${prefix}sil\`


`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['m','mod'], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
.setDescription(`
<a:tik:700310228499169301> **Moderasyon Komutları.** 
▫️ Kullanım \`${prefix}moderasyon\`
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
<a:bluefire1:761211197071687711> **Eğlence2 Komutları.** 
▫️ Kullanım  \`${prefix}eğlence2\`


`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")//
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help','h','y'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım',
  usage: 'yardım'
};
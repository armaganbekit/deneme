const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Everlasting`)
.setDescription(`
<a:bluefire1:761211197071687711> **Moderasyon Komutları.** 
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
<a:bluefire1:761211197071687711> **Ekonomi Komutları.** 
▫️ Kullanım  \`${prefix}ekonomi\`


`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")
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
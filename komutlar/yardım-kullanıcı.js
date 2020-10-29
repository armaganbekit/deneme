
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
.setDescription(`
 **Avatar (birini etiketlesen bile olur)** 
▫️ Kullanım \`${prefix}avatar\`
 **Say Komudu** 
▫️ Kullanım  \`${prefix}eğlence\`
 **Kullanıcı Bilgi ** 
▫️ Kullanım \`${prefix}bot\`
**Sunucu Bilgi Komutları.** 
▫️ Kullanım  \`${prefix}sunucu-bilgi\`
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
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
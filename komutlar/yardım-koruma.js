const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
.setDescription(`
 **Kanal Koruma** 
▫️ Kullanım \`${prefix}kanal-koruma aç/kapat\`
**Sohbet Aç** 
▫️ Kullanım \`${prefix}sohbet-aç\`
 **Sohbet Kapat** 
▫️ Kullanım \`${prefix}sohbet-kapat\`
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
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
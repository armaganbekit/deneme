
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
.setDescription(`
 **Duello** 
▫️ Kullanım \`${prefix}duello\`
 **Fbi-Gif** 
▫️ Kullanım \`${prefix}fbi\`
 **Ters Yazı** 
▫️ Kullanım \`${prefix}tersyazı\`
 **Wasted** 
▫️ Kullanım \`${prefix}wasted\`
 **Saat** 
▫️ Kullanım \`${prefix}saat\`
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eglence'], 
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
//**Kayıt Sistemi** <a:setting:750076062716788807> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
//**Davet Sistemi** <a:setting:750076062716788807> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)

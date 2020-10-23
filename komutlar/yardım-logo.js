const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Everlasting`)
.setDescription(`
**Normal Logolar**
${prefix}logo1
${prefix}logo2
${prefix}logo3
${prefix}logo4
${prefix}logo5
${prefix}logo6
${prefix}logo7
${prefix}logo8
**Botumuz Yakında Discord Onayı Alabiliceği İçin Logo Komutlarını Azalttık**
`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['logolar'], 
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
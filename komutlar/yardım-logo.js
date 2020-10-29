const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
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
**YouTube/4RM4G4N**
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
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
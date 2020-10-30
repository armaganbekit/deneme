
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
.setDescription(`
 **ID Alma** 
▫️ Kullanım  \`${prefix}id\`
 **Botumuzun Pingini Öğren!** 
▫️ Kullanım \`${prefix}ping \`
**Erkek Gifi Atar** 
▫️ Kullanım \`${prefix}mangif \`
**Anime Gifi Atar** 
▫️ Kullanım \`${prefix}anime \`
**Couple Gifi Atar** 
▫️ Kullanım \`${prefix}couple \`
**Marvel Gifi Atar** 
▫️ Kullanım \`${prefix}marvel \`
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bot'], 
  permLevel: 0
};

exports.help = {
  name: "bot",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};

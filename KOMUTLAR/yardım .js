const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N Bot`)
.setDescription(`
        **Genel Komutlar** 
▫️ Kullanım \`${prefix}moderasyon\`
 **Eğlence  Komutları.** 
▫️ Kullanım  \`${prefix}eğlence\`
 **Botumuzun Komutları.** 
▫️ Kullanım \`${prefix}bot\`
 **Kullanıcı Komutları.** 
▫️ Kullanım  \`${prefix}kullanıcı\`
 **Logo Komutları.**  
▫️ Kullanım    \`${prefix}logo\`
 **Koruma Komutları.** 
▫️ Kullanım    \`${prefix}koruma\`
**Eğlence2 Komutları.** 
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
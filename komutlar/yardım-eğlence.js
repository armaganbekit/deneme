const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bleufire`)
.setDescription(`
Bluefire Test Test Edin Lan Beni:d
   **Oyun Logoları**
<a:bluefire1:761211197071687711> **Moderasyon Komutları.** 
▫️ Kullanım \`${prefix}moderasyon\`
<a:bluefire1:761211197071687711> **Moderasyon2 Komutları.** 
▫️ Kullanım \`${prefix}moderasyon2\`
<a:bluefire1:761211197071687711> **Eğlence  Komutları.** 
▫️ Kullanım  \`${prefix}eğlence\`
<a:bluefire1:761211197071687711> **Botumuzun Komutları.** 
▫️ Kullanım \`${prefix}bot\`
<a:bluefire1:761211197071687711> **Kullanıcı Komutları.** 
▫️ Kullanım  \`${prefix}kullanıcı\`
<a:bluefire1:761211197071687711> **Logo Komutları.**  
▫️ Kullanım    \`${prefix}logo\`
<a:bluefire1:761211197071687711> **Müzik Komutları.** 
▫️ Kullanım    \`${prefix}müzik\`
<a:bluefire1:761211197071687711> **FBİ GİF**  
▫️ Kullanım  \`${prefix}fbi-gif\`
<a:bluefire1:761211197071687711> **Duello.** 
▫️ Kullanım  \`${prefix}duello\`
// sil duyuru kick sunucubilgi
`)
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [''], 
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: ''
};
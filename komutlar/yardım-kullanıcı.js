const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bleufire`)
.setDescription(`
Bluefire Test Test Edin Lan Beni:d

<a:bluefire1:761211197071687711> **Avatar (birini etiketlesen bile olur)** 
▫️ Kullanım \`${prefix}Avatar\`
<a:bluefire1:761211197071687711> **Uluslar Arası Korona Tablosu ** 
▫️ Kullanım \`${prefix}korona\`
<a:bluefire1:761211197071687711> **Say Komudu** 
▫️ Kullanım  \`${prefix}eğlence\`
<a:bluefire1:761211197071687711> **Kullanıcı Bilgi ** 
▫️ Kullanım \`${prefix}bot\`
<a:bluefire1:761211197071687711> **Sunucu Bilgi Komutları.** 
▫️ Kullanım  \`${prefix}sunucu-bilgi\`
<a:bluefire1:761211197071687711> **Öneri**  
▫️ Kullanım    \`${prefix}öneri\`
<a:bluefire1:761211197071687711> **Hata** 
▫️ Kullanım    \`${prefix}hata-bilfir\`
  
`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
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
  name: "kullanıcı",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
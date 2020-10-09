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
= ${prefix}spartanhelmet Logo Üretir
= ${prefix}blackbear Logo Üretir
= ${prefix}arcade Logo Üretir
= ${prefix}bluefire Logo Üretir
= ${prefix}bluelion Logo Üretir
= ${prefix}spartanmascot Logo Üretir
= ${prefix}hipsterwolf Logo Üretir
= ${prefix}bluegamefire Logo Üretir
= ${prefix}pinkghoul Logo Üretir
= ${prefix}purpledragon Logo Üretir
= ${prefix}sabertooth Logo Üretir
= ${prefix}angrycat Logo Üretir
= ${prefix}pirateskull Logo Üretir
= ${prefix}twitch Logo Üretir
= ${prefix}greenangrycheetah Logo Üretir
= ${prefix}bluebear Logo Üretir
= ${prefix}hivegaming Logo Üretir
= ${prefix}angrywolf Logo Üretir
= ${prefix}bersekbear Logo Üretir
= ${prefix}firetiger Logo Üretir
= ${prefix}wolfgaming Logo Üretir
= ${prefix}orangebear Logo Üretir
= ${prefix}warriorghelmet Logo Üretir
= ${prefix}skullwing Logo Üretir
**Normal Logolar**
= ${prefix}fluffy Logo Üretir
= ${prefix}arrow Logo Üretir
= ${prefix}amped Logo Üretir
= ${prefix}blue Logo Üretir
= ${prefix}moonsoon Logo Üretir
= ${prefix}gold Logo Üretir
**Extra Logolar**
${prefix}bubble
${prefix}bubble2
${prefix}comic
${prefix}cool
${prefix}discord
${prefix}kalp
${prefix}müzik-logo
**Sıradan Logolar**
${prefix}logo1
${prefix}logo2
${prefix}logo3
${prefix}logo4
${prefix}logo5
${prefix}logo6
${prefix}logo7
${prefix}logo8

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
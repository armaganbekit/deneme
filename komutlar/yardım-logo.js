const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
.setDescription(`
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
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
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
  name: "logo",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
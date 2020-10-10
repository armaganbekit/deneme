
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bluefire`)
.setDescription(`
Davet Menüsü Kullanıcılar
davetlerim
davet-oluştur
davet-stokla

Davet Menüsü Yetkililer
davet-kanal
davet-kanal-sıfırla
davet-ekle
davet-sıfırla 
davet-sil
Rütbeler rütbe-ekle
rütbe-sil 
rütbe-liste
   
`)
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
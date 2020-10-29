const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`BlueFire`)
.setDescription(`
s!aduketçek Aduket Çeker
s!ara155 Polisi Arar
s!balıktut Balık Tutarsınız
s!espri espri yapar
s!taksimdayı Taksim Dayı Fotosu Atar
`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")//Sponsor LOGO EVERLASTİNG 
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eğlen2'], 
  permLevel: 0
};

exports.help = {
  name: "eğlence2",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'ekonomi'
};
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
.setDescription(`
a?aduketçek Aduket Çeker
a?ara155 Polisi Arar
a?balıktut Balık Tutarsınız
a?espri espri yapar
a?taksimdayı Taksim Dayı Fotosu Atar
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")//syzer
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

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`4RM4G4N`)
.setDescription(`
 **Aduket Çeker** 
▫️ Kullanım \`${prefix}aduket\`
 **Polisi Arar** 
▫️ Kullanım \`${prefix}ara155\`
 **Balık Tutarsınız** 
▫️ Kullanım \`${prefix}balıktut\`
 **Bot Espiri Yapar** 
▫️ Kullanım \`${prefix}espiri\`
 **Taksim Dayı Gifi Atar** 
▫️ Kullanım \`${prefix}taksimdayı\`
`)
.setImage("https://cdn.discordapp.com/attachments/768239553324122131/771466101606318081/abs.jpg")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eglence2'], 
  permLevel: 0
};

exports.help = {
  name: "eğlence2",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
//**Kayıt Sistemi** <a:setting:750076062716788807> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
//**Davet Sistemi** <a:setting:750076062716788807> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)

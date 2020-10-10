const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Bleufire`)
.setDescription(`
s!günlük-para : Günlük Para (24 Saatte Bir Kullanılabilir)
s!hesap-aç : Banka Hesap Açar (+20 Lira Verir) 
s!hesabımı-sil : Banka Hesabınızı Siler
s!hesap : Banka Hesabınız Hakkında Bilgi Verir
s!para-gönder : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir
s!para : Bankadaki Paranızı Belirtir
s!market : Marketi Gösterir
`)
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eko'], 
  permLevel: 0
};

exports.help = {
  name: "ekonomi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'ekonomi'
};
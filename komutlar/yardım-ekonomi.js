const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Everlasting`)
.setDescription(`
s!günlük-para : Günlük Para (24 Saatte Bir Kullanılabilir)
s!hesap-aç : Banka Hesap Açar (+20 Lira Verir) 
s!hesabımı-sil : Banka Hesabınızı Siler
s!hesap : Banka Hesabınız Hakkında Bilgi Verir
s!para-gönder : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir
s!para : Bankadaki Paranızı Belirtir
s!market : Marketi Gösterir
`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")
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
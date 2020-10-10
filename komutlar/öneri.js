const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');


exports.run = async(client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('Doğru Kullanım : ${prefix}istek-bildir <isteğiniz>')

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription('İstek Kodunuz Başarıyla Bildirildi.\nEn Yakın Zamanda <@&760954425908527154> Kanalından Bakıcağız Eğer Güzel Bir İstek İse Size Ulaşıcağız!')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **İsteği ;**`)

.addField(`:envelope: **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen İstek/Tavsiye Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('760954425908527154').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir",'öneri'],
    permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}
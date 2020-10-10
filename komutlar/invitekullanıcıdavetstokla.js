const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  const kinsta = new Discord.MessageEmbed()
    .setColor("#0BF3B7")
    .setDescription(`Davetleriniz stoklandı!`)
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(kinsta);
};

module.exports.conf = {
  aliases: ["davetstokla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-stokla",
  description: "davet-stokla",
  usage: "davet-stokla"
};

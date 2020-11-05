const ayarlar = require('../ayarlar.json')
const Discord = require("discord.js"),
  db = require("quick.db");
module.exports.run = async (bot, message, args) => {
let prefix =  ayarlar.prefix
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);

  if (!veri) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Zaten herhangi bir rütbe ayarlanmamış!`)
      .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);
  }
  ///////////////////
  if (veri) {
    if (!veri2) {
      const kkis = new Discord.MessageEmbed()
        .setDescription(
          `<@&${message.guild.roles.cache.get(veri).id}>: ${veri12} Davet!`
        )
    .setColor("#0BF3B7")
  .setAuthor(`Rütbe Liste`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

      message.channel.send(kkis);
      return;
    } else {
      const kinsta = new Discord.MessageEmbed()
        .setDescription(
          `<@&${message.guild.roles.cache.get(veri).id}>: **${veri12} Davet!**
          <@&${message.guild.roles.cache.get(veri).id}>: **${veri21} Davet!**`
        )
    .setColor("#0BF3B7")
  .setAuthor(`Rank`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

      message.channel.send(kinsta);
      return;
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rütbeliste'],
  permLevel: 2
};
exports.help = {
  name: "rütbe-liste",
  description: "rütbe-liste",
  usage: "rütbe-liste"
};

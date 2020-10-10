const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
let prefix =  ayarlar.prefix
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
        .setDescription("Lütfen davet eklenecek kişiyi etiketleyiniz!")
        .setColor("RED")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
        .setDescription("Lütfen eklenecek davet sayısını giriniz.")
        .setColor("RED")
    );
  }
  const emirhansarac = new Discord.MessageEmbed()
    .setColor("#0BF3B7")
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`${u} Adlı şahsa; ${m} davet eklendi!`);
  message.channel.send(emirhansarac);

  db.add(`davet_${message.author.id}_${message.guild.id}`, +m);
};

module.exports.conf = {
  aliases: ["davetekle"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};

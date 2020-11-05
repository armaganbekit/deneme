const ayarlar = require('../ayarlar.json')
const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
let prefix =  ayarlar.prefix
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`)
  if (veri2) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Zaten maksimum rütbe sınırına ulaşmışsınız!`)
      .setColor("RED")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (!veri) {
    let enis = args[1];
    let sine = message.mentions.roles.first();
    if (!sine) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz!\nÖrnek: ${prefix}rütbe-ekle @Rol 5`
        )
        .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

      message.channel.send(embed);
      return;
    }
    if (!enis) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `Lütfen bir davet sayısı belirtiniz!\nÖrnek: ${prefix}rütbe-ekle @Rol 5`
        )
        .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Başarılı bir şekilde ${sine} rolü ${enis} davet karşılığında elde edilebilecek!`
      )
    .setColor("#0BF3B7")
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);
    await db.set(`rol1_${message.guild.id}`, sine.id);
    await db.set(`roldavet1_${message.guild.id}`, enis);
    return;
  }

  else{
    let enis = args[1];
    let sine = message.mentions.roles.first();
    if (!sine) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz!\nÖrnek: ${prefix}rütbe-ekle @Qral 5`
        )
        .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

      message.channel.send(embed);
      return;
    }
    if (!enis) {
      const emir = new Discord.MessageEmbed()
        .setDescription(
          `Lütfen bir davet sayısı belirtiniz!\nÖrnek: ${prefix}rütbe-ekle @Qral 5`
        )
        .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

      message.channel.send(emir);
      return;
    }
    const hayda = new Discord.MessageEmbed()
      .setDescription(
        `Başarılı bir şekilde ${sine} rolü ${enis} davet karşılığında elde edilebilecek!`
      )
    .setColor("#0BF3B7")
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(hayda);
if(enis < veri12){
  let hhh = await db.fetch(`rol1_${message.guild.id}`)
  let sss = await db.fetch(`roldavet1_${message.guild.id}`)
  await db.set(`rol1_${message.guild.id}`, sine.id);
    await db.set(`roldavet1_${message.guild.id}`, enis);
await db.set(`rol2_${message.guild.id}`, hhh);
    await db.set(`roldavet2_${message.guild.id}`, sss);
  
    return
}else{
    await db.set(`rol2_${message.guild.id}`, sine.id);
    await db.set(`roldavet2_${message.guild.id}`, enis);
    return;
}
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rütbeekle'],
  permLevel: 2
};
exports.help = {
  name: "rütbe-ekle",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
};

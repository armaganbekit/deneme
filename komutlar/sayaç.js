const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = async function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`<a:x_:721138407258063020> Bunun için yetkin yok. <a:x_:721138407258063020>`)
      .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
    return;
  }
  if (args[0] == "sıfırla" || args[0] == "sifirla") {
    if ((await db.fetch(`sayacMiktar_${message.guild.id}`)) == null) {
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:x_:721138407258063020> Sunucuda sayaç sistemi zaten aktif değil.. <a:x_:721138407258063020>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    } else {
      await db.delete(`sayacMiktar_${message.guild.id}`);
      await db.delete(`sayacKanal_${message.guild.id}`);
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:emoji_6:722967498542022656> Sunucudaki sayaç sistemi başarıyla sıfırlandı. <a:emoji_6:722967498542022656>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    }
  } else {
    if (await db.fetch(`sayacMiktar_${message.guild.id}`)) {
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:x_:721138407258063020> Sunucudaki sayaç sistemi zaten aktif.!\n\`Sıfırlamak için ?sayaç sıfırla\` <a:x_:721138407258063020>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    }
    const kanal = message.mentions.channels.first();
    const miktar = args[1];
    if (!kanal) {
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:x_:721138407258063020> Bir kanal etiketlemelisin.\nDoğru kullanım ?sayaç #kanal {miktar} <a:x_:721138407258063020>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    } else if (isNaN(miktar)) {
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:x_:721138407258063020> Bir rakam girmelisin\nDoğru kullanım ?sayaç #kanal {miktar} <a:x_:721138407258063020>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    } else if (miktar <= message.guild.members.cache.size) {
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:x_:721138407258063020> Hedef üye şuanki üye sayısından yüksek olmalıdır. <a:x_:721138407258063020>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    } else {
      await db.set(`sayacMiktar_${message.guild.id}`, miktar);
      await db.set(`sayacKanal_${message.guild.id}`, kanal.id);
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`<a:emoji_19:722968301474545706> Sunucudaki sayaç sistemi başarıyla aktif edildi.\nSayaç kanalı: \`${kanal.name}\`\nMiktar: ${miktar} <a:emoji_19:722968301474545706>`)
        .setFooter(`${client.user.username} Sayaç sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    }
  }
};

exports.yardim = {
  isim: "sayaç",
  kullanimlar: ["sayaç-ayarla", "sayaçayarla", "sayac"],
  aciklamalar: "Sunucuya özel sayaç sistemi."
};

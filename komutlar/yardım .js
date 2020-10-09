const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => { 
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RED')
.addField('Bluefire Bot | Yardım Menüsü',`
<a:bluefire1:761211197071687711> **Moderasyon Komutları.** 
▫️ Kullanım \`${prefix}moderasyon\`
<a:bluefire1:761211197071687711> **Moderasyon2 Komutları.** 
▫️ Kullanım \`${prefix}moderasyon2\`
<a:bluefire1:761211197071687711> **Eğlence  Komutları.** 
▫️ Kullanım  \`${prefix}eğlence\`
<a:bluefire1:761211197071687711> **Botumuzun Komutları.** 
▫️ Kullanım \`${prefix}bot\`
<a:bluefire1:761211197071687711> **Kullanıcı Komutları.** 
▫️ Kullanım  \`${prefix}kullanıcı\`
<a:bluefire1:761211197071687711> **Logo Komutları.**  
▫️ Kullanım    \`${prefix}logo\`
<a:bluefire1:761211197071687711> **Müzik Komutları.** 
▫️ Kullanım    \`${prefix}müzik\`
<a:bluefire1:761211197071687711> **Radyo Komutları.**  
▫️ Kullanım  \`${prefix}radyo\`
<a:bluefire1:761211197071687711> **Eklenti Komutları.** 
▫️ Kullanım  \`${prefix}eklenti\`

Prefix Değiştirmek İçin s!prefix <prefix>
`)
.setImage("https://cdn.discordapp.com/attachments/742828321259389050/758346500853596240/image_processing20200113-8836-fxpwkr.gif")
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['help','commands','y','komutlar'], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
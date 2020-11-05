const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** `)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?script=comics-logo&_loc=generate&imageoutput=true&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['logo8'],
    permLevel: 0
}

exports.help = {
    name: 'logo8',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'alev <yazı>'
}
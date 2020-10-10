const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("Kinsta Bot Davet")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=744137158004047882&scope=bot&permissions=8)\n**Botun Destek Sunucusu :** [Katıl](https://discord.gg/Zv9C4ep)")
.setColor("GREEN")

return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};
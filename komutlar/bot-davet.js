const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("BlueFire Bot Davet")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=749905271010361384&scope=bot&permissions=8)")
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
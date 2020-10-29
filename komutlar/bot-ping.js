const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
   const only = new Discord.MessageEmbed()
   .setTitle("İşte Pingim")
  .setColor("RANDOM")
   .setDescription(`:keyboard: • **Mesaj Gecikme Süresi** ; **${diff}Ms** \n :computer: • **Bot Gecikme Süresi**; **${API}Ms**`)
  
   
    mesaj.edit(only);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping'
};
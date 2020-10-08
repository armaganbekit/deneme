const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply(`Güncel Covid-19 vaka istatistiklerini buradan görebilirsin. Ülkeye özel istatistikler için ${ayarlar.prefix}korona <ülke kodu> komutunu kullanabilirsin. #evdekal **Doğru Kullanım:** __${ayarlar.prefix}korona <ülke kodu>__`)

  let darkcode = args[0].toLowerCase()

  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveç', 'NE')
  .replace('isveç',  'SN')
  
    let text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${darkcode}`);
    const body = text.body;
  let ülk = body.countrydata[0].info.title

    let code = new Discord.MessageEmbed()
    .setColor('')
    .setTitle('COVID-19 İstatistik Tablosu')
    .setDescription(`Ülke: **${ülk}**`)
    .setThumbnail('https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg')
    .addField('*:microbe: Toplam Vaka:*',`**〘 → ${body.countrydata[0].total_cases} ← 〙**`, false)
    .addField('*:syringe: Toplam İyileşen:*',`**〘 → ${body.countrydata[0].total_recovered} ← 〙**`, false)
    .addField('*:dna: Toplam Enfekte:*',`**〘 → ${body.countrydata[0].total_active_cases} ← 〙**`, false)
    .addField('*:skull_crossbones: Toplam Ölümler:*',`**〘 → ${body.countrydata[0].total_deaths} ← 〙**`, false)
    .addField('*:test_tube: Bugünki Vakalar:*',`**〘 → ${body.countrydata[0].total_new_cases_today} ← 〙**`, false)
    .addField('*:warning: Bugünki Ölümler:*',`**〘 → ${body.countrydata[0].total_new_deaths_today} ← 〙**`, false)
    .addField('*:bangbang: Ciddi Vakalar:*',`**〘 → ${body.countrydata[0].total_serious_cases} ← 〙** `, false)
    .addField('*:flag_white:  Ülke:*',`**〘 → ${ülk} ← 〙**`, false)
     .setTimestamp()
    .setFooter('COVID-19', client.user.avatarURL());

   message.channel.send(code);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 'DevTR',
  usage: 'DevTR'
};
const Discord = require('discord.js');

const soyguncu1 = [
"85 Türk Lirası Soydun",
"10 Türk Lirası Soydun",
"Hiç Bir Şey Kazanamadın.",
"1 Türk Lirası Soydun",
"120 Türk Lirası Soydun",
"250 Türk Lirası Soydun",
"800 Türk Lirası Soydun!",
"950 Türk Lirası Soydun",
"2.500 Türk Lirası Soydun",
"1.485 Türk Lirası Soydun",
"7.850 Türk Lirası Soydun",
"24.657 Türk Lirası Soydun",
"89.652 Türk Lirası Soydun",
"278.545 Türk Lirası Soydun",
"578.546 Türk Lirası Soydun",
"875.135 Türk Lirası Soydun",
"975.124 Türk Lirası Soydun",
"356.451 Türk Lirası Soydun",
"0 TL ÇALDIN.",
"10 TL ÇALDIN.",
"100 TL ÇALDIN.",
"1.000 TL ÇALDIN.",
"10.000 TL ÇALDIN.",
"100.000 TL ÇALDIN.",
"1.000.000 TL ÇALDIN.",
"1.010.000 TL ÇALDIN.",
"1.100.000 TL ÇALDIN.",
"1.200.000 TL ÇALDIN.",
"1.300.000 TL ÇALDIN.",
"1.400.000 TL ÇALDIN.",
"1.500.000 TL ÇALDIN.",
"2.000.000 TL ÇALDIN.",
"2.100.000 TL ÇALDIN.",
"2.200.000 TL ÇALDIN.",
"2.300.000 TL ÇALDIN.",
"2.400.000 TL ÇALDIN.",
"2.500.000 TL ÇALDIN.",
"3.000.000 TL ÇALDIN.",
"3.100.000 TL ÇALDIN.",
"3.200.000 TL ÇALDIN.",
];

exports.run = function(client, message) {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
//Komutun Kodları
const soyguncu = soyguncu1[Math.floor(Math.random() * soyguncu1.length)];
  message.channel.send(

  "`Soyguna hazırlanılıyor..`"

  ).then(
  function(i){
    i.edit("`KASA AÇILIYOR....`")
    message.edit(2 * 250)
    i.edit(
new Discord.MessageEmbed()
      .setTitle('`__Soygun Bitti.__`')
      .addField('**↓ÇALDIĞIN PARA↓**',soyguncu)
    .setColor('RANDOM')


    )
  })
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['soygun'],
    permLevel: 0,
    kategori: 'Eğlence'
  };

  exports.help = {
    name: 'soygunyap',
    description: 'Soygun Yaparsınız.',
    usage: 'soygunyap'
   }

const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sigarayak` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
    message.channel.send('Sigara Yakılıyor....')
      .then(nmsg => nmsg.edit('https://tenor.com/bzHmM.gif'))
     var Random = [
      'Aga be',
      'Yak Yak Yak',
    ];
    var kafasınasık = Math.floor(Math.random()*Random.length);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori:"Eğlence"
};

exports.help = {
  name: 'sigarayak',
  description: 'Sigara Gifi Gönderir.',
  usage: 'sigarayak'
};

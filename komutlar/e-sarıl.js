const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`Sarıl` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kime Sarılacağını Yazmalısın.').catch(console.error);
    message.channel.send('Bir İnsan Gördüm Sanki')
      .then(nmsg => nmsg.edit('https://media.giphy.com/media/KL7xA3fLx7bna/giphy.gif'))
     var Random = [
      'uuyyy Nekadarda tatlı Bir An.',
      'Bende İstiyorum :D',
    ];
    var sarıl = Math.floor(Math.random()*Random.length);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori:"Eğlence"
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz Kişiye Sarılır.',
  usage: 'sarıl'
};

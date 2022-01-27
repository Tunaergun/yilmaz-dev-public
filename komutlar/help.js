const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
  if(args[0] === "Genel" || args[0] === "genel") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('RANDOM')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square:  - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
 return message.channel.send(Genel)


       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Guard" || args[0] === "guard") {
              let Guard = new Discord.MessageEmbed()
  .setAuthor('Guard', message.author.displayAvatarURL())
  .setColor('RANDOM')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Guard').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
              return message.channel.send(Guard)



       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('RANDOM')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
   return message.channel.send(Eğlence)


           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('RANDOM')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
   return message.channel.send(Moderasyon)


               return;
  }
  //Sahip KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip") {
    let Sahip = new Discord.MessageEmbed()
.setAuthor('Sahip', message.author.displayAvatarURL())
.setColor('RANDOM')
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
.setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square:  - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
return message.channel.send(Sahip)


return;
}

//YARDIM KOMUTU

  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('RANDOM')
  .setDescription(`**Örnek Kullanım:** \`${prefix}help genel\``)
  .addField('Kategoriler:', `
  **[${prefix}help genel](https://discord.gg/GaUXSSVThC)**  
  **[${prefix}help eğlence](https://discord.gg/GaUXSSVThC)**
  **[${prefix}help moderasyon](https://discord.gg/GaUXSSVThC)**
  **[${prefix}help guard](https://discord.gg/GaUXSSVThC)**
  **[${prefix}help sahip](https://discord.gg/GaUXSSVThC)**
`)//https://discord.gg/GaUXSSVThC yerine youtube kanalınızın linkini veya herhangi bir link koyabilirsiniz.
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)


}
  


  exports.conf = {
    aliases: ['Help','help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };

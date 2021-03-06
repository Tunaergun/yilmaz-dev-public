const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
    let mesaj = args.slice(0).join(" ");
    if (mesaj.length < 5)
      return message.channel.send(
        new Discord.MessageEmbed()
               .setColor("#00ff00")
         .setDescription(
            `Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: ${prefix}oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`
           )
      );

    message.channel.send(
        " Oto-Rol mesajını `" +
        mesaj +
        "` Olarak ayarladım."
    );
    db.set(`otoRM_${message.guild.id}`, mesaj);
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol-msg"],
  permLevel: 4,

};

exports.help = {
  name: "otorol-msg",
  description: "taslak",
  usage: "sayac-hg-msg"
};

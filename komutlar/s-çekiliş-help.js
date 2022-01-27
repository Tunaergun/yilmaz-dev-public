const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
var sn = ayarlar.sunucuismi;
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor(`${sn}`)
        .addField("**__Çekliş Başlat__**",`${prefix}çekiliş-başlat **#kanal süre kazanan_sayısı Ödül** \nBelirtilen Kanalda Çekiliş Başlatırsınız`,false )
        .addField("**__Çekiliş Yenile__**",` ${prefix}çekiliş-yenile **mesaj_id** \n Belirtilen İd deki Çekilişi Yeniler`,true)
        .addField("**__Çekiliş Liste__**",`${prefix}çekiliş-liste \nSunucudaki Aktif Çekilişleri Listeler`,true)
        .addField("**__Çekiliş Bitir__**",`${prefix}çekiliş-bitir **mesaj_id**  \nBelirtilen İd deki Çekilişi Sonlandırır.`,false)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'giveawey'],
  kategori: 'yardım',
  permLevel: 4,
  kategori: `Sahip`
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};
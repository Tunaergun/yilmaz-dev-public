const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username}: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` sunucu ` + client.users.cache.size + ` kullanıcı!`);
  console.log(`Başarıyla giriş yapıldı`)
 
  // BOTUN DURUMUNDA GÖRÜNECEK YAZI   
  client.user.setActivity("Yılmaz Dev", {
  });
};

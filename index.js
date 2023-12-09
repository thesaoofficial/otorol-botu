const { Client, GatewayIntentBits } = require('discord.js');

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers
];

const client = new Client({ intents });

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('guildMemberAdd', async (member) => {
  console.log(`Yeni üye katıldı: ${member.user.tag}`);

  const guildID = '1170039215896133723'; // Sunucu ID'si
  const roleId = '1182882390016802848'; // Otorol verilecek rolün ID'si

  // Sunucu ID'sini kontrol et
  if (member.guild.id === guildID) {
    const role = member.guild.roles.cache.get(roleId);

    if (role) {
      try {
        await member.roles.add(role);
        console.log(`Rol başarıyla eklendi! Kullanıcı: ${member.user.tag}`);
      } catch (error) {
        console.error('Rol eklenirken bir hata oluştu:', error);
      }
    } else {
      console.error('Rol bulunamadı. Lütfen rol ID\'sini kontrol edin.');
    }
  }
});

client.login('');

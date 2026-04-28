const { Telegraf, Markup } = require('telegraf');
const http = require('http');

// Render Port Error ကို ဖြေရှင်းရန် အောက်ပါ code ကို ထည့်ထားပါသည်
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running\n');
}).listen(process.env.PORT || 3000);

const bot = new Telegraf('8546255100:AAFzI17mWp5jxG5bkgX59qYWEx65-ThiSmA');

// --- Assets ---
const WELCOME_PHOTO = 'AgACAgUAAxkBAAMCafBbnW09CSQ0Mxze1GHBWgm9CTIAAosOaxvHtYBXtjquBSXZSR8BAAMCAAN5AAM7BA';

const WELCOME_TEXT = `<tg-emoji emoji-id="5343824161091370043">✨</tg-emoji> <b>ဆရာမလေး‌နွယ်ပိုးအိမ်မှကြိုဆိုပါတယ်။</b>\n\n<b>#TarotByNwePoe</b>`;

const RULE_TEXT = `<tg-emoji emoji-id="6170125329961588851">📝</tg-emoji> <b>မေးခွန်းမေးရင်လိုအပ်တာလေးတွေပါ</b>\n\n၁။ နာမည်နေ့နံ လိုအပ်ပါမယ်။\n၂။ မေးဖူးသူများလည်း နာမည်နေ့နံ ပြန်ပို့ပေးပါ။\n၃။ လား / လဲ / ပြီးတော့ နဲ့ဆုံးရင် မေးခွန်း ၁ ခုစာ ယူပါတယ်။\n၄။ ပညာရေးမေးလျှင် မေးခွန်းတိကျစွာ မေးပေးပါ။\n၅။ တိကျမှုမရှိသော မေးခွန်းများကို မဟောပေးပါ။\n\n👉 https://t.me/tarot_only_channel/13709`;

const PACKAGE_TEXT = `<tg-emoji emoji-id="5220072555427143794">🔥</tg-emoji> <b>Package အသစ်လေးတွေထုတ်ထားပါပီနော်</b>\n\n<tg-emoji emoji-id="5290012249551815103">⚠️</tg-emoji> Package price မတူတာမို့သေချာလေးကြည့်ပေးပါနော်\n\n<tg-emoji emoji-id="6170339056124171121">📍</tg-emoji> https://t.me/tarot_only_channel/17323?single <tg-emoji emoji-id="6172506464125458083">✨</tg-emoji>\n\n<tg-emoji emoji-id="5219844617217777972">🗓</tg-emoji> မေးမယ်ဆိုရင် booking တင်ရပါမယ် @Poe_manager\n\n----------------------------------\n\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 1 Question - 3000 ks (ယတြာပါ 3ကဒ်ဆွဲ)\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 3 Question - 6000ks\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 5 Question - 10000ks\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 10 Question - 15000ks\n\n----------------------------------`;

const QUESTION_TEXT = `<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 1 Question - 3000 ks (ယတြာပါ 3ကဒ်ဆွဲ)\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 3 Question - 6000ks\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 5 Question - 10000ks\n<tg-emoji emoji-id="6100348608370970847">💗</tg-emoji> 10 Question - 15000ks\n\n----------------------------------\n\n<tg-emoji emoji-id="6068643297230853928">📸</tg-emoji> (ပုံပြပီးမေးရမယ့် package ပါ နာမည်၊နေ့နမ်၊ဓာတ်ပုံလိုအပ်ပါတယ်)\nIntuition သုံးပီးဟောမှာမို့ပုံလိုအပ်တာပါ <tg-emoji emoji-id="6068843537196127040">✨</tg-emoji>\n\n<tg-emoji emoji-id="6100584230276830149">💎</tg-emoji> 1 Questions-5000ks\n<tg-emoji emoji-id="6129609451759473803">🃏</tg-emoji> wallpaper အဆောင်ကဒ်ပါပါမယ် <tg-emoji emoji-id="6129631746934707034">✨</tg-emoji>\n\n<tg-emoji emoji-id="6100584230276830149">💎</tg-emoji> 4 Questions-15000ks\n<tg-emoji emoji-id="6098153021089255621">🎧</tg-emoji> Subliminal free <tg-emoji emoji-id="6100619479073430088">🎁</tg-emoji>\n\n<tg-emoji emoji-id="6100641804313432801">🔮</tg-emoji> Orcale 1Q - 3000ks\n\n<tg-emoji emoji-id="6165632888659252857">🃏</tg-emoji> Tarot + orcal 1Q = 3000ks\n\n<tg-emoji emoji-id="6161358215083726356">🃏</tg-emoji> ကိုယ်တိုင်ကဒ်ဆွဲချင်ရင် 3ကဒ်ဆွဲရမာပါ\n1Q - 3000ksနဲ့မေးလို့ရပါမယ်\n\n<tg-emoji emoji-id="6161358215083726356">💞</tg-emoji> relationship /single overall reading - 10000ks\n<tg-emoji emoji-id="6073323282575135115">⚡️</tg-emoji> energy check ပေးပါတယ်ရှင့်\n\n#nwe_poe_eain`;

const PAYMENT_TEXT = `<tg-emoji emoji-id="6237668552594167846">💳</tg-emoji> <b>ငွေလွှဲရန်နံပါတ်များ</b>\n\n09754658360 [Kpay]\nDaw Aye ThanDar \n\n09652182267 [Wave]\nTHK\n\n‼️ <b>Note ကို Payment လို့ရေးပေးပါနော်</b>\n‼️ <b>Tarot လို့မရေးပါနဲ့နော် ရေးရင်အဆုံးပါ</b>\n\n#ဆရာမလေးပိုး \n#နွယ်ပိုးအိမ် ။`;

// --- Keyboards ---
const mainMenu = Markup.inlineKeyboard([
    [Markup.button.callback("သိထားရမဲ့အချက်များ", 'rule')],
    [Markup.button.callback("Package Price", 'package')],
    [Markup.button.callback("Question Price", 'question')],
    [Markup.button.callback("Payment များ", 'payment')],
    [Markup.button.url("Booking တင်ရန်", 'https://t.me/Poe_manager')]
], { columns: 1 });

// --- Bot Logic ---
bot.start((ctx) => {
    ctx.replyWithPhoto(WELCOME_PHOTO, { caption: WELCOME_TEXT, parse_mode: 'HTML', ...mainMenu });
});

bot.action('main_menu', (ctx) => {
    ctx.editMessageCaption(WELCOME_TEXT, { parse_mode: 'HTML', ...mainMenu }).catch(() => {});
});

bot.action('rule', (ctx) => {
    ctx.editMessageCaption(RULE_TEXT, { parse_mode: 'HTML', reply_markup: Markup.inlineKeyboard([[Markup.button.callback("အရှေ့သို့ပြန်သွားရန်", 'main_menu')]]).reply_markup }).catch(() => {});
});

bot.action('question', (ctx) => {
    const qMenu = Markup.inlineKeyboard([
        [Markup.button.url("TikTok မှ လာသူများအတွက်", 'https://t.me/nwe_poe_eain_package/35')],
        [Markup.button.callback("အရှေ့သို့ပြန်သွားရန်", 'main_menu')]
    ]);
    ctx.editMessageCaption(QUESTION_TEXT, { parse_mode: 'HTML', ...qMenu }).catch(() => {});
});

bot.action('payment', (ctx) => {
    ctx.editMessageCaption(PAYMENT_TEXT, { parse_mode: 'HTML', reply_markup: Markup.inlineKeyboard([[Markup.button.callback("အရှေ့သို့ပြန်သွားရန်", 'main_menu')]]).reply_markup }).catch(() => {});
});

bot.action('package', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(PACKAGE_TEXT, { 
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
            [Markup.button.url("Package Channel ကြည့်ရန်", 'https://t.me/nwe_poe_eain_package')],
            [Markup.button.callback("အရှေ့သို့ပြန်သွားရန်", 'back_to_start')]
        ])
    });
});

bot.action('back_to_start', (ctx) => {
    ctx.replyWithPhoto(WELCOME_PHOTO, { caption: WELCOME_TEXT, parse_mode: 'HTML', ...mainMenu });
});

bot.launch();
console.log("Bot is running with Port listener for Render...");

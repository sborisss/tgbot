import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';

const token = '2047021884:AAFmTyhazSRqFNWaiJ69geKWyozmvJmfYDw';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    let { status: st } = await axios.get('http://149.255.27.174:8082/act/GET_STUDENT_JOURNAL_DATA',
    `cls=350&parallelClasses=&student=639`,
    {
      headers: {
        Cookie:"ys-userId=n%3A391; ys-user=s%3A%u0421%u0430%u043C%u043E%u0445%u043E%u0432%u0435%u0446; ys-password=s%3A5416aac644180ffd7a46cadd2d19f77c7b1b9a69"
      }
    });

    if (st === 200)
    {
      
    }
    else
    {
      bot.sendMessage(chatId, 'Журнал пока не работает.');
    }
})

bot.onText(/\/pro/, async (msg) => {
    let { data: journal } = await axios.post(
        'http://149.255.27.174:8082/act/GET_STUDENT_JOURNAL_DATA',
        `cls=350&parallelClasses=&student=639`,
        {
          headers: {
            Cookie:"ys-userId=n%3A391; ys-user=s%3A%u0421%u0430%u043C%u043E%u0445%u043E%u0432%u0435%u0446; ys-password=s%3A5416aac644180ffd7a46cadd2d19f77c7b1b9a69"
          }
        }
      );

    console.log(journal);
})

bot.on('polling_error', console.log)
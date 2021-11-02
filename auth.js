import TelegramBot from 'node-telegram-bot-api';

const token = '2047021884:AAFmTyhazSRqFNWaiJ69geKWyozmvJmfYDw';
const bot = new TelegramBot(token, {polling: true});

bot.onText('/start', (msg) => {
    
})
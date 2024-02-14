import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'buenas', 'hi', 'hello'])
    .addAnswer('Un gusto tenerte en ChatGPTricks de nuevo ¿Como puedo ayudarte el día de hoy 😀?')


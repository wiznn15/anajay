let handler = async (m, { conn, text }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: `${pickRandom(["😨", "😅", "😂", "😳", "😎", "🥵", "😱", "🐦", "🙄", "🐤", "🗿", "🐦", "🤨", "🥴", "😐", "👆", "😔", "👀", "👎"])}`,
      key: m.key,
    },
  });
};
handler.customPrefix =
  /(hum?u|bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner|bisri|pedo|asu|cok|ngentot|ngentod|bangsat)/i;
handler.command = new RegExp();

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

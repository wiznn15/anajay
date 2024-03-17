import fetch from "node-fetch";

let handler = async (m, { conn }) => {
  let url = ai[Math.floor(Math.random() * ai.length)];
  conn.sendFile(m.chat, url, null, "Udah jadi mayat gaes:v", m);
};
handler.help = ["hoshino"];
handler.tags = ["nsfw"];
handler.command = /^(hoshino)$/i;
handler.premium = false;
export default handler;

global.ai = [
  "https://i.pinimg.com/236x/a0/14/ae/a014aeb04544e9509de4d33c90f4dd31.jpg",
  "https://i.pinimg.com/236x/a5/8a/d3/a58ad309dec24355d46364036ab9d107.jpg",
  "https://i.pinimg.com/236x/11/23/50/11235073a2272fe38910c99e3795c9e8.jpg",
  "https://i.pinimg.com/236x/5c/5b/99/5c5b99ac93de120782ed81871b4f72f9.jpg",
  "https://i.pinimg.com/474x/b9/26/24/b92624404a3a3017491b74fd0cee35ef.jpg",
  "https://i.pinimg.com/236x/1c/47/74/1c47748294c14c403bce25195d8893ab.jpg",
  "https://i.pinimg.com/236x/cc/d0/a7/ccd0a789e3c1f30bf78af09b6f84c5c2.jpg",
  "https://i.pinimg.com/564x/c0/f5/60/c0f560760f1857cfbc8fc29f102d321c.jpg",
  "https://i.pinimg.com/236x/41/38/ad/4138add441fa3b15e273b8ca7e8a301a.jpg",
  "https://i.pinimg.com/236x/8a/e5/20/8ae5209f6048f0f58525accbef761dd6.jpg",
  "https://i.pinimg.com/236x/38/24/6a/38246a2d17f248b8e4604a705a1c71cb.jpg",
  "https://i.pinimg.com/236x/ae/48/3e/ae483e1e25a1bdd38d0b7f6f90319acd.jpg",
  "https://i.pinimg.com/236x/6d/4d/d1/6d4dd1c2d56b270f7d2406fbc0958b20.jpg",
  "https://i.pinimg.com/236x/e8/86/f1/e886f19ca553a5a792e5d561f486cfc4.jpg",
  "https://i.pinimg.com/236x/13/ad/ec/13adec62550fa1fc74466d7b40ab5c30.jpg",
  "https://i.pinimg.com/736x/b9/26/24/b92624404a3a3017491b74fd0cee35ef.jpg",
];

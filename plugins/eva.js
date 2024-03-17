import fetch from "node-fetch";

let handler = async (m, { conn }) => {
  let url = eva[Math.floor(Math.random() * eva.length)];
  conn.sendFile(m.chat, url, null, "Cantik kan", m);
};
handler.help = ["eva"];
handler.tags = ["nsfw"];
handler.command = /^(eva)$/i;
handler.premium = true;
export default handler;

global.eva = [
  "https://telegra.ph/file/3896140f30a19f745c035.jpg",
  "https://telegra.ph/file/1b27aa485946200034f5d.jpg",
  "https://telegra.ph/file/96adaf8df36ffee7fc673.jpg",
  "https://telegra.ph/file/521162fb3429af54201cb.jpg",
  "https://telegra.ph/file/62578aef2ede0bef4b9a4.jpg",
  "https://telegra.ph/file/34a52653e108306e7fbf2.jpg",
  "https://telegra.ph/file/daa2ecbd518ecdf3c5dd4.jpg",
  "https://telegra.ph/file/ccf4c4ce3117a013cc7fd.jpg",
  "https://telegra.ph/file/c633bb565077f48da1a3d.jpg",
  "https://telegra.ph/file/14c6ec46e3faf8d32c741.jpg",
  "https://telegra.ph/file/490ddd039be0e4962a0a0.jpg",
  "https://telegra.ph/file/a61301759e7644b082324.jpg",
  "https://telegra.ph/file/f6089edb78b708cb614d1.jpg",
  "https://telegra.ph/file/21859c51ab79c30af83ca.jpg",
  "https://telegra.ph/file/63e750b048a08e5711c07.jpg",
  "https://telegra.ph/file/e0bf1d029dc408c1b0666.jpg",
  "https://telegra.ph/file/c08b7f80931caf181e531.jpg",
  "https://telegra.ph/file/995e018e2f5072e56191c.jpg",
];

import fetch from "node-fetch";

let handler = async (m, { conn }) => {
  let url = aqua[Math.floor(Math.random() * aqua.length)];
  conn.sendFile(m.chat, url, null, "Jangan Sange Woy", m);
};
handler.help = ["aqua"];
handler.tags = ["nsfw"];
handler.command = /^()aqua$/i;
handler.premium = true;
export default handler;

global.aqua = [
  "https://telegra.ph/file/3dd72943ffbb82b69a610.jpg",
  "https://telegra.ph/file/f427ced49f8afc8e6b522.jpg",
  "https://telegra.ph/file/4bf9e4245ebbd32b60f72.jpg",
  "https://telegra.ph/file/a3298d7e6e8e028cee5d9.jpg",
  "https://telegra.ph/file/b3777984dc2a41ddc92a1.jpg",
  "https://telegra.ph/file/ca2cfeae50b9510768e3b.jpg",
  "https://telegra.ph/file/171233848a2cbcdc9755e.jpg",
  "https://telegra.ph/file/b189dd92fe466e2bc2b23.jpg",
  "https://telegra.ph/file/c7f90b60c793353e07ce8.jpg",
  "https://telegra.ph/file/5e96422e922846f40a125.jpg",
  "https://telegra.ph/file/6d93c1388fc3771ee5124.jpg",
  "https://telegra.ph/file/de3091fdb3efbdaf6ae9a.jpg",
  "https://telegra.ph/file/0a76fd4d64d4cfa1b98a4.jpg",
  "https://telegra.ph/file/3a714a92fe965829e7a4d.jpg",
  "https://telegra.ph/file/782d20b111ed425524a14.jpg",
  "https://telegra.ph/file/276e8f9465b181cf6f94b.jpg",
  "https://telegra.ph/file/3efe23feb305a6be6d5bb.jpg",
  "https://telegra.ph/file/bcfeec50f13ac05667b10.jpg",
  "https://telegra.ph/file/160da490a96eb890d2c5d.jpg",
  "https://telegra.ph/file/4eea99668edf742fa6318.jpg",
  "https://telegra.ph/file/4b7e9d1f26acd093dc425.jpg",
  "https://telegra.ph/file/51316c9ab25c8082c34c0.jpg",
  "https://telegra.ph/file/22671040989c61b75c71a.jpg",
  "https://telegra.ph/file/7641ac11d55cda45c9a93.jpg",
  "https://telegra.ph/file/8e2b371056b1b8a5fe081.jpg",
  "https://telegra.ph/file/96cc86d3ec33940e12385.jpg",
  "https://telegra.ph/file/f4f8787bf62c348f79fff.jpg",
  "https://telegra.ph/file/6453cdfc3849a5ec3be94.jpg",
  "https://telegra.ph/file/fd110331373156ec66520.jpg",
  "https://telegra.ph/file/ac41262ce65e5ff8aa72e.jpg",
  "https://telegra.ph/file/7ca04f6a760ada31c330c.jpg",
  "https://telegra.ph/file/976dce99701273c7c2098.jpg",
];

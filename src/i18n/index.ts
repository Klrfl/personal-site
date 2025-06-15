export * from "./utils";

export const defaultLanguage = "en";
export const languages = [
  {
    id: "en",
    label: "English",
    emoji: "🇺🇸",
  },
  {
    id: "id",
    label: "Bahasa Indonesia",
    emoji: "🇮🇩",
  },
];

export const ui = {
  en: {
    "nav.home": "Go back home",
    "nav.theme-toggle": "Toggle site theme",
    "nav.open-nav": "Open navigation bar",
    "nav.close-nav": "Close navigation bar",

    "nav.open-search": "Open search bar",
    "nav.close-search": "Close search bar",
    "nav.search-info":
      "Press <kbd>Esc</kbd> or click on the close button to close this dialog.",

    "nav.link.home": "Home",
    "nav.link.about": "About",
    "nav.link.blog": "Blog",
    "nav.link.journal": "Journal",
  },

  id: {
    "nav.home": "Kembali ke beranda",
    "nav.theme-toggle": "Ganti tema situs web",
    "nav.open-nav": "Buka bilah navigasi",
    "nav.close-nav": "Tutup bilah navigasi",

    "nav.open-search": "Buka bilah pencarian",
    "nav.close-search": "Tutup bilah pencarian",
    "nav.search-info":
      "Tekan <kbd>Esc</kbd> atau klik tombol silang untuk menutup bilah pencarian ini.",

    "nav.link.home": "Beranda",
    "nav.link.about": "Tentang saya",
    "nav.link.blog": "Blog",
    "nav.link.journal": "Jurnal",
  },
};

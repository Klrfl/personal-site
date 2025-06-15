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

    "page.home.title": "Efraim Munthe | Home",
    "page.home.hero.greeting": "Hello! I'm Efraim.",
    "page.home.hero.p":
      "I'm a student, web developer, tech enthusiast and avid learner.",
    "page.home.hero.projects": "See what I've made",
    "page.home.hero.contact": "Contact me",

    "page.home.skills.title": "Skills",
    // TODO: use MDX to render `TechChip`s
    //     "page.home.skills.p": `
    //       In the last 2 and a half years, I have learned and used many different
    //       technologies in the frontend world. I am proficient in <TechChip>
    //         HTML
    //       </TechChip>, <TechChip>CSS</TechChip>, and <TechChip>
    //         JavaScript
    //       </TechChip>, and have experience using <TechChip
    //         href="https://astro.build">
    //         Astro
    //       </TechChip>, <TechChip href="https://vuejs.org">Vue</TechChip> and more
    //       recently <TechChip href="https://tailwindcss.com">Tailwind</TechChip>
    //        and <TechChip href="https://react.dev">React</TechChip>. Outside of web
    //       development, I have experience writing <TechChip>Lua</TechChip> in Roblox
    //       Studio, and I also learned a little bit of <TechChip>Python</TechChip> and
    //       <TechChip>C</TechChip>.
    // `,

    "page.home.projects.title": "Projects",
    "page.home.projects.p":
      " I strongly believe in learning by doing to acquire new skills effectively. So, when I learn a new technology, I always do projects, be it large or small. Here are some of them. ",

    "page.home.blog.title": "Blog Posts",
    "page.home.blog.p": "The newest posts from my personal blog.",
    "page.home.blog.more-cta": "See more blog posts",

    "page.home.about.title": "About me",
    // TODO: update
    "page.home.about.p":
      " My name is Efraim Munthe, I am a student currently learning about front-end web development and the JAMStack. I also recently got into backend web development, dabbling in NodeJS, PostgreSQL and Express. I haven't learned much about them, so I haven't put them into my skills yet.",
    "page.home.about.more-cta": "Learn more about me",

    "page.home.contact.title": "Contact me",
    "page.home.contact.p":
      "You can contact me via email or Discord, but you can message me here directly if you want!",

    "page.home.contact.label-name": "Your name",
    "page.home.contact.label-email": "Your email",
    "page.home.contact.label-message": "Your message",
    "page.home.contact.send-cta": "Send message",
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

    "page.home.title": "Efraim Munthe | Beranda",
    "page.home.hero.greeting": "Halo! Nama saya Efraim.",
    "page.home.hero.p":
      "Saya adalah seorang pengembang web, penggemar teknologi dan pelajar.",
    "page.home.hero.projects": "Lihat yang saya buat",
    "page.home.hero.contact": "Hubungi saya",

    "page.home.skills.title": "Keterampilan",
    // 'page.home.skills.p': 'todo'

    "page.home.projects.title": "Proyek saya",
    "page.home.projects.p":
      " Saya sangat percaya bahwa praktek secara langsung sangat penting untuk mempelajari hal-hal yang baru dengan efektif. Berikut adalah beberapa proyek yang saya buat saat mempelajari berbagai teknologi baru.",

    "page.home.blog.title": "Kiriman blog",
    "page.home.blog.p": "Tulisan terbaru dari blog saya.",
    "page.home.blog.more-cta": "Lihat semua blog",

    "page.home.about.title": "Tentang saya",
    "page.home.about.p":
      " My name is Efraim Munthe, I am a student currently learning about front-end web development and the JAMStack. I also recently got into backend web development, dabbling in NodeJS, PostgreSQL and Express. I haven't learned much about them, so I haven't put them into my skills yet.",
    "page.home.about.more-cta": "Baca lebih lanjut",

    "page.home.contact.title": "Kontak",
    "page.home.contact.p":
      "Anda bisa meninggalkan pesan lewat email atau Discord, tapi lewat sini juga bisa!",
    "page.home.contact.label-name": "Nama anda",
    "page.home.contact.label-email": "Email anda",
    "page.home.contact.label-message": "Pesan anda",
    "page.home.contact.send-cta": "Kirim pesan",
  },
};

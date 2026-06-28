export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

export const siteConfig: SiteConfig = {
  name: "Entropic",
  description: "Security Research Philes",
  homeAsciiArt: `░██     ░██    ░███      ░██████   ░██████████ ░███████     ░██████   ░███    ░██ 
░██     ░██   ░██░██    ░██   ░██  ░██         ░██   ░██   ░██   ░██  ░████   ░██ 
░██     ░██  ░██  ░██  ░██     ░██ ░██         ░██    ░██ ░██     ░██ ░██░██  ░██ 
░██████████ ░█████████ ░██     ░██ ░█████████  ░██    ░██ ░██     ░██ ░██ ░██ ░██ 
░██     ░██ ░██    ░██ ░██     ░██ ░██         ░██    ░██ ░██     ░██ ░██  ░██░██ 
░██     ░██ ░██    ░██  ░██   ░██  ░██         ░██   ░██   ░██   ░██  ░██   ░████ 
░██     ░██ ░██    ░██   ░██████   ░██████████ ░███████     ░██████   ░██    ░███ 
                                                                                  
                                                                                  
                                                                                  `,
  homeSections: [
    {
      title: "TL;DR",
      items: [
        {
          label: "Cybersecurity enthusiast. Information Security Student. Perfectionist."
        },
        {
          label: "Researcher @haoedon_1",
          external: true
        },
        { label: "My CVEs", href: "/cves/" }
      ]
    },
    {
      title: "Philes",
      volumes: {
        sort: "asc",
        showEmpty: false
      }
    },
    {
      title: "Skills",
      items: [
        { label: "Binary Exploitation" },
        { label: "Linux Security" },
        { label: "Windows Security" },
        { label: "Open Source Intelligence (OSINT)" },
        { label: "CTF Challenge Development" },
        { label: "Network Traffic Analysis" }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "root -at- cubeyond -dot- net" },
        {
          label: "github",
          href: "https://github.com/Haoedon",
          external: true,
          prefix: "~ call"
        },
        {
          label: "telegram",
          href: "https://t.me/@haoedon_1",
          external: true,
          prefix: "~ call"
        },
        {
          label: "haoedonsovervoice@gmail.com",
          href: "mailto:haoedonsovervoice@gmail.com",
          external: true,
          prefix: "~ call"
        }
      ]
    }
  ]
};

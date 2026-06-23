export type CveRecord = {
  id: `CVE-${number}-${number}`;
  title: string;
  date: string;
};

export const cveRecords: CveRecord[] = [
  {
    id: "CVE-2024-25817",
    title: "eza buffer overflow via .git metadata",
    date: "2024-03-05"
  },
  {
    id: "CVE-2025-60939",
    title: "Spotify Client Denial of Service",
    date: "2025-10-23"
  },
  {
    id: "CVE-2026-56113",
    title: "DHCPv6 PD RENEW Use-After-Free",
    date: "2026-06-23"
  },
  {
    id: "CVE-2026-56114",
    title: "DHCPv6 PD Exclude Stack OOB Write",
    date: "2026-06-23"
  },
  {
    id: "CVE-2026-56115",
    title: "IPv6 RA RouteInfo Memory Leak",
    date: "2026-06-23"
  },
  {
    id: "CVE-2026-56116",
    title: "Control Socket Use-After-Free",
    date: "2026-06-23"
  }
];

export type CveRecord = {
  id: `CVE-${number}-${number}`;
  title: string;
  date: string;
};

export const cveRecords: CveRecord[] = [
  {
    id: "CVE-2020-27545",
    title: "XSS vulnerability in python-lxml's clean module",
    date: "2026-05-11"
  },
  {
    id: "CVE-2021-41773",
    title: "Apache Path Traversal",
    date: "2025-10-23"
  },
  {
    id: "CVE-2021-3156",
    title: "Baron Samedit",
    date: "2026-06-23"
  },
  {
    id: "CVE-2020-1472",
    title: "Zerologon",
    date: "2026-05-23"
  }
];

import { type CveRecord, textmodeConfig } from "../../config";
import { externalLink, textHtml } from "../textmode/core/html";
import { cellWidth, padCells, wrapWordsCells } from "../textmode/core/layout";

const innerWidth = textmodeConfig.volumeRightColumn - 1;
const contentWidth = innerWidth - 2;
const cveIdWidth = 14;
const dateWidth = 10;
const columnGap = 2;
const titleWidth = contentWidth - cveIdWidth - dateWidth - columnGap * 2;

export function renderCveRegister(records: CveRecord[]): string {
  const sortedRecords = [...records].sort(compareCveIdsDesc);
  const lines = [
    "",
    frameTop(),
    renderHeader(),
    frameRule(),
    ...sortedRecords.flatMap(renderCveRow),
    frameBottom(),
    "",
    textHtml(renderStats(sortedRecords.length))
  ];

  return `${lines.join("\n")}\n`;
}

function renderCveRow(record: CveRecord): string[] {
  const titleLines = wrapWordsCells(record.title, titleWidth);

  return titleLines.map((titleLine, index) => {
    const idHtml = index === 0 ? renderLinkedCveId(record.id) : textHtml(" ".repeat(cveIdWidth));
    const titleHtml = textHtml(padCells(titleLine, titleWidth));
    const dateHtml = index === 0 ? textHtml(padCells(record.date, dateWidth)) : textHtml(" ".repeat(dateWidth));

    return `│ ${idHtml}${" ".repeat(columnGap)}${titleHtml}${" ".repeat(columnGap)}${dateHtml} │`;
  });
}

function compareCveIdsDesc(left: CveRecord, right: CveRecord): number {
  const leftId = parseCveId(left.id);
  const rightId = parseCveId(right.id);

  return rightId.year - leftId.year || rightId.sequence - leftId.sequence;
}

function parseCveId(id: CveRecord["id"]): { year: number; sequence: number } {
  const [, year = "0", sequence = "0"] = id.match(/^CVE-(\d+)-(\d+)$/) ?? [];

  return {
    year: Number.parseInt(year, 10),
    sequence: Number.parseInt(sequence, 10)
  };
}

function renderLinkedCveId(id: CveRecord["id"]): string {
  const padding = " ".repeat(Math.max(0, cveIdWidth - cellWidth(id)));

  return `${externalLink(cveUrl(id), id)}${textHtml(padding)}`;
}

function cveUrl(id: CveRecord["id"]): string {
  return `https://www.cve.org/CVERecord?id=${id}`;
}

function renderStats(count: number): string {
  return [
    "  ──[ stats ]────────────────────────────────────────────────────────────────//───",
    "",
    `  ${count} record(s) / linked against cve.org`
  ].join("\n");
}

function renderHeader(): string {
  return `│ ${textHtml(padCells("ID", cveIdWidth))}${" ".repeat(columnGap)}${textHtml(
    padCells("TITLE", titleWidth)
  )}${" ".repeat(columnGap)}${textHtml(padCells("DATE", dateWidth))} │`;
}

function frameTop(): string {
  return `┌${"─".repeat(innerWidth)}┐`;
}

function frameRule(): string {
  return `├${"─".repeat(innerWidth)}┤`;
}

function frameBottom(): string {
  return `└${"─".repeat(innerWidth)}┘`;
}

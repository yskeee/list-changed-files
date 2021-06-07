export const Link = (url: string, text?: string): string => {
  if (text !== undefined) {
    // NOTE: textに改行が含まれていると適切にリンクにならない
    // TODO: 文字の長さも制限ある？
    return `<${url}|${text.replace(/\n/g, "")}>`;
  }
  return `<${url}>`;
};

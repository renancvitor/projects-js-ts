import { remark } from 'remark';
import * as remarkHtml from 'remark-html';

export const markdownToHtml = async (content: string): Promise<string> => {
  const data = await remark().use(remarkHtml.default as any).process(content);
  return String(data.contents);
}

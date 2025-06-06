export interface SnippetType {
  id: string;
  title: string;
  code: string;
}

export const snippets: SnippetType[] = [
  { id: "1", title: "the first snippet", code: "console.log('Hello world')" },
  { id: "2", title: "the second snippet", code: "console.log('Hello world')" },
  { id: "3", title: "the third snippet", code: "console.log('Hello world')" },
];

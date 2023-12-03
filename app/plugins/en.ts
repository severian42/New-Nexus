import { BuiltinPlugin } from "./typing";

export const EN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "WebSearch",
    toolName: "web-search",
    lang: "en",
    description: "Web search function tool for search engines.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "Calculator",
    toolName: "calculator",
    lang: "en",
    description:
      "The Calculator class is a tool used to evaluate mathematical expressions. It extends the base Tool class.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "WebBrowser",
    toolName: "web-browser",
    lang: "en",
    description:
      "A class designed to interact with web pages, either to extract information from them or to summarize their content.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "Wikipedia",
    toolName: "WikipediaQueryRun",
    lang: "en",
    description:
      "A tool for interacting with and fetching data from the Wikipedia API.",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
  },
  {
    name: "Arxiv",
    toolName: "arxiv",
    lang: "en",
    description: "Arxiv search and get the article information.",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
  },
];
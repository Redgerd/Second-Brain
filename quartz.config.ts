import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Second Brain",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "redgerd.github.io/Second-Brain",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // Cybermint Lavender
        lightMode: {
          light: "#aabec8", // Pale Sky (Main Background)
          lightgray: "#7392B5", // Dusty Denim (Borders/Low contrast)
          gray: "#8350C4", // Deep Lilac (Graph nodes/Subtle text)
          darkgray: "#402B47", // Midnight Violet (Body text)
          dark: "#262423", // Shadow Grey (Headers/Main titles)
          secondary: "#8350C4", // Deep Lilac (Links/Primary Accent)
          tertiary: "#73b586", // Dusty Denim (Hover states)
          highlight: "rgba(131, 80, 196, 0.15)", // Deep Lilac Highlight
          textHighlight: "#fff23688",
        },
        darkMode: {
          // Stone Gray Lavender
          light: "#262423", // Shadow Grey (Deep Background)
          lightgray: "#402B47", // Midnight Violet (Borders/UI elements)
          gray: "#7392B5", // Dusty Denim (Graph nodes)
          darkgray: "#d4d4d4", // Pale Sky (Body text)
          dark: "#FFFFFF", // White (High contrast Headers)
          secondary: "#cda7ff", // Deep Lilac (Links/Primary Accent)
          tertiary: "#38669a", // Dusty Denim (Hover states)
          highlight: "rgba(115, 146, 181, 0.2)", // Dusty Denim Highlight
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration — Denizli Akıllı Ulaşım Portalı · Vitrin
 *
 * Hosts the Turkish presentation vault (`vitrin/`) of the closed-source
 * ulasim20 project. See `vitrin/Ana Sayfa.md` for the content entry point.
 *
 * Build:  npx quartz build -d vitrin          (one-shot)
 * Serve:  npx quartz build -d vitrin --serve  (local dev)
 *
 * Docs:   https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Denizli Akıllı Ulaşım Portalı",
    pageTitleSuffix: " · Vitrin",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      // Self-hosted Umami mirrors the main app's analytics stack.
      provider: "umami",
      websiteId: "dc8f1bc1-4c48-4b58-bad0-5b0a7370bc5a",
      host: "https://umami.isrky.dev",
    },
    locale: "tr-TR",
    baseUrl: "vitrin.ulasim20.com",
    // Hide Obsidian plumbing and anything that isn't presentation content.
    ignorePatterns: ["private", "templates", ".obsidian", ".trash", "_templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // All three support Latin Extended incl. Turkish glyphs (ğüşıöçĞÜŞİÖÇ).
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          // Transit-leaning deep blue pairs well with the project's brand palette.
          secondary: "#1f4b72",
          tertiary: "#6da4c4",
          highlight: "rgba(31, 75, 114, 0.10)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7cb3d6",
          tertiary: "#84a59d",
          highlight: "rgba(124, 179, 214, 0.12)",
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
      // Latex is unused in the vitrin corpus but harmless; drop it if you want
      // to shave a few KB off the client bundle.
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
      // OG image generation helps LinkedIn / WhatsApp previews render nicely
      // when sharing vitrin links to recruiters. Comment out to speed up builds.
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

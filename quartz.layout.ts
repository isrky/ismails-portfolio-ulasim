import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Quartz 4 Layout — Denizli Akıllı Ulaşım Portalı · Vitrin
 *
 * Presentation vault layout. The sidebar stays light — this is a portfolio
 * surface, not a wiki — but the Graph + Backlinks + Explorer combo showcases
 * the vault's inter-linked structure nicely for reviewers.
 */

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Canlı Uygulama": "https://ulasim20.com",
      LinkedIn: "https://www.linkedin.com/in/ismail-sarikaya-a637463b3/",
      GitHub: "https://github.com/isrky",
      İletişim: "mailto:ismailsrky@disroot.org",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "Vitrin",
      folderDefaultState: "open",
      useSavedState: true,
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 1,
        scale: 1.1,
        showTags: false,
      },
      globalGraph: {
        scale: 0.9,
        showTags: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "Vitrin",
      folderDefaultState: "open",
      useSavedState: true,
    }),
  ],
  right: [],
}

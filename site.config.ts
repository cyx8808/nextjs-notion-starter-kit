import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c476c317b32a47c2ba339c755eaf554e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yuxiang Personel Web',
  domain: 'https://ccdt.notion.site/Personal-Web-c476c317b32a47c2ba339c755eaf554e',
  author: 'Yuxiang',

  // open graph metadata (optional)
  // description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/blog': '5a64b3160f2b4cfc896568de96c80917'
    // '/gallery': '3cfc8a24c92741b3b361c45e0f747828'
  },
  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
  {
      title: 'Blog',
      pageId: '5a64b3160f2b4cfc896568de96c80917'
     }
    //  {
    //    title: 'Gallery',
    //    pageId: '3cfc8a24c92741b3b361c45e0f747828'
    //  }
   ]
})

const config = {
  siteTitle: 'SnipBits', // Site title.
  siteTitleShort: 'SnipBits', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'SnipBits', // Alternative site title for SEO.
  siteLogo: '/logos/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://snipbits.dev', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Short code snippets and Blog Posts for all your development needs, main Focus on Frontend Technologies like Reactjs,javascript, CSS', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  googleAnalyticsID: 'UA-158076708-3', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Maher Gallaoui', // Username to display in the author segment.
  userEmail: 'youremail@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'snipbitsdev', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'gallaouim', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'Karlsruhe, Germany', // User location to display in the author segment.
  userAvatar: 'https://pbs.twimg.com/profile_images/1261315810561331200/44neKrO8_400x400.jpg', // User avatar to display in the author segment.
  userDescription:
    " ", // User description to display in the author segment.
  copyright: 'Copyright © 2020.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: 'red' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config

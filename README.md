<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Built with Gatsby
</h1>

# wordpress-gatsby

<h1>Gatsby + WordPress Website</h1>

<a href="https://wordpress-gatsby-site.netlify.app/"><img src="https://i.imgur.com/Nj3qNF2.jpg"></a>

This website has been built with Gatsby and WordPress. WordPress has been used as a CMS, and data has been passed to the frontend using GraphQl.

The idea is to get fast website with great UX. We don't want users to wait for content/new page to load which is happening with other WordPress website.

Why WordPress as a CMS option? WordPress is the most popular CMS these days, and that's the only reason why I used it. I wanted to make it easier for others to create new page and to publish new post. There are other great CMS options but maybe one day I will recreate this project using Strapi or something similar.

<h3>How to install</h3>

Before we proceed with installing this, we will need hosting and domain with a subdomain. On a subdomain you will install WordPress.

<h4>These are the steps:</h4>

1. Step:

Download <a href="https://www.mediafire.com/file/wjfmc6qc4vw0mmw/WordPress.zip/file">WordPress</a> copy and import on your hosting. It is important that you use this one since there are some custtom fields I created as a settings for like slider etc...

2. Step:

- Download this github project, and in <strong>gatsby-config.js</strong> change <strong>siteUrl</strong>. Here goes the link of your Gatsby domain. Also update <strong>title & description</strong>.

- After that create two files: <strong>.env.development & .env.production</strong>. There you will create:

- <strong>WP_URL = https://YourWordPressDomain.com/graphql</strong>
- <strong>GA_TRACKING = Your Google Tracking Code For GA<strong>

3. Step:

- Update <strong>Custom Settings</strong> page on WordPress.
- If you go to /utils/utils.js you may change <strong>itemsPerPage</strong> and that will control how many posts are going to be displayed on a category page before showing the pagination. Default value is 3.

## Note: Please Do Not Change Permalink For This Page!

<h3>WordPress Features</h3>

There are some built in features, and those are:

- Custom Settings Page:
- Update Logo
- Update Favicon
- Update Featured Image - this one is used as a OpenGraph image (also for other pages/posts)
- Update About Me image
- Update About Me text
- Update Disclaimer widget
- Add Your Social (Facebook, Twitter, YouTube)
- Update Meta Title and Meta Description - This one is used for a homepage (index.js)
- Post Settings - You may select which post is going to be featured (visible on the slider)
- Pros/Cons plugin styled for Gatsby

<h3>Run this project on localhost:</h3>

- npm install
- gatsby develop
- gatsby build

<h3>Live demo</h3>
<a href="https://wordpress-gatsby-site.netlify.app/" target="_blank">Click here to see live demo</a>

<!-- AUTO-GENERATED-CONTENT:END -->

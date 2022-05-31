# Engineering Blog

The blog is a place for OpenSesame engineers to write about anything that interests them.

## Background

The blog is built with [Gatsby](https://www.gatsbyjs.com/), a static site generator. The blog posts are just Markdown files, but the site uses [Netlify CMS](https://www.netlifycms.org/) to improve the authoring experience. The site is also deployed and hosted for free with [Netlify](https://www.netlify.com/).

## Contributing

To learn more about contributing to the blog, read this guide.

The rest of this README will go over setting up your local environment to make changes to the site.

## Development

Start by cloning the repository and installing the dependencies with NPM.

```sh
git clone git@github.com:OpenSesame/engineering-blog.git

cd engineering-blog/

npm run install
```

Next, start the app: The Gatsby CLI

```sh
npm run start
```

This will run the `develop` method from the [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli), which will build the site and start a development server.

Finally, view the site at http://localhost:8000!

## GraphQL

Gatsby is powered by [GraphQL](https://graphql.org/). Gatsby exposes a tool for experimenting with querying data that's available at http://localhost:8000/\_\_\_graphql. Learn more about how Gatsby uses GraphQL in their [tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

import * as React from "react"
import { Link as GatsbyLink, graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Box from "@mui/material/Box"

export interface Post {
  excerpt: string
  frontmatter: {
    date: string
    description: string
    title: string
  }
  fields: {
    slug: string
  }
  html: string
}

export interface Site {
  siteMetadata: {
    title: string
  }
}

interface PageData {
  site: Site
  allMarkdownRemark: {
    nodes: Array<Post>
  }
}

const BlogIndex = ({ data, location }: PageProps<PageData>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <Box component="header" sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          {siteTitle}
        </Typography>

        <Typography sx={{ textAlign: "center" }}>
          A blog from the engineers at{" "}
          <Link href="https://www.opensesame.com/">OpenSesame</Link>.
        </Typography>
      </Box>

      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <ListItem key={post.fields.slug} sx={{ pl: 0 }}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Typography
                    variant="h4"
                    component="h2"
                    itemProp="headline"
                    fontWeight={500}
                  >
                    <Link
                      component={GatsbyLink}
                      to={post.fields.slug}
                      itemProp="url"
                    >
                      {title}
                    </Link>
                  </Typography>

                  <Typography variant="body1" component="h2">
                    {post.frontmatter.date}
                  </Typography>
                </header>

                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </ListItem>
          )
        })}
      </List>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

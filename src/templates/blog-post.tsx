import * as React from "react"
import { Link as GatsbyLink, graphql, PageProps } from "gatsby"
import Link from "@mui/material/Link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Post } from "../pages"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Stack } from "@mui/system"

interface BlogPostTemplateData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: Post
}

const BlogPostTemplate = ({
  data,
  location,
}: PageProps<BlogPostTemplateData>) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `OpenSesame`
  const { author, authorTitle, date, description, title } = post.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={description || post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Stack
          direction="column"
          component="header"
          sx={{ textAlign: "center" }}
        >
          <Typography
            variant="h4"
            component="h1"
            itemProp="headline"
            gutterBottom
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            by {author}
            {authorTitle ? `, ${authorTitle}` : ""}
          </Typography>

          <Typography variant="caption">{date}</Typography>
        </Stack>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        author
        authorTitle
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

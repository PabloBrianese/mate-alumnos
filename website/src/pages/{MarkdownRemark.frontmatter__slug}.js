import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

export default Template
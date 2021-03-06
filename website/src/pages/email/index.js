import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const Email = ({ slug, date, subject }) => {
  return (
    <article>
      <h2>
        <Link to={`/email/${slug}`}>{subject}</Link>
      </h2>
      <p>Enviado: {date}</p>
    </article>
  )
}

const EmailPage = ({ data }) => {
  const { nodes } = data.allEmailJson
  const emails = nodes.map(node =>
    <Email
      slug={node.fields.unixMsTimestamp}
      date={node.date}
      subject={node.fields.prettySubject}
      key={node.id}
    />
  )
  return (
    <Layout pageTitle="Correo">
      {emails}
    </Layout>
  )
}

export const query = graphql`
{
  allEmailJson(sort: {fields: date, order: DESC}) {
    nodes {
      id
      fields {
        prettySubject
        unixMsTimestamp
      }
      date
    }
  }
}
`

export default EmailPage

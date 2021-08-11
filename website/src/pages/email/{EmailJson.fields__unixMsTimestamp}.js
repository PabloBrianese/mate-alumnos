import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const EmailPage = ({ data }) => {
    return (
        <Layout>
          <div dangerouslySetInnerHTML={{__html: data.emailJson.html}} />
        </Layout>
    )
}

export const EmailQuery = graphql`
query($id: String) {
  emailJson(id: {eq: $id}) {
    html
  }
}
`


export default EmailPage

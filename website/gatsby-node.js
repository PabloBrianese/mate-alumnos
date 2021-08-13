const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require('moment')
const emlformat = require('eml-format')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `EmailJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `unixMsTimestamp`,
      value: moment(node.date).format('x'),
    })
    const prettySubject = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `prettySubject`,
      value: emlformat.unquoteString(
        node.headers.Subject
          .replace(/\?=\r?\n=\?UTF-8\?Q\?/g, '')
          .replace(/_/g, ' ')
      ),
    })
  }
}
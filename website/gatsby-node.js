const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require('moment')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `EmailJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `unixMsTimestamp`,
      value: moment(node.date).format('x'),
    })
  }
}
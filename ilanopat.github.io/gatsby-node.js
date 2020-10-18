// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.js`)

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
            id
          }
        }
      }
    }
  `)

  const postPerPage = 3

  const numPages = Math.ceil(result.data.allMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/" : `/${i + 1}`,
      component: blogPostTemplate,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
      },
    })
  })

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.edges.forEach(edge => {
    const path = edge.node.frontmatter.path
    const id = edge.node.id
    actions.createPage({
      path: path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/pages/blog-post.js`)
  const result = makeRequest(
    graphql,
    `
      {
        allStrapiArtigo {
          edges {
            node {
              id,
              titulo
            }
          }
        }
      }
    `
  ).then(result => {
    const posts = result.data.allStrapiArtigo.edges

    result.data.allStrapiArtigo.edges.forEach(({ node }, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1].node
      const previous = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/${node.id}`,
        component: blogPost,
        context: {
          id: node.id,
          previous,
          next,
        },
      })
    })
    // Create blog posts pages.
    // const posts = result.data.allStrapiArtigo.edges

    // posts.forEach((post, index) => {
    //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
    //   const next = index === 0 ? null : posts[index - 1].node

    //   createPage({
    //     path: `/${post.id}`,
    //     component: blogPost,
    //     context: {
    //       id: post.id,
    //       previous,
    //       next,
    //     },
    //   })
    // })
  })
  return result
}

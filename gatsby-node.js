const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query getPortfolioItems {
//       allWpPortfolio {
//         nodes {
//           uri
//         }
//       }
//     }
//   `)

//   result.data.allWpPortfolio.nodes.forEach(item => {
//     createPage({
//       path: `${item.uri}`,
//       component: path.resolve(`src/templates/portfolio-template.js`),
//       context: {
//         uri: item.uri,
//       },
//     })
//   })
// }

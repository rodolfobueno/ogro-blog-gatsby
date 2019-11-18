const postQuery = `{
    allStrapiArtigo(sort: { fields: [data], order: DESC }) {
        edges {
            node {
                objectID: id
                titulo
                resumo
                tags {
                    nome
                }
                data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                data_timestamp: data
            }
        }
    }
  }`

const flatten = arr => arr.map(({ node }) => ({
    ...node,
    data_timestamp: parseInt(
        (new Date(node.data_timestamp).getTime() / 1000).toFixed(0)
    )
}));

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.allStrapiArtigo.edges),
        indexName: process.env.ALGOLIA_INDEX_NAME,
        settings: {
            attributesToSnippet: [`conteudo: 20`]
        },
    },
]

module.exports = queries

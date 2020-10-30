module.exports = {
  client: {
    name: 'checkoutless-ecommerce',
    tagName: 'gql',
    includes: ['./src/**/*.{ts,tsx}', './src/__generated__/graphql.ts'],
    service: {
      name: 'GatsbyJS',
      // url: ' http://localhost:8000/___graphql',
      localSchemaFile: './graphql.schema.json',
      // skipSSLValidation: true,
    },
    excludes: ['**/public/**/*.js', '**/node_modules/**/*', '**/.cache/**/*'],
  },
}

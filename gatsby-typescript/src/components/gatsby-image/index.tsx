import React from 'react'
import { graphql as gql, useStaticQuery } from 'gatsby'
import { find } from 'lodash'
import Img, { FluidObject, GatsbyImageProps } from 'gatsby-image'
import { MyImagesQuery } from '@generated/graphql'

type Props = {
  filename?: string
  style?: React.CSSProperties
  fluidFile?: FluidObject | FluidObject[]
  alt?: string
} & GatsbyImageProps

const GatsbyImage = (props: Props) => {
  const { filename = '', fluidFile, style, alt, ...other } = props

  const data = useStaticQuery<MyImagesQuery>(gql`
    query MyImages {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = find(data.images.edges, (edge) =>
    edge.node.relativePath.includes(filename)
  )

  if (!image && !fluidFile) {
    return null
  }

  const fluid = (image?.node.childImageSharp?.fluid as FluidObject) || fluidFile

  return <Img style={style} alt={alt} fluid={fluid} {...other} />
}

export default GatsbyImage

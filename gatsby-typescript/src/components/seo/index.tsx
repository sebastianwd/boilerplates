import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql as gql } from 'gatsby'
import { HelmetDataQuery } from '@generated/graphql'

interface Props {
  description?: string
  lang?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  title?: string
}

const SEO = (props: Props) => {
  const { description, lang = 'en', meta = [], title } = props

  const { site } = useStaticQuery<HelmetDataQuery>(gql`
    query HelmetData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const siteMetadata = site?.siteMetadata

  const metaDescription = description || siteMetadata?.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta as any)}
    />
  )
}

export default SEO

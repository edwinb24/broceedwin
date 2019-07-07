import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery query={graphql`
    query {
      wpgraphql { 
      pages {
          nodes {
            title
            id
          }
        }
      }
    }
    `} render={props => (
      <div>
        {props.wpgraphql.pages.nodes.map(page => (
          <div key={page.id}>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content}} />
          </div>
        ))}
      </div>
    )} />
  </Layout>
)

export default IndexPage

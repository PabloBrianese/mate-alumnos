import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout pageTitle="Bienvenida">
    <p>Esta es la página de bienvenida del sitio web mate-alumnos.</p>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/diagrama-algebraico.jpg"
    />
  </Layout>
)

export default IndexPage

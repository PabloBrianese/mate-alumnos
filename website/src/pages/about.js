import * as React from 'react'
import Layout from '../components/layout'

const MailtoButton = () => {
  const address = "alumnosm@gmail.com"
  const subject = "¡Me comunico por primera vez!"
  const body = encodeURIComponent(
`Hola,
es la primera vez que me comunico con el Claustro de Alumnos del Departamento de Matemática. Quisiera enviarles buenos deseos a ustedes, y pedirles que me añadan a la lista de mails.

Saludos.
`
  )  
  const href = `mailto:${address}?subject=${subject}&body=${body}`
  return <a href={href} target="_top">{address}</a>
}

const AboutPage = () => (
  <Layout pageTitle="¿Quienes somos?">
    <p>
      La dirección de correo de alumnos es <MailtoButton />.
      Por favor ponerse en contacto, si es que nunca antes lo hicieron, para enterarse de las novedades del Departamento de matemática.
    </p>.
  </Layout>
)

export default AboutPage

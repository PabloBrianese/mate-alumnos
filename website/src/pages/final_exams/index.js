import * as React from 'react'
import Layout from '../../components/layout'

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false)

  return(
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        <div>{title} {isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div>{content}</div>}
    </div>
  )
}

const StudyPage = () => {

  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
  }
  const { title, content } = accordionData

  return (
    <Layout>
        <h1>React Accordion</h1>
        <AccordionItem title={title} content={content} />
        <AccordionItem title={title} content={content} />
        <AccordionItem title={title} content={content} />
    </Layout>
  )
}

export default StudyPage

import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout heading="PAGE NOT FOUND">
    <div className="container" style={{marginTop: '4rem'}}>
      <article className="message is-dark">
        <div className="message-body" style={{ fontSize: '1.2em' }}>
          This page route does not exist. Please select an option from the menu.
        </div>
      </article>
    </div>
  </Layout>
)

export default NotFoundPage

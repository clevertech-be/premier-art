import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import injected from '../injected.json'
import ContactForm from '../components/forms/contact'
import ContactHero from '../components/hero/contactHero'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function Contact() {
  const router = useRouter()
  const { t } = useTranslate()
  const [formSuccess, setFormSuccess] = useState()
  const [formError, setFormError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)
    fetch(`/${router.locale}${router.asPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormSuccess({ message: t('contact.form.success') })
        console.log(t('contact.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('contact.form.error') })
        console.log(t('contact.form.error'))
      })
  }

  return (
    <Layout>
      <ContactHero
        backgroundImage={`/images/hero/hero-about.png`}
        address={injected.address.address}
        addressLink={injected.address.url}
        contactLink={'/contact'}
        phone={injected.tel}
        email={injected.email}
        tva={injected.tva}
      />
      <ContactForm handleSubmit={handleSubmit} formSuccess={formSuccess} formError={formError} />
      <Newsletter />
    </Layout>
  )
}

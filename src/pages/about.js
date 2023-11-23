import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import TeamCard from '../components/cards/team'
import Image from 'next/image'
import AboutHero from '../components/hero/aboutHero'
import QuoteCard from '../components/cards/quote'

export default function About() {
  const { t } = useTranslate()
  return (
    <Layout>
      <AboutHero
        image={'/images/hero/hero-about.png'}
        title={t('about.title')}
        description={t('about.description')}
        mainLink={'/contact'}
        mainLinkText={t('about.hero.primaryAction')}
        secondaryLink={'/contact'}
        secondaryLinkText={t('about.hero.secondaryAction')}
      />

      <div className='flex flex-col gap-5 justify-start py-10 w-full'>
        {t('about.description.2')
          .split('\n')
          .map((item, index) => (
            <div key={index} className='text-base font-normal'>
              {item}
            </div>
          ))}
      </div>

      <QuoteCard
        quote={t('about.quote1.text')}
        source={t('about.quote1.source')}
        image={'/images/quote/ahmed.png'}
      />

      <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-20 my-20'>
        <TeamCard
          description={t('about.team.member1.description')}
          firstName={'Ahmed'}
          lastName={'Ismaïl'}
          link={'https://www.linkedin.com/in/ahmed-isma%C3%AFl-415313124/'}
          image='/images/teams/ahmed.png'
        />
        <TeamCard
          description={t('about.team.member3.description')}
          firstName={'Annela'}
          image='/images/teams/unknown.png'
        />
        <TeamCard
          description={t('about.team.member2.description')}
          firstName={'Ram'}
          image='/images/teams/unknown.png'
        />
      </div>

      <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 gap-4 my-20'>
        <div className='w-full h-auto'>
          <Image
            sizes='100vw'
            width={500}
            height={500}
            alt='About 1 illustration'
            src={'/images/about/about1.png'}
          />
        </div>
        <div className='w-full h-auto'>
          <Image
            width={500}
            height={500}
            sizes='100vw'
            alt='About 1 illustration'
            src={'/images/about/about2.png'}
          />
        </div>
      </div>

      <Newsletter />
    </Layout>
  )
}

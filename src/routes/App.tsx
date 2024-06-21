import Hero from '../components/Hero/Hero.tsx'
import movies from '../assets/movies.ts'
import { Section } from '../containers/Section/Section.tsx'
import { Trailer } from '../components/Trailer/Trailer.tsx'
import { TitleSection } from '../components/TitleSection/TitleSection.tsx'
import Slider from '../components/Slider/Slider.tsx'
import { Template } from './Template.tsx'

const title = {
  title: 'Movies',
  icon: true,
  link: '/movies'
}

export function App() {
  
  return (
    <>
      <Template>
        <Hero />

        <Section>
          <TitleSection {...{...title, title: 'Top movies'}} />
          <Slider movies={movies} />
        </Section>

        <Section>
          <TitleSection {...{...title, title: 'Trailers', link: '#'}}/>
          <Trailer />
        </Section>

        <Section>
          <TitleSection {...{...title, title: 'Top movies'}}/>
          <Slider movies={movies} />
        </Section>
      </Template>
    </>
  )
}


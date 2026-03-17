import Hero from '@/components/Hero'
import GridCarousel from '@/components/GridCarousel'
import FavSongs from '@/components/FavSongs'
import SuffelCard from '@/components/SuffelCard'
import MyDetails from '@/components/MyDetails'
import GitHubGraph from '@/components/GitHubGraph'
import XCards from '@/components/XCards'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GridCarousel />
      <FavSongs />
      <SuffelCard />
      <MyDetails />
      <Projects />
      <GitHubGraph />
      <XCards />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

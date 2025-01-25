import Approach from "@/components/Approach"
import Clients from "@/components/Clients"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import RecentProjects from "@/components/RecentProjects"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { navItems } from "@/data"

export default function Home() {
  return (
    <Main>
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </Main>
  )
}

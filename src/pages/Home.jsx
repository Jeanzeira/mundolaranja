import Nav from "../components/Nav"
import Hero from "../components/Hero"
import HomeContent from "../components/HomeContent"
import Footer from "../components/Footer"

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-950">
        <Nav/>
        <Hero/>
        <HomeContent/>
    </div>
  )
}

export default Main
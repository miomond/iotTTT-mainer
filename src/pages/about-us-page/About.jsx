import AboutUsHeader from './AboutUsHeader'
import AboutUsNav from './AboutUsNav'
import AboutAccordion from './AboutAccordion'
import OurVisionSection from './OurVisionSection'
import OurImpact from './OurImpact'
import BetterTomorrowSection from './BetterTomorrowSection'
import OurCustomerSupport from './OurCustomerSupport'
import LandinngFooterSection from '../../components/footer/LandinngFooterSection'
import Navpar from '../../components/NAv/Navpar'

function About() {
  return (

<>
<Navpar />

<AboutUsHeader/>
        <AboutAccordion/>
        <OurVisionSection/>
        <OurImpact/>
        <BetterTomorrowSection/>
        <OurCustomerSupport/>
        <LandinngFooterSection></LandinngFooterSection>


</>

    )
}

export default About
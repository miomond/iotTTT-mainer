import "./New folder/aboutUsGeneral.css";
import Accordion from 'react-bootstrap/Accordion';

import "./New folder/aboutAccordion.css"
function AboutAccordion() {
  return (
    <>
  {/* -----------------------start Accordion---------- */}



<div className="accordion-container"> 
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  A wondrfull start.</Accordion.Header>
        <Accordion.Body>
        Our story starts with a man who wondered about a better way. In
            2007, Stuart Lombard made a personal goal to reduce his
            environmental footprint. After discovering that heating and cooling
            make up 40% to 60% of home energy use, he attempted to program his
            own thermostat to conserve energy while away on vacation. When he
            and his family returned home to Toronto to a shockingly cold house,
            he began to envision a better efficiency solution that could
            conserve energy without compromising comfort. Assembling a small
            team of likeminded experts, the new Canadian company of ecobee was
            formed. Together, the ecobee team was able to launch the first ever
            smart thermostat. Since then, ecobee customers across North America
            have saved more than 27.8 TWh of energy, which is the annual
            equivalent of saving enough energy to take all the homes in Los
            Angeles and Chicago off the grid for a year. And that impact
            continues to grow every day.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>A different approach.</Accordion.Header>
        <Accordion.Body>
        At ecobee, we do things differently. We’re Planet Positive. We
            believe that through technology, we can improve the way people,
            homes, and cities use and consume energy to create a sustainable
            future. We aspire to be a Welcome Guest. As a guest in your home,
            ecobee is always ready to help and respects your privacy by not
            selling or misusing your data. We set ourselves apart through
            Thoughtful Innovation. We don’t just innovate for innovation’s sake.
            Instead, ecobee reimagines the everyday in ways that go beyond
            simple improvements to challenge the status quo. ecobee believes in
            Memorable Care. We offer the right help at the right time, including
            human support that exceeds expectations. Finally, ecobee offers
            Seamless Experiences, which means effortless solutions that just
            work, on their own or with other smart home systems.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> A smarter future.</Accordion.Header>
        <Accordion.Body>
        The connected home of the future isn’t just smart. It learns,
            adjusts, and adapts based on your needs, behaviors, and preferences.
            It’s not just about more devices with flashy features, it’s about
            meaningful solutions that work so well together, they fade into the
            background to become part of your life. The ecobee home is a
            harmonious place that offers comfort when you’re there and peace of
            mind when you’re away. Inviting ecobee into your home allows us to
            make an even greater impact. Because the more homes we are in, the
            more we can help build a sustainable world. Please consider this
            your invitation to join us in wondering about a better world.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>

  
  
  {/* ----------------end Accordion------------ */}
</>

  )
}

export default AboutAccordion
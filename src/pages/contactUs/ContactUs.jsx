import HeaderContact from "./headerContactUs/HeaderContact";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";
import ContactInfo from "./contactInfo/ContactInfo";
import FormContact from "./formContact/FormContact";
import MapContact from "./mapContact/MapContact";
import Navpar from "../../components/NAv/Navpar";

function ContactUs() {
  return (
    <>
            <Navpar />

      <HeaderContact></HeaderContact>
      <section className="info">
        <ContactInfo></ContactInfo>
        <FormContact></FormContact>
      </section>
      <MapContact></MapContact>
      <LandinngFooterSection></LandinngFooterSection>
    </>
  );
}

export default ContactUs;

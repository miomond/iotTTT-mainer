import'./mapContact.css'
function MapContact() {
  return (
    <>
          <section className="map ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9136717352703!2d32.85754712489673!3d23.998825379194184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436893d605764c3%3A0xac9c8ab7cf39677a!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtINij2LPZiNin2YY!5e0!3m2!1sar!2seg!4v1708893329916!5m2!1sar!2seg"
          width={1000}
          height={450}
          style={{ border: 0,  borderRadius:'25px'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    
    
    </>
  )
}

export default MapContact
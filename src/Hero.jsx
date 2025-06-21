import heroImg from './assets/hero.svg' 
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                Palo santo fingerstache semiotics 
                sriracha church-key. Tumeric affogato master 
                cleanse, hexagon 90's venmo offal cloud bread 
                heirloom. Church-key photo booth paleo authentic plaid 
                air plant. Migas kombucha sus taiyaki JOMO raw denim 
                flexitarian ethical +1. Fingerstache lyft meditation 
                four dollar toast lo-fi, woke adaptogen shaman direct trade 
                swag deep v tumblr. Air plant seitan 
                vinyl, taiyaki shoreditch chambray freegan viral woke.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt='heroImg' />
            </div>
        </div>
    </section>
  )
}
export default Hero
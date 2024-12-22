import '../App.css'
import '../styles/About.css'

function About() {

  return (
    <section className="about" id="about">
        <div className="about-container">
          <div className="about-container--img">
            <h1>About Us</h1>
            <div>
              <img src='../assets/about_us.png' />
            </div>
          </div>
          <div className="about-container--text">
            <h2>Why choose us</h2>
            <h1>Highly experienced <br /> people with us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ducimus consequatur dolor est aspernatur quaerat, officia, velit ratione nostrum, commodi doloribus. Temporibus repellat iste quod similique nostrum expedita eum, dolorem quam amet doloribus alias, ducimus nam, dolor voluptate vel! Nisi debitis voluptas, ea sed quae dolorum. Impedit distinctio exercitationem labore!</p>
          </div>
        </div>
    </section>
);

}

export default About

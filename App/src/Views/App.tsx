import { Nav } from "../Components/Nav"
import Background from "../Assets/Videos/background.mp4";
import Logo from "../Assets/Images/Logo.svg"

export const App = () => {
  return (
    <><Nav />
    <section id="heroSection">
      <video autoPlay muted loop>
        <source src={Background} type="video/mp4" />
      </video>

      <div className="Gradient"></div>
      <div>
        <img src={Logo} alt="" />
        <div>
          <h1>Flesh & Blood</h1>
          <p>Embark on a Legendary Battle in Ragnarok's Labyrinth: Immerse Yourself in the Epic Battle Royale Adventure</p>
        </div>
      </div>
    </section>
    <section id="worldSection">
      <div className="Gradient"></div>
      <div>
        <span>World</span>
        <div>
          <h2>Welcome to <b>Castle</b></h2>
          <p>A city that never sees the sun. A place built from forgotten memories. Ancient ruins and that things that should have remained asleep.</p>
        </div>
      </div>
    </section>
    
    </>
  )
}
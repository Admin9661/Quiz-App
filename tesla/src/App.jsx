import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
function App() {
  return (
    <>
      <Header />
      <Section heading="Model 3" tagline="Order Online for touchless delivery" leftbtn="Custom Order" rightbtn="Existing Inventory" photo="model-3.jpg" downArrow="down-arrow.svg"/>
      <Section heading="Model S" tagline="Order Online for touchless delivery" leftbtn="Custom Order" rightbtn="Existing Inventory" photo="model-s.jpg"/>
      <Section heading="Model X" tagline="Order Online for touchless delivery" leftbtn="Custom Order" rightbtn="Existing Inventory" photo="model-x.jpg"/>
      <Section heading="Model Y" tagline="Order Online for touchless delivery" leftbtn="Custom Order" rightbtn="Existing Inventory" photo="model-y.jpg"/>
      <Section heading="Solar Panel" tagline="Lower cost solar panels in India" leftbtn="Order Now" rightbtn="Learn More" photo="solar-panel.jpg"/>
      <Section heading="Solar Roof" tagline="Produce clean energy from your roof" leftbtn="Order Now" rightbtn="Learn More" photo="solar-roof.jpg"/>
      <Section heading="Accessories" leftbtn="Order Now" photo="accessories.jpg"/>
    </>
  )
}

export default App

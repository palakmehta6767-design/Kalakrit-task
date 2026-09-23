import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site">

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero / first impression */}
        <Hero />

        <DemoForm />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
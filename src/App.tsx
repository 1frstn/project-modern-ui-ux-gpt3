import {
  Footer,
  Blog,
  Possibility,
  Whatfrstn,
  Features,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatfrstn />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

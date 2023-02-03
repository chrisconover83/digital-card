import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
    return (
    
    <div className="app--container">
        <div className="app--container--two">
        <Info />
        <About />
        <Footer />
        </div>
    </div>
    );
}
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <NavBar />
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col mt-auto min-w-min min-h-screen bg-gray-200  dark:bg-gray-800 text-black dark:text-white">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

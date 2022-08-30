import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const style = {

}


const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;

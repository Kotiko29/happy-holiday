import Header from './components/Header/Header';
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

      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.img}>
            <img className={style.image} src="" alt=""/>
            <p className={style.felicitation}>
              Поздравляю с днем рожденья!<br/>
              Пусть будет жизнь полна веселья,<br/>
              Не будет грусти и хлопот,<br/>
              А только счастье круглый год!<br/>
              <br/>
              Желаю творческих успехов,<br/>
              Прекрасных дней, улыбок, смеха.<br/>
              Любви, душевного тепла,<br/>
              Как сказка, чтобы жизнь была!<br/>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

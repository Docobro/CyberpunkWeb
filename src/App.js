import React from 'react'
import Videoplayback from "./video/videoplayback.mp4"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ScrollTopArrow from './components/ScrollTopArrow';
import TimerComponent from './components/timer/countdown'



export default function BasicExample() {
  return (
    <Router>
        <div className="main">
          <div className ="video">
            <video playsinline autoPlay loop muted>
              <source src={Videoplayback} type="video/mp4" /> 
            </video>
          </div>

            <ul className="list">
              <li><NavLink to="/" className="listText" exact="true" activeClassName="listTextActive">-Overview-</NavLink></li>
              <li><NavLink to="/about" className="listText" activeClassName="listTextActive">-Requirements-</NavLink></li>
              <li><NavLink to="/dashboard" className="listText" activeClassName="listTextActive">-Relise Data-</NavLink></li>
            </ul>
         

          <h1 className="mainh1">
            <img src="https://purepng.com/public/uploads/large/purepng.com-cyberpunk-2077-logologosgame-logogame-logosgameslogocyberpunk-2077-12715289961328hlgr.png" alt="ads" />
          </h1>
          <div>
              <ScrollTopArrow/>
          </div>

        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Release />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Menu() {
  return (
    <div>
      <h1 className="mainh1_1"> O W E R V I E W : </h1>

      <div className="card_owerview_1">
        <b className="textSiteTop">Обзор игры Cyberpunk 2077</b>
        <p className="textSite"> Cyberpunk 2077 — это RPG с видом от первого лица и открытым, бесшовным миром в сеттинге научной фантастики, созданная авторами популярной серии The Witcher, компанией CD Project Red, на основе вселенной известной настольной игры «Киберпанк 2020» за авторством Майка Пондсмита. </p>
        <p className="textSite">Ожидается, что Cyberpunk 2077 будет выпущен одновременно для ПК (Steam, GOG, EGS), PlayStation 4, Xbox One. Платформу Google Stadia она посетит немного позже. Кроме того, NVIDIA подтвердила, что в первый день игра будет доступна в её облачном сервисе GeForce NOW с включенными эффектами трассировки лучей.</p>
        <p className="textSite">Cyberpunk 2077 вряд ли появится на Nintendo Switch, как «Ведьмак 3: Дикая охота», поскольку она технически сложна и является новинкой. Может позже и будет реализован порт на знаменитую консоль Nintendo.</p>
      </div>

      <div className="card_owerview_2" margin-left='300px'>
        <b className="textSiteTop">Сюжет и игровые механики</b>
        <p className="textSite">Впервые CD Projekt RED предлагает игрокам возможность полностью создать персонажа. Это имеет смысл, поскольку проект основан на популярной настольной игре Майка Пондсмита «Киберпанк 2020».

Можно выбрать различные настройки тела, пол, голос и многое другое. Однако предыстория у V, персонажа игрока, одна. Это наемник, который недавно приехал в Найт-Сити, мегаполис штата Калифорния, выполненный по образу Лос-Анджелеса, чтобы разбогатеть.</p>
        <p className="textSite">В Найт-Сити переплетается целых четыре дизайна, основанных на разных социальных слоях населения мира киберпанка: энтропизме, китче, неомилитаризме и неокитче. Все они чётко разграничиваются: одни бедные, другие богатые, третьи технологически продвинутые и представляют собой корпорации, и так далее.

Все люди живут в различных районах города: Центре, Уэстбруек, Хейвуде, Санто-Доминго, Пасифике и Уотсон. Также есть седьмой район — Бесплодные земли, который представляет собой окраины. Согласно CD Projekt RED, игровой мир может быть немного меньше, чем в The Witcher 3, но он намного плотнее и является многоуровневым. В игре присутствует цикл дня и ночи, а также динамическая погода (включая кислотные дожди, вызванные высоким уровнем загрязнения).</p>
        <p className="textSite">В игре огромное количество миссий, включая побочные. Последние включают такие активности, как: уличные гонки, бокс, хакерство, боевые искусства и стрельбу. В Cyberpunk 2077 также существует система правосудия и полиции, хотя она не будет настолько полнофункциональной, как в серии Grand Theft Auto.</p>
        <p className="textSite">Одно из самых больших отличий от трилогии «Ведьмак» заключается в том, что Cyberpunk 2077 играется исключительно с видом от первого лица, за исключением случаев, когда персонаж находится за рулем автомобиля. Многие фанаты до сих пор просят сделать переключаемый вариант, но CD Projekt RED против. Решение объясняется тем, что игру уже нельзя перестроить, используя перспективу от третьего лица. Уровень погружения сильно изменится, и, кроме того, это повредит плавному смешиванию кат-сцен и игрового процесса.

По сравнению с ведьмаком Геральтом, за V можно играть совершенно по-разному, так как герой фактически выглядит как «чистый лист». Игроки смогут свободно выбрать любой стиль игры, благодаря бесклассовой системе, начиная от персонажа-специалиста по стелсу, до классического непробиваемого солдата.</p>
        <p className="textSite">То же самое касается сюжетной линии. Разветвлённая система диалогов позволит решать разные вопросы уникально и в итоге всё это приведёт к определённой концовке. Неудачно выполненное задание также повлияет на сюжет и не приведёт к появлению экрана «Game Over».

В целом, разработчики заявили, что длина основного сюжета в Cyberpunk 2077 может быть немного короче по сравнению с The Witcher 3, но они также ожидают, что игра будет гораздо более «воспроизводимой». Иными словами, её захочется перепроходить снова и снова.</p>
      </div>

      <div className="card_owerview_3">
        <b className="textSiteTop">Движок RED Engine 4</b>
        <p className="textSite">После использования движка BioWare под названием Aurora для первой игры The Witcher, CD Projekt RED переключились на собственный RED Engine для The Witcher 2: Assassins of Kings. Результаты были ошеломляющими и в дальнейшем, польские разработчики использовали тот же движок в The Witcher 3: Wild Hunt.</p>
        <p className="textSite">Cyberpunk 2077 окажется ещё более продвинутой в плане графики игрой, благодаря четвёртой версии RED Engine. Он обладает значительно улучшенными системами анимации, поддержкой трассировки лучей и многими другими свежими аспектами.</p>
      </div>

      <div className="card_past">
         <p className="textDis">Website created by Docobro</p>
      </div>

    </div>

 
  );
}

function About() {
  return (
    <div>
      <div >
        <h1 className="mainh1_2">R E Q U I R E M E N T S :</h1>
        <img className="photoReq" source src="https://cdn-l-mkt.cdprojektred.com/image/16_9_EN_3-_02qt7qdkx3b50kqk.jpg" alt="aasd" />
      </div>
      <div className="card_past">
      <p className="textDis">Website created by Docobro</p>
      </div>
    </div>
  );
}

function Release() {
  return (
    <div>
      <h1 className="mainh1_3">R E L I S E _ I N _ R U S S I A</h1>
      <div>
        <TimerComponent />
      </div>

      <div className="card_owerview_3">
      <b className="textSiteTop">Дата выхода Cyberpunk 2077 в России и мире</b>
      <p className="textSite">Дата выхода Cyberpunk 2077 назначена на 10 декабря 2020 года – до недавнего переноса ее собирались выпустить 19 ноября. Игра выйдет в одно время во всем мире и на всех подтвержденных платформах: ПК, Xbox One и PS4. Вполне вероятно, что Cyberpunk 2077 появится на Nintendo Switch и консолях нового поколения: PS5 и Xbox Series X. Последняя платформа уже официально подтверждена, хотя CD Projekt RED пока не обещают выпустить некстген-обновление игры одновременно с официальным выходом на начальных платформах.</p>
      </div>
      <div className="card_past">
      <p className="textDis">Website created by Docobro</p>
    </div>
   </div>
  );
}
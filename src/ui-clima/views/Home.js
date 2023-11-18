import { Text, Button, Image } from "react-native";
import "./Home.css";
import profile from "../assets/img.svg";

const Home = () => {
  return (
    <Text>
      <main className="container">
        <section className="link__location">
          <a href="#">
            <p>Selecione o local</p>
          </a>
        </section>
        <section className="weather__description">
          <img />
          <h2>20°</h2>
          <div className="more__informations">
            <ul>
              <li className="element">
                <span>20km/h</span>
              </li>
              <li className="element">
                <span>30%</span>
              </li>
              <li className="element">
                <span>70%</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="next__days">
          <div className="next__info">
            <h3>Próximos Dias</h3>
          </div>
          <div className="next__informations">
            <ul>
              <li className="element">
                <span>20km/h</span>
              </li>
              <li className="element">
                <span>30%</span>
              </li>
              <li className="element">
                <span>70%</span>
              </li>
            </ul>
          </div>
          <div className="next__informations">
            <ul>
              <li className="info__day">
                <span>20km/h</span>
              </li>
              <li className="info_day">
                <span>30%</span>
              </li>
              <li className="info_day">
                <span>70%</span>
              </li>
            </ul>
          </div>
          <div className="next__informations">
            <ul>
              <li className="info__day">
                <span>20km/h</span>
              </li>
              <li className="info_day">
                <span>30%</span>
              </li>
              <li className="info_day">
                <span>70%</span>
              </li>
            </ul>
          </div>
          <div className="next__informations">
            <ul>
              <li className="info__day">
                <span>20km/h</span>
              </li>
              <li className="info_day">
                <span>30%</span>
              </li>
              <li className="info_day">
                <span>70%</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Text>
  );
};

export default Home;

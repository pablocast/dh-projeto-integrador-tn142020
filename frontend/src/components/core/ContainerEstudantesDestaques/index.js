import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import "./style.css";
import grandmestre from "../../../assets/img/grandmaster@96.png";
import mestre from "../../../assets/img/master@96.png";
import especialista from "../../../assets/img/expert@96.png";
import contributor from "../../../assets/img/contributor@96.png";
import novato from "../../../assets/img/novice@96.png";
import gold from "../../../assets/img/goldl@1x.png";
import silver from "../../../assets/img/silverl@1x.png";
import bronce from "../../../assets/img/bronzel@1x.png";
import { getTopN } from "../api-user";

const Estudante = (props) => {
  const {
    position,
    nivel,
    username,
    joined,
    medalhas_ouro,
    medalhas_prata,
    medalhas_bronce,
    pontos,
  } = props;
  return (
    <div className="Estudante">
      <div className="block-link block-link--bordered">
        <a className="block-link__anchor" href={"/"+username}></a>
        <div className="leaderboards__item-wrapper">
          <div className="leaderboards__rank">{position}</div>
          <div className="leaderboards__tier">
            <img src={nivel} />
          </div>
          <div className="leaderboards__avatar">
            <a href={"/"+username}>
              <img
                alt="thumnailUrl"
                src="https://storage.googleapis.com/kaggle-avatars/thumbnails/37166-kg.png"
              />
            </a>
          </div>
          <div className="leaderboards__name">
            <p>
              <a href={"/"+username}>{username}</a>
            </p>
            <p className="leaderboards__name-joined">{joined}</p>
          </div>
          <div className="leaderboards__medals">
            <div className="leaderboards__medal--gold">
              <div className="leaderboards__medals-item">
                <img alt="competitions" src={gold} />
              </div>
              <div className="leaderboards__medals-item">
                <span>{medalhas_ouro}</span>
              </div>
            </div>
            <div className="leaderboards__medal--silver">
              <div className="leaderboards__medals-item">
                <img alt="competitions" src={silver} />
              </div>
              <div className="leaderboards__medals-item">
                <span>{medalhas_prata}</span>
              </div>
            </div>
            <div className="leaderboards__medal--bronze">
              <div className="leaderboards__medals-item">
                <img alt="competitions" src={bronce} />
              </div>
              <div className="leaderboards__medals-item">
                <span>{medalhas_bronce}</span>
              </div>
            </div>
          </div>
          <div className="leaderboards__points">{pontos}</div>
        </div>
      </div>
    </div>
  );
};

const EstudantesDestaques = () => {
  let [users, setUsers] = useState([]);

  const [values, setValues] = useState({
    error: "",
  });

  const getStatistics = (users) => {
    const usersUpdated = users.map((user) => {
      return { ...user, num_enrollments: user.Enrollments.length };
    });

    const usersUpdatedSorted = usersUpdated.sort(
      (a, b) => -(parseFloat(a.num_enrollments) - parseFloat(b.num_enrollments))
    );

    return usersUpdatedSorted;
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getTopN(10, signal).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setUsers(data);
      }
    });
  }, []);

  const usersUpdatedSorted = getStatistics(users);

  return (
    <>
      <Col lg={{ span: 2 }}></Col>
      <Col lg={{ span: 8, offset: 2 }}>
        <div className="content-box">
          <div className="content-box__content-section">
            <div className="smart-list__content">
              <div>
                {/* Header */}
                <div className="leaderboards__list-header">
                  <div className="leaderboards__list-header-count leaderboards__list-header-count--grandmaster">
                    <img alt="grandmaster" src={grandmestre} />
                    <div>
                      <div>224</div>
                      <div>grande mestre</div>
                    </div>
                  </div>
                  <div className="leaderboards__list-header-count leaderboards__list-header-count--master">
                    <img alt="master" src={mestre} />
                    <div>
                      <div>1,588</div>
                      <div>mestre</div>
                    </div>
                  </div>
                  <div className="leaderboards__list-header-count leaderboards__list-header-count--expert">
                    <img alt="expert" src={especialista} />
                    <div>
                      <div>6,681</div>
                      <div>especialistas</div>
                    </div>
                  </div>
                  <div className="leaderboards__list-header-count leaderboards__list-header-count--contributor">
                    <img alt="contributor" src={contributor} />
                    <div>
                      <div>58,887</div>
                      <div>contributores</div>
                    </div>
                  </div>
                  <div className="leaderboards__list-header-count leaderboards__list-header-count--novice">
                    <img alt="novice" src={novato} />
                    <div>
                      <div>91,465</div>
                      <div>novatos</div>
                    </div>
                  </div>
                </div>
                {/* Titles */}
                <div className="leaderboards__item-wrapper leaderboards__item-wrapper--header">
                  <div className="leaderboards__rank">Ranking</div>
                  <div className="leaderboards__tier">Nível</div>
                  <div className="leaderboards__avatar">
                    <div className="leaderboards__user-label">Usuario</div>
                  </div>
                  <div className="leaderboards__name"></div>
                  <div className="leaderboards__medals">
                    <div className="leaderboards__medals-label">Medalhas</div>
                  </div>
                  <div className="leaderboards__points">Pontos</div>
                </div>
                {usersUpdatedSorted.map((user, index) => (
                  <Estudante
                    position={index + 1}
                    username={user.username}
                    nivel={grandmestre}
                    joined={"junto-se ha 1 ano"}
                    medalhas_ouro={20}
                    medalhas_prata={10}
                    medalhas_bronce={0}
                    pontos={user.num_enrollments}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={{ span: 2 }}></Col>
    </>
  );
};

export default EstudantesDestaques;

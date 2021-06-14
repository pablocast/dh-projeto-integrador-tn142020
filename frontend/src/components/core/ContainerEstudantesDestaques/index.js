import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";
import grandmestre from "../../../assets/img/grandmaster@96.png"
import mestre from "../../../assets/img/master@96.png"
import especialista from "../../../assets/img/expert@96.png"
import contributor from "../../../assets/img/contributor@96.png"
import novato from "../../../assets/img/novice@96.png"

const Estudante = (props) => {
  const { position, username, joined, medalhas_ouro, medalhas_prata, medalhas_bronce, pontos } = props;
  return (
    <div className="button">
      <div className="block-link block-link--bordered">
        <a className="block-link__anchor" href="/philippsinger"></a>
        <div className="leaderboards__item-wrapper">
          <div class="leaderboards__rank">{position}</div>
          <div class="leaderboards__tier">
            <img
              alt="grandmaster"
              src="/static/images/tiers/grandmaster@96.png"
              title="grandmaster"
            />
          </div>
          <div class="leaderboards__avatar">
            <a href="/philippsinger" >
              <img
                alt="thumnailUrl"
                src="https://storage.googleapis.com/kaggle-avatars/thumbnails/37166-kg.png"
              />
            </a>
          </div>
          <div class="leaderboards__name">
            <p>
              <a
                href="/philippsinger"
              >
                {username}
              </a>
            </p>
            <p class="leaderboards__name-joined">
              {joined}
            </p>
          </div>
          <div class="leaderboards__medals">
            <div class="leaderboards__medal--gold">
              <div class="leaderboards__medals-item">
                <img
                  alt="competitions"
                  src="/static/images/medals/competitions/goldl@1x.png"
                />
              </div>
              <div class="leaderboards__medals-item">
                <span>{medalhas_ouro}</span>
              </div>
            </div>
            <div class="leaderboards__medal--silver">
              <div class="leaderboards__medals-item">
                <img
                  alt="competitions"
                  src="/static/images/medals/competitions/silverl@1x.png"
                />
              </div>
              <div class="leaderboards__medals-item">
                <span>{medalhas_prata}</span>
              </div>
            </div>
            <div class="leaderboards__medal--bronze">
              <div class="leaderboards__medals-item">
                <img
                  alt="competitions"
                  src="/static/images/medals/competitions/bronzel@1x.png"
                />
              </div>
              <div class="leaderboards__medals-item">
                <span>{medalhas_bronce}</span>
              </div>
            </div>
          </div>
          <div class="leaderboards__points">{pontos}</div>
        </div>
      </div>
    </div>
  );
};

const estudantes = [
  {
    nome: "Fulano",
    number: "01",
    img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
  {
    nome: "Fulano",
    number: "02",
    img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
  {
    nome: "Fulano",
    number: "03",
    img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
  {
    nome: "Fulano",
    number: "04",
    img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
];

const EstudantesDestaques = () => {
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
                    </div></div>
                  <div className="leaderboards__list-header-count leaderboards__list-header-count--expert">
                    <img alt="expert" src={especialista} />
                    <div><div>6,681</div>
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
                    <div><div>91,465</div>
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

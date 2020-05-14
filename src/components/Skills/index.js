import React from 'react';
import { TiHtml5 } from 'react-icons/ti';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
  DiJavascript1, DiMysql, DiScrum, DiTrello,
} from 'react-icons/di';


import './skills.scss';

const index = () => (
  <section id="competences">
    <h1 className="skills-title">
      Mes compétences
      <hr className="skills-hr" />
    </h1>
    <div className="skills-group">
      <div className="skills-card">
        <span><TiHtml5 /></span>
        <h3 className="skills-card-title">HTML / CSS</h3>
        <p className="skills-desc">Élaboration - Conception graphique - Intégration - Référencement SEO.</p>
      </div>
      <div className="skills-card">
        <span><DiJavascript1 /></span>
        <h3 className="skills-card-title">Javascript</h3>
        <p className="skills-desc">Contenu dynamique et interactif - Jquery - Json - AJAX.</p>
      </div>
      <div className="skills-card">
        <span><FaReact /></span>
        <h3 className="skills-card-title">ReactJS / Redux</h3>
        <p className="skills-desc">Interface utilisateur interactive - Composants autonomes - Cycle de vie / Logique d'interaction - Optimisations des performances.</p>
      </div>
      <div className="skills-card">
        <span><FaNodeJs /></span>
        <h3 className="skills-card-title">NodeJS</h3>
        <p className="skills-desc">Applications réseau évolutives - Construction d'une API - Gestion côté serveur.</p>
      </div>
      <div className="skills-card">
        <span><FaGithub /></span>
        <h3 className="skills-card-title">GitHub</h3>
        <p className="skills-desc">
          Outil de développement<br />
          <span className="skills-desc--span"> git init </span>
          /
          <span className="skills-desc--span"> git commit </span>
          /
          <span className="skills-desc--span"> git push </span>
          ...
        </p>
      </div>
      <div className="skills-card">
        <span><DiMysql /></span>
        <h3 className="skills-card-title">mysql</h3>
        <p className="skills-desc">Base de donnée - Requêtes SQL</p>
      </div>
      <div className="skills-card">
        <span><DiScrum /></span>
        <h3 className="skills-card-title">scrum</h3>
        <p className="skills-desc">Méthode - Sprints - Délais - Réunions</p>
      </div>
      <div className="skills-card">
        <span><DiTrello /></span>
        <h3 className="skills-card-title">Trello</h3>
        <p className="skills-desc">Tableau - Organisation - Idées - Tâches</p>
      </div>
    </div>
    <h2 className="skills-title">
      Notions :
    </h2>
    <div className="skills-group">
      <p className="skills-notions">VueJS</p>
      <p className="skills-notions">PHP</p>
      <p className="skills-notions">Lumen</p>
    </div>
  </section>
);
export default index;

// /src/components/Routes.js
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Portal from "../pages/Portal";
import sobre from "../pages/sobre";
import achados from "../pages/achados-perdidos";
import biblioteca from "../pages/biblioteca";
import cipa from "../pages/CIPA";
import calendar_event from "../pages/calendario-eventos";
import concurso from "../pages/concurso";
import cpa from "../pages/cpa";
import corpo_adm from "../pages/corpo-adm";
import docentes from "../pages/docentes";
import editais from "../pages/editais";
import galeria from "../pages/galeria";
import laboratorio from "../pages/laboratorio";
import noticias from "../pages/noticias";
import nucleo from "../pages/nucleo";
import secretaria from "../pages/secretaria";
import ads from "../pages/ads";
import banco from "../pages/banco";
import dsm from "../pages/dsm";
import gtproducao_ind from "../pages/gtproducao-industrial";
import logistica from "../pages/logistica";
import manufatura from "../pages/manufatura";
import manut_aero from "../pages/manut-aero";
import proj_est_aero from "../pages/proj-est-aero";
import sobre_cursos from "../pages/sobre-cursos";
import vestibular from "../pages/vestibular";

import aerodesign from "../pages/aerodesign";
import inova_paula_souza from "../pages/inova_paula_souza";
import api from "../pages/api";
import baja from "../pages/baja";
import CADI from "../pages/CADI";
import cimatech from "../pages/cimatech";
import escola_inovadores from "../pages/escola_inovadores";
import business_mentoring from "../pages/business_mentoring";
import hackatruck from "../pages/hackatruck";
import vestec from "../pages/vestec";
import workshop from "../pages/workshop";

import calendario from "../pages/calendario";
import email_institucional from "../pages/email_institucional";
import diplomados from "../pages/diplomados";
import horarios_aula from "../pages/horarios_aula";
import horarios_onibus from "../pages/horarios_onibus";
import monitoria from "../pages/monitoria";
import moodle from "../pages/moodle";
import TG from "../pages/TG";
import passe from "../pages/passe";


const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/portal" component={Portal} />
    <Route exact path="/sobre" component={sobre} />
    <Route exact path="/achados_perdidos" component={achados} />
    <Route exact path="/biblioteca" component={biblioteca} />
    <Route exact path="/cipa" component={cipa} />
    <Route exact path="/calendario_eventos" component={calendar_event} />
    <Route exact path="/concurso" component={concurso} />
    <Route exact path="/cpa" component={cpa} />
    <Route exact path="/corpo_adm" component={corpo_adm} />
    <Route exact path="/docentes" component={docentes} />
    <Route exact path="/editais" component={editais} />
    <Route exact path="/galeria" component={galeria} />
    <Route exact path="/laboratorios" component={laboratorio} />
    <Route exact path="/noticias" component={noticias} />
    <Route exact path="/nucleo" component={nucleo} />
    <Route exact path="/secretaria" component={secretaria} />
    <Route exact path="/ads" component={ads} />
    <Route exact path="/banco" component={banco} />
    <Route exact path="/dsm" component={dsm} />
    <Route exact path="/gtproducaoind" component={gtproducao_ind} />
    <Route exact path="/logistica" component={logistica} />
    <Route exact path="/manufatura" component={manufatura} />
    <Route exact path="/manut_aero" component={manut_aero} />
    <Route exact path="/projtestaero" component={proj_est_aero} />
    <Route exact path="/sobre_cursos" component={sobre_cursos} />
    <Route exact path="/vestibular" component={vestibular} />

    <Route exact path="/aerodesign" component={aerodesign} />
    <Route exact path="/agencia" component={inova_paula_souza} />
    <Route exact path="/api" component={api} />
    <Route exact path="/baja" component={baja} />
    <Route exact path="/cadi" component={CADI} />
    <Route exact path="/cimatech" component={cimatech} />
    <Route exact path="/inovadores" component={escola_inovadores} />
    <Route exact path="/business" component={business_mentoring} />
    <Route exact path="/hackatruck" component={hackatruck} />
    <Route exact path="/vestec" component={vestec} />
    <Route exact path="/workshop" component={workshop} />

    <Route exact path="/calendario" component={calendario} />
    <Route exact path="/email" component={email_institucional} />
    <Route exact path="/diplomados" component={diplomados} />
    <Route exact path="/horarios_aula" component={horarios_aula} />
    <Route exact path="/horarios_onibus" component={horarios_onibus} />
    <Route exact path="/monitoria" component={monitoria} />
    <Route exact path="/moodle" component={moodle} />
    <Route exact path="/TG" component={TG} />
    <Route exact path="/passe" component={passe} />
  </BrowserRouter>
);

export default Routes;

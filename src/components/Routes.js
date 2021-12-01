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
  </BrowserRouter>
);

export default Routes;

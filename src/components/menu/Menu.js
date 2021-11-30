import React from "react";
import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

import "./Menu.css";

const Menu = () => {
  const items = [
    {
      label: "HOME",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "INSTITUCIONAL",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "A Fatec",
        },
        {
          label: "Achados e Perdidos",
        },
        {
          label: "Biblioteca",
        },
        {
          label: "CIPA",
        },
        {
          label: "Calendário Digital de Eventos",
        },
        {
          label: "Concurso Público",
        },
        {
          label: "CPA-Comissão Própria de Avaliação",
        },
        {
          label: "Corpo Administrativo",
        },
        {
          label: "Docentes",
        },
        {
          label: "Editais",
        },
        {
          label: "Galeria",
        },
        {
          label: "Laboratórios",
        },
        {
          label: "Notícias",
        },
        {
          label: "Núcleo de Relações Internacionais",
        },
        {
          label: "Secretaria",
        },
      ],
    },
    {
      label: "CURSOS",
      icon: "pi pi-fw pi-list",
      items: [
        {
          label: "Análise e Desenvolvimento de Sistemas",
        },
        {
          label: "Banco de Dados",
        },
        {
          label: "Desenvolvimento de Software Multiplataforma",
        },
        {
          label: "Gestão da Produção Industrial",
        },
        {
          label: "Logística",
        },
        {
          label: "Manufatura Avançada",
        },
        {
          label: "Manutenção de Aeronaves",
        },
        {
          label: "Projetos de Estruturas Aeronáuticas",
        },
      ],
    },
    {
      label: "PROJETOS",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Aerodesign",
        },
        {
          label: "Agência Inova Paula Souza",
        },
        {
          label: "Aorendizagem por Projetos Integrados",
        },
        {
          label: "Baja",
        },
        {
          label: "CADI",
        },
        {
          label: "CIMAtech",
        },
        {
          label: "Escola de Inovadores",
        },
        {
          label: "Fatec Business Mentoring",
        },
        {
          label: "HACKaTruck",
        },
        {
          label: "Vestec",
        },
        {
          label: "Workshop de Logística Humanitária",
        },
      ],
    },
    {
      label: "ÁREA DO ALUNO",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Calendário Acadêmico",
        },
        {
          label: "E-mail Institucional",
        },
        {
          label: "Galeria de Diplomados",
        },
        {
          label: "Horários de Aula",
        },
        {
          label: "Horários de Ônibus",
        },
        {
          label: "Monitoria",
        },
        {
          label: "Moodle",
        },
        {
          label: "Normas para TG",
        },
        {
          label: "Passe Escolar",
        },
      ],
    },
    {
      label: "SIGA",
      icon: "pi pi-fw pi-external-link",
    },
  ];

  return (
    <div>
      <div className="card">
        <Menubar model={items} />
      </div>
    </div>
  );
};
export default Menu;

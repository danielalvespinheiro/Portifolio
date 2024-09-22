const infoSection = document.querySelector('.info');

const dataPanel1 = [
    { label: 'Projeto', value: 'SQLite3 Banco de Dados' },
    { label: 'Link', value: 'https://github.com/danielalvespinheiro/SQLITE3-atividade' },
    { label: 'Tecnologias', value: 'javaScript e express' },
    { label: 'Descrição', value: 'Este é um projeto de banco de dados onde eu crio um banco de dados apenas com html, ' +
        'no momento não é possivel usa-lo no html.' }
];

const dataPanel2 = [
    { label: 'Projeto', value: 'Um cardápio digital' },
    { label: 'Link', value: 'https://github.com/danielalvespinheiro/Cardapio-digital' },
    { label: 'Tecnologias', value: 'html, css e JavaScript' },
    { label: 'Descrição', value: 'Fiz esse cárdapio para um contrato daqui da minha cidade, foi uma ideia criada para facilitar ' +
        'e economizar os gastos do restaurante.'
     },
    { label: 'Categoria', value: 'Free-Lance' },
];

const dataPanel3 = [
    { label: 'Projeto', value: 'Gerador de PDF com JS' },
    { label: 'Link', value: 'https://github.com/danielalvespinheiro/gerador-de-PDF-com-javaScript' },
    { label: 'Tecnologias', value: 'hmtl, javaScript e cludflare jspdf' },
    { label: 'Descrição', value: 'Este é um projeto que criei para apresentar de forma mais particular '+
        'uma das funcionalides de um outro projeto realizado no SIM. O SIM é uma aplicação web que estou participando no desenvolvimento '+
        'a um pouco mais de um ano.'
     },
    { label: 'Categoria', value: 'Gerador de PDF' },
];

const dataPanel4 = [
    { label: 'Projeto', value: 'Repositório com vários mini-projetos' },
    { label: 'Link', value: 'https://github.com/danielalvespinheiro/CURSO-DE-JAVA' },
    { label: 'Tecnologias', value: 'Java' },
    { label: 'Descrição', value: 'São projetos que fiz com base em outro curso que estou fazendo, Java é a linguagem que mais me adptei '+
        'não sou expert em java sou um novato ainda, mas o meu objetivo é um dia ser muito bom no Java.'
     },
    { label: 'Categoria', value: 'Mini-projetos' },
];

const dataPanel5 = [
    { label: 'Projeto', value: 'Uma API de cadastros de clientes' },
    { label: 'Link', value: 'https://github.com/danielalvespinheiro/Cadastro-de-cliente.git' },
    { label: 'Tecnologias', value: 'Java e React' },
    { label: 'Descrição', value: 'Este é um projeto que fiz para testar minhas habilidades no Java e no React, mas ainda não '+
        'finalizei o front-end, mas a API em si esta pronto, claro pode ser que eu mudo com o passar do tempo, mas isso somente '+
        'para suprir a necessidade do front-end.'
     },
    { label: 'Categoria', value: 'Cadastro de cliente' },
];

/*
const dataPanel6 = [
    { label: 'Descrição', value: 'Este é um projeto de banco de dados' },
    { label: 'Categoria', value: 'Banco de Dados' },
];
*/

function truncateLinkText(linkText, maxLength) {
    if (linkText.length > maxLength) {
      return linkText.substring(0, maxLength) + '...';
    }
    return linkText;
  }

function generateInfoPanel(dataArray, panelIndex) {
    const panelSection = document.createElement('section');
    panelSection.className = `info-panel panel-${panelIndex}`;
    infoSection.appendChild(panelSection);

    dataArray.forEach((item) => {
        const pInfo = document.createElement('p');
        if (item.label === 'Link') {
          const link = document.createElement('a');
          link.href = item.value;
          link.target = '_blank'; 
          const truncatedLinkText = truncateLinkText(item.value, 30);
          link.textContent = truncatedLinkText;
          pInfo.appendChild(link);
        } else {
          pInfo.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        }
        panelSection.appendChild(pInfo);
      });
}

generateInfoPanel(dataPanel1, 1);
generateInfoPanel(dataPanel2, 2);
generateInfoPanel(dataPanel3, 3);
generateInfoPanel(dataPanel4, 4);
generateInfoPanel(dataPanel5, 5);
/*
generateInfoPanel(dataPanel6, 6);
*/
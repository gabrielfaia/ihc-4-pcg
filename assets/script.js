//#01 - Evento responsável pelo "Carrosel" (imagens rotativas)
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  current = i;
}

dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));
setInterval(()=>showSlide((current+1)%slides.length),7000);

//#02 - Evento responsável pela abertura de "Popup" do dropdown dos Temas
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const closePopup = document.getElementById('close-popup');

const topics = {
  'Bibliotecas': {
    title: 'Bibliotecas',
    text: 'As bibliotecas são coleções de funções, classes e módulos que facilitam o desenvolvimento de programas, evitando que o programador precise reescrever código já existente. Elas servem como ferramentas prontas para realizar tarefas específicas, desde cálculos matemáticos até processamento de dados complexos e uma das bibliotecas mais populares utilizadas é o Pandas, desenvolvida em Python.'
  },
  'Análise de Dados': {
    title: 'Análise de Dados',
    text: 'Processo de examinar, transformar e interpretar dados com o objetivo de extrair informações úteis, identificar padrões e apoiar a tomada de decisões. Ela envolve várias etapas, como coleta, limpeza, organização, visualização e interpretação dos dados.'
  },
  'Mineração de Dados': {
    title: 'Mineração de Dados',
    text: 'A Mineração de Dados (ou Data Mining) é uma etapa mais profunda e técnica da análise de dados, voltada para descobrir padrões ocultos, correlações e tendências em grandes bases de dados. Utiliza técnicas de estatística, aprendizado de máquina (machine learning) e inteligência artificial.'
  },
  'Heurísticas': {
    title: 'Heurísticas',
    text: 'As Heurísticas são princípios ou regras práticas utilizadas para avaliar e melhorar a usabilidade de interfaces digitais. Elas foram propostas por Jakob Nielsen, um dos maiores especialistas em experiência do usuário (UX), e têm como objetivo identificar problemas de navegação, interação e design de forma eficiente e sistemática.'
  },
  'eMAG': {
    title: 'eMAG',
    text: 'As eMAG (Modelo de Acessibilidade em Governo Eletrônico) são diretrizes brasileiras que orientam a criação de sites, sistemas e serviços digitais acessíveis, garantindo que todas as pessoas, incluindo aquelas com deficiências, possam utilizar os serviços públicos de forma plena. A eMAG se baseia em vários princípios, detalhando recomendações práticas para elementos.'
  }
};

//#02.1 - Detecção de clique em cada opção do dropdown
document.querySelectorAll('.nav-item .dropdown a').forEach(link =>  {
  link.addEventListener('click', e => {
    const topic = e.target.textContent.trim();
    if (topics[topic]) {
      e.preventDefault()
      popupTitle.textContent = topics[topic].title;
      popupText.textContent = topics[topic].text;
      popup.style.display = 'flex';
    }
  })
});

//#02.2 - Detecção de clique em cada opção do dropdown
closePopup.addEventListener('click', () => popup.style.display = 'none');

popup.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});

//#03 - Evento responsável pela abertura de "Popup" do botão de introdução
const introPopup = document.getElementById('intro-popup');
const openIntro = document.getElementById('open-intro');
const closeIntro = document.getElementById('close-intro');

if (openIntro && introPopup && closeIntro) {
  openIntro.addEventListener('click', () => {
    introPopup.style.display = 'flex';
  });

  closeIntro.addEventListener('click', () => {
    introPopup.style.display = 'none';
  });

  introPopup.addEventListener('click', e => {
    if (e.target === introPopup) introPopup.style.display = 'none';
  });
}
//#04 - Evento responsável pelo "Copiar para a área de transferência"
const importBtn = document.getElementById('importCode');
const toast = document.getElementById('toast');
const sampleCode = `Baixe o código no link:
https://www.mediafire.com/file/qs3huqoyhz2vhzz/vinho.ipynb/file`;

importBtn.addEventListener('click',async()=>{
  await navigator.clipboard.writeText(sampleCode);
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2000);
});

//#04 - Evento responsável por realizar o "Download do PDF do PCG"
document.getElementById('downloadPdf').addEventListener('click',e => {
  e.preventDefault();
  const a = document.createElement('a');
  a.href = 'PCG.pdf';
  a.download = 'PCG.pdf';
  a.click();
});

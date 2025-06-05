const formandosData = {
  otavio: {
    name: "Otávio",
    image: "img/otavio.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Desenvolvimento Web",
      "Projeto de TCC: Sistema de Gerenciamento",
      "LinkedIn: linkedin.com/in/otavio",
      "Email: otavio@email.com",
    ],
  },
  andrei: {
    name: "Andrei",
    image: "img/andrei.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Inteligência Artificial",
      "Projeto de TCC: Machine Learning",
      "LinkedIn: linkedin.com/in/andrei",
      "Email: andrei@email.com",
    ],
  },
  bruno: {
    name: "Bruno",
    image: "img/bruno.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Segurança da Informação",
      "Projeto de TCC: Criptografia",
      "LinkedIn: linkedin.com/in/bruno",
      "Email: bruno@email.com",
    ],
  },
  cauan: {
    name: "Cauan",
    image: "img/cauan.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Desenvolvimento Mobile",
      "Projeto de TCC: App Mobile",
      "LinkedIn: linkedin.com/in/cauan",
      "Email: cauan@email.com",
    ],
  },
  tulio: {
    name: "Túlio",
    image: "img/tulio.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Banco de Dados",
      "Projeto de TCC: Sistema de BD",
      "LinkedIn: linkedin.com/in/tulio",
      "Email: tulio@email.com",
    ],
  },
  erick: {
    name: "Erick",
    image: "img/erick.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Redes de Computadores",
      "Projeto de TCC: Protocolo de Rede",
      "LinkedIn: linkedin.com/in/erick",
      "Email: erick@email.com",
    ],
  },
  sara: {
    name: "Sara",
    image: "img/sara.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: UX/UI Design",
      "Projeto de TCC: Interface de Usuário",
      "LinkedIn: linkedin.com/in/sara",
      "Email: sara@email.com",
    ],
  },
  pedro: {
    name: "Pedro",
    image: "img/pedro.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: DevOps",
      "Projeto de TCC: Infraestrutura Cloud",
      "LinkedIn: linkedin.com/in/pedro",
      "Email: pedro@email.com",
    ],
  },
  daniel: {
    name: "Daniel",
    image: "img/daniel.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Análise de Dados",
      "Projeto de TCC: Big Data Analytics",
      "LinkedIn: linkedin.com/in/daniel",
      "Email: daniel@email.com",
    ],
  },
  eduardo: {
    name: "Eduardo",
    image: "img/eduardo.png",
    details: [
      "Curso: Ciência da Computação",
      "Especialização: Web Design",
      "Projeto de TCC: Site Responsivo",
      "LinkedIn: linkedin.com/in/edurado",
      "Email: eduardo@email.com",
    ],
  },
};

function openModal(formandoId) {
  const formando = formandosData[formandoId];
  const modal = document.getElementById("modal");

  document.getElementById("modal-img").src = formando.image;
  document.getElementById("modal-img").alt = formando.name;
  document.getElementById("modal-name").textContent = formando.name;

  const detailsContainer = document.getElementById("modal-details");
  detailsContainer.innerHTML = "";

  formando.details.forEach((detail) => {
    const p = document.createElement("p");
    p.textContent = detail;
    detailsContainer.appendChild(p);
  });

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}


window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};


document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


function switchToTernoImages() {
  const formandoItems = document.querySelectorAll('.formando-item img');
  
 
  formandoItems.forEach((img, index) => {
    img.style.transition = 'opacity 0.5s ease-in-out';
    img.style.opacity = '0';
    
   
    setTimeout(() => {
      const currentSrc = img.src;
      const fileName = currentSrc.split('/').pop().split('.')[0];
      const newSrc = currentSrc.replace(`${fileName}.png`, `${fileName}-terno.png`);
      
      
      img.src = newSrc;
      
     
      setTimeout(() => {
        img.style.opacity = '1';
      }, 50); 
      
    }, 500 + (index * 100)); 
  });

  
  Object.keys(formandosData).forEach(key => {
    const currentImage = formandosData[key].image;
    const fileName = currentImage.split('/').pop().split('.')[0];
    formandosData[key].image = currentImage.replace(`${fileName}.png`, `${fileName}-terno.png`);
  });

  console.log('Imagens trocadas para versão de terno com animação!');
}


setTimeout(switchToTernoImages, 50000);

// script.js
const filmes = {
  genero1: [
    { 
      nome: 'A Menina e o Leão', 
      imagem: 'ameninaeleao.jpg', 
      classificacao: 'Livre', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Aos 11 anos, Mia muda-se da Inglaterra para a África do Sul e encontra alegria ao criar um leão branco. Aos 14 anos, quando seus pais decidem vendê-lo por ser considerado perigoso, Mia foge pela savana para libertar seu melhor amigo.', 
      trailer: 'linkameninaeleao' 
    },
    { 
      nome: 'Rainha de Katwe', 
      imagem: 'rainhakatwe.jpg', 
      classificacao: '10', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Phiona Mutesi, uma jovem de Uganda, luta para se tornar uma das melhores jogadoras de xadrez do mundo apesar da pobreza e das dificuldades que enfrenta.', 
      trailer: 'linkrainhakatwe' 
    },
    { 
      nome: 'O Menino do Pijama Listrado', 
      imagem: 'pijamalistrado.jpg', 
      classificacao: '12', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Durante a Segunda Guerra Mundial, Bruno, filho de um oficial alemão, torna-se amigo de Shmuel, um garoto judeu que vive em um campo de concentração, criando uma amizade que marcará suas vidas.', 
      trailer: 'linkpijamalistrado' 
    },
    { 
      nome: 'Corra', 
      imagem: 'corra.jpg', 
      classificacao: '14', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Chris visita a misteriosa família de sua namorada e rapidamente percebe que algo extremamente perturbador está acontecendo.', 
      trailer: 'linkcorra' 
    },
    { 
      nome: 'Ilha do Medo', 
      imagem: 'ilhadomedo.jpg', 
      classificacao: '16', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Em 1954, dois agentes federais investigam o desaparecimento de uma paciente em um hospital psiquiátrico isolado, enfrentando rebeliões, mistérios e um furacão.', 
      trailer: 'linkilhadomedo' 
    }
  ],

  genero2: [
    { 
      nome: 'Os Farofeiros', 
      imagem: 'osfarofeiros.jpg', 
      classificacao: 'Livre', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Colegas de trabalho viajam com suas famílias para curtir o feriado, mas acabam enfrentando diversos problemas e situações hilárias ao descobrirem que a casa alugada está destruída.', 
      trailer: 'linkfarofeiros' 
    },
    { 
      nome: 'Se Beber Não Case 3', 
      imagem: 'sebebernaocase3.jpg', 
      classificacao: '14', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Após a morte de seu pai, Alan embarca em uma nova jornada com os amigos, mas acabam perseguidos por capangas e envolvidos em situações perigosas no México e em Las Vegas.', 
      trailer: 'linksebebernaocase3' 
    },
    { 
      nome: 'Gente Grande', 
      imagem: 'gentegrande.jpg', 
      classificacao: '12', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Cinco amigos de infância se reúnem com suas famílias para passar um feriado juntos, descobrindo que não são mais tão jovens quanto pensam.', 
      trailer: 'linkgentegrande' 
    },
    { 
      nome: 'Anjos da Lei', 
      imagem: 'anjosdalei.jpg', 
      classificacao: '16', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Dois policiais jovens vão disfarçados para um colégio e precisam lidar com adolescentes modernos enquanto tentam resolver um caso, gerando situações hilárias.', 
      trailer: 'linkanjosdalei' 
    },
    { 
      nome: '17 Outra Vez', 
      imagem: '17outravez.jpg', 
      classificacao: '10', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Mike, frustrado com sua vida adulta, inexplicavelmente volta a ter 17 anos e precisa lidar com a nova convivência com seus filhos na escola.', 
      trailer: 'link17outravez' 
    }
  ],

  genero3: [
    { 
      nome: 'Gremlins', 
      imagem: 'gremlins.jpg', 
      classificacao: 'Livre', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Billy ganha uma criatura fofa com três regras essenciais: não molhar, evitar luz forte e nunca alimentar após a meia-noite. Quando algo dá errado, o caos começa.', 
      trailer: 'linkgremlins' 
    },
    { 
      nome: 'A Casa Monstro', 
      imagem: 'acasamonstro.jpg', 
      classificacao: '10', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Três adolescentes descobrem que uma casa do bairro é uma entidade viva e perigosa, e precisam detê-la antes do Dia das Bruxas.', 
      trailer: 'linkacasamonstro' 
    },
    { 
      nome: 'A Bruxa de Blair', 
      imagem: 'abruxadeblair.jpg', 
      classificacao: '12', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Três jovens cineastas desaparecem ao investigar uma lenda em uma floresta. Anos depois, suas gravações são encontradas.', 
      trailer: 'linkbruxadeblair' 
    },
    { 
      nome: 'Megan', 
      imagem: 'megan.jpg', 
      classificacao: '14', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Cady perde os pais e vai morar com a tia, que constrói a robô M3GAN. A boneca se torna extremamente protetora e perigosa.', 
      trailer: 'linkmegan' 
    },
    { 
      nome: 'Rua do Medo: 1994 – Parte 1', 
      imagem: 'ruadomedo1994.jpg', 
      classificacao: '16', 
      ano: 0, 
      duracao: '0', 
      sinopse: 'Após uma tragédia, jovens descobrem que sua cidade pode estar amaldiçoada há décadas, e agora eles podem ser as próximas vítimas.', 
      trailer: 'linkruadomedo1994' 
    }
  ]
};


let idadeUsuario = 0;


function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}


function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}


function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';


  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');


      div.innerHTML = `
  	<h2>${filme.nome}</h2>
 	 <img src="${filme.imagem}" alt="${filme.nome}" />
  	<p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
  	<p><strong>Ano:</strong> ${filme.ano}</p>
  	<p><strong>Duração:</strong> ${filme.duracao}</p>
  	<p><strong>Sinopse:</strong> ${filme.sinopse}</p>


  	<iframe 
    		src="https://www.youtube.com/embed/${filme.trailer}"
   		 allowfullscreen>
  	</iframe>
`;


      container.appendChild(div);
    }
  });
}


function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}


inserirNome();



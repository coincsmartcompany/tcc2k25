import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from '../assets/logo2.png';
import Passo from '../assets/passos.png';
import Informacao from '../assets/informacao.png';
import Grupo from '../assets/grupo.png';
import ArtigoIcon from '../assets/artigo.png';
import Controle from '../assets/controlejogo.png';
import JogoMobile from '../assets/jogo.png';
import JogoDesktop from '../assets/jogo2.png';
import Moedas from '../assets/moedas.png';
import Menina from '../assets/menina.png';
import Joystick from '../assets/joystick.png';
import UltimaImg from '../assets/ultimaimg.png';
import DownloadIcon from '../assets/download.png';

const Jogo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative">

      {/* MOBILE */}
      <div className="md:hidden">
        {/* Background normal da primeira imagem */}
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${JogoMobile})` }}
        >
          {/* Logo */}
          <div className="absolute top-[21px] left-[25px]">
            <img
              src={Logo2}
              alt="Logo"
              className="w-[123px] h-[30px] cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Menu hamburguer */}
          <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
            <div
              className="flex flex-col gap-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            </div>
          </div>

          {/* Menu aberto */}
          {menuOpen && (
            <div
              className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3"
            >
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/passos')}>
                <img src={Passo} alt="Passo" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Passo a passo</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')}>
                <img src={Informacao} alt="Produtos" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Produtos</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}>
                <img src={Grupo} alt="Equipe" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Equipe</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')}>
                <img src={ArtigoIcon} alt="Artigo" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Artigo</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/jogo')}>
                <img src={Controle} alt="Jogo" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Jogo</span>
              </div>
            </div>
          )}

          {/* Conteúdo dentro del background */}
          <div className="pt-[400px] pb-10 px-6">
            <div className="w-[304px] h-[99px] mx-auto mb-12">
              <h2 className="text-[24px] font-nunito font-extrabold text-[#F5F0E1] text-center leading-tight">
                Corra, Colete e Aprenda: Seu Futuro Começa com Cada Moedinha!
              </h2>
            </div>

            <div className="w-[311px] h-[154px] mx-auto mb-16">
              <p className="text-[16px] font-nunito font-bold text-[#F5F0E1] text-center leading-tight">
                Coin Running é um divertido jogo de corrida infinita estrelado pela criança-jogadora,
                que controla seu próprio porquinho-cofre! Enwhile avança por cenários coloridos,
                coleta moedas, evita gastos por impulso e aprenda a economizar dinheiro.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#72B8C3] text-white w-[295px] h-[62px] rounded-[30px] font-palanquin-dark font-bold text-[24px]"
              >
                JOGAR
              </button>
            </div>
          </div>
        </div>

        {/* Fundo azul + quadrado cinza abaixo da imagem */}
        <div className="w-full bg-[#72B8C3] flex flex-col items-center pt-20 pb-16">
          {/* Quadrado cinza com ícone de play do YouTube */}
          <div className="w-[300px] h-[200px] bg-[#D9D9D9] rounded-lg shadow-md mb-12 flex items-center justify-center relative">
            {/* Ícone de play do YouTube */}
            <div className="w-[70px] h-[70px] bg-[#6b6b6b] rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-1"></div>
            </div>
          </div>
          
          {/* Texto adicionado abaixo do quadrado cinza */}
          <div className="w-[320px] px-4 mb-16">
            <h3 className="text-[24px] font-nunito font-extrabold text-[#F5F0E1] text-center leading-tight">
              Cada Corrida Ensina, Cada Moeda Educa e Cada Escolha Constrói o Futuro
            </h3>
          </div>

          {/* Primeiro quadrado - Educação Financeira */}
          <div className="relative mt-16 mb-16">
            <div className="w-[252px] h-[319px] bg-[#884a2e] rounded-[20px] flex flex-col justify-start pl-6 pt-20 pr-4">
              <div className="text-[24px] font-nunito font-bold text-white text-left mb-4">
                <div>Educação</div>
                <div>Financeira</div>
              </div>
              
              <p className="text-[14px] font-nunito font-normal text-white text-left leading-tight">
                Aprenda a cuidar das suas moedinhas e planejar seus sonhos desde pequeno! Economizar pode ser divertido!
              </p>
            </div>
            
            <img 
              src={Moedas} 
              alt="Moedas" 
              className="absolute -top-22 left-1/2 transform -translate-x-1/2 w-[150px] h-auto"
            />
          </div>

          {/* Segundo quadrado - Feito para Crianças */}
          <div className="relative mt-16 mb-16">
            <div className="w-[252px] h-[319px] bg-[#884a2e] rounded-[20px] flex flex-col justify-start pl-6 pt-20 pr-4">
              <div className="text-[24px] font-nunito font-bold text-white text-left mb-4">
                <div>Feito para</div>
                <div>Crianças</div>
              </div>
              
              <p className="text-[14px] font-nunito font-normal text-white text-left leading-tight">
                Um jogo pensado para você se divertir e aprender ao mesmo tempo. Tudo é colorido, seguro e cheio de aventuras!
              </p>
            </div>
            
            <img 
              src={Menina} 
              alt="Menina" 
              className="absolute -top-22 left-1/2 transform -translate-x-1/2 w-[150px] h-auto"
            />
          </div>

          {/* Terceiro quadrado - Performance Personalizada */}
          <div className="relative mt-16 mb-12">
            <div className="w-[252px] h-[319px] bg-[#884a2e] rounded-[20px] flex flex-col justify-start pl-6 pt-20 pr-4">
              <div className="text-[24px] font-nunito font-bold text-white text-left mb-4">
                <div>Performance</div>
                <div>Personalizada</div>
              </div>
              
              <p className="text-[14px] font-nunito font-normal text-white text-left leading-tight">
                Corra no seu ritmo, desbloqueie poderes únicos e veja seu progresso crescer! Aqui, cada jogada é feita sob medida para você.
              </p>
            </div>
            
            <img 
              src={Joystick} 
              alt="Joystick" 
              className="absolute -top-22 left-1/2 transform -translate-x-1/2 w-[150px] h-auto"
            />
          </div>

          {/* Texto final com call-to-action - ajustado para mais pra cima */}
          <div className="flex flex-col items-center mt-4 mb-8">
            <p className="text-[20px] font-nunito font-bold text-white text-center leading-tight mb-2">
              Para ver mais e jogar
            </p>
            <p className="text-[20px] font-nunito font-bold text-[#2AA9A2] text-center leading-tight">
              Clique Aqui!
            </p>
          </div>

          {/* Container para a imagem final avec o quadrado personalizado atrás */}
          <div className="relative w-full flex justify-center items-center mb-8">
            {/* Quadrado personalizado atrás da imagem - POSIÇÃO AJUSTADA */}
            <div 
              className="absolute w-[305px] h-[325px] bg-[#F5F0E1] z-0"
              style={{
                borderTopLeftRadius: '90px',
                borderTopRightRadius: '35px',
                borderBottomLeftRadius: '35px',
                borderBottomRightRadius: '130px',
                transform: 'translate(15px, 15px)'
              }}
            ></div>
            
            {/* Imagem final (sobreposta ao quadrado) */}
            <img 
              src={UltimaImg} 
              alt="Imagem final" 
              className="w-full max-w-[300px] h-auto relative z-10"
            />
          </div>

          {/* NOVO TEXTO ADICIONADO ABAIXO DA IMAGEM FINAL - FORMATADO COMO NA IMAGEM */}
          <div className="w-[320px] px-4 mt-4 mb-8">
            <p className="text-[16px] font-nunito font-bold text-[#F5F0E1] text-center leading-tight whitespace-pre-line">
              {`Ideal para crianças de 6 a 10 anos, o jogo ensina de forma lúdica a guardar, planejar e conquistar sonhos, transformando educação financeira em uma aventura cheia de desafios e recompensas. Corra com Coiny, evite armadilhas do consumo e mostre que você é um verdadeiro economista mirim!`}
            </p>
          </div>

          {/* BOTÃO DE DOWNLOAD ADICIONADO NO FINAL - NA COR DOS QUADRADOS */}
          <div className="flex justify-center w-full mt-8 mb-8">
            <button className="bg-[#884a2e] w-[316px] h-[60px] rounded-[10px] flex items-center justify-center gap-3 shadow-lg">
              <img src={DownloadIcon} alt="Download" className="w-[18px] h-[19px]" />
              <span className="text-white font-nunito font-bold text-[16px]">Download do App CoinRunning</span>
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        {/* Primeira seção com imagem de fundo */}
        <div
          className="bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${JogoDesktop})` }}
        >
          {/* Logo */}
          <div className="absolute top-[21px] left-1/2 transform -translate-x-1/2">
            <img
              src={Logo2}
              alt="Logo"
              className="w-[123px] h-[30px] cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Menu desktop */}
          <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
            <div
              className="flex flex-col gap-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            </div>
          </div>

          {menuOpen && (
            <div
              className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3"
            >
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/passos')}>
                <img src={Passo} alt="Passo" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Passo a passo</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')}>
                <img src={Informacao} alt="Produtos" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Produtos</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}>
                <img src={Grupo} alt="Equipe" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Equipe</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')}>
                <img src={ArtigoIcon} alt="Artigo" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Artigo</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/jogo')}>
                <img src={Controle} alt="Jogo" className="w-[15px] h-[15px]" />
                <span className="text-white text-sm">Jogo</span>
              </div>
            </div>
          )}

          {/* Conteúdo desktop */}
          <div className="pt-48 pb-10 px-6">
            <div className="w-[672px] h-[88px] mx-auto mb-8">
              <h2 className="text-[32px] font-nunito font-extrabold text-[#F5F0E1] text-center leading-tight">
                Corra, Colete e Aprenda: Seu Futuro Começa com Cada Moedinha!
              </h2>
            </div>

            <div className="w-[760px] h-[108px] mx-auto mb-8">
              <p className="text-[20px] font-nunito font-bold text-[#F5F0E1] text-center leading-tight">
                Coin Running é um divertido jogo de corrida infinita estrelado pela criança-jogadora,
                que controla seu próprio porquinho-cofre! Enquanto avança por cenários coloridos,
                coleta moedas, evita gastos por impulso e aprende a economizar dinheiro.
              </p>
            </div>

            <div className="flex justify-center mt-12">
              <button
                className="bg-[#72B8C3] text-white w-[295px] h-[62px] rounded-[30px] font-palanquin-dark font-bold text-[24px]"
              >
                JOGAR
              </button>
            </div>
          </div>
        </div>

        {/* Segunda seção com fundo azul (após a imagem) */}
        <div className="w-full bg-[#72B8C3] flex flex-col items-center py-16">
          <div className="w-full max-w-6xl px-6">
            {/* Quadrado cinza maior (270x1069) */}
            <div className="w-[555px] h-[369px] bg-[#D9D9D9] rounded-lg shadow-md mb-16 flex items-center justify-center mx-auto">
              {/* Ícone de play do YouTube */}
              <div className="w-[70px] h-[70px] bg-[#6b6b6b] rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
            {/* Texto "Cada Corrida..." com tamanho 32 e margem aumentada abaixo */}
            <div className="w-full px-4 mb-24">
              <h3 className="text-[32px] font-nunito font-extrabold text-[#F5F0E1] text-center leading-tight">
                Cada Corrida Ensina, Cada Moeda Educa e Cada Escolha Constrói o Futuro
              </h3>
            </div>

            {/* Três quadrados lado a lado com margem superior aumentada */}
            <div className="flex justify-center gap-8 mb-24 mt-12">
              {/* Primeiro quadrado - Educação Financeira */}
              <div className="relative">
                <div className="w-[252px] h-[319px] bg-[#884a2e] rounded-[20px] flex flex-col justify-start pl-6 pt-20 pr-4">
                  <div className="text-[24px] font-nunito font-bold text-white text-left mb-4">
                    <div>Educação</div>
                    <div>Financeira</div>
                  </div>
                  
                  <p className="text-[14px] font-nunito font-normal text-white text-left leading-tight">
                    Aprenda a cuidar das suas moedinhas e planejar seus sonhos desde pequeno! Economizar pode ser divertido!
                  </p>
                </div>
                
                <img 
                  src={Moedas} 
                  alt="Moedas" 
                  className="absolute -top-8 -ml-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
                />
              </div>

              {/* Segundo quadrado - Feito para Crianças */}
              <div className="relative">
                <div className="w-[252px] h-[319px] bg-[#884a2e] rounded-[20px] flex flex-col justify-start pl-6 pt-20 pr-4">
                  <div className="text-[24px] font-nunito font-bold text-white text-left mb-4">
                    <div>Feito para</div>
                    <div>Crianças</div>
                  </div>
                  
                  <p className="text-[14px] font-nunito font-normal text-white text-left leading-tight">
                    Um jogo pensado para você se divertir e aprender ao mesmo tempo. Tudo é colorido, seguro e cheio de aventuras!
                  </p>
                </div>
                
                <img 
                  src={Menina} 
                  alt="Menina" 
                  className="absolute -top-10 -ml-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
                />
              </div>

              {/* Terceiro quadrado - Performance Personalizada */}
              <div className="relative">
                <div className="w-[252px] h-[319px] bg-[#884a2e] rounded-[20px] flex flex-col justify-start pl-6 pt-20 pr-4">
                  <div className="text-[24px] font-nunito font-bold text-white text-left mb-4">
                    <div>Performance</div>
                    <div>Personalizada</div>
                  </div>
                  
                  <p className="text-[14px] font-nunito font-normal text-white text-left leading-tight">
                    Corra no seu ritmo, desbloqueie poderes únicos e veja seu progresso crescer! Aqui, cada jogada é feita sob medida para você.
                  </p>
                </div>
                
                <img 
                  src={Joystick} 
                  alt="Joystick" 
                  className="absolute -top-10 -ml-10 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
                />
              </div>
            </div>

            {/* Parte inferior - Imagem à esquerda, texto e botão à direita */}
            <div className="flex items-start gap-16 mt-16">
              {/* Container para a imagem final com o quadrado personalizado atrás (lado esquerdo) */}
              <div className="relative flex-shrink-0">
                <div className="absolute w-[305px] h-[305px] bg-[#F5F0E1] z-0" style={{borderTopLeftRadius: '90px', borderTopRightRadius: '35px', borderBottomLeftRadius: '35px', borderBottomRightRadius: '130px', transform: 'translate(20px, 20px)'}}></div>
                
                {/* Imagem final maior (sobreposta ao quadrado) */}
                <img 
                  src={UltimaImg} 
                  alt="Imagem final" 
                  className="w-75 h-75 relative z-10"
                />
              </div>

              {/* Conteúdo do lado direito - mais afastado */}
              <div className="flex flex-col ml-12">
                {/* Texto "Para ver mais e jogar / Clique Aqui!" */}
                <div className="flex flex-col items-start mb-10">
                  <p className="text-[24px] font-nunito font-bold text-white leading-tight mb-2">
                    Para ver mais e jogar
                  </p>
                  <p className="text-[24px] font-nunito font-bold text-[#2AA9A2] leading-tight">
                    Clique Aqui!
                  </p>
                </div>

                {/* Texto final */}
                <div className="w-[450px] mb-10">
                  <p className="text-[18px] font-nunito font-bold text-[#F5F0E1] leading-tight">
                    Ideal para crianças de 6 a 10 anos, o jogo ensina de forma lúdica a guardar, planejar e conquistar sonhos, transformando educação financeira em uma aventura cheia de desafios e recompensas. Corra com Coiny, evite armadilhas do consumo e mostre que você é um verdadeiro economista mirim!
                  </p>
                </div>

                {/* Botão de Download */}
                <div className="flex justify-start">
                  <button className="bg-[#884a2e] w-[316px] h-[60px] rounded-[10px] flex items-center justify-center gap-3 shadow-lg">
                    <img src={DownloadIcon} alt="Download" className="w-[18px] h-[19px]" />
                    <span className="text-white font-nunito font-bold text-[16px]">Download do App CoinRunning</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jogo;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo2.png';
import Imagem1 from '../assets/img1.png';
import Imagem2 from '../assets/img2.png';
import Imagem3 from '../assets/img3.png';
import Imagem4 from '../assets/img4.png';
import PassoIcon from '../assets/passos.png';
import Informacao from '../assets/informacao.png';
import Grupo from  '../assets/grupo.png';
import ArtigoIcon from '../assets/artigo.png';
import Controle from '../assets/controlejogo.png';
import Logo2 from '../assets/logodomenu.png';
import DarkModeIcon from '../assets/dark-mode.png';
import LightModeIcon from '../assets/light-mode.png'; 

const Passos = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verificar se há preferência salva no localStorage ao carregar a página
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    
    // Aplicar a classe ao body para o tema escuro
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Função para alternar o modo escuro
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState.toString());
    
    // Aplicar/remover a classe do body
    if (newDarkModeState) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={`min-h-screen w-full px-4 pt-6 relative ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
  
      {/* Mobile */}
      <div className="md:hidden">
        <div className="absolute top-[21px] left-[25px]">
          <img src={Logo} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')} />
        </div>
      
        <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
          <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} >
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
          </div>

          {/* Botão Dark/Light Mode - CIRCULO REMOVIDO AQUI */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 transition-colors"
          >
            <img 
              src={isDarkMode ? LightModeIcon : DarkModeIcon} 
              alt={isDarkMode ? "Light Mode" : "Dark Mode"} 
              className="w-6 h-6" 
            />
          </button>
        </div>

        {menuOpen && (
          <div 
            className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3"
            style={{ width: '160px', height: '200px' }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={PassoIcon} alt="Passo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Passo a passo</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')} >
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

            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Controle} alt="Jogo" className="w-[15px] h-[15px]" onClick={() => navigate('/jogo')}/>
              <span className="text-white text-sm">Jogo</span>
            </div>
          </div>
        )}

        <div className="pt-28 pb-10 px-6">
          <div className="mb-20">
            <div className="relative flex justify-center mb-8">
              <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
              <img src={Imagem1} alt="Passo 1" className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" />
            </div>

            <div className="text-center mx-4 mt-8">
              <em className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 1</em>
              <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-base mb-3`}>Ligue seu porquinho!</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-[12px] font-normal max-w-[280px] mx-auto`}>
                Encontre o botão lateral e pressione para ligar o dispositivo. Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="relative flex justify-center mb-8">
              <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
              <img src={Imagem2} alt="Passo 2" className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" />
            </div>

            <div className="text-center mx-4 mt-8">
              <em className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 2</em>
              <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-base mb-3`}>Conecte e cadastra-se</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-[12px] font-normal max-w-[280px] mx-auto`}>
                Ative o Bluetooth do seu celular, conecte ao porquinho e faça o cadastro no aplicativo. Em poucos toques, você já pode começar a usar.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="relative flex justify-center mb-8">
              <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
              <img src={Imagem3} alt="Passo 3" className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" />
            </div>

            <div className="text-center mx-4 mt-8">
              <em className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 3</em>
              <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-base mb-3`}>Deposite seu dinheiro</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-[12px] font-normal max-w-[280px] mx-auto`}>
                Coloque o dinheiro na abertura superior do porquinho. Ele vai guardar tudinho com segurança!
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="relative flex justify-center mb-8">
              <div className="absolute w-[200px] h-[200px] bg-[#EC5C8F] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] left-[43px] top-[10px]"></div>
              <img src={Imagem4} alt="Passo 4" className="w-[200px] h-[200px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[20px] relative z-10 mt-[-15px] ml-[25px]" />
            </div>
            <div className="text-center mx-4 mt-8">
              <em className="text-[#EC5C8F] text-lg mb-3 font-bold">PASSO 4</em>
              <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-base mb-3`}>Quer retirar o dinheiro?</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-[12px] font-normal max-w-[280px] mx-auto`}>
                É só abrir o compartimento que fica na partede baixo. Mas lembre-se: economizar também é um superpoder!
                </p>
            </div>
          </div>

          <div className="mt-12 mb-8 flex justify-center">
            <div className="w-[320px] h-[180px] bg-gray-400 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-gray-600 ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/* Desktop */}
      <div className="hidden md:block min-h-screen">
       
        <div className="fixed left-0 top-0 w-[350px] h-full bg-[#1A2E45] z-10 flex flex-col items-center pt-12">
          <img src={Logo2} alt="Logo" className="w-48 h-12 mb-8 cursor-pointer" onClick={() => navigate('/')}/>

          <div className="w-80 h-px bg-white opacity-30 mb-8"></div>
          
          <div className="w-full mt-12 px-8 space-y-8">
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors">
              <img src={PassoIcon} alt="Passo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Passo a passo</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/produtos')}>
              <img src={Informacao} alt="Produtos" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Produtos</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/equipe')}>
              <img src={Grupo} alt="Equipe" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Equipe</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/artigo')}>
              <img src={ArtigoIcon} alt="Artigo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Artigo</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/jogo')}>
              <img src={Controle} alt="Jogo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Jogo</span>
            </div>

          </div>
        </div>
        
        {/* Botão Dark Mode na parte superior direita - NOVA POSIÇÃO */}
        <div className="fixed top-6 right-6 z-50">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 transition-colors"
          >
            <img 
              src={isDarkMode ? LightModeIcon : DarkModeIcon} 
              alt={isDarkMode ? "Light Mode" : "Dark Mode"} 
              className="w-8 h-8" 
            />
          </button>
        </div>
        
        <div className="ml-[380px] mr-10 py-10">
          <div className="space-y-40 max-w-6xl mx-auto">

            {/* PASSOS Desktop ajustados */}
            <div className="flex gap-16 items-center">
              <div className="relative flex-shrink-0">
                <div className="absolute w-[400px] h-[400px] bg-[#EC5C8F] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] left-6 top-4"></div>
                <img src={Imagem1} alt="Passo 1" className="w-[400px] h-[400px] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] relative z-10" />
              </div>
              <div className="max-w-md text-center ml-54"> {/* Passo 1 mais pra direita */}
                <i className="text-[#EC5C8F] text-3xl font-extrabold mb-6">PASSO 1</i>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl mb-6`}>Ligue seu porquinho!</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-xl leading-relaxed`}>
                  Encontre o botão lateral e pressione para ligar o dispositivo. Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
                </p>
              </div>
            </div>

            <div className="flex gap-16 items-center flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute w-[400px] h-[400px] bg-[#EC5C8F] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] left-6 top-4"></div>
                <img src={Imagem2} alt="Passo 2" className="w-[400px] h-[400px] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] relative z-10" />
              </div>
              <div className="max-w-md text-center mr-54"> {/* Passo 2 mais pra esquerda */}
                <i className="text-[#EC5C8F] text-3xl font-extrabold mb-6">PASSO 2</i>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl mb-6`}>Conecte e cadastra-se</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-xl leading-relaxed`}>
                  Ative o Bluetooth do seu celular, conecte ao porquinho e faça o cadastro no aplicativo. Em poucos toques, você já pode começar a usar.
                </p>
              </div>
            </div>

            <div className="flex gap-16 items-center">
              <div className="relative flex-shrink-0">
                <div className="absolute w-[400px] h-[400px] bg-[#EC5C8F] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] left-6 top-4"></div>
                <img src={Imagem3} alt="Passo 3" className="w-[400px] h-[400px] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] relative z-10" />
              </div>
              <div className="max-w-md text-center ml-54"> {/* Passo 3 mais pra direita */}
                <i className="text-[#EC5C8F] text-3xl font-extrabold mb-6">PASSO 3</i>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl mb-6`}>Deposite seu dinheiro</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-xl leading-relaxed`}>
                  Coloque o dinheiro na abertura superior do porquinho. Ele vai guardar tudinho com segurança!
                </p>
              </div>
            </div>

            <div className="flex gap-16 items-center flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute w-[400px] h-[400px] bg-[#EC5C8F] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] left-6 top-4"></div>
                <img src={Imagem4} alt="Passo 4" className="w-[400px] h-[400px] rounded-tl-[30px] rounded-tr-[70px] rounded-br-[30px] rounded-bl-[30px] relative z-10" />
              </div>
              <div className="max-w-md text-center mr-54"> {/* Passo 4 mais pra esquerda */}
                <i className="text-[#EC5C8F] text-3xl font-extrabold mb-6">PASSO 4</i>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl mb-6`}>Quer retirar o dinheiro?</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-xl leading-relaxed`}>
                  É só abrir o compartimento que fica na parte de baixo. Mas lembre-se: economizar também é um superpoder!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Estilos globais para o modo escuro */}
      <style jsx global>{`
        body.dark-mode {
          background-color: #1a202c;
          color: #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default Passos;
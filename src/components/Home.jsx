import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo2.png';
import Propaganda from '../assets/Propaganda1.png';
import Imagem2 from '../assets/moneybox.png';
import Money from '../assets/money.png';
import Carteira from '../assets/carteira.png';
import Certificado from '../assets/kidsafe.png';
import Propaganda2 from '../assets/PROPAGANDA2.png';
import DarkModeIcon from '../assets/dark-mode.png';
import LightModeIcon from '../assets/light-mode.png';

const Home = () => {
  const navigate = useNavigate();
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
    <div className={`relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#F5F0E1]'} w-full min-h-screen transition-colors duration-300`}>
      
      {/* MOBILE */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-6 pt-5">
          <img src={Logo} alt="Logo" className="w-32 h-8" />
          <div className="flex items-center gap-3">
            {/* Botão Dark/Light Mode - CIRCULO REMOVIDO AQUI */}
            <button onClick={toggleDarkMode} className="p-2 transition-colors">
              <img src={isDarkMode ? LightModeIcon : DarkModeIcon} alt={isDarkMode ? "Light Mode" : "Dark Mode"} className="w-6 h-6" />
            </button>
           
            <button onClick={() => navigate('/jogo')} className="px-4 py-2 bg-[#ec5c8f] rounded-2xl text-[#f5f0e1] text-sm font-bold">
              JOGUE AGORA!
            </button>
          </div>
        </div>

        <div className="mt-6 px-4 relative">
          <img src={Propaganda} alt="Propaganda" className="w-full h-auto rounded-xl" />
          <button onClick={() => navigate('/passos')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-14 bg-[#f5c2c2] rounded-full text-white font-bold text-lg">
            CONHEÇA AGORA!
          </button>
        </div>

        <div className="mt-12 px-6 text-center">
          <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl font-bold mb-4`}>Diferencial do Projeto</h2>
          <p className={isDarkMode ? 'text-gray-300' : 'text-[#1a2e45] text-sm'}>
            Une design lúdico com funcionalidades educativas, como desafios semanais and feedbacks personalizados, 
            promovendo o engajamento contínuo da criança no aprendizado financeiro de maneira prática e atrativa.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <img src={Imagem2} alt="Imagem 2" className="w-52 h-52" />
        </div>

        <div className={`mt-12 ${isDarkMode ? 'bg-gray-800' : 'bg-[#f4d9d1]'} rounded-xl p-6 text-center`}>
          <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl font-bold mb-4`}>Público alvo</h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-sm mb-6 max-w-xs mx-auto`}>
            Crianças entre 5 e 10 anos em fase de alfabetização financeira, além de pais e responsáveis que desejam introduzir noções de valor do dinheiro, metas and responsabilidade financeira de forma acessível, segura e divertida.
          </p>
          <img src={Money} alt="Money" className="w-52 h-52 mx-auto" />
        </div>

        {/* Objetivo - Mobile */}
        <div className="mt-12 px-6 text-center">
          <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl font-bold mb-4`}>Objetivo</h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-sm max-w-xs mx-auto`}>
            Estimular hábitos financeiros saudáveis desde a infância por meio de um cofre inteligente que utiliza recursos tecnológicos para incentivaro planejamento, a economia e o consumo consciente.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <img src={Carteira} alt="Carteira" className="w-52 h-52" />
        </div>

        <div className="mt-12 flex justify-center">
          <img src={Logo} alt="Logo" className="w-32 h-8" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 px-4">
          <div className="w-40 h-40 bg-[#f5c2c2] rounded-xl flex items-center justify-center text-center p-2">
            <span className="text-[#f5f0e1] text-base font-bold">Ambiente seguro</span>
          </div>
          <div className="w-40 h-40 bg-[#EC5C8F] rounded-xl flex items-center justify-center text-center p-2">
            <span className="text-[#f5f0e1] text-base font-bold">Conteúdo personalizado</span>
          </div>
          <div className="w-40 h-40 bg-[#f5c2c2] rounded-xl flex items-center justify-center text-center p-2">
            <span className="text-[#f5f0e1] text-base font-bold">Interação 100% gratuita</span>
          </div>
          <div className="w-40 h-40 bg-[#EC5C8F] rounded-xl flex items-center justify-center text-center p-2">
            <span className="text-[#f5f0e1] text-base font-bold">Proximidade familiar</span>
          </div>
        </div>

        <div className={`mt-12 ${isDarkMode ? 'bg-gray-800' : 'bg-[#f4d9d1]'} rounded-t-xl w-full p-6 pb-36 text-center`}>
          <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-2xl font-bold mb-4`}>Tudo bem, é<br />SmartCoinc!</h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-lg mb-6`}>As crianças amam. As famílias confiam.</p>

          <div className={`mt-6 mx-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-4 text-center`}>
            <img src={Certificado} alt="Certificado" className="w-40 h-14 mx-auto mb-3" />
            <p className={isDarkMode ? 'text-gray-300' : 'text-[#1a2e45] text-sm'}>
              O programa kidSAFE Seal certifica a segurança de sites, aplicativos e produtos interativos voltados para crianças, garantindo que atendam a padrões independentes de segurança infantil.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-6">
            <button onClick={() => navigate('/artigo')} className="w-full max-w-xs h-16 bg-[#EC5C8F] rounded-2xl text-white font-bold text-lg" >
              NOSSOS ARTIGOS
            </button>
            <button onClick={() => navigate('/equipe')} className={`w-full max-w-xs h-16 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-[#1CB0F6] border border-[#1CB0F6]'} rounded-2xl font-bold text-lg border`}>
              NOSSA EQUIPE
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block min-h-screen">
        
        {/* Navbar */}
        <div className={`flex justify-between items-center px-12 py-6 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
          <img src={Logo} alt="Logo" className="w-40 h-10 cursor-pointer" />
          
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              <span className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold`}>Início</span>
              <span className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold`} onClick={() => navigate('/produtos')}>Produtos</span>
              <span className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold`} onClick={() => navigate('/artigo')}>Artigos</span>
              <span className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} cursor-pointer hover:text-[#EC5C8F] transition-colors font-semibold`} onClick={() => navigate('/equipe')}>Equipe</span>
            </nav>
            
            <div className="flex items-center gap-4">
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
              
              <button onClick={() => navigate('/jogo')} className="px-6 py-3 bg-[#ec5c8f] rounded-2xl text-[#f5f0e1] font-bold hover:bg-[#D94A7C] transition-colors">
                JOGUE AGORA!
              </button>
            </div>
          </div>
        </div>

        {/* Propaganda */}
        <div className="flex justify-center mt-8 relative">
          <div className="relative" style={{width: '90%', maxWidth: '1200px', height: '450px'}}>
            <img src={Propaganda2} alt="Propaganda2" className="w-full h-full object-contain rounded-xl" />
            <button onClick={() => navigate('/passos')} className="absolute bg-[#F5C2C2] rounded-[33px] px-12 py-4" style={{borderRadius: '33px', right: '98px', bottom: '70px'}}>
              <span className="text-white font-bold text-lg">CONHEÇA AGORA!</span>
            </button>
          </div>
        </div>

        {/* Diferencial */}
        <div className={`py-20 px-12 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} text-4xl font-bold text-center mb-16`}>
              Diferencial do Projeto
            </h2>
            
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1A2E45]'} text-lg leading-relaxed`}>
                  Une design lúdico com funcionalidades educativas, como desafios semanais and feedbacks personalizados, 
                  promovendo o engajamento contínuo da criança no aprendizado financeiro de maneira prática and atrativa.
                </p>
              </div>
              <div className="flex justify-center">
                <img src={Imagem2} alt="Imagem 2" className="w-72 h-72" />
              </div>
            </div>
          </div>
        </div>

        {/* Público Alvo */}
        <div className={`py-20 px-12 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} text-4xl font-bold text-center mb-16`}>
              Público alvo
            </h2>
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="flex justify-center mt-16"> 
                <img src={Money} alt="Money" className="w-72 h-72" />
              </div>
              <div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1A2E45]'} text-lg leading-relaxed`}>
                  Crianças entre 5 and 10 anos em fase de alfabetização financeira, além de pais e responsáveis que desejam introduzir noções de valor do dinheiro, metas and responsabilidade financeira de forma acessível, segura e divertida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`py-20 px-12 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} text-4xl font-bold text-center mb-16`}>
              Objetivo
            </h2>
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1A2E45]'} text-lg leading-relaxed`}>
                  Estimular hábitos financeiros saudáveis desde a infância por meio de um cofre inteligente que utiliza recursos tecnológicos para incentivar o planejamento, a economia e o consumo consciente.
                </p>
              </div>
              <div className="flex justify-center">
                <img src={Carteira} alt="Carteira" className="w-72 h-72" />
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#f4d9d1]'} rounded-t-3xl py-12 px-8 mx-auto max-w-4xl transition-colors duration-300`}> 
          <div className="text-center">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1A2E45]'} text-3xl font-bold mb-4`}> 
              Tudo bem, é<br />SmartCoinc!
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1A2E45]'} text-xl mb-6`}> 
              As crianças amam. As famílias confiam.
            </p>

            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-6 max-w-md mx-auto mb-6`}>
              <img src={Certificado} alt="Certificado" className="w-40 h-14 mx-auto mb-3" />
              <p className={isDarkMode ? 'text-gray-300' : 'text-[#1A2E45] text-sm'}>
                O programa kidSAFE Seal certifica a segurança de sites, aplicativos e produtos interativos voltados para crianças, garantindo que atendam a padrões independentes de segurança infantil.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button onClick={() => navigate('/artigo')} className="px-8 py-2 bg-[#EC5C8F] rounded-2xl text-white font-bold text-lg hover:bg-[#D94A7C] transition-colors" >
                NOSSOS ARTIGOS
              </button>
              <button onClick={() => navigate('/equipe')} className={`px-8 py-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-[#1CB0F6] border-2 border-[#1CB0F6]'} rounded-2xl font-bold text-lg hover:${isDarkMode ? 'bg-gray-600' : 'bg-blue-50'} transition-colors`}>
                NOSSA EQUIPE
              </button>
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

export default Home;
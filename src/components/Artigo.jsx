import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logodomenu.png';
import Passo from '../assets/passos.png';
import Informacao from '../assets/informacao.png';
import Grupo from '../assets/grupo.png';
import ArtigoIcon from '../assets/artigo.png';
import Controle from '../assets/controlejogo.png';
import Logo1 from '../assets/Logo.png';
import DarkModeIcon from '../assets/dark-mode.png';
import LightModeIcon from '../assets/light-mode.png';

const Artigo = () => {
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
      document.body.style.backgroundColor = '#1a202c';
      document.body.style.color = '#e2e8f0';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
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
      document.body.style.backgroundColor = '#1a202c';
      document.body.style.color = '#e2e8f0';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  };

  return (
    <div className={`min-h-screen w-full px-4 pt-6 relative ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
     
      <div className="md:hidden">
        {/* Código mobile */}
        <div className="absolute top-[21px] left-[25px]">
          <img src={Logo1} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')} />
        </div>
      
        <div className="absolute top-[21px] right-[25px] flex items-center gap-3 z-50">
          <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} >
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
          </div>

          {/* Botão Dark/Light Mode */}
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

        <div className="pt-32 pb-10 px-6">
          <h1 className={`text-2xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-17 whitespace-nowrap`}>ARTIGOS CIENTÍFICOS</h1>
          
          <div className="space-y-32">
            <div className="relative mx-auto" style={{ width: '257px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2012</span>
              </div>
              
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center pt-8 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center leading-tight mt-2`}>A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA INFANTIL</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 w-full`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm mt-2`}>
                  <li>A educação financeira na infância desenvolve responsabilidade e consciência no uso o dinheiro ao longo da vida.</li>
                  <li>Família e escola são os principais agentes no processo de ensino e representam as hábitas financeiras saudáveis desde cedo.</li>
                </ul>
              </div>
            </div>

            <div className="relative mx-auto" style={{ width: '257px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2016</span>
              </div>
              
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center pt-8 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center leading-tight mt-2`}>EDUCAÇÃO FINANCEIRA COMO PRÁTICA PEDAGÓGICA</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 w-full`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm mt-2`}>
                  <li>A educação financeira nas escolas forma cidadãos mais conscientes e preparados para lidar com o dinheiro em diferentes contextos da vida.</li>
                  <li>O professor tem um papel fundamental na aplicação de métodos financeiros no ambiente escolar, contribuindo para a formação integral dos estudantes.</li>
                </ul>
              </div>
            </div>

            <div className="relative mx-auto" style={{ width: '257px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2021</span>
              </div>
            
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center pt-8 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center leading-tight mt-2`}>EDUCAÇÃO FINANCEIRA INFANTIL</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 w-full`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm mt-2`}>
                  <li>A educação financeira infantil é importante para orientar as crianças a gerenciar dinheiro de forma correta, desenvolvendo hábitos financeiros desde cedo.</li>
                  <li>O artigo explica os desafios de implementar esse ensino nas escolas e as estratégias para torná-lo mais eficaz e acessível às crianças.</li>
                </ul>
              </div>
            </div>

            <div className="relative mx-auto" style={{ width: '257px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2023</span>
              </div>
      
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center pt-10 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center leading-tight mt-4`}>A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 w-full`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm mt-4`}>
                  <li>O artigo destaca a importância da educação financeira para o desenvolvimento de habilidades que ajudam a tomar decisões conscientes e com responsabilidade.</li>
                  <li>Ele discute como a educação financeira contribui para uma sociedade mais informada e capaz de enfrentar desafios económicos pessoais e coletivos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`hidden md:block min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'}`}>
        <div className="fixed left-0 top-0 w-[350px] h-full bg-[#1A2E45] z-10 flex flex-col items-center pt-12">
          <img src={Logo} alt="Logo" className="w-48 h-12 mb-8 cursor-pointer" onClick={() => navigate('/')}/>

          <div className="w-80 h-px bg-white opacity-30 mb-8"></div>
          
          <div className="w-full mt-12 px-8 space-y-8">
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/passos')}>
              <img src={Passo} alt="Passo" className="w-6 h-6" />
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

            <div className="flex items-center gap-4 cursor-pointer py-3 bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/artigo')}>
              <img src={ArtigoIcon} alt="Artigo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Artigo</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/jogo')}>
              <img src={Controle} alt="Jogo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Jogo</span>
            </div>
          </div>
        </div>

        {/* Botão Dark Mode na parte superior direita */}
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
          <h1 className={`text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-24 mt-12`}>ARTIGOS CIENTÍFICOS</h1>
          
          <div className="flex justify-center gap-8 max-w-6xl mx-auto">
            <div className="relative" style={{ width: '280px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2012</span>
              </div>
              
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center`}>A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA INFANTIL</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 mx-[-1.5rem]`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm`}>
                  <li>A educação financeira na infância desenvolve responsabilidade and consciência no uso do dinheiro ao longo da vida.</li>
                  <li>Família e escola são os principais agentes no processo de ensino and representam as hábitas financeiras saudáveis desde cedo.</li>
                </ul>
              </div>
            </div>

            <div className="relative" style={{ width: '280px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2016</span>
              </div>
              
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center`}>EDUCAÇÃO FINANCEIRA COMO PRÁTICA PEDAGÓGICA</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 mx-[-1.5rem]`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm`}>
                  <li>A educação financeira nas escolas forma cidadãos mais conscientes e preparados para lidar dengan o dinheiro em diferentes contextos da vida.</li>
                  <li>O professor tem um papel fundamental na aplicação de métodos financeiros no ambiente escolar, contribuindo para a formação integral dos estudantes.</li>
                </ul>
              </div>
            </div>

            <div className="relative" style={{ width: '280px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2021</span>
              </div>
 
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center leading-tight mt-10`}>EDUCAÇÃO FINANCEIRA INFANTIL</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 mx-[-1.5rem]`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm`}>
                  <li>A educação financeira infantil é importante para orientar as crianças a gerenciar dinheiro de forma correta, desenvolvendo hábitos financeiros desde cedo.</li>
                  <li>O artigo explica os desafios de implementar esse ensino nas escolas e as estratégias para torná-lo mais eficaz e acessível às crianças.</li>
                </ul>
              </div>
            </div>

            <div className="relative" style={{ width: '280px', height: '422px' }}>
              <div className="absolute -top-[43.5px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
                   style={{ width: '84px', height: '87px', backgroundColor: '#EC5C8F', borderRadius: '50%' }}>
                <span className="text-white font-bold text-xl">2023</span>
              </div>
              
              <div className={`bg-transparent border-4 border-[#EC5C8F] rounded-[20px] p-6 h-full flex flex-col justify-center ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} mb-4 text-center leading-tight mt-9`}>A IMPORTÂNCIA DA<br />EDUCAÇÃO FINANCEIRA</h3>
                <hr className={`${isDarkMode ? 'border-gray-400' : 'border-black'} border-1 mb-4 mx-[-1.5rem]`} />
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} space-y-2 pl-4 text-sm`}>
                  <li>O artigo destaca a importância da educação financeira para o desenvolvimento de habilidades que ajudam a tomar decisões conscientes e com responsabilidade.</li>
                  <li>Ele discute como a educação financeira contribui para uma sociedade more informada e capaz de enfrentar desafios económicos pessoais e coletivos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artigo;
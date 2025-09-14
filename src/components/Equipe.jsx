import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo2.png';
import passos from '../assets/passos.png';
import informacao from '../assets/informacao.png';
import grupo from '../assets/grupo.png';
import artigo from '../assets/artigo.png';
import controlejogo from '../assets/controlejogo.png';
import alex from '../assets/alex.png';
import duda from '../assets/duda.png';
import gi from '../assets/gi.png';
import lara from '../assets/lara.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import Logo2 from '../assets/logodomenu.png';
import DarkModeIcon from '../assets/dark-mode.png';
import LightModeIcon from '../assets/light-mode.png';

const Equipe = () => {
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

  // Dados dos membros da equipe com links de redes sociais
  const membros = [
    { 
      img: alex, 
      nome: 'Alexandre\nHenrique', 
      cargo: 'líder de design',
      linkedin: 'https://www.linkedin.com/in/alexandre-henrique-gomes-30633b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/alexandrhenriqu?igsh=MTkybTNpMDR2OHh4dw==',
      github: 'https://github.com/alexandrhenriq'
    },
    { 
      img: duda, 
      nome: 'Eduarda\nMoraes', 
      cargo: 'game developer',
      linkedin: 'https://www.linkedin.com/in/eduarda-soares-moraes-36a048339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/d_moraes08?igsh=M3lxeDFtM2YzNWsz',
      github: 'https://github.com/d-moraes'
    },
    { 
      img: gi, 
      nome: 'Giovanna\nScalzone', 
      cargo: 'líder de design',
      linkedin: 'https://www.linkedin.com/in/giovanna-scalzone-4b1664335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/sagiovannalopes?igsh=MWhibHd5ZGQwejV0aQ==',
      github: 'https://github.com/giovanna2211'
    },
    { 
      img: lara, 
      nome: 'Lara\nBeatriz', 
      cargo: 'web developer',
      linkedin: 'https://www.linkedin.com/in/lara-lima-b897932bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/laramendsxw?igsh=MWMydG1oeHpicng3ZA==',
      github: 'https://github.com/Larabeatriz08'
    },
  ];

  // Função para abrir links em nova aba
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`min-h-screen w-full relative ${isDarkMode ? 'bg-gray-900' : 'bg-[#F5F0E1]'} transition-colors duration-300`}>
      {/* MOBILE */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-6 py-5 absolute top-0 left-0 w-full z-50">
          <img src={Logo} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')} />
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
        </div>

        {menuOpen && (
          <div className="absolute top-[60px] right-6 bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3 w-[160px] h-[200px]">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/passos')} >
              <img src={passos} alt="Passos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Passo a passo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')}>
              <img src={informacao} alt="Produtos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Produtos</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')} >
              <img src={grupo} alt="Equipe" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Equipe</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')} >
              <img src={artigo} alt="Artigo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Artigo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={controlejogo} alt="Jogo" className="w-[15px] h-[15px]" onClick={() => navigate('/jogo')} />
              <span className="text-white text-sm">Jogo</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-6 gap-y-20 pt-36 px-6 justify-center">
          {membros.map((membro, i) => (
            <div key={i} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-md shadow-md relative flex flex-col items-center`} style={{ width: '174px', height: '295px' }}>
              <div className="absolute -top-[50px] rounded-full border-4 border-[#EC5C8F] shadow-lg flex justify-center items-center" style={{width: '110px', height: '110px', backgroundColor: isDarkMode ? '#374151' : '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.25)',}}>
                <img src={membro.img} alt="Membro" className="w-[75px] h-[75px] rounded-full" />
              </div>

              <div className={`text-center font-nunito font-bold mt-[60px] whitespace-pre-line ${isDarkMode ? 'text-white' : 'text-[#1a2e45]'}`} style={{ width: `${membro.nomeW}px`, height: `${membro.nomeH}px`, fontSize: '20px',}} >
                  {membro.nome}
              </div>

              <div className="text-center font-nunito font-normal mt-1 text-[#EC5C8F]" style={{ width: `${membro.cargoW}px`, height: `${membro.cargoH}px`,fontSize: '12px', }} >
                {membro.cargo}
              </div>

              <div
                className={`text-center font-nunito font-normal mt-2 ${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'}`}
                style={{ width: '155px', height: '56px', fontSize: '10px' }} >
                Estudante do Ensino Médio no UNASP-SP, uma instituição
                reconhecida pela excelência no ensino.
              </div>

              <div className="flex gap-2 mt-4">
                <img 
                  src={linkedin} 
                  alt="LinkedIn" 
                  className="w-[30px] h-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openInNewTab(membro.linkedin)}
                />
                
                <img 
                  src={github} 
                  alt="GitHub" 
                  className="w-[30px] h-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openInNewTab(membro.github)}
                />
                
                <img 
                  src={instagram} 
                  alt="Instagram" 
                  className="w-[30px] h-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openInNewTab(membro.instagram)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block min-h-screen">
        <div className="fixed left-0 top-0 w-[350px] h-full bg-[#1A2E45] z-10 flex flex-col items-center pt-12">
          <img src={Logo2} alt="Logo" className="w-48 h-12 mb-6 cursor-pointer" onClick={() => navigate('/')} />

          <div className="w-80 h-px bg-white opacity-30 mb-8"></div>

          <div className="w-full px-8 space-y-8">
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/passos')} >
              <img src={passos} alt="Passo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Passo a passo</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/produtos')} >
              <img src={informacao} alt="Produtos" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Produtos</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/equipe')} >
              <img src={grupo} alt="Equipe" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Equipe</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/artigo')}  >
              <img src={artigo} alt="Artigo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Artigo</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/jogo')}>
              <img src={controlejogo} alt="Jogo" className="w-6 h-6" />
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

        <div className="ml-[380px] py-10 px-10">
          <div className="text-left mb-32 mt-16 flex items-start">
            <div className="w-3 h-24 bg-[#EC5C8F] mr-6 rounded-none"></div>

            <div>
              <h1 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-4xl font-bold mb-4`}>
                NOSSA EQUIPE
              </h1>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-xl`}>
                Conheça os membros de nossa equipe
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            {membros.map((membro, i) => (
              <div key={i} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-6 flex flex-col items-center relative`} style={{ width: '250px', height: '437px', flexShrink: 0, }} >
             
                <div className="absolute -top-16 rounded-full border-6 border-[#EC5C8F] overflow-hidden flex justify-center items-center" style={{ width: '170px', height: '170px', backgroundColor: isDarkMode ? '#374151' : '#ffffff' }}>
                
                  <img src={membro.img} alt="Membro" className="w-[130px] h-[130px] rounded-full object-cover" />
                </div>

                <div className="mt-28 text-center flex flex-col justify-between h-full">
                  <div>
                    <h2 className={`${isDarkMode ? 'text-white' : 'text-[#1a2e45]'} text-xl font-bold mb-3 whitespace-pre-line`}>
                      {membro.nome}
                    </h2>
                    <p className="text-[#EC5C8F] text-base mb-6">
                      {membro.cargo}
                    </p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#1a2e45]'} text-sm leading-relaxed px-2`}>
                      Estudante do Ensino Médio no UNASP-SP, uma instituição
                      reconhecida pela excelência no ensino.
                    </p>
                  </div>

                  <div className="flex gap-3 mt-8 justify-center">
                    <img 
                      src={linkedin} 
                      alt="LinkedIn" 
                      className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" 
                      onClick={() => openInNewTab(membro.linkedin)}
                    />
                   
                    <img 
                      src={github} 
                      alt="GitHub" 
                      className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" 
                      onClick={() => openInNewTab(membro.github)}
                    />
                   
                    <img 
                      src={instagram} 
                      alt="Instagram" 
                      className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" 
                      onClick={() => openInNewTab(membro.instagram)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
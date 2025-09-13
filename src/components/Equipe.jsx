import React, { useState } from 'react';
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
import DarkMode from '../assets/dark-mode.png';

const Equipe = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const membros = [
    { img: alex, nome: 'Alexandre\nHenrique', cargo: 'líder de design' },
    { img: duda, nome: 'Eduarda\nMoraes', cargo: 'game developer' },
    { img: gi, nome: 'Giovanna\nScalzone', cargo: 'líder de design' },
    { img: lara, nome: 'Lara\nBeatriz', cargo: 'web developer' },
  ];

  return (
    <div className="bg-[#F5F0E1] min-h-screen w-full relative">
  
      <div className="md:hidden">
        <div className="flex justify-between items-center px-6 py-5 absolute top-0 left-0 w-full z-50">
          <img src={Logo} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')} />
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
              <div className="w-[25px] h-[3px] bg-[#EC5C8F]"></div>
            </div>
            <img src={DarkMode} alt="Dark Mode" className="w-[33px] h-[33px] cursor-pointer" />
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
            <div key={i} className="bg-white rounded-md shadow-md relative flex flex-col items-center" style={{ width: '174px', height: '295px' }}>
              <div className="absolute -top-[50px] rounded-full border-4 border-[#EC5C8F] shadow-lg flex justify-center items-center" style={{width: '110px', height: '110px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.25)',}}>
                <img src={membro.img} alt="Membro" className="w-[75px] h-[75px] rounded-full" />
              </div>

              <div className="text-center font-nunito font-bold mt-[60px] whitespace-pre-line" style={{ width: `${membro.nomeW}px`, height: `${membro.nomeH}px`, fontSize: '20px',}} >
                  {membro.nome}
              </div>

              <div className="text-center font-nunito font-normal mt-1 text-[#EC5C8F]" style={{ width: `${membro.cargoW}px`, height: `${membro.cargoH}px`,fontSize: '12px', }} >
                {membro.cargo}
              </div>

              <div
                className="text-center font-nunito font-normal mt-2"
                style={{ width: '155px', height: '56px', fontSize: '10px' }} >
                Estudante do Ensino Médio no UNASP-SP, uma instituição
                reconhecida pela excelência no ensino.
              </div>

              <div className="flex gap-2 mt-4">
                <img src={linkedin} alt="LinkedIn" className="w-[30px] h-[30px] cursor-pointer"/>
                
                <img src={github} alt="GitHub" className="w-[30px] h-[30px] cursor-pointer" />
                
                <img src={instagram} alt="Instagram" className="w-[30px] h-[30px] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block bg-[#F5F0E1] min-h-screen">
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

        <div className="ml-[380px] py-10 px-10">
          <div className="text-left mb-32 mt-16 flex items-start">
            <div className="w-3 h-24 bg-[#EC5C8F] mr-6 rounded-none"></div>

            <div>
              <h1 className="text-[#1a2e45] text-4xl font-bold mb-4">
                NOSSA EQUIPE
              </h1>
              <p className="text-[#1a2e45] text-xl">
                Conheça os membros da nossa equipe
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            {membros.map((membro, i) => (
              <div key={i} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center relative" style={{ width: '250px', height: '437px', flexShrink: 0, }} >
             
                <div className="absolute -top-16 rounded-full border-6 border-[#EC5C8F] overflow-hidden bg-white flex justify-center items-center" style={{ width: '170px', height: '170px', }}>
                
                  <img src={membro.img} alt="Membro" className="w-[130px] h-[130px] rounded-full object-cover" />
                </div>

                <div className="mt-28 text-center flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-[#1a2e45] text-xl font-bold mb-3 whitespace-pre-line">
                      {membro.nome}
                    </h2>
                    <p className="text-[#EC5C8F] text-base mb-6">
                      {membro.cargo}
                    </p>
                    <p className="text-[#1a2e45] text-sm leading-relaxed px-2">
                      Estudante do Ensino Médio no UNASP-SP, uma instituição
                      reconhecida pela excelência no ensino.
                    </p>
                  </div>

                  <div className="flex gap-3 mt-8 justify-center">
                    <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                   
                    <img src={github} alt="GitHub" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                   
                    <img src={instagram} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/imgporco.png';
import estrela from '../assets/estrela.png';
import esp32 from '../assets/ESP32.png';
import displaytouch from '../assets/DisplayTouch.png';
import displayoled from '../assets/DisplayOLED.png';
import mp3 from '../assets/ModuloMP3DFPlayer.png';
import altofalante from '../assets/MiniAltoFalante.png';
import cartao from '../assets/CartaodeMemoria.png';
import Logo from '../assets/Logo.png';
import passos from '../assets/passos.png';
import informacao from '../assets/informacao.png';
import grupo from '../assets/grupo.png';
import artigo from '../assets/artigo.png';
import controlejogo from '../assets/controlejogo.png';
import Logo2 from '../assets/logodomenu.png';
import DarkMode from '../assets/dark-mode.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const Produtos = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F5F0E1] min-h-screen w-full relative">
      {/* MOBILE */}
      <div className="md:hidden">
        {/* Cabeçalho Mobile */}
        <div className="absolute top-[21px] left-[25px]">
          <img
            src={Logo} alt="Logo" className="w-[123px] h-[30px] cursor-pointer" onClick={() => navigate('/')}
          />
        </div>
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

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="absolute top-[60px] right-[25px] bg-[#1a2e45] rounded-[10px] z-40 flex flex-col justify-center px-3 py-4 space-y-3" style={{ width: '160px', height: '200px' }}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/passos')}>
              <img src={passos} alt="Passos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Passo a passo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/produtos')}>
              <img src={informacao} alt="Produtos" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Produtos</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/equipe')}>
              <img src={grupo} alt="Equipe" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Equipe</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/artigo')}>
              <img src={artigo} alt="Artigo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Artigo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/jogo')}>
              <img src={controlejogo} alt="Jogo" className="w-[15px] h-[15px]" />
              <span className="text-white text-sm">Jogo</span>
            </div>
          </div>
        )}

        {/* Imagem principal Mobile */}
        <div className="relative">
          <img
            src={img1} alt="Produto" className="w-full object-cover" style={{ height: '375px' }}/>
          <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[#1a2e45] font-bold" style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
            Produto
          </h1>
        </div>

        {/* Detalhes Mobile */}
        <div className="px-6 py-4">
          <p className="text-[#1a2e45] font-semibold text-lg">R$ 500,00</p>
          <p className="text-[#1a2e45] text-base font-medium">
            Smart Coinc - Porquinho Inteligente
          </p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={estrela} alt="Estrela" className="w-4 h-4" />
            ))}
          </div>
          <p className="text-[#1a2e45] text-sm mt-2 leading-snug">
            Encontre o botão lateral e pressione para ligar o dispositivo.
            Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
          </p>
        </div>

        {/* Linha antes do grid Mobile */}
        <hr className="border-[#1a2e45] mx-6 mb-6" />

        {/* Grid de produtos Mobile */}
        <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          {[
            { img: esp32, nome: 'ESP32', preco: 'R$38,00' },
            { img: displaytouch, nome: 'Display Touch', preco: 'R$214,90' },
            { img: displayoled, nome: 'Display OLED', preco: 'R$28,10' },
            { img: mp3, nome: 'Módulo MP3 DFPlayer', preco: 'R$17,00' },
            { img: altofalante, nome: 'Mini Alto Falante', preco: 'R$29,90' },
            { img: cartao, nome: 'Cartão de Memória', preco: 'R$15,96' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 shadow-md">
                <img src={item.img} alt={item.nome} className="w-[150px] h-[150px] object-contain" />
              </div>
              <p className="font-nunito font-semibold mt-2 text-[#1a2e45]">{item.nome}</p>
              <p className="font-nunito font-bold mt-1 text-[#1a2e45]">{item.preco}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block bg-[#F5F0E1] min-h-screen">
        {/* MENU DESKTOP */}
        <div className="fixed left-0 top-0 w-[350px] h-full bg-[#1A2E45] z-10 flex flex-col items-center pt-12">
          <img src={Logo2} alt="Logo" className="w-48 h-12 mb-6 cursor-pointer" onClick={() => navigate('/')} />
          <div className="w-80 h-px bg-white opacity-30 mb-8"></div>
          <div className="w-full px-8 space-y-8">
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/passos')}>
              <img src={passos} alt="Passo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Passo a passo</span>
            </div>
            <div className="flex items-center gap-4 cursor-pointer py-3 bg-[#2a4365] rounded-lg px-4">
              <img src={informacao} alt="Produtos" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Produtos</span>
            </div>
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/equipe')}>
              <img src={grupo} alt="Equipe" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Equipe</span>
            </div>
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/artigo')}>
              <img src={artigo} alt="Artigo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Artigo</span>
            </div>
            <div className="flex items-center gap-4 cursor-pointer py-3 hover:bg-[#2a4365] rounded-lg px-4 transition-colors" onClick={() => navigate('/jogo')}>
              <img src={controlejogo} alt="Jogo" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">Jogo</span>
            </div>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="ml-[380px] py-10 px-10">
          <div className="flex gap-12 items-start">
            <div className="flex flex-col items-center">
              <img src={img1} alt="Smart Coinc" className="w-[450px] h-[450px] object-cover" />
              <div className="flex gap-4 mt-4">
                <img src={img2} alt="img2" className="w-[125px] h-[125px] object-cover shadow-md" />
                <img src={img3} alt="img3" className="w-[125px] h-[125px] object-cover shadow-md" />
                <img src={img4} alt="img4" className="w-[125px] h-[125px] object-cover shadow-md" />
              </div>
            </div>

            <div className="max-w-md">
              <h2 className="text-[#1a2e45] text-3xl font-bold mb-6">Smart Coinc - Porquinho Inteligente</h2>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={estrela} alt="Estrela" className="w-6 h-6" />
                ))}
              </div>
              <p className="text-[#1a2e45] font-semibold text-2xl mb-6">R$ 500,00</p>
              <p className="text-[#1a2e45] text-lg leading-relaxed">
                Encontre o botão lateral e pressione para ligar o dispositivo.
                Pronto, seu porquinho já está acordado e pronto para ajudar você a economizar!
              </p>
            </div>
          </div>

          {/* Linha antes do grid Desktop */}
          <hr className="border-[#1a2e45] my-12" />

          {/* GRID PRODUTOS DESKTOP */}
          <div className="mt-12">
            <div className="grid grid-cols-3 gap-8">
              {[
                { img: esp32, nome: 'ESP32', preco: 'R$38,00' },
                { img: displaytouch, nome: 'Display Touch', preco: 'R$214,90' },
                { img: displayoled, nome: 'Display OLED', preco: 'R$28,10' },
                { img: mp3, nome: 'Módulo MP3 DFPlayer', preco: 'R$17,00' },
                { img: altofalante, nome: 'Mini Alto Falante', preco: 'R$29,90' },
                { img: cartao, nome: 'Cartão de Memória', preco: 'R$15,96' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white p-6 shadow-md">
                    <img src={item.img} alt={item.nome} className="w-[180px] h-[180px] object-contain mb-4" />
                  </div>
                  <p className="font-semibold text-lg text-[#1a2e45] mt-2">{item.nome}</p>
                  <p className="font-bold text-lg text-[#1a2e45]">{item.preco}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportação corrigida - usando export default
export default Produtos;
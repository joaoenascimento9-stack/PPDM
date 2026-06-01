import React, { createContext, useState, useCallback } from 'react';

export const MusicaContext = createContext();

export function MusicaProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [musicasFavoritas, setMusicasFavoritas] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [playlists, setPlaylists] = useState([
    {
      id: 'playlist-1',
      nome: '💫 Hits do Momento',
      descricao: 'As músicas mais tocadas agora',
      musicas: ['1', '2', '3', '4', '5'],
      imagem: '🎵',
    },
    {
      id: 'playlist-2',
      nome: '🎸 Rock Clássico',
      descricao: 'Os melhores sucessos do rock',
      musicas: ['4', '8', '9'],
      imagem: '🎸',
    },
  ]);
  const [musicaEmReproducao, setMusicaEmReproducao] = useState(null);

  const adicionarFavorito = useCallback((musicaId) => {
    setMusicasFavoritas((prev) => {
      if (prev.includes(musicaId)) {
        return prev.filter((id) => id !== musicaId);
      }
      return [...prev, musicaId];
    });
  }, []);

  const removerFavorito = useCallback((musicaId) => {
    setMusicasFavoritas((prev) => prev.filter((id) => id !== musicaId));
  }, []);

  const isFavorita = useCallback(
    (musicaId) => musicasFavoritas.includes(musicaId),
    [musicasFavoritas]
  );

  const adicionarAoHistorico = useCallback((musica) => {
    setHistorico((prev) => {
      const filtrado = prev.filter((m) => m.id !== musica.id);
      return [{ ...musica, reproduzidoEm: new Date() }, ...filtrado].slice(0, 50);
    });
  }, []);

  const criarPlaylist = useCallback((nome, descricao) => {
    const novaPlaylist = {
      id: `playlist-${Date.now()}`,
      nome,
      descricao,
      musicas: [],
      imagem: '📝',
      dataCriacao: new Date(),
    };
    setPlaylists((prev) => [...prev, novaPlaylist]);
    return novaPlaylist;
  }, []);

  const adicionarAPlaylist = useCallback((playlistId, musicaId) => {
    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === playlistId && !p.musicas.includes(musicaId)) {
          return { ...p, musicas: [...p.musicas, musicaId] };
        }
        return p;
      })
    );
  }, []);

  const removerDePlaylist = useCallback((playlistId, musicaId) => {
    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === playlistId) {
          return { ...p, musicas: p.musicas.filter((id) => id !== musicaId) };
        }
        return p;
      })
    );
  }, []);

  const value = {
    usuarioLogado,
    setUsuarioLogado,
    musicasFavoritas,
    adicionarFavorito,
    removerFavorito,
    isFavorita,
    historico,
    adicionarAoHistorico,
    playlists,
    criarPlaylist,
    adicionarAPlaylist,
    removerDePlaylist,
    musicaEmReproducao,
    setMusicaEmReproducao,
  };

  return (
    <MusicaContext.Provider value={value}>
      {children}
    </MusicaContext.Provider>
  );
}

export function useMusicaContext() {
  const context = React.useContext(MusicaContext);
  if (!context) {
    throw new Error('useMusicaContext deve ser usado dentro de MusicaProvider');
  }
  return context;
}

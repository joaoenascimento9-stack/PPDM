# MusicFlow - Aplicativo de Streaming de Música

## Planejamento da Solução

### Nome do App
**MusicFlow** - Uma plataforma de streaming de música moderna e elegante.

### Paleta de Cores
- **Roxo Primário**: #8B5FBF (identidade da marca)
- **Rosa Neon**: #FF69B4 (destaques e botões principais)
- **Preto Escuro**: #0F0F1E (fundo principal)
- **Cinza Escuro**: #1A1A2E (cards e containers)
- **Cinza Médio**: #999 (textos secundários)
- **Branco**: #FFF (textos principais)

### Público-Alvo
Usuários jovens (13-35 anos) que buscam uma experiência moderna de streaming de música com interface intuitiva e visual atrativo.

### Função de Cada Tela

#### 1. **Tela de Login**
- Autenticação do usuário
- Campos: E-mail e Senha
- Validação básica de credenciais
- Link para tela de Cadastro
- Design elegante com emoji da plataforma

#### 2. **Tela de Cadastro**
- Registro de novos usuários
- Campos: Nome Completo, E-mail, Senha, Confirmação de Senha
- Validações:
  - Verificação de campos preenchidos
  - Validação de e-mail (deve conter @)
  - Senha com mínimo de 6 caracteres
  - Confirmação de correspondência de senhas
- Retorno ao Login após cadastro bem-sucedido

#### 3. **Tela Inicial**
- Exibição de recomendações musicais
- Lista de 10 músicas mockadas
- Cards com informações: Título, Artista, Duração
- Botão de Favoritar/Desfavoritar (❤️/🤍)
- Navegação para a tela "Tocando Música" ao clicar em uma música
- Barra inferior com abas de navegação

#### 4. **Tela de Favoritos**
- Exibição apenas de músicas marcadas como favoritas
- Contador de músicas favoritas
- Mensagem personalizada quando lista vazia
- Navegação para "Tocando Música" ao clicar em uma música
- Ícone de coração cheio (❤️) nas músicas favoritas

#### 5. **Tela Tocando Música**
- Display grande da capa do álbum (emoji)
- Informações da música: Título, Artista, Álbum
- Barra de progresso simulada
- Controles de reprodução: Voltar, Play/Pause, Avançar
- Botão de Favoritar com feedback visual
- Opções adicionais: Volume e Compartilhar
- Botão para voltar à tela anterior

---

## Dados Exibidos em Cada Tela

### Tela Inicial
- Lista de todas as 10 músicas com:
  - Emoji como capa
  - Título da música
  - Nome do artista
  - Duração
  - Status de favorito

### Tela de Favoritos
- Apenas músicas com `favorita: true`
- Mesmo formato de exibição da tela inicial
- Contador de favoritos

### Tela Tocando Música
- Música selecionada com:
  - Capa em tamanho maior
  - Todas as informações (título, artista, álbum, duração)
  - Barra de progresso
  - Estado de reprodução (tocando/pausado)

---

## Fluxo de Navegação

```
Login → Cadastro ←→ Login
  ↓
Tela Inicial ←→ Tocando Música
  ↕
Favoritos ←→ Tocando Música
```

### Rotas Implementadas
- **Login** (Stack Screen) - Tela inicial
- **Cadastro** (Stack Screen) - Registro de usuários
- **Principal** (Stack Screen) - Navegação com abas inferiores
  - **Inicial** (Tab Screen) - Tela inicial
  - **Favoritos** (Tab Screen) - Tela de favoritos
- **TocandoMusica** (Stack Screen) - Reprodução de música

---

## Ações em Cada Tela

### Tela de Login
- ✅ Validar e-mail
- ✅ Validar senha
- ✅ Navegar para Cadastro
- ✅ Navegar para Tela Inicial (após validação)

### Tela de Cadastro
- ✅ Validar preenchimento de campos
- ✅ Validar formato de e-mail
- ✅ Validar força de senha
- ✅ Confirmar correspondência de senhas
- ✅ Navegar de volta ao Login

### Tela Inicial
- ✅ Adicionar/Remover de Favoritos
- ✅ Abrir tela de reprodução
- ✅ Navegar para Favoritos (aba inferior)

### Tela de Favoritos
- ✅ Visualizar apenas favoritas
- ✅ Abrir tela de reprodução
- ✅ Contar e exibir quantidade de favoritos

### Tela Tocando Música
- ✅ Simular progresso de reprodução
- ✅ Pausar/Retomar reprodução
- ✅ Adicionar/Remover de Favoritos
- ✅ Voltar para tela anterior
- ✅ Visualizar informações completas da música

---

## Música Mockadas (10 total)

1. **Blinding Lights** - The Weeknd (3:20)
2. **Shape of You** - Ed Sheeran (3:53)
3. **Anti-Hero** - Taylor Swift (3:21)
4. **Heat Waves** - Glass Animals (4:00)
5. **As It Was** - Harry Styles (2:57)
6. **Good as Hell** - Lizzo (3:32)
7. **levitating** - Dua Lipa (3:23)
8. **Demon Slayer** - Imagine Dragons (3:11)
9. **Starboy** - The Weeknd ft. Daft Punk (3:50)
10. **Someone You Loved** - Lewis Capaldi (3:02)

---

## Estrutura de Pastas

```
app/
├── index.jsx                    # Componente raiz
├── routes/
│   └── index.jsx                # Sistema de rotas (Stack + Tabs)
├── pages/
│   ├── login.jsx                # Tela de login
│   ├── cadastro.jsx             # Tela de cadastro
│   ├── inicial.jsx              # Tela inicial
│   ├── favoritos.jsx            # Tela de favoritos
│   ├── tocandoMusica.jsx        # Tela de reprodução
│   ├── atendimentos.jsx         # Não utilizado (remove futuramente)
│   └── profissionais.jsx        # Não utilizado (remove futuramente)
└── dados/
    └── musicas.js               # Array mockado de músicas
```

---

## Recursos Implementados

✅ Autenticação básica (Login e Cadastro)
✅ Navegação com Stack e Bottom Tabs
✅ Lista de músicas com scroll
✅ Sistema de Favoritos
✅ Tela de reprodução interativa
✅ Validação de formulários
✅ Design responsivo
✅ Paleta de cores coerente
✅ Ícones Ionicons integrados
✅ Tema escuro moderno

---

## Validações Implementadas

### Tela de Login
- ✅ Verificar se e-mail e senha estão preenchidos
- ✅ Validar formato de e-mail

### Tela de Cadastro
- ✅ Verificar se todos os campos estão preenchidos
- ✅ Validar formato de e-mail
- ✅ Verificar se senha tem mínimo 6 caracteres
- ✅ Confirmar que senhas são idênticas

---

## Próximas Melhorias (Extras)

- [ ] Criar seção de Playlists
- [ ] Adicionar busca de músicas
- [ ] Persistência de favoritos (AsyncStorage)
- [ ] Autenticação real com backend
- [ ] Reprodução de áudio real
- [ ] Histórico de reprodução
- [ ] Recomendações personalizadas
- [ ] Modo claro/escuro customizável

---

## Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **React Navigation** - Sistema de rotas
- **Expo Vector Icons** - Ícones
- **TypeScript** - Tipagem estática
- **ESLint** - Linter de código

---

## Instruções de Execução

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm start
```

### Testes em Diferentes Plataformas
```bash
# Web
npm run web

# Android (se disponível)
npm run android

# iOS (se em Mac)
npm run ios
```

### Lint
```bash
npm run lint
```

---

## Evidências de Teste

✅ Tela de Cadastro funcionando com validações
✅ Interface visual coerente
✅ Navegação entre telas testada
✅ Sistema de Favoritos implementado
✅ Reprodução interativa de música

---

**Aluno(a):** [Seu Nome]
**Data:** 01/06/2026
**Status:** ✅ Implementação Concluída

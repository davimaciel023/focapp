# 📘 Focapp – App de Organização de Estudos

Focapp é um aplicativo mobile criado para auxiliar estudantes na organização dos seus estudos de forma prática, intuitiva e produtiva. Ele permite o controle de tarefas, organização por disciplinas, materiais de apoio, anotações e sessões de foco com timer. Ideal para manter a disciplina, evitar acúmulo de atividades e conquistar mais equilíbrio acadêmico.

---

## 🚀 Funcionalidades Principais (MVP)

- ✅ Autenticação de usuários (login e cadastro)
- ✅ Tela inicial com visão geral das tarefas
- ✅ Criação, edição e exclusão de tarefas
- ✅ Organização de tarefas por disciplina
- ✅ Upload e acesso a materiais de apoio (PDFs, links, imagens)
- ✅ Criação de anotações rápidas
- ✅ Temporizador de foco (técnica Pomodoro)
- ⏰ Notificações de prazos (em fase futura)

---

## 🛠️ Tecnologias Utilizadas

- **Ionic + Angular** – Framework principal do app
- **Firebase (Firestore)** – Banco de dados em nuvem
- **Firebase Auth** – Autenticação de usuários
- **Firebase Storage** – Armazenamento de arquivos
- **AngularFire** – Integração do Angular com Firebase
- **TypeScript, HTML, CSS** – Linguagens base

---

## 🧱 Estrutura do Banco de Dados (Firestore)

### Coleções principais:
- `users` → dados do usuário
- `subjects` → disciplinas do usuário
- `tasks` → tarefas vinculadas a disciplinas
- `materials` → arquivos, links e PDFs por disciplina
- `notes` → anotações livres
- `focusSessions` → registros de sessões de estudo

---

## 📱 Telas do Aplicativo

- **Tela de Login/Cadastro**
- **Tela Inicial (Visão geral das tarefas)**
- **Tela de Criar/Editar Tarefa**
- **Tela de Disciplinas e Materiais**
- **Tela de Anotações**
- **Tela de Foco (com timer)**
- **Menu de Navegação**

---

## 📋 Checklist de Desenvolvimento

### 🔹 Identidade Visual
- [x] Nome do app: `Focapp`
- [x] Logo definida
- [x] Paleta de cores oficial
- [x] Tipografia padrão - Font "Inter"
- [x] Ícones e estilo visual

### 🔹 Firebase
- [x] Projeto criado no Firebase
- [ ] Firestore configurado
- [ ] Firebase Auth habilitado
- [ ] Firebase Storage configurado
- [ ] Regras de segurança definidas

### 🔹 Funcionalidades
- [ ] Autenticação completa (login, cadastro, logout)
- [ ] CRUD de tarefas
- [ ] Organização por disciplina
- [ ] Upload e listagem de materiais
- [ ] CRUD de anotações
- [ ] Temporizador de foco
- [ ] Interface responsiva
- [ ] Testes manuais em dispositivos

---

## 🧪 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/focapp.git
   cd focapp


🎨 Paleta de Cores Focapp
1. Cor Primária – Azul Degradê
💠 Hex: #0078D7

💠 Uso: Botões principais, ícones ativos, destaques

2. Cor Secundária – Roxo Vibrante
💜 Hex: #6F42C1

💜 Uso: Acentos, títulos, marcadores importantes

3. Cor de Apoio – Azul Claro
🔹 Hex: #4FC3F7

🔹 Uso: Fundos leves, barras de progresso, componentes secundários

4. Cor Neutra Escura – Texto Principal
⚫ Hex: #1E1E2F

⚫ Uso: Textos, ícones escuros

5. Cor Neutra Clara – Fundo
⚪ Hex: #F5F6FA

⚪ Uso: Background principal do app

6. Cor de Sucesso – Verde de Confirmação
✅ Hex: #2ECC71

✅ Uso: Tarefas concluídas, notificações positivas


💡 Sugestão de Uso
Header e Botões: #0078D7 (azul principal)

Ações secundárias ou destaques visuais: #6F42C1

Fundo do app: #F5F6FA com blocos brancos (#FFFFFF)

Textos: #1E1E2F (principal) e #555 (secundário)

Itens concluídos: #2ECC71

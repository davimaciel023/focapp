# 📱 Planejamento de Desenvolvimento do Focapp

**Desenvolvedor:** Davi  
**Data de Início:** 02/05/2025  
**Objetivo:** Criar um aplicativo para organização de estudos com foco e produtividade.

---

## ✅ 1. Preparação Inicial
- [x] Instalar Node.js, Angular CLI e Ionic CLI
- [x] Criar o projeto com `ionic start focapp blank --type=angular`
- [x] Configurar Firebase e instalar AngularFire

---

## 🎨 2. Design e Prototipação
- [x] Definir identidade visual
- [x] Planejar telas
- [x] Gerar prompts e wireframes
- [x] (Opcional) Prototipar no Figma

---

## 🧱 3. Arquitetura do Projeto
- [x] Criar estrutura de pastas (`/pages`, `/services`, `/models`, etc.)
- [x] Criar interfaces para dados (User, Task, etc.)

---

## 🔐 4. Autenticação
- [x] Splash Screen
- [x] Tela de Login
- [ ] Tela de Cadastro
- [ ] Recuperação de senha
- [ ] Guard para rotas privadas

---

## 🏠 5. Dashboard e Navegação
- [ ] Criar menu (lateral ou tab bar)
- [ ] Tela inicial com:
- [ ] Tarefas do dia
- [ ] Progresso semanal
- [ ] Botão Pomodoro

---

## ✅ 6. Tarefas
- [ ] Lista de tarefas com filtros
- [ ] Criar e editar tarefas
- [ ] Marcar como concluídas
- [ ] Integração com Firestore

---

## 📚 7. Disciplinas e Materiais
- [ ] CRUD de Disciplinas
- [ ] Upload de arquivos
- [ ] Visualização por disciplina

---

## 📝 8. Anotações
- [ ] Lista de anotações
- [ ] Criar e editar nota (rich text ou markdown)
- [ ] Relacionar com disciplinas

---

## ⏱️ 9. Pomodoro
- [ ] Temporizador com fases (25/5/15 min)
- [ ] Botões: iniciar, pausar, resetar
- [ ] Registro de sessões no Firestore

---

## 👤 10. Perfil e Configurações
- [ ] Exibir perfil do usuário
- [ ] Logout
- [ ] Alternar tema claro/escuro
- [ ] Excluir conta
- [ ] (Opcional) Backup/exportação de dados

---

## 📡 11. Integração com Firebase
- [ ] Autenticação (Auth)
- [ ] Banco de dados (Firestore)
- [ ] Armazenamento de arquivos (Storage)
- [ ] Regras de segurança

---

## 🧪 12. Testes
- [ ] Testar autenticação e navegação
- [ ] Verificar tarefas, anotações, uploads
- [ ] Testar responsividade

---

## 📦 13. Build e Publicação
- [ ] Build de produção (`ionic build --prod`)
- [ ] Teste no Android (`ionic capacitor run android`)
- [ ] Publicar na Play Store

---

## 📈 14. Melhorias Futuras
- [ ] Notificações de tarefas
- [ ] Suporte offline
- [ ] Gamificação
- [ ] Integração com calendário
- [ ] Relatórios de produtividade

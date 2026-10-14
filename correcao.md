#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Incorreto
Nota: 0,00

#Criterio3 — useState e useEffect em uso
Parcialmente correto
Nota: 0,50

#Criterio4 — Mínimo 6 componentes funcionais
Parcialmente correto
Nota: 0,50

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Incorreto
Nota: 0,00

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Parcialmente correto
Nota: 0,50

#Criterio9 — README com instruções e link do deploy
Parcialmente correto
Nota: 0,50

#Criterio10 — Deploy na Vercel
Incorreto
Nota: 0,00

Subtotal critérios: 4,00

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Conquistado
Nota extra: +1,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 1,00
Extras conquistados: E2

Subtotal com extras (teto 10,00): 5,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 5,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

*Reavaliação: Vercel sem LIVE/git-connected; links template não contam; C9 parcial / C10 incorreto mantidos; IA limpo; C3/C4 permanecem parciais (hooks não carregam API; só 4 componentes).*

API pretendida: não há axios no projeto (imports `contactsApi from ""` quebrados). App na raiz (`app/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next` 16.4.0; `app/layout.js` App Router presente.

**Critério 2 — Lista com axios:** **não há** `app/page.js`/`page.tsx` (existe `app/pages.js`, que o App Router não serve como `/`); o arquivo só renderiza `<h1>KKK</h1>`; axios **ausente** do `package.json` e sem `axios.get` de listagem. Incorreto.

**Critério 3 — useState e useEffect:** presentes em `ContactForm.js` (form + focus), mas não disparam carga de lista da API. Uso parcial/decorativo em relação ao enunciado → 0,50.

**Critério 4 — 6 componentes:** 4 em `app/components/` (ContactForm, ContactItem, ContactList, FilterInput) → parcial (3–5).

**Critério 5 — Props:** ContactForm←setContacts, ContactList←contacts/setContacts, ContactItem←contact/handleRemove, FilterInput←value/onChange. ≥2.

**Critério 6 — Detalhes + axios + navegação:** `app/details/id/page.js` é estático (não `[id]`) e está **vazio**; ContactItem aponta para `/contacts/${id}` (rota inexistente); sem axios no detalhe. Incorreto.

**Critério 7 — Comentários:** ausentes.

**Critério 8 — Commits:** 5 commits na `main` → parcial.

**Critério 9 — README / deploy link:** README template com instruções; links `vercel.com/font` / `vercel.com/new?...` **não** contam como deploy. Sem URL real `.vercel.app` → parcial.

**Critério 10 — Deploy Vercel:** sem evidência LIVE nem deployments Vercel no GitHub.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). Erros só em `console.log`.
**Extra 2 — Hooks avançados:** Conquistado (+1,00). `useCallback` + `useRef` em `ContactForm.js` (e `useCallback` em `ContactList.js`).
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). `FilterInput` existe mas não está integrado a uma lista funcional na home.
**Extra 4 — localStorage:** Não conquistado (+0,00).
**Resumo extras:** E2 (+1,00); total com extras 5,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum honeypot H1–H10; zeramento por IA não. Projeto problemático: home quebrada (`pages.js` em vez de `page.js`), axios ausente, detalhe vazio.

---

## CONTEXTO GIT

- **remote:** `origin https://github.com/joaoaraujo472/checkpoint-5-webdev-1espq`
- **branch avaliada:** `main`
- **commits (5):** de `6693b73 Initial commit` até `26660a4 feat: adcionando participantes`
- **shortlog:** 4 Laboratório FIAP; 1 joao
- **contagem C8:** 5

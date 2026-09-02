# Formulário de contacto funcional com envio de email

## Como está hoje
O formulário (nome, email, telefone, mensagem) existe apenas no browser: ao submeter mostra uma mensagem de agradecimento, mas os dados não vão para lado nenhum. Não há envio de email nem base de dados.

## O que vai ser construído

### 1. Envio de emails gerido pela Lovable
- Verificar/configurar o domínio de envio de emails do projeto (necessário para os emails saírem com a vossa marca).
- Criar dois templates de email alinhados com a identidade visual do site (cores sálvia/greige, tipografia elegante):
  - **Notificação ao estúdio**: enviada para limagabriel.0006@gmail.com com os dados preenchidos (nome, email, telefone, mensagem).
  - **Confirmação ao visitante**: email automático a confirmar que a mensagem foi recebida, com tom calmo e elegante, e sugestão de contacto via WhatsApp.

### 2. Lógica de submissão no servidor
- Nova função de servidor que valida os campos (nome e mensagem obrigatórios, email válido, limites de tamanho) e protege contra spam/abuso (honeypot + limite simples).
- Após validar, envia a notificação ao estúdio e a confirmação ao visitante (um destinatário por envio).
- Chave de idempotência por submissão para evitar emails duplicados em retries.

### 3. Formulário ligado ao servidor
- `handleSubmit` passa a chamar a função de servidor com os dados do formulário.
- Estados de UI: botão "A enviar..." com spinner, mensagem de sucesso após envio confirmado, e mensagem de erro com sugestão de usar o WhatsApp em caso de falha.
- Manter o fallback atual de WhatsApp visível.

## Notas
- Os emails só começam a sair depois de o domínio de envio estar verificado; até lá o formulário mostra sucesso mas os emails ficam pendentes da verificação (monitorizável no painel Cloud).
- Nenhuma base de dados é necessária; as mensagens chegam diretamente por email.
- Regras do site mantidas: sem travessões, sem texto inventado, tom calmo.

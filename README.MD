
# Escalas+

## Visão Geral

**Escalas+** é uma aplicação web intuitiva desenvolvida para facilitar o gerenciamento de escalas de trabalho. Com uma interface amigável, permite que os gestores adicionem, visualizem e gerenciem escalas de funcionários de forma eficiente, evitando conflitos de horários automaticamente.

## Funcionalidades

- **Adicionar Escalas:** Crie novas escalas especificando o evento, data, horário de início e término, além das informações do funcionário.
- **Detecção de Conflitos:** O sistema verifica automaticamente conflitos de horários para garantir que não haja sobreposição nas escalas.
- **Dashboard:** Visualize todas as escalas cadastradas em uma tabela dinâmica e responsiva.
- **Responsividade:** Interface otimizada para dispositivos móveis, garantindo acessibilidade em qualquer lugar.
- **Navegação Intuitiva:** Menu de navegação simples para facilitar o acesso às principais funcionalidades.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **[Biblioteca ou Framework se aplicável]**

## Estrutura do Projeto

```
EscalasPlus/
├── index.html          # Página principal para adicionar escalas
├── dashboard.html      # Dashboard para visualizar escalas cadastradas
├── styles.css          # Estilos CSS personalizados
├── script.js           # Scripts JavaScript para funcionalidades
├── assets/             # Recursos adicionais (imagens, fontes, etc.)
└── README.md           # Documentação do projeto
```

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/escalas-plus.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd escalas-plus
   ```

3. **Abra o Arquivo `index.html` no Navegador**

   Você pode simplesmente abrir o arquivo `index.html` no seu navegador preferido clicando duas vezes sobre ele ou utilizando um servidor local.

   **Usando um Servidor Local com Python:**

   ```bash
   # Para Python 3.x
   python -m http.server 8000

   # Acesse http://localhost:8000 no seu navegador
   ```

## Uso

1. **Adicionar uma Nova Escala**

   - Acesse a página principal `index.html`.
   - Preencha os campos do formulário com as informações do evento e do funcionário.
   - Clique em **"Adicionar Escala"**.
   - Se houver conflitos de horários, uma mensagem de alerta será exibida.

2. **Visualizar Escalas Cadastradas**

   - Navegue até o **Dashboard** clicando no menu de navegação.
   - Todas as escalas adicionadas serão listadas em uma tabela.
   - Utilize as opções de **Ações** para editar ou excluir escalas conforme necessário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* para melhorar este projeto.

1. **Fork este Repositório**
2. **Crie uma Branch para sua Feature**

   ```bash
   git checkout -b feature/nova-feature
   ```

3. **Commit suas Alterações**

   ```bash
   git commit -m "Adiciona nova feature"
   ```

4. **Push para a Branch**

   ```bash
   git push origin feature/nova-feature
   ```

5. **Abra um Pull Request**

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

- **Autor:** Douglas
- **Email:** dougdotcon@gmail.com
- **LinkedIn:** [Seu LinkedIn](https://www.linkedin.com/in/dougdotcon/)
- **GitHub:** [seu-usuario](https://github.com/dougdotcon)

---

*Este projeto foi desenvolvido com o intuito de simplificar o gerenciamento de escalas de trabalho, proporcionando eficiência e organização para equipes e gestores.*


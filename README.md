# Meu Portfólio - Desenvolvedor Front-End

Bem-vindo ao meu portfólio! Este projeto foi criado para exibir minhas habilidades como desenvolvedor front-end, utilizando as tecnologias mais modernas, como **Next.js**, **Tailwind CSS** e **ShadCNUI**. Aqui você encontrará uma demonstração de como eu trabalho com componentes reutilizáveis e layouts responsivos.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React que permite renderização do lado do servidor (SSR) e otimização do desempenho.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework utilitário para CSS, permitindo um design rápido e responsivo.
- **[ShadCNUI](https://github.com/shadcn-ui/shadcn)**: Biblioteca de componentes UI baseada em componentes reutilizáveis, que facilita a criação de interfaces de usuário ricas.
- **Figma**: Utilizado para o design do template visual do portfólio. O link para o template do Figma está disponível abaixo.

## Funcionalidades

- **Layout Responsivo**: A página se adapta perfeitamente a diferentes tamanhos de tela, utilizando o Tailwind CSS para garantir um design fluido em dispositivos móveis, tablets e desktops.
- **Componentes Reutilizáveis**: Usando **ShadCNUI** para garantir que todos os componentes, como botões, modais, cards e formulários, sejam reutilizáveis e escaláveis.
- **Performance Otimizada**: O Next.js é utilizado para renderizar a aplicação de maneira otimizada com **SSR** (Server Side Rendering), garantindo uma navegação rápida e eficiente.
- **Design Personalizado**: O design foi criado no Figma e, em seguida, implementado no código com foco em usabilidade e estética.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
/ryujin
├── /app                  # Contém o código do Next.js (App Router)
├── /components           # Contém componentes reutilizáveis (Botões, Imagens, Cards, etc.)
├── /data                 # Arquivos de dados estáticos ou fontes de dados para o projeto
├── /docs                 # Documentação adicional ou guias do projeto
├── /lib                  # Contém helpers gerais e funções auxiliares.
├── /public               # Arquivos públicos como imagens, fontes, CSS e outros
├── /utils                # Contém helpers e hooks customizados, etc.
├── .env.local            # Variáveis de ambiente locais
├── .gitignore            # Arquivo que define o que não deve ser versionado pelo Git
├── components.json       # Arquivo de configuração ou dados relacionados aos componentes
├── next-env.d.ts         # Tipagens para Next.js com TypeScript
├── next.config.mjs       # Arquivo de configuração do Next.js
├── package-lock.json     # Bloqueio de versões das dependências
├── package.json          # Arquivo de configuração do projeto (dependências, scripts, etc.)
├── postcss.config.mjs    # Arquivo de configuração do PostCSS
├── /README.md            # Este arquivo
├── /tailwind.config.js   # Arquivo de configuração do Tailwind CSS
└── tsconfig.json         # Arquivo de configuração do TypeScript
```

## Como Rodar o Projeto Localmente

### 1. Clonar o Repositório

Clone o repositório para o seu computador:

```bash
git clone https://github.com/codewilliam-ui/ryujin.git
```

### 2. Instalar Dependências

Acesse o diretório do projeto e instale as dependências:

```bash
cd ryujin
npm install
```

### 3. Executar o Projeto

Agora, você pode rodar o projeto localmente com o comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento, e você pode acessar o projeto no seu navegador através de `http://localhost:3000`.

### 4. Compilar o Projeto para Produção

Para compilar o projeto para produção, execute:

```bash
npm run build
```

E para iniciar a versão de produção:

```bash
npm run start
```

## Personalização

Se você quiser personalizar a aparência do seu portfólio, pode modificar facilmente a configuração do Tailwind CSS. Para isso, edite o arquivo `tailwind.config.js` para ajustar as cores, fontes e outros parâmetros do design.

### Exemplo de Configuração do Tailwind:

```ts
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rc-purple': 'hsl(var(--rc-purple))', // exemplo de cor personalizada
      },
    },
  },
  plugins: [],
};
```

## Figma Template

O design do meu portfólio foi criado no [Figma](https://www.figma.com/). Se você quiser explorar ou usar o template, você pode acessar o link abaixo:

- **Link para o Template Figma**: [Aqui está o link para o Template Figma](https://www.figma.com/design/fyvaxM7DjW0pyzJHBGwDJ7/Portfolio-Template---Franklin-William?node-id=398-2440&t=byfPTwdDAU2If3WN-1)

Sinta-se à vontade para explorar, fazer modificações e usar o template conforme necessário. O design no Figma foi cuidadosamente pensado para oferecer uma navegação intuitiva e agradável.

## Melhorias Futuras

- **Adição de mais projetos**: Planejo adicionar mais projetos à seção de "Portfólio", incluindo descrições detalhadas e links para o GitHub.
- **SEO e Acessibilidade**: Melhorar a otimização para mecanismos de busca (SEO) e a acessibilidade da página para garantir que seja amigável para todos os usuários.

---

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---
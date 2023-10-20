Personal Portfolio
========

Personal Portfolio is a project that showcases my skills and work in web development. It leverages Next.js, TailwindCSS, TypeScript, Sanity, and Shadcn for an impressive and dynamic portfolio website.

Getting Started
--------

To get started with your Personal Portfolio project, follow these steps:

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/your-username/personal-portfolio.git
    ```

    Replace `your-username` with your GitHub username.

2. **Navigate to the project folder**:

    ```bash
    cd personal-portfolio
    ```

Setting up Sanity
--------

Create a new Sanity project:

1. **Install the Sanity CLI globally**:

    ```bash
    npm install -g @sanity/cli
    # OR
    yarn global add @sanity/cli
    # OR
    pnpm add -g @sanity/clit
    ```

2. **Create a new Sanity project**:

    ```bash
    sanity init
    ```

    Follow the prompts to set up your Sanity project, choosing a predefined schema or creating a custom one to fit your needs.

3. **Deploy your Sanity project** (optional):

    To deploy your Sanity project to the web, you can use services like Vercel, Netlify, or GitHub Pages for hosting, ensuring that you configure your deployment settings accordingly.

Link Sanity to the Personal Portfolio Project:

1. **In the Personal Portfolio project folder**, create a `.env.local` file and add the following variables:

    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
    NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset-name
    ```

    Replace `your-sanity-project-id` and `your-sanity-dataset-name` with the values from your Sanity project's `sanity.json` file.

2. **Install the Sanity client package** in your Personal Portfolio project:

    ```bash
    npm install @sanity/client
    # OR
    yarn add @sanity/client
    # OR
    pnpm add @sanity/client
    ```

3. **Use the Sanity client in your Next.js project** to fetch and display content from Sanity in your portfolio.

Development
--------

To start developing your personal portfolio, run the following commands in your project folder:

```bash
# Install project dependencies
npm install
# OR with Yarn
yarn install
# OR with pnpm
pnpm install
```
```bash
# Start the development server
npm run dev
# OR with Yarn
yarn dev
# OR with pnpm
pnpm dev
```

This will start a local development server where you can build and test your Next.js application.

### Development

This will start a local development server where you can build and test your Next.js application.

### Deployment

When you're ready to share your Personal Portfolio with the world, follow the deployment process for both your Next.js app and Sanity project. Consult the documentation for the respective platforms you choose for hosting.

### Contributing

Contributions to this project are welcome! 

### License

The project is licensed under the MIT License. For details, see the [LICENSE](LICENSE) file.

### Contact

For questions or feedback, feel free to contact me at manuelringuelet@proton.me or visit my [GitHub Profile](https://github.com/manuelpastorringuelet)

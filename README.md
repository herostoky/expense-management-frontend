# Expense Management

Expense Management is a modern, responsive web application designed to help users manage their expenses and incomes efficiently. The app provides features for tracking financial transactions, categorizing them, and gaining insights into spending and earning patterns.

## Features

- **Expense Management**: Create, read, update, and delete expenses.
- **Income Management**: Create, read, update, and delete incomes.
- **Categories**:
  - Default categories for expenses and incomes.
  - Custom categories created by the user.
- **Responsive Design**: Optimized for all devices using TailwindCSS.
- **Modern UI**: Built with `shadcn/ui` components for a clean and minimal aesthetic.

## Tech Stack

- **Frontend**: React, Next.js
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Language**: TypeScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/herostoky/expense-management-frontend.git
cd expense-management
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `pnpm dev`: Start the development server.
- `pnpm build`: Build the application for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Run ESLint to check for code quality.

## Folder Structure

```plaintext
.
├── src/
│   ├── app/                # Next.js app directory
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom React hooks
│   └── styles/             # Global and component-specific styles
├── public/                 # Static assets
├── .github/                # GitHub & Copilot specific files
├── .vscode/                # VSCode settings
├── package.json            # Project metadata and scripts
├── pnpm-lock.yaml          # Dependency lock file
└── README.md               # Project documentation
```

## Contributing

We welcome contributions! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Copilot for making me look like a design genius. :p

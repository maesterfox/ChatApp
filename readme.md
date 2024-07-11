# ChatApp

This project is a modern chat application built using React, TypeScript, Appwrite, and Vite. It provides real-time messaging functionality with a clean and intuitive user interface. The application showcases the use of advanced features such as user authentication, database interactions, and live updates with real-time subscriptions.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo
Check out the live demo of the application [here](#).

## Features
- Real-time messaging with live updates
- User authentication and authorization
- Secure data storage and retrieval
- Responsive design
- Easy-to-use interface

## Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Backend:** Appwrite
- **Styling:** CSS with modern techniques such as gradients, shadows, and animations

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/maesterfox/ChatApp.git
    cd ChatApp
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application
To start the development server, run:
```bash
npm run dev
```
This will start the application on `http://localhost:3000`.

### Building for Production
To create a production build, run:
```bash
npm run build
```
This will output the build files to the `dist` directory.

## Environment Variables
Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
VITE_API_ENDPOINT=https://cloud.appwrite.io/v1
VITE_API_KEY=your_appwrite_api_key
VITE_PROJECT_ID=your_appwrite_project_id
VITE_DATABASE_ID=your_appwrite_database_id
VITE_COLLECTION_ID_MESSAGES=your_appwrite_collection_id
```

Make sure to replace `your_appwrite_api_key`, `your_appwrite_project_id`, `your_appwrite_database_id`, and `your_appwrite_collection_id` with your actual Appwrite project details.

## Project Structure
```
src/
│
├── components/
│   ├── Header.tsx
│   ├── Balance.tsx
│   ├── IncomeExpenses.tsx
│   ├── TransactionList.tsx
│   ├── AddTransaction.tsx
│   └── Transaction.tsx
│
├── context/
│   ├── GlobalState.tsx
│   └── AppReducer.ts
│
├── styles/
│   ├── App.css
│
├── utils/
│   ├── AuthContext.tsx
│
├── appwriteConfig.ts
├── App.tsx
├── main.tsx
└── types.ts
```

- **components/**: Contains React components for different parts of the application.
- **context/**: Contains context API setup for global state management.
- **styles/**: Contains CSS files for styling the application.
- **utils/**: Contains utility functions and context for authentication.
- **appwriteConfig.ts**: Configuration file for Appwrite client.
- **types.ts**: Type definitions for the project.
- **App.tsx**: Main application component.
- **main.tsx**: Entry point of the React application.

## Usage
1. **Add Transaction**: Use the form to add a new transaction by providing the text and amount (negative for expenses, positive for income).
2. **Delete Transaction**: Click the "x" button next to a transaction to delete it.
3. **View Balance, Income, and Expenses**: The balance, total income, and total expenses are calculated and displayed automatically.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
David Fox - [@maesterfox](https://github.com/maesterfox)

Project Link: [https://github.com/maesterfox/ChatApp](https://github.com/maesterfox/ChatApp)

---

This README provides a comprehensive overview of the ChatApp project, including setup instructions, usage, and contribution guidelines. Feel free to customize it further based on specific requirements or additional details you might want to include.# ChatApp

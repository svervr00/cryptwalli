# 🪙 CryptWalli API

CryptWalli is a scalable and modular **Node.js + Express + TypeScript** backend for a cryptocurrency wallet app. It supports user authentication, wallet creation and management, live coin tracking, transaction handling, mining operations, notifications, and a full audit trail.

---

## 📦 Tech Stack
- **Node.js + Express** for server
- **TypeScript** for static typing
- **PostgreSQL** (or MongoDB, configurable)
- **JWT Authentication**
- **ESLint + Prettier** for linting & formatting
- **Jest** for testing

---

## 📁 Folder Structure
```bash
cryptwalli_api/
├── src/
│   ├── controllers/       # Route handlers
│   ├── routes/            # API endpoints
│   ├── models/            # Database schemas/models
│   ├── services/          # Business logic
│   ├── middlewares/       # Auth, error, validation
│   ├── helpers/           # Utility functions (db, jwt, logger)
│   ├── config/            # Env/db configs
│   └── index.ts           # App bootstrap
├── __tests__/             # Jest unit/integration tests
├── .env                   # Environment variables
├── initialSetup.ts        # DB seeding or init tasks
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 API Modules

### ✅ Auth
| Endpoint              | Method | Description                 |
|-----------------------|--------|-----------------------------|
| `/api/auth/signup`    | POST   | Register new user          |
| `/api/auth/login`     | POST   | Authenticate user          |
| `/api/auth/refresh`   | POST   | Refresh access token       |

### 💼 Wallet
| Endpoint              | Method | Description                 |
|-----------------------|--------|-----------------------------|
| `/api/wallet/`        | GET    | Get user wallets            |
| `/api/wallet/:id`     | GET    | Get wallet by ID            |
| `/api/wallet/fund`    | POST   | Fund wallet                 |
| `/api/wallet/transfer`| POST   | Transfer internally         |
| `/api/wallet/withdraw`| POST   | Withdraw externally         |

### 🔁 Transaction
| Endpoint                | Method | Description               |
|-------------------------|--------|---------------------------|
| `/api/transactions/`    | GET    | List user transactions     |
| `/api/transactions/:id` | GET    | Get transaction by ID      |

### 🔔 Notifications
| Endpoint             | Method | Description                |
|----------------------|--------|----------------------------|
| `/api/notification/` | GET    | Get user notifications     |

### 💱 Coin
| Endpoint            | Method | Description              |
|---------------------|--------|--------------------------|
| `/api/coin/list`    | GET    | List all supported coins |
| `/api/coin/price`   | GET    | Get real-time coin price|

### ⛏️ Mining
| Endpoint             | Method | Description               |
|----------------------|--------|---------------------------|
| `/api/mining/start`  | POST   | Start mining session      |
| `/api/mining/stop`   | POST   | Stop mining               |
| `/api/mining/stats`  | GET    | Get mining performance    |

### 🕵️ Audit Logs
| Endpoint                  | Method | Description                   |
|---------------------------|--------|-------------------------------|
| `/api/auditlogs/`         | GET    | Admin: view all logs          |
| `/api/auditlogs/user/:id` | GET    | View logs by user             |

---

## 🧪 Testing
```bash
npm run test
```
Tests are located in `__tests__/` and written using Jest.

---

## 🛡️ Security
- JWT + Refresh Tokens
- Rate Limiting (planned)
- Helmet + CORS
- Input Validation Middleware

---

## 🔧 Setup
```bash
# Install dependencies
yarn install

# Setup env variables
cp .env.example .env

# Start dev server
yarn dev
```

---

## ✨ Designed & Maintained By
**BLARD** 🧠

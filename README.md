cryptwalli_api/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── wallet.controller.ts
│   │   ├── transaction.controller.ts
│   │   ├── notification.controller.ts
│   │   ├── coin.controller.ts
│   │   ├── mining.controller.ts
│   │   └── auditlog.controller.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── wallet.routes.ts
│   │   ├── transaction.routes.ts
│   │   ├── notification.routes.ts
│   │   ├── coin.routes.ts
│   │   ├── mining.routes.ts
│   │   └── auditlog.routes.ts
│   ├── models/
│   │   ├── user.model.ts
│   │   ├── wallet.model.ts
│   │   ├── transaction.model.ts
│   │   ├── notification.model.ts
│   │   ├── coin.model.ts
│   │   ├── mining.model.ts
│   │   └── auditlog.model.ts
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── wallet.service.ts
│   │   ├── transaction.service.ts
│   │   ├── notification.service.ts
│   │   ├── coin.service.ts
│   │   ├── mining.service.ts
│   │   └── auditlog.service.ts
│   ├── helpers/
│   │   ├── logger.ts
│   │   ├── db.ts
│   │   └── jwt.ts
│   ├── config/
│   │   ├── env.config.ts
│   │   └── db.config.ts
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
├── README.md
├── initialSetup.ts
└── __tests__/
    ├── auth.spec.ts
    ├── wallet.spec.ts
    ├── transaction.spec.ts
    ├── mining.spec.ts
    └── auditlog.spec.ts



Designed By: BLARD
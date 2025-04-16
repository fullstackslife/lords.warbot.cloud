# OCR Training System

A token-incentivized system for improving OCR models through human verification and training.

## Project Structure

- `frontend/`: React + Tailwind frontend application
- `backend/`: Node.js API server
- `contracts/`: Solidity smart contracts
- `scripts/`: Python training scripts

## Features

- Image OCR verification interface
- Task management system
- Token rewards for contributions
- Model retraining pipeline
- User reputation tracking

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start development servers:
```bash
npm run dev
```

## Development

- Frontend: `npm run start:frontend`
- Backend: `npm run start:backend`
- Contracts: `npm run compile:contracts`

## License

MIT 
# Travel Dapp (Gianni Travel Web3)

Premium travel marketplace with Web3 payments on Sepolia. The UI is built with a luxury black-and-gold theme, wallet connect in the top-right, and bilingual IT/EN content.

## Features
- Wallet connect with balance display (Sepolia).
- Dynamic trips with premium descriptions (IT/EN).
- Buy flow: opens MetaMask and sends ETH based on selected package.
- Post-buy transaction box with Etherscan link.
- Responsive layout with premium styling.

## Tech Stack
- React 19 + TypeScript
- Vite
- Wagmi + Viem (wallet + transactions)
- React Router

## Local Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Payment Flow
The "Buy" button triggers a native MetaMask transaction to a fixed receiver address on Sepolia, with the amount set by the selected trip (priceEth in data).

## Content and Localization
- Languages: Italian and English (toggle in the header).
- Trip content is stored in `src/data/trips.ts` with IT/EN fields.

## Key Files
- `src/pages/Home.tsx` - landing page and language toggle
- `src/pages/TripDetails.tsx` - details + payment flow
- `src/components/WalletConnect.tsx` - wallet connect and balance
- `src/data/trips.ts` - trip data (IT/EN, prices, includes/excludes)
- `src/lib/wagmi.ts` - wagmi config (Sepolia)

## Notes
- The app uses Sepolia by default.
- If you change the receiver address, update it in `src/pages/TripDetails.tsx`.

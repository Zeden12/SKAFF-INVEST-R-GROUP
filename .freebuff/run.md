# Run doc — SKAFF INVEST R GROUP (Vite + React)

## Reproduce uncommitted artifacts
- No `.env`/`.env.local` files are needed — API endpoints (contact/careers forms) are hardcoded in the source.
- Dependencies: `npm install` (already present in `node_modules`).
- No build step required to run the dev server.

## How to run the server
```bash
npm run dev -- --port 5199 --strictPort
```
- Default Vite port is 5173; use 5199 when 5173 is occupied (strictPort so it fails loudly rather than silently moving).
- Detached (Windows):
  ```powershell
  powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev','--','--port','5199','--strictPort' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
  ```
- Verify: `curl http://localhost:5199` answers, then register the preview with the printed pid.

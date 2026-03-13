# Fer Loera — Portfolio

Portfolio personal construido con **Next.js 14 + Framer Motion**.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Framer Motion** — animaciones de pantallas, hover, spring physics
- **CSS puro** (sin Tailwind, para control total)

## Estructura
```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Entry point — Desktop
├── components/
│   ├── PhoneShell.tsx     # El celular completo (arrastrable)
│   ├── Dock.tsx           # Dock de íconos inferior
│   ├── NotesWindow.tsx    # Ventana de notas macOS
│   ├── screens/
│   │   ├── WorkScreen.tsx
│   │   ├── AboutScreen.tsx
│   │   ├── ContributionsScreen.tsx
│   │   ├── ConnectScreen.tsx
│   │   ├── ProjectScreen.tsx       # Detalle de proyecto
│   │   └── ContributionScreen.tsx  # Detalle de contribución
│   └── ui/
│       ├── MenuOverlay.tsx
│       └── PillNav.tsx
├── data/
│   ├── projects.ts        # ← Edita aquí tus proyectos
│   ├── contributions.ts   # ← Edita aquí tus contribuciones
│   └── notes.ts           # ← Notas iniciales
├── hooks/
│   ├── usePhoneDrag.ts    # Lógica de drag del celular
│   └── usePhoneNav.ts     # Estado de navegación
└── styles/
    └── globals.css        # Todo el CSS
```

## Cómo agregar un proyecto
Abre `src/data/projects.ts` y agrega un objeto al array:
```ts
{
  id: "mi-proyecto",
  title: "Nombre del Proyecto",
  subtitle: "Cliente o contexto",
  color: "linear-gradient(160deg, #tu-color 0%, #tu-color-oscuro 100%)",
  body: [
    "Párrafo 1...",
    "Párrafo 2...",
  ],
}
```

## Cómo correr localmente
```bash
npm install
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel
```bash
# 1. Push a GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/tu-usuario/fer-portfolio.git
git push -u origin main

# 2. En vercel.com → Import project → selecciona el repo → Deploy
```

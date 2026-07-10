# WCCP v1.0 Frontend Handoff

This package is a copy-ready frontend reference for WCCP v1.0.

It is intentionally framework-light:

- React + TypeScript components
- Plain CSS variables and class names
- No Tailwind dependency
- No external UI library dependency
- Uses semantic design tokens from Figma

## Files

```txt
handoff/frontend/
  tokens.css          Design tokens / theme variables
  globals.css         Reset, base page styles, responsive container
  components.css      Component and pattern CSS
  types.ts            Shared frontend/backend data types
  data.ts             48 teams, stage tabs, FAQ copy
  icons.tsx           Inline SVG icons
  assets/icons/       Official SVG exports from Figma Icons page
  components.tsx      Reusable components
  patterns.tsx        Product-level patterns
  HomePage.tsx        Interactive page reference
  index.ts            Barrel exports
  FRONTEND_SPEC.md    Full engineering handoff specification
  package.json        Vite demo scripts and dependencies
  vite.config.ts      Vite build configuration
```

## Asset setup

Assets are included under:

```txt
public/
  team-logos/
    Portugal.png
    Mexico.png
    ...
  images/
    hero-bg-web.png
    hero-bg-mobile.png
    shared-jackpot-label-web.png
    shared-jackpot-label-mobile.png
  icons/
    favicon.ico
    favicon-16.png
    favicon-32.png
    apple-touch-icon.png
    icon-192.png
    icon-512.png
  site.webmanifest
```

Production images are exported from the Figma `Assets` page:

```txt
Asset/Cover
Asset/Hero Background/Web
Asset/Hero Background/Mobile
Asset/SharedJackpot/Web
Asset/SharedJackpot/Mobile
Asset/Floating Button
```

Shared Jackpot label artwork is exported as an image. The jackpot amount is implemented as dynamic frontend text because the amount may change.

Handoff-only assets live outside `public` so they are not deployed as production runtime files:

```txt
handoff/assets/
  cover/cover.png
  qa-reference/reference-page-web.png
  qa-reference/reference-page-mobile.png
  wccp-favicon-source.png
  wccp-floating-button.webp
  wccp-floating-button.gif
  wccp-floating-button-inner-glow-triple-pulse-50-transparent.gif
  wccp-floating-button-inner-glow-triple-pulse-100-transparent.gif
```

QA reference images are exported from the Figma `Screens` page:

```txt
Screen/Home/Web
Screen/Home/Mobile
```

`wccp-floating-button.webp` is retained as an optional handoff asset. It is not used in the current Home demo unless product scope reintroduces it.
The GIF variants are optional animated Floating Button references and should not be deployed unless that feature is added back into product scope.

The current data file expects URLs like:

```ts
"/team-logos/Portugal.png"
```

If production uses a CDN, replace `logoUrl` in `data.ts` with the CDN paths.

`reference-page-web.png` and `reference-page-mobile.png` are QA reference exports. They are not production UI assets.

## Icons

Icons are exported from the Figma `Icons` page and saved in:

```txt
handoff/frontend/assets/icons/
```

The React icon components in `icons.tsx` use the same SVG paths and `currentColor`, so production can choose either approach:

- Use `icons.tsx` directly as React components.
- Or copy `assets/icons/*.svg` into the app asset pipeline and import them with SVGR.

Do not replace these with generic icon-library equivalents if visual parity with Figma is required.

## Required fonts

Use:

- Anton Regular for headings/display
- Manrope Regular/SemiBold/Bold for body, label and UI text

Example import:

```css
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;600;700;800&display=swap");
```

## Core interaction behavior

### Hero CTAs

- `Pick Your Champion` scrolls to Champion Selection.
- `How It Works` scrolls to the How It Works / FAQ section.

### Page section order

1. Hero
2. Invite Friends
3. Pick Your Champion
4. Prediction History
5. How It Works / FAQ

### Champion selection

1. User clicks a Team Card.
2. Confirmation dialog opens.
3. User confirms.
4. A new prediction record is appended to Prediction History.
5. Prediction success toast appears.
6. Available prediction chances decrease by one.

Important: prediction records append. Do not replace the previous record.

Champion Selection is gated by available prediction chances. When `availableChances <= 0`, every Team Card uses the existing disabled state and must not open the confirmation dialog.

```ts
const BASE_CHANCES = 1;
const MAX_REFERRAL_REWARDS = 5;

const availableChances = Math.max(
  BASE_CHANCES + successfulReferralCount - submittedPredictionCount,
  0
);

const championSelectionDisabled = availableChances <= 0;
```

### Invite Friends

1. User clicks Copy.
2. Copy toast appears.
3. Demo behavior: the local demo simulates one successful referral and advances progress:

```txt
0/5 → 1/5 → 2/5 → 3/5 → 4/5 → 5/5
```

At `5/5`:

- Copy button is disabled.
- No further toast appears.
- No further progress change occurs.

Production behavior: Copy only copies the invite URL and shows `Toast/Copy Feedback`. Referral progress and additional prediction chances must be derived from backend `successfulReferralCount`, not from local copy count. Each successful referral grants one additional prediction chance, up to `+5` from referrals.

### FAQ

Accordion supports open/closed state. The demo keeps one controlled `openId`.

## Backend contracts

Minimum payloads:

```ts
type Team = {
  id: string;
  name: string;
  logoUrl: string;
  stage: TournamentStage;
  selectable: boolean;
};

type Prediction = {
  id: string;
  userId?: string;
  teamId: string;
  teamName: string;
  teamLogoUrl: string;
  stage: TournamentStage;
  submittedAt: string;
};

type ReferralState = {
  inviteUrl: string;
  successfulReferrals: number; // 0–5
  maxReferrals: 5;
  copyEnabled: boolean; // successfulReferrals < maxReferrals
};

type PredictionChanceState = {
  baseChances: 1;
  successfulReferralCount: number; // 0–5
  submittedPredictionCount: number;
  availableChances: number; // max(1 + successfulReferralCount - submittedPredictionCount, 0)
  championSelectionDisabled: boolean; // availableChances <= 0
};
```

## Implementation notes

- Use `tokens.css` as the source of truth for colors, spacing, radius, typography and effects.
- Avoid hardcoding Figma frame widths. Use `.wccp-container`.
- Web content max width is `1280px`.
- Mobile content max width is `350px`.
- Mobile touch targets should be at least `48px`.
- Dialog currently has no scrim, matching the Figma component direction.
- Stage tabs are disabled except `Initial 48` in v1.
- Team Cards are disabled when `availableChances <= 0`.
- Backend state is the source of truth for submitted predictions and successful referrals.

## QA checklist

- Web 1440px and Mobile 440px match Figma Pages.
- All 48 Team Cards render.
- Team selection appends records.
- Initial state shows `1 left`.
- Confirming one prediction changes the counter to `0 left`.
- Team Cards are disabled and do not open the dialog at `0 left`.
- Demo only: copying an invite simulates a successful referral, increases referral progress and restores one available chance.
- Demo only: Copy advances only to `5/5`.
- Demo only: Copy is disabled at `5/5`.
- Production: referral progress and available chances come from backend `successfulReferralCount`.
- FAQ open/close works with keyboard.
- Dialog is keyboard reachable and confirm/cancel are clear.
- Team logos load with no layout shift.

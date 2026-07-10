# WCCP v1.0 Frontend Specification

Version: 1.0  
Date: 2026-07-09  
Scope: WCCP v1.0 frontend handoff and production implementation reference

## 1. Overview

WCCP is a World Cup Champion Prediction frontend experience. The page lets users review the campaign, copy an invite link, select a champion prediction, see submitted prediction history, and read rule details.

This specification defines the frontend implementation requirements for engineers taking over the project. It reflects the current handoff package in:

```txt
handoff/frontend/
```

Primary references:

- Figma: https://www.figma.com/design/ckTOMRoi5TtVcKFCYzjMbr/WCCP?node-id=1232-2
- Local package: `/Users/mrik/Documents/wccp v1.0/handoff/frontend`
- Current demo command: `npm run build && npm run preview`

## 2. Project Status

The current frontend handoff is a React + TypeScript + Vite implementation. It is intentionally framework-light and can be integrated into another frontend stack if needed.

Current implementation includes:

- One-page WCCP landing and prediction flow
- Responsive web and mobile layout
- Figma-derived design tokens
- 48 initial teams
- Referral progress demo logic
- Prediction submission demo logic
- Favicon, app icon, and manifest setup
- Production runtime assets under `public/`
- Handoff-only source and QA assets outside `public/`

Current implementation does not include:

- Backend persistence
- User authentication
- Real referral tracking
- Real prediction deadline enforcement
- Real wallet or phone number binding
- Real tournament stage unlock logic

## 3. Tech Stack

Required runtime:

- Node.js compatible with the current Vite toolchain
- React 19
- React DOM 19
- TypeScript 5.7
- Vite 6

Package scripts:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Script behavior:

- `npm run dev`: starts Vite dev server on `127.0.0.1`
- `npm run build`: creates production output in `dist/`
- `npm run preview`: serves the built `dist/`

Important: run commands from:

```txt
handoff/frontend/
```

Do not run npm commands from `/Users/mrik` or the repository root unless a root package is later added.

## 4. Directory Structure

```txt
handoff/
  assets/
    cover/
      cover.png
    qa-reference/
      reference-page-web.png
      reference-page-mobile.png
    wccp-favicon-source.png

  frontend/
    assets/icons/
      *.svg
    public/
      icons/
      images/
      team-logos/
      site.webmanifest
    src/main.tsx
    HomePage.tsx
    components.tsx
    patterns.tsx
    data.ts
    types.ts
    icons.tsx
    tokens.css
    globals.css
    components.css
    index.html
    package.json
    README.md
    FRONTEND_SPEC.md
```

Runtime files must live in `handoff/frontend/public/`.

Handoff-only, source, QA, or reference assets must live in `handoff/assets/` and must not be deployed as public runtime assets.

## 5. Page Architecture

The current app is a single route rendered by `HomePage`.

Page section order:

1. Hero
2. Invite Friends
3. Pick Your Champion
4. Prediction History
5. How It Works / FAQ

Main file:

```txt
HomePage.tsx
```

Composition:

```txt
HomePage
  Hero
  InviteFriends
  ChampionSelection
  PredictionHistory
  FAQ
  ConfirmationDialog
  Toast
```

The page uses local state for demo behavior only. In production, backend state must replace local demo state for referrals, submitted predictions, and stage availability.

## 6. Visual Design System

Design tokens are defined in:

```txt
tokens.css
```

Token categories:

- Color primitives
- Semantic colors
- Spacing
- Radius
- Stroke
- Control heights
- Typography
- Responsive grid values
- Shadows, focus rings, and glow effects

Brand colors:

```txt
Primary yellow: #ffcc00
Canvas/default dark: #0f0f0f
Surface dark: #1a1a1a
Raised surface: #242424
Primary text: #ffffff
Secondary text: #b8b8b8
Muted text: #8e8e93
```

Required fonts:

- Anton Regular for display and headings
- Manrope Regular, SemiBold, Bold, ExtraBold for body, labels, and UI

Current font import:

```html
https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;600;700;800&display=swap
```

Implementation rules:

- Use CSS variables from `tokens.css`.
- Do not hardcode Figma frame widths in components.
- Use `.wccp-container` for content width.
- Preserve component class names if integrating into another app.
- Do not replace WCCP SVG icons with generic icon-library icons unless visual parity is intentionally changed.

## 7. Responsive Requirements

Breakpoints:

```txt
Desktop: >= 1024px
Tablet: 768px to 1023px
Mobile: <= 767px
```

Content max width:

```txt
Desktop: 1280px
Tablet: 704px
Mobile: 350px
```

Grid token intent:

```txt
Desktop: 12 columns, 64px margin, 24px gutter
Tablet: 8 columns, 32px margin, 20px gutter
Mobile: 4 columns, 20px margin, 16px gutter
```

Mobile requirements:

- Main readable content must fit within 350px content width.
- Touch targets should be at least 48px where practical.
- Horizontal sections that overflow must use the existing styled scrollbar pattern.
- Text must not overlap controls, cards, logos, or background artwork.

## 8. Runtime Assets

Production runtime assets are under:

```txt
handoff/frontend/public/
```

Required public images:

```txt
public/images/hero-bg-web.png
public/images/hero-bg-mobile.png
public/images/shared-jackpot-label-web.png
public/images/shared-jackpot-label-mobile.png
```

Team logos:

```txt
public/team-logos/*.png
```

There must be exactly one logo for each team record in `data.ts`. The current set contains 48 team logos and matches the 48 teams in data.

Favicon and app icons:

```txt
public/icons/favicon.ico
public/icons/favicon-16.png
public/icons/favicon-32.png
public/icons/apple-touch-icon.png
public/icons/icon-192.png
public/icons/icon-512.png
public/site.webmanifest
```

Icon requirements:

- Exported icon files use a 20% rounded-corner mask.
- Source artwork remains unmasked in `handoff/assets/wccp-favicon-source.png`.
- `favicon.ico` must contain multiple sizes: 16, 24, 32, 48, 64, 128, 256.
- `site.webmanifest` must reference `icon-192.png` and `icon-512.png`.

Files that must not be deployed:

- `.DS_Store`
- QA reference images
- Figma cover image
- raw favicon source image

Handoff-only assets:

```txt
handoff/assets/cover/cover.png
handoff/assets/qa-reference/reference-page-web.png
handoff/assets/qa-reference/reference-page-mobile.png
handoff/assets/wccp-favicon-source.png
```

## 9. Data Model

Current TypeScript source:

```txt
types.ts
data.ts
```

Tournament stages:

```ts
type TournamentStage =
  | "initial-48"
  | "round-32"
  | "round-16"
  | "quarter-finals"
  | "semi-finals"
  | "final";
```

Team:

```ts
type Team = {
  id: string;
  group: string;
  order: number;
  name: string;
  zhName: string;
  logoUrl: string;
  stage: TournamentStage;
  selectable: boolean;
};
```

Prediction:

```ts
type Prediction = {
  id: string;
  teamId: string;
  teamName: string;
  teamLogoUrl: string;
  stage: TournamentStage;
  submittedAt: string;
};
```

Referral state:

```ts
type ReferralState = {
  inviteUrl: string;
  successfulReferrals: number;
  maxReferrals: number;
  copyEnabled: boolean;
  remainingVotingChances: number;
};
```

FAQ item:

```ts
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};
```

## 10. Functional Requirements

### 10.1 Hero

Hero must show:

- WCCP logo text
- Wallet or phone display
- Campaign kicker: `FIFA World Cup 2026`
- Main heading: `World Cup Champion Prediction`
- Shared jackpot visual label
- Dynamic jackpot amount text
- Primary CTA: `Pick Your Champion`
- Secondary CTA: `How It Works`

Current jackpot display:

```txt
KES 1,000,000
```

Current demo animation:

- Counts from 0 to 1,000,000 over 1600ms.
- Uses cubic easing.
- Respects `prefers-reduced-motion`.

CTA behavior:

- `Pick Your Champion` scrolls to `#champion-selection`.
- `How It Works` scrolls to `#how-it-works`.

### 10.2 Invite Friends

Invite Friends must show:

- Referral progress bar, 0 to 5
- Invite URL
- Copy icon button

Current invite URL:

```txt
https://ke7.com/wccp
```

Demo behavior:

- Copy writes the invite URL to clipboard if browser permission allows.
- Copy increments local referral count by 1.
- Referral progress caps at 5.
- Copy button is disabled at 5/5.
- Copy toast shows `Copied successfully`.

Production behavior:

- Copy should copy the URL and show feedback.
- Referral count must come from backend state, not from copy action.
- Successful referrals grant extra prediction chances.
- Maximum referral reward count is 5.

### 10.3 Champion Selection

Champion Selection must show:

- Stage tabs
- Available chance count
- Team cards

Current enabled stage:

```txt
Initial 48
```

Current disabled stages:

```txt
Round of 32
Round of 16
Quarter Finals
Semi Finals
Final
```

Selection flow:

1. User clicks an enabled team card.
2. Confirmation dialog opens.
3. User confirms.
4. Prediction record is prepended to Prediction History.
5. Toast shows `Prediction submitted successfully`.
6. Available chances decrease by 1.
7. Dialog closes.

Cancel flow:

1. User clicks Cancel.
2. Dialog closes.
3. No prediction is recorded.
4. Available chances are unchanged.

Chance calculation:

```ts
const BASE_CHANCES = 1;
const MAX_REFERRAL_REWARDS = 5;

const availableChances = Math.max(
  BASE_CHANCES + successfulReferralCount - submittedPredictionCount,
  0
);
```

Disabled behavior:

- When available chances are 0, all team cards must be disabled.
- Disabled team cards must not open the confirmation dialog.
- Stage tabs marked disabled must not be interactive.

### 10.4 Prediction History

Prediction History must show:

- Empty state if there are no predictions.
- List of submitted predictions if records exist.

Empty state copy:

```txt
No predictions yet
Your prediction history will appear here.
```

Prediction item must show:

- Team logo
- Team name
- Submitted timestamp
- Stage label

Records must append or prepend without replacing previous records. Current demo prepends newest first.

### 10.5 FAQ

FAQ must show accordion items from `faqItems`.

Current FAQ topics:

- Key Rules Summary
- How Predictions Work
- Prediction Deadline
- Invite Rewards
- Jackpot Sharing
- Finality of Predictions

Accordion requirements:

- Trigger must be a button.
- Trigger must expose `aria-expanded`.
- Content appears only when item is open.
- Current demo controls one open item at a time.

### 10.6 Toast

Toast is used for lightweight success feedback.

Current messages:

```txt
Copied successfully
Prediction submitted successfully
```

Requirements:

- Toast uses `role="status"`.
- Toast should not block interaction.
- Current demo dismisses after 1800ms.

### 10.7 Confirmation Dialog

Dialog appears when a team is selected.

Requirements:

- Dialog must use `role="dialog"`.
- Dialog must use `aria-modal="true"`.
- Title must be connected with `aria-labelledby`.
- Confirm and Cancel actions must be reachable by keyboard.

Current copy:

```txt
Confirm prediction
Submit {teamName} as your champion prediction?
Cancel
Confirm
```

Note: current design direction has no scrim behind the dialog. If production requires a modal scrim or focus trap, add it deliberately and validate against Figma.

## 11. Backend Integration Contract

The demo uses local state. Production must replace local state with backend-driven state.

### 11.1 Required initial page payload

Recommended shape:

```ts
type WccpPagePayload = {
  user: {
    id: string;
    displayPhone: string;
  };
  campaign: {
    id: string;
    title: string;
    jackpotCurrency: "KES";
    jackpotAmount: number;
    inviteUrl: string;
  };
  predictionState: {
    baseChances: 1;
    successfulReferralCount: number;
    maxReferralRewards: 5;
    submittedPredictionCount: number;
    availableChances: number;
  };
  stages: StageTab[];
  teams: Team[];
  predictions: Prediction[];
  faqItems: FAQItem[];
};
```

### 11.2 Submit prediction

Recommended endpoint:

```txt
POST /api/wccp/predictions
```

Request:

```ts
type SubmitPredictionRequest = {
  stage: TournamentStage;
  teamId: string;
};
```

Success response:

```ts
type SubmitPredictionResponse = {
  prediction: Prediction;
  predictionState: {
    submittedPredictionCount: number;
    availableChances: number;
  };
};
```

Frontend requirements:

- Disable duplicate submit while request is pending.
- On success, add returned prediction to history.
- On success, update available chances using backend response.
- On error, show a user-visible error toast or inline message.
- If backend returns no available chances, disable champion selection.

### 11.3 Referral state

Recommended endpoint:

```txt
GET /api/wccp/referrals
```

Response:

```ts
type ReferralResponse = {
  inviteUrl: string;
  successfulReferrals: number;
  maxReferrals: 5;
  copyEnabled: boolean;
};
```

Frontend requirements:

- Copy action should not itself increase successful referral count in production.
- Referral progress must update from backend state.
- Available chances must be recalculated by backend or by the shared formula.

### 11.4 Stage availability

Production must decide which stages are enabled.

Rules to confirm with product/backend:

- When does each stage unlock?
- Can users predict once per stage or across all stages?
- Are previous-stage predictions final after lock?
- What happens if a user has referral chances after a stage is locked?

Until product rules are final, keep all stages except `Initial 48` disabled.

## 12. Error, Empty, and Loading States

Required states for production:

- Initial loading
- Team list loading
- Team logo image failure
- Prediction submit pending
- Prediction submit success
- Prediction submit error
- No available chances
- No predictions yet
- Referral data loading
- Referral data error
- Clipboard unsupported or denied

Current demo implements:

- Empty prediction history
- Disabled team cards at 0 chances
- Disabled copy at 5 referrals
- Success toasts

Production must add:

- Error toast or inline error component
- Loading state for initial backend fetch
- Pending state for confirm submission

## 13. Accessibility Requirements

Minimum requirements:

- All interactive elements must be native buttons or links.
- Buttons must have accessible labels.
- Icon-only buttons must use `aria-label`.
- Accordion triggers must expose `aria-expanded`.
- Dialog must use `role="dialog"` and `aria-modal`.
- Toast must use `role="status"`.
- Images that are decorative should use empty `alt=""`.
- Team logos inside selectable cards may remain decorative if the team name text is present.
- Keyboard users must be able to select teams, copy invite, open FAQ, confirm, and cancel.
- Focus indicator must be visible and use the brand focus token.
- Respect `prefers-reduced-motion`.

Recommended production improvements:

- Add focus trap while confirmation dialog is open.
- Return focus to the selected team card after cancel or confirm.
- Add Escape key to close dialog if approved by product.
- Add visible error handling for clipboard failure.

## 14. Performance Requirements

Runtime asset requirements:

- Use only assets required by the page in `public/`.
- Keep QA and source assets outside `public/`.
- Avoid deploying `.DS_Store`.
- Team logos should be optimized PNGs or migrated to CDN/WebP if needed.
- Large hero images should be served with appropriate cache headers in production.

Current large assets:

- `hero-bg-web.png` is the largest runtime image.
- `hero-bg-mobile.png` is separate to avoid loading desktop artwork on mobile.

Recommended production improvements:

- Consider WebP or AVIF variants for hero backgrounds.
- Add width and height attributes where feasible to reduce layout shift.
- Use CDN caching for team logos and static images.

## 15. SEO, Metadata, and App Icons

Current `index.html` includes:

```html
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#0f0f0f" />
```

Production should add final SEO metadata if the page will be public:

- `description`
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata
- Canonical URL

## 16. QA Checklist

Functional QA:

- Page loads without console errors.
- Hero background loads on desktop.
- Hero background loads on mobile.
- Shared jackpot label image loads.
- Jackpot amount animates unless reduced motion is enabled.
- `Pick Your Champion` scrolls to Champion Selection.
- `How It Works` scrolls to FAQ.
- Invite copy button writes URL where browser allows clipboard.
- Invite progress caps at 5/5 in demo.
- Copy button disables at 5/5.
- Initial available chance shows `1 left`.
- Clicking a team opens confirmation dialog.
- Cancel closes dialog without creating prediction.
- Confirm creates a prediction history item.
- Confirm reduces available chance by 1.
- At 0 chances, team cards are disabled.
- Disabled team cards do not open dialog.
- Prediction records do not replace prior records.
- FAQ accordion opens and closes.

Responsive QA:

- 1440px desktop layout matches Figma intent.
- 1024px tablet layout remains readable.
- 768px layout has no overlap.
- 440px mobile layout matches mobile reference.
- 390px mobile layout remains usable.
- Touch targets are usable on mobile.
- Horizontal scroll sections do not break the page layout.

Asset QA:

- All 48 team logos load.
- No missing image requests.
- `favicon.ico` returns 200.
- `favicon-16.png` returns 200.
- `favicon-32.png` returns 200.
- `apple-touch-icon.png` returns 200.
- `icon-192.png` returns 200.
- `icon-512.png` returns 200.
- `site.webmanifest` returns 200 and references existing icons.
- No `.DS_Store` files are included in production output.
- `cover.png` and `reference-page-*` are not included in `dist/`.

Accessibility QA:

- Keyboard can reach all interactive controls.
- Focus ring is visible.
- Dialog buttons are keyboard reachable.
- Accordion has correct expanded state.
- Toast announcement is non-blocking.
- Reduced-motion mode does not animate jackpot count.

Build QA:

```bash
cd handoff/frontend
npm install
npm run build
npm run preview
```

Expected result:

- Build exits successfully.
- `dist/` contains only production runtime assets.
- Preview serves page at `http://localhost:4173/` by default.

## 17. Delivery Instructions

Recommended engineer handoff message:

```txt
WCCP frontend handoff is ready.

Frontend package:
handoff/frontend/

Run locally:
cd handoff/frontend
npm install
npm run build
npm run preview

Figma:
https://www.figma.com/design/ckTOMRoi5TtVcKFCYzjMbr/WCCP?node-id=1232-2

Notes:
- Runtime assets are in public/.
- Favicon/app icons are in public/icons/.
- site.webmanifest is included.
- Source favicon artwork is in handoff/assets/wccp-favicon-source.png.
- Exported icons use a 20% rounded-corner mask.
- QA reference and cover assets are outside public/ under handoff/assets/.
- Backend must replace local demo state for referrals, predictions, and stage availability.
```

## 18. Open Product Questions

These items should be confirmed before production launch:

1. Is the user allowed one prediction per stage or one prediction total plus referral chances?
2. What exact timestamp locks each tournament stage?
3. Are predictions editable before lock or final immediately after confirmation?
4. What qualifies as a successful referral?
5. Can referral rewards be earned after a prediction deadline?
6. What should happen if the predicted team becomes unavailable?
7. Should the jackpot amount be static, backend-driven, or live-updating?
8. What is the final production invite URL format?
9. Should the phone/wallet value be masked?
10. What backend error messages should be shown to users?

## 19. Definition of Done

Frontend is ready for production integration when:

- The page is wired to backend state.
- Prediction submission persists server-side.
- Referral count comes from backend.
- Stage availability comes from backend.
- All runtime assets return 200 in production.
- Favicon and manifest work on desktop and mobile.
- Keyboard and screen reader basics pass QA.
- Web and mobile layouts pass visual QA.
- No handoff-only files are deployed.
- Product has approved final copy, deadlines, and prediction rules.

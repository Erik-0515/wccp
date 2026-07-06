import { useMemo, useState } from "react";
import "./globals.css";
import "./components.css";
import { Button, ConfirmationDialog, Toast } from "./components";
import { ChampionSelection, FAQ, InviteFriends, PredictionHistory } from "./patterns";
import { teams } from "./data";
import type { Prediction, Team, TournamentStage } from "./types";

export function HomePage() {
  const [activeStage, setActiveStage] = useState<TournamentStage>("initial-48");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [referralCount, setReferralCount] = useState(0);
  const [toast, setToast] = useState<"copy" | "prediction" | null>(null);
  const availableChances = Math.max(1 + referralCount - predictions.length, 0);

  const visibleTeams = useMemo(() => {
    const referenceOrder = [
      "portugal",
      "south-africa",
      "south-korea",
      "czech-republic",
      "canada",
      "bosnia-and-herzegovina",
      "qatar",
      "switzerland",
      "brazil",
      "morocco",
      "haiti",
      "scotland",
      "usa",
      "paraguay",
      "australia",
      "turkey",
    ];
    return teams
      .filter((team) => team.stage === activeStage)
      .sort((a, b) => {
        const aIndex = referenceOrder.indexOf(a.id);
        const bIndex = referenceOrder.indexOf(b.id);
        if (aIndex !== -1 || bIndex !== -1) {
          return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
        }
        return 0;
      });
  }, [activeStage]);

  function showToast(next: "copy" | "prediction") {
    setToast(next);
    window.setTimeout(() => setToast(null), 1800);
  }

  function confirmPrediction() {
    if (!selectedTeam || availableChances <= 0) return;
    setPredictions((current) => [
      {
        id: `${selectedTeam.id}-${Date.now()}`,
        teamId: selectedTeam.id,
        teamName: selectedTeam.name,
        teamLogoUrl: selectedTeam.logoUrl,
        stage: activeStage,
        submittedAt: new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      },
      ...current,
    ]);
    setSelectedTeam(null);
    showToast("prediction");
  }

  function copyInvite() {
    if (referralCount >= 5) return;
    void navigator.clipboard?.writeText("https://ke7.com/wccp");
    setReferralCount((current) => Math.min(current + 1, 5));
    showToast("copy");
  }

  function selectTeam(team: Team) {
    if (availableChances <= 0) return;
    setSelectedTeam(team);
  }

  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="wccp-page">
      <picture className="wccp-page-bg" aria-hidden="true">
        <source media="(max-width: 767px)" srcSet="/images/hero-bg-mobile.png" />
        <img src="/images/hero-bg-web.png" alt="" />
      </picture>
      <Hero
        onPickChampion={() => scrollToSection("champion-selection")}
        onHowItWorks={() => scrollToSection("how-it-works")}
      />
      <div className="wccp-container wccp-main-stack">
        <div id="invite-friends" className="wccp-scroll-target">
          <InviteFriends inviteUrl="https://ke7.com/wccp" count={referralCount} onCopy={copyInvite} />
        </div>
        <div id="champion-selection" className="wccp-scroll-target">
          <ChampionSelection
            teams={visibleTeams}
            activeStage={activeStage}
            availableChances={availableChances}
            onStageChange={setActiveStage}
            onTeamSelect={selectTeam}
          />
        </div>
        <PredictionHistory predictions={predictions} />
        <div id="how-it-works" className="wccp-scroll-target">
          <FAQ />
        </div>
      </div>

      {selectedTeam ? (
        <div className="wccp-dialog-layer">
          <ConfirmationDialog team={selectedTeam} onCancel={() => setSelectedTeam(null)} onConfirm={confirmPrediction} />
        </div>
      ) : null}

      {toast ? (
        <div className="wccp-toast-layer">
          <Toast tone="success">{toast === "copy" ? "Copied successfully" : "Prediction submitted successfully"}</Toast>
        </div>
      ) : null}
    </main>
  );
}

function Hero({
  onPickChampion,
  onHowItWorks,
}: {
  onPickChampion: () => void;
  onHowItWorks: () => void;
}) {
  return (
    <section className="wccp-hero">
      <div className="wccp-hero__top">
        <strong className="wccp-logo">WCCP</strong>
        <span className="wccp-wallet">+254700000001</span>
      </div>
      <div className="wccp-hero__content">
        <p className="wccp-kicker">FIFA World Cup 2026</p>
        <h1>World Cup Champion Prediction</h1>
        <div className="wccp-shared-jackpot" aria-label="Shared Jackpot KES 1,000,000">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/shared-jackpot-label-mobile.png" />
            <img className="wccp-shared-jackpot__label" src="/images/shared-jackpot-label-web.png" alt="Shared Jackpot" />
          </picture>
          <strong>KES 1,000,000</strong>
        </div>
        <div className="wccp-hero__actions">
          <Button onClick={onPickChampion}>Pick Your Champion</Button>
          <Button variant="outline" onClick={onHowItWorks}>How It Works</Button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

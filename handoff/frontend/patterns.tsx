import { useState } from "react";
import { CopyIcon } from "./icons";
import {
  Accordion,
  AddressBar,
  EmptyState,
  IconButton,
  PredictionHistoryItem,
  ProgressBar,
  Section,
  Tab,
  TeamCard,
} from "./components";
import { faqItems, stageTabs } from "./data";
import type { FAQItem, Prediction, Team, TournamentStage } from "./types";

export function ChampionSelection({
  teams,
  activeStage,
  onStageChange,
  onTeamSelect,
}: {
  teams: Team[];
  activeStage: TournamentStage;
  onStageChange: (stage: TournamentStage) => void;
  onTeamSelect: (team: Team) => void;
}) {
  return (
    <Section
      title="Pick Your Champion"
      description="Select the team you predict will win the World Cup."
      accessory={<span className="wccp-chances">1 chance left</span>}
    >
      <div className="wccp-stage-tabs wccp-scrollbar">
        {stageTabs.map((stage) => (
          <Tab
            key={stage.id}
            label={stage.label}
            active={stage.id === activeStage}
            disabled={stage.disabled}
            onClick={() => onStageChange(stage.id)}
          />
        ))}
      </div>
      <div className="wccp-team-grid wccp-scrollbar">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} onSelect={onTeamSelect} />
        ))}
      </div>
    </Section>
  );
}

export function PredictionHistory({ predictions }: { predictions: Prediction[] }) {
  return (
    <Section title="Prediction History" description="Your submitted champion predictions.">
      {predictions.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="wccp-history-list wccp-scrollbar">
          {predictions.map((prediction) => (
            <PredictionHistoryItem key={prediction.id} prediction={prediction} />
          ))}
        </div>
      )}
    </Section>
  );
}

export function InviteFriends({
  inviteUrl,
  count,
  max = 5,
  onCopy,
}: {
  inviteUrl: string;
  count: number;
  max?: number;
  onCopy: () => void;
}) {
  const disabled = count >= max;
  return (
    <Section title="Invite Friends" description="Each successful referral gives you one additional voting chance.">
      <ProgressBar value={count} max={max} />
      <div className="wccp-invite-row">
        <AddressBar value={inviteUrl} />
        <IconButton label="Copy invite link" disabled={disabled} onClick={onCopy}>
          <CopyIcon />
        </IconButton>
      </div>
    </Section>
  );
}

export function FAQ({ items = faqItems }: { items?: FAQItem[] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? "");
  return (
    <Section title="How It Works" description="Key rules and prediction details." transparent>
      <div className="wccp-faq-list">
        {items.map((item) => (
          <Accordion key={item.id} title={item.question} open={openId === item.id} onToggle={() => setOpenId(openId === item.id ? "" : item.id)}>
            {item.answer}
          </Accordion>
        ))}
      </div>
    </Section>
  );
}

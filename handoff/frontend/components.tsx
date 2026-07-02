import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronDownIcon, ChevronUpIcon, HistoryIcon, LockIcon } from "./icons";
import type { Prediction, Team, TournamentStage } from "./types";

export function Section({
  title,
  description,
  accessory,
  children,
  transparent = false,
}: {
  title: string;
  description?: string;
  accessory?: ReactNode;
  children?: ReactNode;
  transparent?: boolean;
}) {
  return (
    <section className={transparent ? "wccp-section wccp-section--transparent" : "wccp-section"}>
      <header className="wccp-section__header">
        <div>
          <h2 className="wccp-section__title">{title}</h2>
          {description ? <p className="wccp-section__description">{description}</p> : null}
        </div>
        {accessory ? <div className="wccp-section__accessory">{accessory}</div> : null}
      </header>
      {children ? <div className="wccp-section__content">{children}</div> : null}
    </section>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md";
}) {
  return <button className={`wccp-button wccp-button--${variant} wccp-button--${size} ${className}`} {...props} />;
}

export function IconButton({
  label,
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button className={`wccp-icon-button ${className}`} aria-label={label} {...props}>
      {children}
    </button>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "brand" | "success" | "danger" }) {
  return <span className={`wccp-badge wccp-badge--${tone}`}>{children}</span>;
}

export function TeamCard({
  team,
  selected = false,
  disabled = false,
  onSelect,
}: {
  team: Team;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: (team: Team) => void;
}) {
  return (
    <button
      className={`wccp-team-card ${selected ? "is-selected" : ""}`}
      disabled={disabled || !team.selectable}
      onClick={() => onSelect?.(team)}
      type="button"
    >
      <img className="wccp-team-card__logo" src={team.logoUrl} alt="" />
      <span className="wccp-team-card__name">{team.name}</span>
    </button>
  );
}

export function Tab({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className={`wccp-tab ${active ? "is-active" : ""}`} disabled={disabled} onClick={onClick} type="button">
      {disabled ? <LockIcon className="wccp-tab__lock" size={20} /> : null}
      {label}
    </button>
  );
}

export function ProgressBar({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="wccp-progress" aria-label={`${value}/${max} referrals`}>
      <div className="wccp-progress__segments">
        {Array.from({ length: max }).map((_, index) => (
          <span key={index} className={index < value ? "is-active" : ""} />
        ))}
      </div>
      <strong className="wccp-progress__count">{value}/{max}</strong>
    </div>
  );
}

export function AddressBar({ value }: { value: string }) {
  return <div className="wccp-address-bar">{value}</div>;
}

export function Accordion({
  title,
  children,
  open,
  onToggle,
}: {
  title: string;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="wccp-accordion">
      <button className="wccp-accordion__trigger" onClick={onToggle} type="button" aria-expanded={open}>
        <span>{title}</span>
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {open ? <div className="wccp-accordion__content">{children}</div> : null}
    </div>
  );
}

export function Toast({ tone = "success", children }: { tone?: "success" | "error"; children: ReactNode }) {
  return <div className={`wccp-toast wccp-toast--${tone}`} role="status">{children}</div>;
}

export function ConfirmationDialog({
  team,
  onCancel,
  onConfirm,
}: {
  team: Team;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="wccp-dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <h2 id="confirm-title" className="wccp-dialog__title">Confirm prediction</h2>
      <p className="wccp-dialog__body">Submit <strong>{team.name}</strong> as your champion prediction?</p>
      <div className="wccp-dialog__actions">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="wccp-empty-state">
      <HistoryIcon />
      <strong>No predictions yet</strong>
      <span>Your prediction history will appear here.</span>
    </div>
  );
}

export function PredictionHistoryItem({ prediction }: { prediction: Prediction }) {
  return (
    <article className="wccp-history-item">
      <img className="wccp-history-item__logo" src={prediction.teamLogoUrl} alt="" />
      <div className="wccp-history-item__main">
        <strong>{prediction.teamName}</strong>
        <span>{prediction.submittedAt}</span>
      </div>
      <span className="wccp-history-item__stage">{formatStage(prediction.stage)}</span>
    </article>
  );
}

function formatStage(stage: TournamentStage) {
  const labels: Record<TournamentStage, string> = {
    "initial-48": "Initial 48",
    "round-32": "Round of 32",
    "round-16": "Round of 16",
    "quarter-finals": "Quarter Finals",
    "semi-finals": "Semi Finals",
    final: "Final",
  };
  return labels[stage];
}

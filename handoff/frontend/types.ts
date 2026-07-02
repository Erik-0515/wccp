export type TournamentStage =
  | "initial-48"
  | "round-32"
  | "round-16"
  | "quarter-finals"
  | "semi-finals"
  | "final";

export type StageTab = {
  id: TournamentStage;
  label: string;
  disabled: boolean;
};

export type Team = {
  id: string;
  group: string;
  order: number;
  name: string;
  zhName: string;
  logoUrl: string;
  stage: TournamentStage;
  selectable: boolean;
};

export type Prediction = {
  id: string;
  teamId: string;
  teamName: string;
  teamLogoUrl: string;
  stage: TournamentStage;
  submittedAt: string;
};

export type ReferralState = {
  inviteUrl: string;
  successfulReferrals: number;
  maxReferrals: number;
  copyEnabled: boolean;
  remainingVotingChances: number;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

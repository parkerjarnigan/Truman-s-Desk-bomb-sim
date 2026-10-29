export type ReadingLevel = 'accessible' | 'standard' | 'advanced';

export type BiasStance = 'pro-bomb' | 'anti-bomb';

export interface PressureGauges {
  military: number; // 0 to 100
  political: number; // 0 to 100
  public: number; // 0 to 100
}

export interface GaugeImpact {
  military?: number;
  political?: number;
  public?: number;
  summary: string;
}

export interface RoundChoice {
  id: string;
  label: string;
  description: string;
  impact: GaugeImpact;
  pedagogicalNote?: string;
  steersAntiBias?: boolean; // Used to challenge pre-existing bias
}

export interface PrimarySourceQuote {
  speaker: string;
  role: string;
  year?: string;
  quote: string;
  context?: string;
}

export interface HistoricalRoundData {
  roundNumber: number;
  dateString: string;
  title: string;
  subtitle: string;
  essentialQuestion: string;
  classification: string;
  readingVersions: {
    accessible: {
      proBombDetails: string[];
      antiBombDetails: string[];
      historicalOverview: string;
    };
    standard: {
      proBombDetails: string[];
      antiBombDetails: string[];
      historicalOverview: string;
    };
    advanced: {
      proBombDetails: string[];
      antiBombDetails: string[];
      historicalOverview: string;
    };
  };
  quotes: PrimarySourceQuote[];
  imagePath?: string;
  imageCaption?: string;
  choices: RoundChoice[];
}

export interface QTEFlashEvent {
  id: string;
  title: string;
  source: string;
  urgencyLevel: 'CRITICAL' | 'FLASH PRIORITY';
  situation: string;
  options: {
    id: string;
    actionText: string;
    consequenceText: string;
    impact: {
      military: number;
      political: number;
      public: number;
    };
  }[];
}

export interface DidYouKnowFact {
  roundNumber: number;
  headline: string;
  fact: string;
  historicalSignificance: string;
}

export interface RealityComparisonItem {
  decisionArea: string;
  simulationChoiceText: string;
  whatActuallyHappened: string;
  historicalActors: string;
  keyDivergence: string;
}

export interface SimulationState {
  stage: 'welcome' | 'primer' | 'bias' | 'game' | 'loading' | 'redacted-round6' | 'post-decision' | 'reality-ledger' | 'debrief';
  currentRoundIndex: number;
  readingLevel: ReadingLevel;
  initialBias: BiasStance | null;
  gauges: PressureGauges;
  gaugeHistory: { round: number; gauges: PressureGauges }[];
  choicesMade: Record<number, RoundChoice>;
  qteHistory: { eventId: string; optionId: string; timestamp: number }[];
  activeQTE: QTEFlashEvent | null;
  qteSecondsLeft: number;
  audioMuted: boolean;
  hasEncounteredCrisisCollapse: boolean;
  collapsedGaugeName?: 'military' | 'political' | 'public';
  finalDecision: 'drop' | 'withhold' | null;
  finalDecisionWeightFactor: string | null;
  counterfactualSeed: number;
  speedrunViolations: number;
}

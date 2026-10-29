# Truman's Desk: YOU Decide — Implementation Plan

An interactive historical simulation game designed for CP World History students at Oak Ridge High School, placing players behind President Harry S. Truman's Oval Office desk in the summer of 1945 to investigate primary sources, balance political/military pressures, survive sudden wartime crises, and decide the fate of the atomic bomb.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following new mechanics are incorporated:
> - **PS2/PS3 Era Inter-Round "Tactical Computing" Transition Screens**: Retro military/console aesthetic loading sequences between rounds that flash cycling cipher numbers, fluctuating needle dials, calculating probability indices, and curating context-rich **"DID YOU KNOW?"** historical archival facts relevant to the round just completed.
> - **"What Actually Happened" Historical Comparison Analysis**: A comprehensive post-decision debrief module that systematically cross-examines the student's choices against what President Truman, Secretary Stimson, General Marshall, and Emperor Hirohito actually did in July–August 1945.
> - **Pressure Gauge Starting Ranges & Calibration**:
>   - *Military Confidence*: Randomized between $70\%\text{–}85\%$
>   - *Political Pressure*: Randomized between $40\%\text{–}90\%$
>   - *Public Opinion*: Randomized between $50\%\text{–}75\%$
> - **Decision Impact Dynamics ($\sim 35\%$ Critical Probability)**: Each decision impacts relevant gauges by $5\%\text{–}25\%$. Rushed, poor, or extremist choices amplify gauge drops, creating an approximate $35\%$ probability of any gauge hitting $0\%$ across a full run.
> - **Catastrophic Gauge Collapse ($0\%$ Trigger) & Black-Bar Redactions**: Immediate jump to Round 6 with authentic classified redaction marker lines over skipped topics.
> - **Randomized Flash Telegrams (QTEs)**: Timed crisis cables that inject doubt and pressure with high replay variance.

---

### 1. Overview & Core Concept

- **What It Does**: Puts students in the shoes of President Truman from May to August 1945. Students review declassified dossiers, deliberate on key historical turning points across 6 detailed rounds, manage three live pressure meters (Military Confidence, Political Pressure, Public Opinion Polling), handle sudden breaking flash crises, navigate vintage tactical loading screens with historical trivia, and make the culminating decision to drop or withhold atomic weapons.
- **Target Audience / Persona**: CP World History students (designed for 8th–10th grade accessibility) and educators at Oak Ridge High School ("The Secret City").
- **Key Value**: Teaches deep historical empathy and avoids anachronism by limiting student knowledge to 1945 information. Features anti-speedrun reading checks, adaptive reading complexity, randomized high-intensity crisis interruptions, realistic gauge volatility with redacted outcomes, and a detailed "What Actually Happened" comparative debrief.

---

### 2. User Experience & Visual Design

#### Key User Flows

1. **Pre-Flight, Calibration & Pressure System Primer (Round 0)**:
   - Welcoming briefing from Oak Ridge High School World History Department.
   - **Trio Pressure System Primer**: Clear visual explanation of the three gauges:
     - *Military Confidence*: Willingness of armed forces to execute commands without revolt or morale collapse.
     - *Political Pressure*: Support from Allied heads of state (Churchill, Stalin) and Congressional leadership.
     - *Public Opinion*: Civilian patience with war rationing, gold-star notices, and homeland fatigue.
     - *Rule of Survival*: If any single meter hits $0\%$, your administration suffers a collapse of command authority, skipping all remaining intelligence rounds directly to a forced, blind final decision.
   - 3 introductory calibration questions disguised as "Adviser Briefing Preference" to adaptively set text complexity.
   - Pre-existing bias check: Students register their initial stance ("*I think the atomic bomb was probably the right decision*" vs "*I already am against the use of atomic weapons*"). The simulation subtly steers counter-arguments during gameplay to challenge assumptions.
   - Quotes from President Harry S. Truman and Major General Curtis LeMay frame the central historical debate.

2. **PS2/PS3 Era "Tactical Computing" Transition Screens**:
   - Triggered between rounds when an executive order is submitted.
   - Features animated oscillating analog dials, rapidly rolling cryptographic telemetry numbers, and a spinning Manhattan Project seal.
   - Displays a prominent **"DID YOU KNOW?"** archival bulletin card tied to the round just completed:
     - *Post-Round 1*: Did you know the U.S. Navy and Army Air Forces had already dropped over 63,000 tons of bombs and laid 12,000 naval mines around Japan by July 1945?
     - *Post-Round 2*: Did you know the Interim Committee met at the Pentagon with four Nobel Prize-winning physicists who debated a non-combat demonstration before unanimously rejecting it as too risky?
     - *Post-Round 3*: Did you know President Truman received a coded teletype in Potsdam saying "Babies satisfactorily born" to indicate the Trinity test succeeded beyond all physical expectations?
     - *Post-Round 4*: Did you know the Tokyo firebombing of March 9–10, 1945 generated 1,800°F winds strong enough to melt asphalt and boil canals?
     - *Post-Round 5*: Did you know Leo Szilard collected 70 scientist signatures at Oak Ridge and Chicago, but General Leslie Groves stamped it secret and hid it in a safe until after the war?

3. **The 1945 Oval Office Desk Experience & Gauge Volatility**:
   - **Tactile Desk Interface**: Top bar with simulation status, sound toggle, and Oak Ridge CP World History header.
   - **Live Dynamic Pressure Deck**:
     - Starting values: Military $70\%\text{–}85\%$, Political $40\%\text{–}90\%$, Public $50\%\text{–}75\%$.
     - Fluctuations: Calculated between $5\%\text{–}25\%$ based on option choice.
     - Warning threshold: Flashing amber telegraph indicator at $\le 10\%$.
     - Critical zero ($0\%$): Immediate klaxon telegraph alert and instant redirection to Round 6.
   - **Anti-Speedrun Comprehension Sentry**: If a student clicks an answer within $< 3$ seconds on heavy primary texts, Presidential Adjutant General Vaughan interrupts with a rapid comprehension check to ensure authentic reading.

4. **Randomized "Flash Telegram" Crisis Briefings (Quick-Time Events)**:
   - Sudden urgent cables marked **"TOP SECRET — PRIORITY DISPATCH — IMMEDIATE PRESIDENTIAL ACTION REQUIRED"** slam onto Truman's desk between and within rounds, accompanied by rapid teletype sound effects.
   - A pulsing 25-second timer bar simulates the frantic pressure of wartime leadership.
   - Randomized pool: Kamikaze Surge off Kyushu, Soviet Manchurian Mobilization Alert, USS Indianapolis Torpedo Tragedy, "Magic" Intercept Contradiction, Congressional Budget Investigation Threat, or Okinawa Civilian Resistance Debrief.

5. **The 6 Historical Briefing Rounds**:
   - **Round 1: How to End a War**: Naval blockade, starvation, and destroyed munitions vs. Okinawa casualty foreshadowing and 5 million Japanese soldiers under arms.
   - **Round 2: The Interim Committee**: Evaluating the 5 historical options.
   - **Round 3: The Nature of Atomic Weapons**: Strict anti-anachronism review of the July 16, 1945 Trinity Test.
   - **Round 4: The Limits of Conventional Weapons**: Devastation of Tokyo firebombing vs. ongoing refusal to surrender.
   - **Round 5: The Szilard Petition**: Leo Szilard's July 1945 petition; General Groves' decision to withhold it.
   - **Round 6: The Ultimate Decision**:
     - *Standard Path*: Full synthesis of all dossiers.
     - *Emergency Redacted Path (Triggered by 0% Gauge Collapse)*: Dramatic red-stamped memorandum: **"CABINET COLLAPSE / FORCED EXECUTIVE DIRECTIVE"** with heavy black-bar redactions over skipped intelligence.
     - Player chooses: **ORDER ATOMIC BOMBING** or **WITHHOLD ATOMIC WEAPONS**, and selects the primary factor that weighed heaviest.

6. **Post-Decision Branches & Historical Reality Contrast**:
   - **Branch YES (Drop the Bomb)**: Eyewitness testimonies of Hiroshima and Nagasaki survivors (Senji Yamaguchi, Shoji Sawada), photographs, thermal burn statistics, radiation sickness, and immediate/long-term geopolitical legacy.
   - **Branch NO (Withhold the Bomb)**: Randomized counterfactual simulation grounded in historical scholarship (Operation Downfall invasion casualties, Soviet Manchurian invasion dynamics, or diplomatic peace negotiations through the Emperor).
   - **"WHAT ACTUALLY HAPPENED" Comparative Reality Analysis**:
     - Direct side-by-side comparative ledger contrasting the player's choices vs Truman's real historical actions:
       - *Did Truman consider a warning?* (No — the Interim Committee advised dropping without warning on a dual military/urban target).
       - *Did Truman see the Szilard petition?* (No — General Groves deliberately classified and locked it away).
       - *Was the public polling known?* (Yes — Gallup polls in 1945 showed ~85% public approval for using the weapon).
       - *The Potsdam Declaration ultimatum & Japan's "Mokusatsu" response*.
       - *The Soviet Union's declaration of war on August 8, 1945*.
   - **Final Stance-Shift Debrief & Discussion Screen**: Compares the student's Round 0 bias with their final vote, records gauge volatility, and provides 3 synthesis reflection prompts for Oak Ridge classroom debrief.

#### Visual Identity & Theme
- **Aesthetic Direction**: 1945 Oval Office Executive Desk blended with tactical inter-round briefing screens.
- **Color Palette**:
  - Desktop Base: Deep vintage wood mahogany (`#1c1611`, `#2a2018`)
  - Dossier Surfaces: Aged archival parchment (`#fdfbf7`, `#f4ece1`)
  - Hairline Accents: Archival folder borders (`#d8caa8`)
  - Retro Transition Tone: Dark charcoal radar phosphor (`#121816`, `#1f2923`) with amber dial accents (`#f59e0b`)
  - Redaction solid black (`#0f0d0b`)
- **Typography**:
  - Display & Headings: `Source Serif 4` / `Merriweather` editorial serif.
  - Dossier Memos: Clean typewriter monospace (`IBM Plex Mono` / `Space Mono`) for archival memos, stamps, and telemetry.
  - Body Text: `Plus Jakarta Sans` for high legibility at 8th–10th grade reading levels.

---

### 3. Key Product Decisions & Trade-Offs

- **PS2/PS3 Era Inter-Round Loading Transition**: Provides tactile pacing and cognitive breathing room between dense text rounds, reinforces agency with calculating numbers, and sneakily delivers high-impact historical trivia ("Did You Know").
- **"What Actually Happened" Comparison Ledger**: Bridges the simulation game with actual historical evidence so students leave with factual mastery rather than mere speculation.
- **Probabilistic Gauge Collapse Engine**: Mathematically calibrated with starting variance ($70\text{–}85\%$, $40\text{–}90\%$, $50\text{–}75\%$) and decision swings ($5\text{–}25\%$) so approximately $35\%$ of ordinary runs experience a gauge reaching $0\%$.
- **Classified Redaction Visual Treatment**: Highlights the peril of incomplete intelligence in wartime executive leadership.

---

### 4. Technical Architecture & System Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRUMAN'S DESK APP                               │
├──────────────────────────────────────┬─────────────────────────────────┤
│ Top Bar: Oak Ridge High School CP    │ Audio Mute Toggle               │
│ World History / Truman Desk Wordmark │ Simulation Reset & Sound FX     │
├──────────────────────────────────────┴─────────────────────────────────┤
│                                                                        │
│  ┌───────────────────────┐  ┌──────────────────────────────────────┐  │
│  │     PRESSURE DECK     │  │          DOSSIER WORKSPACE           │  │
│  ├───────────────────────┤  ├──────────────────────────────────────┤  │
│  │ • Military: 70-85%    │  │ Top Secret Memo Tabs                 │  │
│  │ • Political: 40-90%   │  │ Primary & Secondary Sources          │  │
│  │ • Public: 50-75%      │  │ Historical Archival Quotes           │  │
│  │                       │  │ Reading Comprehension Sentry         │  │
│  │ Dynamic 5-25% swings  │  │ Interactive Decision Selection Deck   │  │
│  │ Warning at ≤10%       │  │ Consequence Previews & Stance Bias   │  │
│  │ If 0% ──► JUMP TO RD6 │  │ (If 0% hit: Redacted dossiers shown) │  │
│  └───────────────────────┘  └──────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  PS2/PS3 ERA TACTICAL COMPUTING & "DID YOU KNOW" TRANSITIONS     │  │
│  │  • Flashing cryptographic telemetry, needle dials, calculation   │  │
│  │  • Archival trivia card reflecting on the previous round         │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │       RANDOMIZED FLASH TELEGRAM / QTE OVERLAY (TIMED MODAL)      │  │
│  │   • Urgent Dispatch wire sound & visual priority telegraph       │  │
│  │   • 25-Second countdown tension bar                              │  │
│  │   • Sudden dilemma & presidential order repercussions            │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                       POST-GAME DEBRIEF STAGE                          │
│  • YES: Real Hiroshima/Nagasaki Testimonies & Archival Records         │
│  • NO: Counterfactual Historical Branch Matrix (Downfall vs Peace)     │
│  • "WHAT ACTUALLY HAPPENED": Point-by-point player vs 1945 reality     │
│  • Stance Shift Analysis (Round 0 Bias vs Round 6 Vote + QTE Logs)     │
│  • Analysis of Redacted/Early Jump if Gauge hit 0%                     │
│  • Classroom Reflection & Discussion Prompts                           │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Verification Plan
- Build and verify compilation with `compile_applet`.
- Verify responsive layout across desktop and tablet viewports.
- Test reading level switches, speedrun warning modal, pressure gauge limits, inter-round PS2/PS3 loading screens with trivia, randomized QTE triggers and timers, 0% gauge early-jump to Round 6 with black-bar redactions, all 6 round flows, YES branch historical accounts, NO branch counterfactual scenarios, "What Actually Happened" reality ledger, and stance-shift debrief.

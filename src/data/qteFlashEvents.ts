import { QTEFlashEvent } from '../types/simulation';

export const QTE_FLASH_EVENTS: QTEFlashEvent[] = [
  {
    id: 'qte_kamikaze_surge',
    title: 'MASS KAMIKAZE ATTACK ON PACIFIC FLEET STAGING FORCE',
    source: 'CINCPAC NAVAL TELETYPE — ADMIRAL NIMITZ',
    urgencyLevel: 'FLASH PRIORITY',
    situation: 'Japanese special attack suicide aircraft have broken through picket destroyers off Okinawa, striking two aircraft carriers and four transport ships. Casualty reports list 780 sailors killed. Fleet commanders demand immediate approval to execute massive retaliatory carpet-bombing of Kyushu airfields, warning that invasion troopships are sitting ducks.',
    options: [
      {
        id: 'kamikaze_retaliate_full',
        actionText: 'Authorize maximum retaliatory bombing of all southern air bases immediately.',
        consequenceText: 'Military commanders praise your decisiveness, but air resources are diverted from precision blockades and public anxiety spikes over mounting naval casualties.',
        impact: { military: +15, political: +5, public: -12 }
      },
      {
        id: 'kamikaze_pull_back_picket',
        actionText: 'Order naval carriers to pull back 100 miles beyond land-based fighter radius.',
        consequenceText: 'Protects American carriers and lives, but Navy brass complains that retreat emboldens Japanese suicide pilots and shows weakness.',
        impact: { military: -18, political: -10, public: +8 }
      },
      {
        id: 'kamikaze_accelerate_secret_strike',
        actionText: 'Demand General Spaatz expedite atomic strike readiness on Tinian to end the suicide madness.',
        consequenceText: 'Heightens pressure on atomic project technicians, risking hasty mistakes in bomb assembly.',
        impact: { military: +8, political: +12, public: -5 }
      }
    ]
  },
  {
    id: 'qte_soviet_mobilization',
    title: 'SOVIET RED ARMY BORDER MOBILIZATION DETECTED',
    source: 'MILITARY INTELLIGENCE DIVISION (G-2) — POTSDAM CABLE',
    urgencyLevel: 'CRITICAL',
    situation: 'Intercepted signals show Marshal Vasilevsky moving 1.5 million Soviet troops and 5,000 tanks along the Manchurian border a full ten days ahead of Stalin’s Yalta timetable. Diplomatic advisors warn that if the Red Army conquers Manchuria and northern Korea before Japan surrenders, Stalin will claim permanent territorial control and demand an occupation zone in northern Japan.',
    options: [
      {
        id: 'soviet_rush_surrender',
        actionText: 'Force immediate end to the war by any means before Soviet troops occupy Hokkaido.',
        consequenceText: 'Hardens determination to drop the atomic bomb immediately, even if doubts remain about Japanese peace feelers.',
        impact: { military: +12, political: +16, public: -8 }
      },
      {
        id: 'soviet_welcome_entry',
        actionText: 'Welcome Soviet entry: their invasion of Manchuria will crush Japan’s last continental army.',
        consequenceText: 'Relieves pressure on American invasion troops, but congressional conservatives attack you for "handing Asia to the Bolsheviks."',
        impact: { military: +8, political: -22, public: -6 }
      },
      {
        id: 'soviet_send_diplomatic_warning',
        actionText: 'Send urgent cable to Moscow demanding Stalin adhere strictly to agreed demarcation lines.',
        consequenceText: 'Maintains American geopolitical firmness, but sparks tense diplomatic friction at Potsdam.',
        impact: { military: -5, political: +6, public: +5 }
      }
    ]
  },
  {
    id: 'qte_indianapolis_sunk',
    title: 'DISASTER AT SEA: USS INDIANAPOLIS SUNK IN PHILIPPINE SEA',
    source: 'DEPARTMENT OF THE NAVY — EMERGENCY DISPATCH',
    urgencyLevel: 'FLASH PRIORITY',
    situation: 'The heavy cruiser USS Indianapolis, having just completed its secret mission delivering enriched uranium core components to Tinian, has been torpedoed and sunk by Japanese submarine I-58. Due to naval communications blunders, no rescue was initiated for four days. Over 800 young sailors have perished in shark-filled waters. The press is beginning to ask questions about why the ship had no escort.',
    options: [
      {
        id: 'indy_impose_total_blackout',
        actionText: 'Impose absolute wartime press censorship; do not release casualty figures until war ends.',
        consequenceText: 'Prevents immediate panic and protects project secrecy, but creates a ticking political bomb when families learn of the delay.',
        impact: { military: +6, political: -18, public: -14 }
      },
      {
        id: 'indy_full_transparency',
        actionText: 'Release the casualty report immediately and order a court-martial investigation.',
        consequenceText: 'The public is devastated by the horrific loss of life, but honors your honesty. Political pressure for a rapid end to the war reaches fever pitch.',
        impact: { military: -12, political: +8, public: -20 }
      },
      {
        id: 'indy_vow_swift_justice',
        actionText: 'Announce that those who sacrificed on the Indianapolis delivered the instrument of Japan’s final defeat.',
        consequenceText: 'Galvanizes public fury and military resolve, while sealing the commitment to use the weapon.',
        impact: { military: +14, political: +12, public: +10 }
      }
    ]
  },
  {
    id: 'qte_magic_intercept',
    title: 'THE "MAGIC" INTERCEPT CONTRADICTION: PEACE OR DECISIVE BATTLE?',
    source: 'ARMY SIGNALS INTELLIGENCE SERVICE (MAGIC DECRYPT)',
    urgencyLevel: 'CRITICAL',
    situation: 'Top-secret decrypts of Japanese Foreign Ministry cables reveal Ambassador Sato in Moscow begging the Soviets to mediate peace: "His Majesty desires that the war be terminated promptly." However, twenty minutes later, domestic Japanese radio broadcast the Imperial War Minister declaring: "100 million Japanese will fight with bamboo spears and stones to the death for Ketsu-Go." Which message represents the true Japanese position?',
    options: [
      {
        id: 'magic_test_peace_channel',
        actionText: 'Privately test the Moscow peace channel: offer to preserve the Emperor in exchange for immediate surrender.',
        consequenceText: 'Opens a potential path to peace without atomic destruction, but risks looking weak if the Japanese military rejects it.',
        impact: { military: -14, political: -16, public: +12 }
      },
      {
        id: 'magic_dismiss_as_deception',
        actionText: 'Dismiss the peace feelers as desperate delay tactics; prepare full military force.',
        consequenceText: 'Convinces staff that Japan’s military junta will only respond to catastrophic shock.',
        impact: { military: +16, political: +14, public: -8 }
      },
      {
        id: 'magic_demand_public_unconditional',
        actionText: 'Reiterate the Potsdam Declaration publicly: no conditions, no concessions.',
        consequenceText: 'Maintains Allied unity and public firmness, though moderate peace factions in Tokyo are silenced.',
        impact: { military: +10, political: +12, public: +6 }
      }
    ]
  },
  {
    id: 'qte_budget_treason_threat',
    title: 'SECRET CONGRESSIONAL COMMITTEE THREATENS MANHATTAN PROJECT INQUIRY',
    source: 'SENATE LIAISON OFFICE — CONFIDENTIAL MEMORANDUM',
    urgencyLevel: 'FLASH PRIORITY',
    situation: 'Key Congressional leaders have caught wind of massive unexplained expenditures in the War Department budget—over $2 billion vanished into secret sites in Oak Ridge, Hanford, and Los Alamos. A bipartisan committee chairman warns that unless this secret weapon yields immediate victory and saves American lives, he will launch public treason hearings after the war.',
    options: [
      {
        id: 'budget_threat_defy_congress',
        actionText: 'Tell the committee chairman to stand down: the President alone commands wartime strategy.',
        consequenceText: 'Defends executive prerogative, but inflames congressional fury that will handicap your post-war legislative agenda.',
        impact: { military: +8, political: -24, public: -5 }
      },
      {
        id: 'budget_threat_private_briefing',
        actionText: 'Give the committee chairman a classified top-secret briefing promising imminent results.',
        consequenceText: 'Pacifies Congress, but effectively boxes you into using the atomic bomb to justify the expenditure.',
        impact: { military: +6, political: +15, public: +4 }
      },
      {
        id: 'budget_threat_ignore_politics',
        actionText: 'Order Stimson to disregard domestic politics: military necessity alone will decide the bomb.',
        consequenceText: 'Demonstrates moral independence, though political advisors warn your administration is playing with fire.',
        impact: { military: -6, political: -12, public: +8 }
      }
    ]
  }
];

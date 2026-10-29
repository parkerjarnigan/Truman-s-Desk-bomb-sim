import { HistoricalRoundData } from '../types/simulation';
import battleOkinawaImg from '../assets/images/battle_okinawa_blockade_1945_1793239305691.jpg';
import interimCommitteeImg from '../assets/images/interim_committee_pentagon_1945_1793239305595.jpg';
import trinityTestImg from '../assets/images/trinity_test_1945_1793237473167.jpg';
import tokyoFirebombingImg from '../assets/images/tokyo_firebombing_aerial_1945_1793237474148.jpg';
import szilardPetitionImg from '../assets/images/szilard_petition_scientists_1945_1793239305691.jpg';

export const HISTORICAL_ROUNDS: HistoricalRoundData[] = [
  {
    roundNumber: 1,
    dateString: 'May 18, 1945',
    title: 'How to End a War',
    subtitle: 'Blockade & Starvation vs. Mainland Invasion Bloodshed',
    essentialQuestion: 'Was it necessary to use atomic weapons to end the war with Japan, or could traditional conventional methods force a surrender?',
    classification: 'WAR DEPARTMENT — EYES OF THE PRESIDENT',
    imagePath: battleOkinawaImg,
    imageCaption: 'U.S. Navy Pacific Fleet conducting naval blockade and shore bombardment off the Japanese perimeter, 1945.',
    readingVersions: {
      accessible: {
        proBombDetails: [
          '💥 Okinawa proved Japanese forces fight to the end: 12,000 Americans and over 100,000 Japanese died in just 10 weeks.',
          '⚔️ Japan’s army still has 5 million armed soldiers prepared to defend their beaches with fortified bunkers.',
          '⚠️ U.S. generals warn an Allied land invasion could cost hundreds of thousands of American soldier lives.'
        ],
        antiBombDetails: [
          '🏭 U.S. air bombing has already heavily damaged Japan’s main factories and munitions ability.',
          '⚓ A tight Allied naval blockade and sea mines have cut off all food, oil, and raw materials.',
          '🌾 Japanese civilians are starving. Many U.S. advisors believe Japan must surrender soon to prevent mass famine.'
        ],
        historicalOverview: 'President Truman sits in the Oval Office just weeks after Roosevelt’s death. The war in Europe is won, but the Pacific war rages on. Advisers are split: starve Japan into surrender with a naval blockade, or launch a bloody land invasion.'
      },
      standard: {
        proBombDetails: [
          'The brutal Okinawa campaign foreshadowed fanatical resistance: 12,000 Americans, 100,000 Japanese, and 100,000 Okinawan civilians perished in 10 weeks.',
          'While Japan’s navy and air force are mostly destroyed, its Army still commands 5 million men under arms constructing fortified beach defenses.',
          'Operation Downfall (the planned ground invasion of Kyushu and Honshu) is projected to cause massive casualties and drag fighting into 1946 or 1947.'
        ],
        antiBombDetails: [
          'By summer 1945, Japan’s key war industries and transport hubs are crippled from conventional bombing raids.',
          'Operation Starvation (naval mining and submarine blockades) has completely cut off Japan’s imports of food, crude oil, and coal.',
          'With domestic food rations diverted to the military, Japanese civilians face widespread starvation, leading advisors to argue surrender is imminent.'
        ],
        historicalOverview: 'President Truman confronts his first grand strategic dilemma. One faction of the Joint Chiefs urges continuing the naval blockade and aerial siege; another insists that military martial codes will never yield without total physical conquest or a shocking new blow.'
      },
      advanced: {
        proBombDetails: [
          'Ground casualty ratios on Okinawa approached 1:1. The Japanese military doctrine of Ketsu-Go ("Decisive Battle") aimed to bleed U.S. invasion forces to extract favorable armistice terms.',
          'Ultra decrypts confirm the Imperial Army concentrated 14 divisions—over 900,000 troops and 10,000 kamikaze planes—in southern Kyushu directly facing Operation Olympic landing beaches.',
          'General George Marshall warned that an amphibious assault against 5 million mobilized soldiers would test the limits of American endurance.'
        ],
        antiBombDetails: [
          'The U.S. Strategic Bombing Survey confirmed Japan’s war economy had reached near-total collapse: steel production dropped 79% and merchant shipping was 90% sunk.',
          'Harbor mining and naval interdiction completely severed food and fuel lines from Manchuria and Southeast Asia.',
          'Diplomatic decrypts revealed moderate court officials were seeking peace mediation through Moscow, suggesting surrender could be reached if the Emperor were spared.'
        ],
        historicalOverview: 'Declassified War Department memoranda demonstrate the tension between military expedience and diplomatic nuance. President Truman must weigh the certainty of ongoing Allied casualties against evidence that an isolated, starving island nation cannot sustain prolonged resistance.'
      }
    },
    quotes: [
      {
        speaker: 'President Harry S. Truman',
        role: 'President of the United States',
        year: '1945',
        quote: 'It occurred to me that a quarter of a million of the flower of our young manhood was worth a couple of Japanese cities, and I still think they were, and are.'
      },
      {
        speaker: 'Fleet Admiral William D. Leahy',
        role: 'Chief of Staff to President Truman',
        year: '1950',
        quote: 'It is my opinion that the use of this barbarous weapon at Hiroshima and Nagasaki was of no material assistance in our war against Japan. The Japanese were already defeated and ready to surrender because of the effective sea blockade.'
      }
    ],
    choices: [
      {
        id: 'c1_tighten_blockade',
        label: 'Tighten Naval Blockade & Starvation Ring',
        description: 'Rely on naval interdiction and mining. Avoid a bloody ground invasion, betting Japan will collapse internally.',
        impact: {
          military: -12,
          political: -8,
          public: +10,
          summary: 'Spares soldier lives near-term, but military chiefs worry about delay and politicians fear war dragging into 1946.'
        },
        steersAntiBias: true
      },
      {
        id: 'c1_prepare_olympic',
        label: 'Order Preparations for Operation Olympic Invasion',
        description: 'Mobilize Allied forces for a November 1, 1945 amphibious assault on Kyushu. Prepare the nation for heavy fighting.',
        impact: {
          military: +14,
          political: +10,
          public: -15,
          summary: 'Boosts officer morale, but public anxiety rises as families face another year of high casualties.'
        }
      },
      {
        id: 'c1_accelerate_secret_project',
        label: 'Direct Full Priority to the Secret S-1 Manhattan Project',
        description: 'Instruct Secretary Stimson to expedite the atomic program as the quickest potential escape from the invasion dilemma.',
        impact: {
          military: +10,
          political: +8,
          public: +5,
          summary: 'Keeps high-level options open while secretly investing in a potential knockout blow.'
        }
      }
    ]
  },
  {
    roundNumber: 2,
    dateString: 'May 31 – June 1, 1945',
    title: 'The Interim Committee',
    subtitle: 'Weighing Demonstration, Warning, and City Targets',
    essentialQuestion: 'What advice did top scientists, political advisors, and military strategists give President Truman about using the atomic bomb?',
    classification: 'SECRET — INTERIM COMMITTEE EXECUTIVE MINUTES',
    imagePath: interimCommitteeImg,
    imageCaption: 'The Interim Committee meeting at the Pentagon: military leaders, scientists, and diplomats debating atomic policy, 1945.',
    readingVersions: {
      accessible: {
        proBombDetails: [
          '📋 Advisers weighed 5 choices: an empty test demonstration, a military base strike, or an unannounced city strike.',
          '💣 Generals feared an isolated demonstration might be a dud. If the bomb failed in front of Japanese observers, it would embarrass the U.S.',
          '⚡ The committee concluded only a sudden shock attack on an active war target would shock Japan’s military into immediate surrender.'
        ],
        antiBombDetails: [
          '🏖️ Several scientists recommended a harmless demonstration on an empty island or Tokyo Bay with Japanese observers invited.',
          '📢 Others urged advance warning so innocent civilians could flee before the explosion.',
          '🕊️ Undersecretary of the Navy Ralph Bard warned that striking a populated city without warning violated American moral traditions.'
        ],
        historicalOverview: 'In late May 1945, the Interim Committee met at the Pentagon with Secretary Stimson, James Byrnes, and scientists Robert Oppenheimer and Enrico Fermi to decide whether to demonstrate the weapon or drop it on a city.'
      },
      standard: {
        proBombDetails: [
          'The committee debated five paths: demonstration before observers; demonstration on a military target with warning; military target without warning; city target with warning; or city target without warning.',
          'Oppenheimer’s scientific panel concluded no non-lethal demonstration would be spectacular enough to convince Japanese hardliners to surrender.',
          'With only two bombs ready by August, advisers argued that wasting one on an unpopulated demonstration was too risky if Japan remained defiant.'
        ],
        antiBombDetails: [
          'Undersecretary Ralph Bard argued that as a great humanitarian nation, the U.S. owed Japan advance warning before unleashing such power.',
          'Physicists warned that an unannounced attack on an urban population would trigger an immediate nuclear arms race with the Soviet Union.',
          'Warning Japan in advance would give civilians time to evacuate while still demonstrating the weapon’s unprecedented blast.'
        ],
        historicalOverview: 'The Interim Committee wrestled with whether shock value required urban destruction without warning, or whether American democratic principles demanded giving the enemy an opportunity to surrender first.'
      },
      advanced: {
        proBombDetails: [
          'Secretary Stimson’s consensus recommendation was clear: "The weapon should be used against Japan as soon as possible... against a dual target... and without prior warning."',
          'Oppenheimer noted high-altitude airbursts maximized blast effect, but warned that if a demonstration bomb failed to detonate, Japan could recover the unexploded plutonium core.',
          'Incoming Secretary of State James Byrnes emphasized that an immediate atomic end to the war would also restrain Soviet ambitions in post-war Asia.'
        ],
        antiBombDetails: [
          'The Franck Report from Chicago scientists argued international control of atomic energy was paramount and an unannounced strike would destroy global trust.',
          'Ralph Bard’s formal dissent urged: "The Japanese government is searching for every possible opportunity to surrender... preliminary warning with assurances regarding the Emperor would likely suffice."',
          'Targeting an isolated naval base (such as Truk or Kure) with prior notice would preserve military legitimacy under the rules of war.'
        ],
        historicalOverview: 'The Interim Committee established official atomic doctrine. By unanimously recommending direct combat use on a war-production urban center without warning, the committee set the momentum toward Hiroshima.'
      }
    },
    quotes: [
      {
        speaker: 'Secretary of War Henry L. Stimson',
        role: 'Chairman of the Interim Committee',
        year: '1945',
        quote: 'The bomb seemed to me to be the most promising way of bringing the war to an end quickly, and of saving hundreds of thousands of American and Japanese lives.'
      },
      {
        speaker: 'Ralph A. Bard',
        role: 'Undersecretary of the Navy',
        year: 'June 27, 1945',
        quote: 'The United States has been a great humanitarian nation... Ever since I have been in touch with this program, I have had a feeling that before the bomb is actually used, some preliminary warning should be given to Japan.'
      }
    ],
    choices: [
      {
        id: 'c2_adopt_interim_consensus',
        label: 'Adopt Committee Consensus: Urban Center with No Warning',
        description: 'Endorse Stimson’s finding: target an industrial war-production city without warning to ensure maximum psychological shock.',
        impact: {
          military: +12,
          political: +10,
          public: -8,
          summary: 'Solidifies cabinet alignment and military readiness, though moral advisors voice intense concern.'
        }
      },
      {
        id: 'c2_urban_center_with_warning',
        label: 'Authorize Strike Against an Urban Center with Warning',
        description: 'Broadcast radio ultimatums or drop evacuation leaflets 48 hours in advance before detonating over an urban industrial hub.',
        impact: {
          military: -12,
          political: +8,
          public: +6,
          summary: 'Preserves humanitarian prestige and allows civilians to flee, but gives enemy anti-aircraft defenses time to prepare and risks Allied POW relocation.'
        }
      },
      {
        id: 'c2_military_target_no_warning',
        label: 'Authorize Strike Against a Military Target with No Warning',
        description: 'Order an unannounced surprise strike strictly aimed at a prime combatant fortress, such as the Kure naval arsenal or Truk anchorage.',
        impact: {
          military: +14,
          political: +6,
          public: +5,
          summary: 'Inflicts sudden destruction on major enemy warships and army depots without targeting dense civilian neighborhoods.'
        }
      },
      {
        id: 'c2_military_target_with_warning',
        label: 'Authorize Strike Against a Military Target with Warning',
        description: 'Broadcast warnings to evacuate naval docks and munitions depots 24 hours prior, targeting military hardware while giving personnel time to disperse.',
        impact: {
          military: -6,
          political: +5,
          public: +8,
          summary: 'Spares non-combatants and concentrates purely on military facilities, but reduces shock impact and invites anti-aircraft interception.'
        }
      },
      {
        id: 'c2_order_technical_demonstration',
        label: 'Order a Non-Combat Demonstration with Warning',
        description: 'Invite Japanese and international observers to witness a test detonation over Tokyo Bay or an uninhabited Pacific atoll, demanding immediate surrender.',
        impact: {
          military: -18,
          political: -12,
          public: +12,
          summary: 'Wins praise from ethical scientists, but generals warn: "If the bomb is a dud, America will be the laughingstock of Tokyo."'
        },
        steersAntiBias: true
      }
    ]
  },
  {
    roundNumber: 3,
    dateString: 'July 16 – July 21, 1945',
    title: 'The Nature of Atomic Weapons',
    subtitle: 'The Trinity Test: Super Bomb or a New Era?',
    essentialQuestion: 'What was actually known about atomic weapons in the summer of 1945? Were they viewed as bigger conventional bombs or something transformative?',
    classification: 'TOP SECRET — MANHATTAN PROJECT CABLE "TRINITY"',
    imagePath: trinityTestImg,
    imageCaption: 'Archival photo of the Trinity test fireball explosion in the New Mexico desert, July 16, 1945.',
    readingVersions: {
      accessible: {
        proBombDetails: [
          '🧪 On July 16, 1945, the Trinity test proved the bomb worked with the power of 20,000 tons of TNT—far larger than expected.',
          '📻 General Groves cabled Truman at Potsdam: "The test was successful beyond all expectations."',
          '✈️ Most American leaders saw the atomic bomb as a "super bomb" that could do in seconds what thousands of B-29s took months to achieve.'
        ],
        antiBombDetails: [
          '🔥 The blast created heat thousands of times hotter than the sun, melting desert sand into green glass.',
          '😨 Scientists like Robert Oppenheimer were stunned, later recalling: "Now I am become Death, the destroyer of worlds."',
          '☢️ In 1945, politicians knew almost nothing about radiation sickness, which would kill thousands of survivors weeks after the blast.'
        ],
        historicalOverview: 'In summer 1945, the White House could only act upon what was physically known at the time. To Truman, the bomb was a revolutionary technology developed in a race against Nazi Germany. Trinity proved it worked, but its unprecedented power astonished its creators.'
      },
      standard: {
        proBombDetails: [
          'The Trinity blast yielded roughly 20,000 tons of TNT, vaporizing a steel test tower and breaking windows 120 miles away.',
          'General Groves reported a single B-29 carrying one atomic bomb equaled the destructive force of 2,000 conventional bombers.',
          'Truman wrote in his diary: "We have discovered the most terrible bomb in the history of the world... but it can be made the most useful."'
        ],
        antiBombDetails: [
          'The detonation produced persistent radioactive fallout clouds and thermal radiation causing burns miles away.',
          'Several Manhattan Project physicists, shaken by the explosion, began circulating urgent appeals against unannounced combat use.',
          'Medical understanding was dangerously primitive: General Groves incorrectly assumed radiation was non-fatal or brief.'
        ],
        historicalOverview: 'The Trinity test was a watershed. Military commanders viewed atomic weapons as super-sized ordnance to guarantee urban destruction, yet scientists recognized humanity now possessed the tools for self-annihilation.'
      },
      advanced: {
        proBombDetails: [
          'Plutonium implosion telemetry confirmed critical mass exceeded expectations, producing a 600-foot fireball in 0.05 seconds.',
          'The success transformed Truman’s posture at Potsdam; Churchill noted Truman became visibly firmer in negotiations with Stalin.',
          'The weapon provided unilateral leverage to compel Japanese capitulation without making concessions regarding Manchurian territorial spheres.'
        ],
        antiBombDetails: [
          'Theoretical unknowns were profound: scientists had even calculated whether atmospheric nitrogen could ignite.',
          'Fallout tracking was rudimentary, exposing civilian ranches downwind without evacuation or radiological safety protocols.',
          'Treating atomic weapons as conventional super-bombs obscured the unique moral gravity of releasing lingering, invisible radiation.'
        ],
        historicalOverview: 'Stepping into 1945 requires stripping away modern nuclear taboos. Truman was a WWI artillery veteran who viewed explosives through combat utility. Yet the Potsdam dispatches described an unprecedented weapon that redefined human history.'
      }
    },
    quotes: [
      {
        speaker: 'President Harry S. Truman',
        role: 'Diary entry at Potsdam',
        year: 'July 25, 1945',
        quote: 'We have discovered the most terrible bomb in the history of the world. . . . It seems to be the most terrible thing ever discovered, but it can be made the most useful.'
      },
      {
        speaker: 'J. Robert Oppenheimer',
        role: 'Director of Los Alamos Laboratory',
        year: '1945',
        quote: 'We knew the world would not be the same. A few people laughed, a few people cried. Most people were silent.'
      }
    ],
    choices: [
      {
        id: 'c3_treat_as_military_weapon',
        label: 'Classify as Standard Military Ordnance in the Arsenal',
        description: 'View the bomb as a legitimate, super-sized conventional weapon to be dropped as soon as weather permits.',
        impact: {
          military: +14,
          political: +12,
          public: +5,
          summary: 'Streamlines operational command to General Carl Spaatz; removes civilian delays.'
        }
      },
      {
        id: 'c3_require_personal_presidential_release',
        label: 'Retain Absolute Presidential Veto Over Every Atomic Strike',
        description: 'Refuse automatic military deployment. Demand every individual strike order be signed personally by the President.',
        impact: {
          military: -8,
          political: +10,
          public: +8,
          summary: 'Establishes civilian control over nuclear weapons, despite Pentagon resistance.'
        }
      },
      {
        id: 'c3_disclose_to_allies_and_soviets',
        label: 'Fully Brief Churchill and Stalin on Atomic Reality at Potsdam',
        description: 'Brief Allied leaders fully on the weapon’s destructive reality to lay groundwork for post-war international control.',
        impact: {
          military: -10,
          political: -16,
          public: -6,
          summary: 'Stirs deep political backlash from Congress and anti-communist advisors who demand keeping the secret.'
        },
        steersAntiBias: true
      }
    ]
  },
  {
    roundNumber: 4,
    dateString: 'July 24, 1945',
    title: 'The Limits of Conventional Weapons',
    subtitle: 'The Firestorm of Tokyo and 67 Ash Cities',
    essentialQuestion: 'Did the massive destruction of Japanese cities by conventional firebombing prove conventional weapons could end the war, or prove an atomic shock was required?',
    classification: 'AIR FORCE INTELLIGENCE — DAMAGE ASSESSMENT PACIFIC',
    imagePath: tokyoFirebombingImg,
    imageCaption: 'Archival reconnaissance photo showing total incineration of Tokyo urban districts following Operation Meetinghouse.',
    readingVersions: {
      accessible: {
        proBombDetails: [
          '🔥 U.S. firebombing destroyed 67 Japanese cities, yet Japan’s military leaders still refused to surrender.',
          '🌪️ The March 1945 Tokyo firestorm killed over 100,000 people in just six hours.',
          '❓ If destroying 67 cities with conventional bombs did not break Japan’s military rulers, conventional weapons alone may never work.'
        ],
        antiBombDetails: [
          '🏚️ Firebombing had already destroyed 180 square miles and killed over 300,000 civilians.',
          '👨‍👩‍👧 The U.S. Strategic Bombing Survey noted most victims in Tokyo were women, children, and the elderly.',
          '🛑 Critics argued the U.S. had already crossed moral boundaries; dropping an atomic bomb would only escalate civilian slaughter.'
        ],
        historicalOverview: 'Under Major General Curtis LeMay, U.S. bombers used napalm and incendiary bombs to burn out Japan’s wood-and-paper cities. Yet despite immense devastation, Japan’s Supreme War Council remained deadlocked.'
      },
      standard: {
        proBombDetails: [
          'The U.S. firebombing campaign incinerated 180 square miles across 67 cities, killing 300,000 people and injuring 400,000.',
          'Operation Meetinghouse in Tokyo created an 1,800°F firestorm, killing more people in six hours than any six-hour period in history.',
          'Yet the Imperial military showed zero sign of surrender, mobilizing civilians with bamboo spears under the slogan of national self-sacrifice.'
        ],
        antiBombDetails: [
          'The Tokyo raids marked a deliberate shift toward targeting urban population zones to instill terror.',
          'General LeMay privately remarked: "I suppose if I had lost the war, I would have been tried as a war criminal."',
          'With nearly every major industrial center already flat, dropping atomic bombs on remaining secondary cities was seen by critics as militarily redundant.'
        ],
        historicalOverview: 'Conventional bombing demonstrated the limits of aerial destruction. Despite catastrophic civilian suffering, the military junta in Tokyo kept power, raising the question of whether an atomic blast was just "more of the same" or a unique shock.'
      },
      advanced: {
        proBombDetails: [
          'Conventional saturation campaigns required thousands of B-29 sorties and massive fuel reserves while exposing aircrews to flak.',
          'The military regime’s reaction to 67 leveled cities demonstrated that conventional airpower alone could not break Ketsu-Go.',
          'A single weapon dropped by a lone plane offered an unprecedented psychological shock: proof America could erase an entire city at will with zero risk.'
        ],
        antiBombDetails: [
          'The U.S. Strategic Bombing Survey later concluded: "Certainly prior to 31 December 1945... Japan would have surrendered even if the atomic bombs had not been dropped."',
          'Secretary of War Stimson was privately appalled by civilian casualties, warning Truman the U.S. risked outdoing Hitler in atrocities if urban raids continued.',
          'Targeting pristine cities that had been spared from conventional bombing merely to measure atomic blast radius crossed ethical limits.'
        ],
        historicalOverview: 'The Joint Chiefs confront the grim reality of total war in the summer of 1945. Both sides have abandoned pre-war restrictions against targeting civilian centers. For President Truman, the burning strategic question is whether continuing conventional incendiary raids is genuinely more humane than deploying an atomic shock that might end the war in a single afternoon.'
      }
    },
    quotes: [
      {
        speaker: 'Major General Curtis LeMay',
        role: 'Commander, 21st Bomber Command',
        year: 'September 20, 1945',
        quote: 'The atomic bomb had nothing to do with the end of the war at all. The war would have been over in two weeks without the Russians and without the atomic bomb.'
      },
      {
        speaker: 'U.S. Strategic Bombing Survey',
        role: 'Official Government War Report',
        year: '1946',
        quote: 'Probably more persons lost their lives by fire at Tokyo in a six-hour period than at any time in the history of man. . . . The largest number of victims were the most vulnerable: women, children, and the elderly. Still, the Japanese government did not surrender.'
      }
    ],
    choices: [
      {
        id: 'c4_conclude_conventional_insufficient',
        label: 'Conclude Conventional Bombing Has Failed to Force Surrender',
        description: 'Decide that conventional bombing only hardens military resolve, making an atomic shock necessary.',
        impact: {
          military: +14,
          political: +10,
          public: -6,
          summary: 'Aligns presidential policy toward atomic employment as the primary alternative to land invasion.'
        }
      },
      {
        id: 'c4_halt_urban_firebombing',
        label: 'Halt Urban Firebombing on Humanitarian Grounds',
        description: 'Order General LeMay to restrict bombing exclusively to verified tactical docks and railways.',
        impact: {
          military: -16,
          political: -10,
          public: +12,
          summary: 'Reduces civilian casualties, but commanders protest that precision bombing in cloudy Japan is ineffective.'
        },
        steersAntiBias: true
      },
      {
        id: 'c4_issue_potsdam_ultimatum',
        label: 'Issue Potsdam Ultimatum Warning of "Prompt Destruction"',
        description: 'Send a final diplomatic ultimatum demanding unconditional surrender or face unprecedented ruin.',
        impact: {
          military: +8,
          political: +12,
          public: +6,
          summary: 'Sets a formal diplomatic deadline, placing the burden of refusal publicly on Tokyo.'
        }
      }
    ]
  },
  {
    roundNumber: 5,
    dateString: 'July 17 – August 1, 1945',
    title: 'The Szilard Petition',
    subtitle: 'The Manhattan Project Scientists Speak Out',
    essentialQuestion: 'Should President Truman have listened to the scientists who built the atomic bomb when they urged him not to use it without warning?',
    classification: 'CONFIDENTIAL — WITHHELD BY MANHATTAN PROJECT COMMAND',
    imagePath: szilardPetitionImg,
    imageCaption: 'Manhattan Project scientists reviewing petitions and nuclear physics documentation, July 1945.',
    readingVersions: {
      accessible: {
        proBombDetails: [
          '🎖️ General Leslie Groves believed scientists understood physics but did not understand military strategy or the realities of war.',
          '📊 A poll showed over 80% of Manhattan Project scientists supported some military use to end the war quickly.',
          '🗄️ General Groves chose not to deliver the Szilard petition to Truman, fearing it would cause confusion and delay.'
        ],
        antiBombDetails: [
          '📜 Leo Szilard and 69 other scientists signed a petition urging Truman not to use the bomb without first stating terms of surrender.',
          '🌐 The petition warned that using atomic weapons would start an uncontrolled global nuclear arms race.',
          '🇩🇪 Scientists argued that because Nazi Germany was defeated, the original reason for building the bomb was gone.'
        ],
        historicalOverview: 'In July 1945, physicist Leo Szilard led a petition of conscience among the scientists who built the bomb, urging Truman to offer surrender terms first. But General Groves classified and delayed the petition so it never reached the Oval Office.'
      },
      standard: {
        proBombDetails: [
          'General Groves viewed Szilard as a political agitator violating military security oaths, taking administrative steps to hold the petition.',
          'Many scientists, including Oppenheimer, declined to sign, arguing scientists had no special moral authority to dictate foreign policy.',
          'With American soldiers dying daily in the Pacific, military leaders argued delaying the weapon for philosophical debates was unacceptable.'
        ],
        antiBombDetails: [
          'The petition warned: "Cities of the United States as well as the cities of other nations will be in continuous danger of sudden annihilation."',
          'Scientists requested that Truman first publicize the terms of surrender, particularly whether Emperor Hirohito could remain.',
          'A later government report noted: "President Truman, faced with one of the great moral decisions of history, was denied access to the petitions of many nuclear scientists."'
        ],
        historicalOverview: 'This debate highlights the tension between scientific responsibility and military control. Were the scientists naive idealists or prophets of the Cold War? And what happens when generals withhold dissenting counsel from an elected president?'
      },
      advanced: {
        proBombDetails: [
          'The Compton Poll indicated only ~15% favored an unannounced urban strike, but over 80% supported military application to force capitulation.',
          'Oppenheimer actively discouraged Edward Teller from circulating petitions, arguing scientists should provide technical tools, not foreign policy.',
          'From the War Department’s view, spending $2 billion on a secret weapon and refusing to use it while soldiers died would be politically indefensible.'
        ],
        antiBombDetails: [
          'The Franck Report predicted an unannounced nuclear strike would poison American moral standing and guarantee an arms race with the Soviet Union.',
          'Szilard tried to meet James Byrnes, but Byrnes dismissed him, arguing the weapon was necessary to show strength to Moscow.',
          'Groves routed the petition into bureaucratic limbo, stamping it "Secret" until after Hiroshima and Nagasaki.'
        ],
        historicalOverview: 'Cabinet deliberations enter the realm of scientific responsibility and bureaucratic filtering. Declassified records confirm President Truman was never presented with the Szilard petition prior to his decision, demonstrating how information filtering by senior advisors decisively shapes the trajectory of presidential power.'
      }
    },
    quotes: [
      {
        speaker: 'The Szilard Petition',
        role: 'Signed by 70 Manhattan Project Scientists',
        year: 'July 17, 1945',
        quote: 'If after the war a situation is allowed to develop in the world which permits rival powers to be in uncontrolled possession of these new means of destruction, the cities of the United States as well as the cities of other nations will be in continuous danger of sudden annihilation.'
      },
      {
        speaker: 'U.S. Congressional Report',
        role: 'Official Historical Findings',
        year: '1963',
        quote: 'President Truman, faced with one of the great moral decisions of human history, was denied access to the petitions of many American nuclear scientists who opposed the dropping of the atomic bomb on Hiroshima without warning.'
      }
    ],
    choices: [
      {
        id: 'c5_demand_groves_produce_petitions',
        label: 'Overrule General Groves: Demand Delivery of All Scientist Petitions',
        description: 'Order military intelligence to deliver all petitions immediately and hold a White House hearing with Leo Szilard and Robert Oppenheimer.',
        impact: {
          military: -14,
          political: -8,
          public: +10,
          summary: 'Restores presidential access to vital scientific dissent, provoking fury from military brass.'
        },
        steersAntiBias: true
      },
      {
        id: 'c5_trust_groves_and_advisors',
        label: 'Trust General Groves and Secretary Byrnes to Filter Dissent',
        description: 'Rely on official cabinet channels; leave technical and ethical filtering to military leadership and the Interim Committee.',
        impact: {
          military: +12,
          political: +10,
          public: -6,
          summary: 'Maintains unbroken chain of command and speed of execution as the August strike deadline approaches.'
        }
      },
      {
        id: 'c5_clarify_terms_regarding_emperor',
        label: 'Modify Potsdam Terms to Guarantee the Emperor’s Safety',
        description: 'Send a confidential diplomatic signal confirming unconditional surrender will not mean the trial or execution of Emperor Hirohito.',
        impact: {
          military: -6,
          political: -18,
          public: -12,
          summary: 'Opens a potential peace path, but political hardliners and public polls scream against sparing the Emperor.'
        }
      }
    ]
  },
  {
    roundNumber: 6,
    dateString: 'August 3, 1945',
    title: 'The Ultimate Decision: Drop or Withhold',
    subtitle: 'President Truman at the Crossroads of History',
    essentialQuestion: 'Should President Truman choose to drop atomic bombs on Hiroshima and Nagasaki?',
    classification: 'TOP SECRET — WHITE HOUSE EXECUTIVE DIRECTIVE',
    imagePath: '/src/assets/images/atomic_aftermath_ruins_1945_1793237475084.jpg',
    imageCaption: 'Devastation of Hiroshima: Archival record of atomic bomb destruction, August 1945.',
    readingVersions: {
      accessible: {
        proBombDetails: [
          '✅ Ordering the atomic bomb will likely end the bloodiest war in human history within days.',
          '🛡️ It spares hundreds of thousands of American soldiers and millions of Japanese civilians from a prolonged land invasion.',
          '💰 It justifies the $2 billion spent on the secret Manhattan Project and demonstrates American strength to the world.'
        ],
        antiBombDetails: [
          '🏙️ Dropping the bomb on inhabited cities will instantly incinerate over 100,000 men, women, and children and poison thousands with radiation.',
          '⚠️ It launches the dangerous nuclear age and sets a precedent of using atomic weapons against civilian populations.',
          '🕊️ Alternative paths—tightening the naval blockade, clarifying the Emperor’s future, or awaiting Soviet entry—might end the war without atomic horror.'
        ],
        historicalOverview: 'The 509th Composite Group is ready on Tinian. The "Little Boy" uranium bomb is loaded aboard the B-29 Enola Gay. General Spaatz awaits your executive order. Every advisor has spoken. The weight of human history rests entirely upon your desk.'
      },
      standard: {
        proBombDetails: [
          'War Department estimates project up to 500,000 Allied casualties in Operation Downfall, with Japanese casualties likely exceeding 1,000,000.',
          'The Japanese military junta rejected the Potsdam Declaration, calling it "unworthy of consideration" (mokusatsu). Only a total shock can break resistance.',
          'Ending the war quickly prevents Soviet forces from occupying Hokkaido and dividing Japan into communist and democratic zones.'
        ],
        antiBombDetails: [
          'The physical destruction of Hiroshima and Nagasaki will fall overwhelmingly upon civilian non-combatants.',
          'General Dwight D. Eisenhower and Admiral William Leahy both advised that Japan was already defeated and the bomb was unnecessary.',
          'Unleashing atomic weapons without prior warning or international agreements guarantees a terrifying Cold War nuclear arms race.'
        ],
        historicalOverview: 'As President Harry S. Truman, the decision is yours alone. The buck stops here. You must synthesize the advice of your generals, the warnings of the atomic scientists, the devastation of Tokyo’s firestorms, and the lives of American troops waiting in the Pacific.'
      },
      advanced: {
        proBombDetails: [
          'Operational intelligence confirms Japanese troop concentrations on Kyushu doubled since May, rendering Operation Olympic an amphibious bloodbath.',
          'The psychological shock of an atomic weapon is unique: it convinces the Emperor and peace factions that continued resistance means national annihilation.',
          'Failing to use an available weapon that could have saved American lives would be politically and morally indefensible to Gold Star families.'
        ],
        antiBombDetails: [
          'Historians argue Soviet entry on August 8—not the atomic bomb—shattered Japanese strategy by eliminating their sole diplomatic mediator.',
          'Using the bomb without providing explicit assurances regarding the Imperial institution needlessly prolonged the war, as Hirohito remained anyway.',
          'The precedent of combat nuclear use normalized mutually assured destruction and brought civilization to the brink of catastrophe.'
        ],
        historicalOverview: 'This is the moment of executive finality. You must choose whether to authorize the combat deployment of atomic weapons against Japanese targets, and declare which strategic or moral consideration anchored your historic decision.'
      }
    },
    quotes: [
      {
        speaker: 'President Harry S. Truman',
        role: 'Radio address to the American people',
        year: 'August 9, 1945',
        quote: 'We have used it in order to shorten the agony of war, in order to save the lives of thousands and thousands of young Americans.'
      },
      {
        speaker: 'General Dwight D. Eisenhower',
        role: 'Supreme Allied Commander Europe',
        year: '1963',
        quote: 'It wasn’t necessary to hit them with that awful thing... Japan was already defeated and dropping the bomb was completely unnecessary.'
      }
    ],
    choices: [
      {
        id: 'c6_drop_the_bomb',
        label: 'ORDER ATOMIC BOMBING: Release the 509th Composite Group',
        description: 'Issue executive directive: drop atomic bombs on designated urban-military targets (Hiroshima, Kokura, Niigata, Nagasaki) as soon as weather permits.',
        impact: {
          military: +20,
          political: +18,
          public: +15,
          summary: 'Executes the historic 1945 order. Brings rapid shock and Japanese surrender, with devastating human and radiological consequences.'
        }
      },
      {
        id: 'c6_withhold_the_bomb',
        label: 'WITHHOLD ATOMIC WEAPONS: Pursue Alternative War Termination',
        description: 'Refuse to authorize combat atomic bombing. Maintain naval blockade, intensify diplomatic channels regarding the Emperor, and prepare for Soviet entry.',
        impact: {
          military: -25,
          political: -20,
          public: -15,
          summary: 'Halts nuclear weapons in combat. Pushes the world into an uncharted counterfactual historical timeline.'
        }
      }
    ]
  }
];

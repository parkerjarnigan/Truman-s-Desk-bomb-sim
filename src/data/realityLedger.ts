import { RealityComparisonItem } from '../types/simulation';

export const WHAT_ACTUALLY_HAPPENED_DATA: RealityComparisonItem[] = [
  {
    decisionArea: 'Naval Blockade vs. Ground Invasion (Round 1)',
    simulationChoiceText: 'Evaluating whether blockade and starvation alone could force surrender versus preparing Operation Olympic.',
    whatActuallyHappened: 'The Joint Chiefs of Staff approved Operation Olympic for November 1, 1945. Conventional bombing and Operation Starvation (naval mining) continued full-throttle, while the Manhattan Project was accelerated in secret as the hopeful alternative to an amphibious bloodbath.',
    historicalActors: 'President Truman, Gen. George Marshall, Adm. William Leahy, Adm. Chester Nimitz',
    keyDivergence: 'Truman never saw blockade and invasion as an either/or choice; all military options were advanced simultaneously until the atomic bomb proved operational.'
  },
  {
    decisionArea: 'Warning & Demonstration Debates (Round 2)',
    simulationChoiceText: 'Weighing demonstration before observers or explicit advance warning versus surprise urban strike.',
    whatActuallyHappened: 'The Interim Committee unanimously advised Truman on June 1, 1945 that the weapon should be used without warning against a dual military-urban war plant. Oppenheimer and the scientific panel concluded no non-lethal demonstration would be decisive enough to compel surrender.',
    historicalActors: 'Henry Stimson, James Byrnes, J. Robert Oppenheimer, Ralph Bard',
    keyDivergence: 'Only Ralph Bard filed a formal dissent requesting advance warning. His memo was filed away and never changed the administration’s momentum.'
  },
  {
    decisionArea: 'Civilian vs. Military Control of the Bomb (Round 3)',
    simulationChoiceText: 'Classifying the atomic bomb as standard military ordnance versus demanding presidential veto over every strike.',
    whatActuallyHappened: 'On July 25, 1945, a general military directive was issued to General Carl Spaatz authorizing the 509th Composite Group to drop the first bomb after August 3, and "additional bombs... as soon as made ready by the project staff." Military commanders had operational autonomy until after Nagasaki, when Truman was horrified by reports of civilian casualties and took away military authority over third bomb targets.',
    historicalActors: 'President Truman, Gen. Thomas Handy, Gen. Carl Spaatz',
    keyDivergence: 'Truman did not issue an explicit individual order for Nagasaki; the military dropped the second bomb automatically according to the open-ended July 25 directive until Truman personally stepped in on August 10 to halt further drops.'
  },
  {
    decisionArea: 'Conventional Incendiary Bombing (Round 4)',
    simulationChoiceText: 'Debating whether conventional firebombing proved Japan would surrender or proved the necessity of an atomic shock.',
    whatActuallyHappened: 'General Curtis LeMay’s B-29 firebombing continued relentlessly right up to August 1945, burning out 67 cities. The Japanese military government suppressed news of the destruction and mobilized all citizens under Ketsu-Go. The Potsdam Declaration was issued July 26, promising "prompt and utter destruction," which Prime Minister Suzuki publicly treated with "mokusatsu" (kill by silence / ignore).',
    historicalActors: 'Maj. Gen. Curtis LeMay, Prime Minister Kantaro Suzuki, War Minister Korechika Anami',
    keyDivergence: 'American military leadership believed the Japanese martial code would never surrender to conventional destruction because it occurred gradually, whereas an atomic blast delivered instantaneous annihilation.'
  },
  {
    decisionArea: 'The Szilard Petition & Scientific Dissent (Round 5)',
    simulationChoiceText: 'Deciding whether to demand delivery of scientist petitions or trust military filtering.',
    whatActuallyHappened: 'General Leslie Groves deliberately classified the Szilard Petition as Secret and had it locked in a safe. President Truman never saw the petition before August 6. Truman returned from Potsdam on the USS Augusta believing the atomic bomb was strictly a military installation weapon.',
    historicalActors: 'Leo Szilard, Gen. Leslie Groves, James Byrnes',
    keyDivergence: 'The voices of the scientists who built the bomb were silenced by wartime security protocols. Truman did not discover the depth of scientific opposition until after the war.'
  },
  {
    decisionArea: 'The Final Order (Round 6)',
    simulationChoiceText: 'Ordering the atomic bombing of Hiroshima and Nagasaki versus withholding atomic weapons.',
    whatActuallyHappened: 'On August 6, 1945, the Enola Gay dropped "Little Boy" on Hiroshima, killing approximately 70,000 to 80,000 people instantly and another 70,000 from burns and radiation by the end of 1945. On August 8, the Soviet Union declared war on Japan and invaded Manchuria. On August 9, "Fat Man" was dropped on Nagasaki, killing approximately 40,000 instantly. On August 15, Emperor Hirohito broke the Imperial War Council deadlock and announced surrender.',
    historicalActors: 'President Truman, Emperor Hirohito, Col. Paul Tibbets, Foreign Minister Shigenori Togo',
    keyDivergence: 'Historians remain deeply divided on whether the atomic bombs or the Soviet declaration of war was the primary catalyst that forced the Emperor’s intervention.'
  }
];

export const HISTORICAL_SURVIVOR_TESTIMONIES = [
  {
    author: 'Senji Yamaguchi',
    ageIn1945: '14 years old',
    location: 'Nagasaki (10 blocks from ground zero, Mitsubishi Arms Works)',
    quote: 'I was working outside with my shirt off. The heat rays from the explosion, about 3,300 Fahrenheit, scorched my upper body. The heat rays vaporized some people, while burning others into charcoal-like remains. I witnessed the shockwave from the explosion crush a pregnant woman against a wall and tear apart her abdomen. I could see her and her unborn baby dying. The blast instantly knocked down many homes and buildings as well. Mothers and children were trapped beneath the burning wreckage. They called out each other’s names, and the mothers would cry out, pleading for someone to save their children. No one was able to help them, and they all burned alive. The people who came to rescue the immediate survivors or clear away the rotting dead bodies contracted radiation sickness. They died later, one after the other.'
  },
  {
    author: 'Shoji Sawada',
    ageIn1945: '13 years old',
    location: 'Hiroshima (Later became Professor of Physics, Nagoya University)',
    quote: 'When I became conscious, I found myself crushed by lots of plaster and timbers. I managed to crawl out. My mother could not be seen, but I heard her voice. She said she could not move because her legs were caught by a big pillar. I tried to pull out the broken pillar. I pushed….as hard as I could, but it was no use. I asked passers-by to help us, but they couldn’t because they were all injured and thoroughly occupied in trying to save themselves. When the fire came close to us, my mother said, ‘Don’t care about me. Hurry up. Run Away!’ Terribly broken-hearted, I said, ‘I’m sorry mum’.'
  },
  {
    author: 'Yoshitaka Kawamoto',
    ageIn1945: '13 years old',
    location: 'Hiroshima (First-year middle school student)',
    quote: 'The classroom collapsed in an instant. It was pitch black, then filled with thick white dust. One of my classmates was trapped under a fallen timber, crying for his mother. We tried to pull him out, but the fires started spreading from the houses nearby. His clothes caught fire. He began singing our school song as the flames consumed him. I will never forget that song.'
  }
];

export const COUNTERFACTUAL_NO_BOMB_SCENARIOS = [
  {
    title: 'Historical Model A: The Soviet Shock & Diplomatic Surrender (Hasegawa Thesis)',
    probabilityWeight: 'Moderate-High',
    outcomeType: 'Acceptable Peace',
    timeframe: 'August 18 – September 15, 1945',
    summary: 'Without the atomic bomb, the Soviet Union still declares war on August 8, 1945, sending 1.5 million veteran Red Army troops into Japanese-occupied Manchuria. The destruction of the Kwantung Army shatters Tokyo’s last diplomatic hope of using Moscow as a mediator. Sensing impending Soviet occupation of northern Japan, Emperor Hirohito intervenes to accept the Potsdam Declaration on August 22, conditional on preserving the throne. The war ends without Operation Downfall, but the Soviet Union claims control over Manchuria, the Kuril Islands, and the northern half of the Korean peninsula.',
    usCasualties: '~5,000 additional naval and air casualties',
    sovietInfluence: 'Substantially expanded in East Asia',
    moralStanding: 'The U.S. avoids the moral stigma of nuclear use, but Truman faces bitter domestic attacks for allowing Soviet expansion in Asia.'
  },
  {
    title: 'Historical Model B: The Operation Olympic Bloodbath (Frank/Giangreco Thesis)',
    probabilityWeight: 'High (Worst Case)',
    outcomeType: 'Catastrophic Allied Incursion',
    timeframe: 'November 1945 – March 1946',
    summary: 'Withholding the atomic bomb allows the Japanese military junta to hold out through autumn. On November 1, 1945, Operation Olympic launches against southern Kyushu. As predicted by Ultra decrypts, Allied landing crafts are met by 14 entrenched Japanese divisions and waves of over 7,000 kamikaze aircraft. The beaches become an inferno. Over 65,000 Allied soldiers are killed or wounded in the first four weeks. Japan suffers an estimated 350,000 military and civilian casualties as civilians are mobilized with hand grenades and sharpened bamboo spears. The war drags into the spring of 1946, culminating in Operation Coronet against Tokyo.',
    usCasualties: '120,000 to 250,000 Allied casualties',
    sovietInfluence: 'Soviet forces seize Hokkaido and divide Tokyo',
    moralStanding: 'When the American public and Congress learn that Truman withheld a secret weapon that could have avoided this bloodbath, Truman faces impeachment proceedings.'
  },
  {
    title: 'Historical Model C: The Blockade Collapse & Famine Capitulation (Leahy Thesis)',
    probabilityWeight: 'Moderate',
    outcomeType: 'Starvation & Internal Collapse',
    timeframe: 'October – November 1945',
    summary: 'Adhering to Admiral Leahy’s strategy, the U.S. relies strictly on the total naval blockade and conventional mining. By October 1945, Japan’s rail transportation collapses completely, and domestic rice harvests are less than 50% of minimum subsistence. Mass famine grips Tokyo and Osaka. Over 400,000 Japanese civilians die of starvation and disease before the Emperor, horrified by the destruction of his subjects, overrides the military cabinet in mid-November and sues for peace.',
    usCasualties: '~8,000 Allied naval and air casualties',
    sovietInfluence: 'Moderate',
    moralStanding: 'The U.S. avoids nuclear precedent, but international human rights observers condemn the deliberate starvation of an entire civilian population.'
  }
];

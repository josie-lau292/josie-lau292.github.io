export const site = {
  name: 'Cheuk Yan (Josie) Lau',
  shortName: 'Josie Lau',
  role: 'PhD candidate in Psychology',
  institution: 'Edith Cowan University',
  location: 'Australia',
  email: 'josephinelau292@gmail.com',
  scholar: 'https://scholar.google.com/citations?user=Y6myRyYAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/josie-lau-a243691a4',
  cv: '/documents/cheuk-yan-lau-cv.pdf',
  cvReady: false,
  description:
    'Psychology researcher and educator with experience supporting youth mental health program evaluation, reviewing research methods, and communicating evidence.',
} as const;

export const profileFacts = [
  { label: 'Field', value: 'Psychology' },
  { label: 'Focus', value: 'Youth mental health' },
  { label: 'Methods', value: 'Evidence synthesis and quantitative analysis' },
] as const;

export type PersonalPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export const photos = {
  portrait: {
    src: '/images/portrait.webp',
    width: 800,
    height: 800,
    alt: 'Josie Lau smiling in front of a light textured wall.',
  },
  simba: {
    src: '/images/simba-kitten.webp',
    width: 800,
    height: 1734,
    alt: 'Simba as a kitten, looking closely into the camera with wide eyes.',
    caption: 'Simba as a kitten.',
  },
  hongKong: {
    src: '/images/star-ferry-hong-kong.webp',
    width: 1200,
    height: 1200,
    alt: 'Sunlight and window-frame shadows across a cream wall in a Star Ferry waiting area in Hong Kong.',
    caption: 'Star Ferry waiting area, Hong Kong. Exploring my hometown as a tourist with my partner, I began noticing details I’d overlooked growing up here.',
  },
  italy: {
    src: '/images/italy-winter.webp',
    width: 1200,
    height: 1600,
    alt: 'Winter sunlight on buildings with green shutters, balconies, and plants along a narrow street in Italy.',
    caption: 'Italy in winter. I loved the buildings and the way the sunlight warmed up the city.',
  },
} satisfies Record<string, PersonalPhoto>;

export type Publication = {
  title: string;
  authors: string[];
  year: string;
  venue: string;
  citation: string;
  summary: string;
  homeSummary: string;
  doi: string;
  repository?: string;
  noteSlug: string;
};

export const publications = [
  {
    title:
      'Translation, Adaptation and Preliminary Efficacy of the My FRIENDS Youth Program Among Pakistani Adolescent School Girls',
    authors: [
      'Hajra Khalid',
      'Sumara Masood Ul Hassan',
      'Tamkeen Ashraf Malik',
      'Iraj Tariq',
      'Tayyaba Waseem',
      'Paula Maria Barrett',
      'Cheuk Yan Lau',
    ],
    year: '2026',
    venue: 'Child and Adolescent Social Work Journal',
    citation:
      'Khalid, H., Hassan, S. M. U., Malik, T. A., Tariq, I., Waseem, T., Barrett, P. M., & Lau, C. Y. (2026). Child and Adolescent Social Work Journal.',
    summary:
      'This pilot study translated and culturally adapted the My FRIENDS Youth Program for Urdu-speaking adolescents, then tested it with 34 Pakistani school girls. Results suggested improvements in generalized anxiety and emotional and behavioural problems, while mixed findings across other anxiety outcomes underline the need for larger randomized trials.',
    homeSummary:
      'Translating and testing an Urdu adaptation of My FRIENDS Youth with Pakistani school girls.',
    doi: 'https://doi.org/10.1007/s10560-026-01091-9',
    repository: 'https://ro.ecu.edu.au/ecuworks2022-2026/7898/',
    noteSlug: 'adapting-my-friends-youth-for-pakistani-schools',
  },
  {
    title:
      'Preliminary Efficacy of My FRIENDS Youth with At-Risk Pakistani Adolescent Girls Living in Orphanage',
    authors: [
      'Tayyaba Waseem',
      'Tamkeen Ashraf Malik',
      'Sumara Masood Ul Hassan',
      'Hajra Khalid',
      'Paula Maria Barrett',
      'Cheuk Yan Lau',
    ],
    year: '2025',
    venue: 'Child & Youth Care Forum',
    citation:
      'Waseem, T., Malik, T. A., Hassan, S. M. U., Khalid, H., Barrett, P. M., & Lau, C. Y. (2025). Child & Youth Care Forum.',
    summary:
      'This quasi-experimental study examined an Urdu version of My FRIENDS Youth with 38 adolescent girls, comparing an orphanage-based intervention group with a community group. The intervention group showed improvements across anxiety, behavioural difficulties, coping, self-esteem, and self-concept that were maintained at three-month follow-up; the small, non-randomized design means the findings remain preliminary.',
    homeSummary:
      'Preliminary evidence from an Urdu adaptation delivered with adolescent girls living in an orphanage.',
    doi: 'https://doi.org/10.1007/s10566-025-09893-1',
    repository: 'https://ro.ecu.edu.au/ecuworks2022-2026/6982/',
    noteSlug: 'supporting-at-risk-adolescent-girls-in-pakistan',
  },
  {
    title:
      'Efficacy of a School-Based Mental Health Intervention Among Zambian Youth: A Cluster-Randomized Controlled Trial',
    authors: [
      'Sherinah Saasa',
      'Kaitlin P. Ward',
      'Cleopas G. Sambo',
      'Paula Barrett',
      'Cheuk Yan Lau',
    ],
    year: '2025',
    venue: 'Cambridge Prisms: Global Mental Health, 12, e43',
    citation:
      'Saasa, S., Ward, K. P., Sambo, C. G., Barrett, P., & Lau, C. Y. (2025). Cambridge Prisms: Global Mental Health, 12, e43.',
    summary:
      'In this cluster-randomized trial, 75 students aged 10–15 across four low-income Zambian schools took part in My FRIENDS Youth or a waitlist control. The program did not reduce youth-reported anxiety or depression, but parents reported improvements in behavioural symptoms and parent–child relationships, pointing to the importance of local adaptation and careful outcome selection.',
    homeSummary:
      'A cluster-randomized evaluation of My FRIENDS Youth across four low-income schools in Zambia.',
    doi: 'https://doi.org/10.1017/gmh.2025.33',
    repository: 'https://ro.ecu.edu.au/ecuworks2022-2026/6015/',
    noteSlug: 'what-the-zambian-my-friends-youth-trial-found',
  },
] satisfies Publication[];

type ContentSection = {
  title: string;
  summary: string;
  paragraphs: string[];
};

export const research = {
  title: 'Research & evaluation',
  description: 'Josie Lau’s experience supporting youth mental health program evaluation, alongside research on anxiety prevention, evidence synthesis, and publications.',
  introduction: 'My work brings together mental health program evaluation and research on anxiety prevention. I’m interested in what programs change, who benefits, and whether our measures reflect what a program aims to achieve.',
  questions: [
    {
      title: 'Are we measuring prevention?',
      summary: 'If a program aims to build skills before problems become severe, how much can short-term symptom changes tell us, especially when people start with few symptoms?',
      paragraphs: [
        'Symptom reduction can tell us whether people who start with higher symptoms benefit from a prevention program. But universal programs also reach people whose symptoms are already low. I wonder what short-term symptom changes can tell us about prevention for that broader group.',
        'If the aim is to build skills and resilience before problems become severe, are changes in symptoms a few weeks or months later the best way to capture that?',
      ],
    },
    {
      title: 'Who benefits?',
      summary: 'Average effects can hide differences between people. I’m interested in who benefits from prevention programs and how their starting points might matter.',
      paragraphs: [
        'An average effect helps us understand whether an intervention works overall, but it can leave differences between people out of view. Do people with different starting points benefit in the same way? This is one reason I became interested in individual-participant-data meta-analysis.',
      ],
    },
    {
      title: 'What else should we look at beyond effect sizes and p-values?',
      summary: 'Effect sizes and p-values help us interpret evidence, but what context do researchers, policymakers, and other readers need alongside them?',
      paragraphs: [
        'Effect sizes and p-values are useful. They can also become quick signals for whether a program should be used, funded, continued, or abandoned. That happens in research, but also when policymakers and other readers encounter evidence without much statistical training.',
        'What context do we need alongside those numbers? How can researchers make that context easier to understand? I’m interested in how we can help people use statistical evidence without asking one number to tell the whole story.',
      ],
    },
  ] satisfies ContentSection[],
  currentSummary: [
    'My PhD uses individual-participant-data (IPD) meta-analysis to study anxiety prevention programs for young people. Looking at individual data lets us ask whether effects differ with characteristics such as baseline symptoms.',
    'Discussions with my supervisors have also led me to ask whether symptom reduction captures the aims of universal prevention. What about skills for handling stress, understanding emotions, or supporting others, and how long might those take to develop?',
  ],
  current: [
    'My PhD focuses on an individual-participant-data (IPD) meta-analysis of anxiety prevention programs for young people. Discussions with my supervisors about this work led me to think more carefully about what it means to evaluate prevention.',
    'One discussion concerns whether funding should move from universal prevention towards more targeted programs. Targeted programs can show larger symptom reductions among people who already have higher symptoms. But if symptom reduction is our main yardstick for both, might targeted programs look more effective partly because their participants have more symptoms to reduce?',
    'I’m less interested in deciding that one level of prevention is simply better than in asking whether we are evaluating each against its purpose. For a universal program, that might include learning to handle stressful situations, recognise and regulate emotions, support oneself and others, or feel more confident standing up for oneself.',
    'How long might those skills take to develop? Why would we expect all of them to be visible in a measure taken a few weeks or months later? I wonder whether we sometimes evaluate prevention as a one-off attempt to fix a problem, when some of its aims involve learning that takes longer.',
    'At first, I mainly understood IPD meta-analysis as a more nuanced way to study effectiveness. Working with individual-level data lets us examine characteristics such as baseline symptoms and ask whether intervention effects differ across people. As I’ve worked through the research, my questions have become broader.',
  ],
  question: 'What are we actually measuring, who are we measuring it for, and are our measures capturing the changes we expect a prevention program to produce?',
  closing: 'I now see IPD meta-analysis as one way to ask those questions more carefully. They keep me interested in learning how psychological research can better capture meaningful changes, even when the answers are not straightforward.',
} as const;

export const evaluationExperience = {
  title: 'Supporting the evaluation of a youth resilience program',
  summary: 'I supported international research evaluating a resilience-building and anxiety-prevention program for children and adolescents. My role spanned research review, evidence communication, and program materials.',
  contributions: [
    {
      title: 'Reviewing evaluation plans and measures',
      description: 'I reviewed research proposals and manuscripts, helped refine methodologies, and checked whether selected measures reflected the program’s theory of change. This involved considering both strengths the program aimed to develop and difficulties it aimed to reduce.',
    },
    {
      title: 'Communicating evidence to stakeholders',
      description: 'I communicated evaluation findings to prospective and existing stakeholders, including questions about small effect sizes in universal prevention and what the findings meant for program use.',
    },
    {
      title: 'Developing program materials',
      description: 'I developed information packs for nonspecialist audiences, wrote tender applications, and mapped program components against required curriculum frameworks.',
    },
  ],
} satisfies { title: string; summary: string; contributions: { title: string; description: string }[] };

export const teaching = {
  introduction: 'Numbers did not always feel approachable to me. Faced with statistics I didn’t understand, my brain tended to switch off. Starting with something interesting helped me stay long enough to get curious.',
  highlight: 'That is where I try to begin with students, too.',
  overview: 'I teach psychology students across research methods, evidence-based practice, and applied psychological practice.',
  areas: [
    'Quantitative and qualitative research proposal writing',
    'Statistics and research methods',
    'Evidence-based practice, evaluation, and interpretation',
    'Client-Centred Psychological Practice',
  ],
  sequence: ['A familiar or interesting example', 'Think through the situation', 'Explore the concept', 'Name and define it'],
  approach: [
    {
      title: 'Start with something recognisable',
      summary: 'I start with something students can picture, then work towards the concept and its formal definition. Simba, a long wait for coffee, or Shrek and Donkey can give us something concrete to think about.',
      paragraphs: [
        'I like beginning with something students can picture before bringing in the terminology. My cat Simba is a regular source of examples. Other starting points I use or would like to try include waiting forever for coffee before class, or Shrek and Donkey bickering.',
        'A familiar or funny situation gives us something concrete to think about. We can work towards the formal concept and definition from there, while keeping the reasoning just as careful.',
      ],
    },
    {
      title: 'Give students a turn to do the thinking',
      summary: 'Structured exercises let students try the reasoning themselves. As someone who was quiet in class, I value the chance to check in individually without putting anyone on the spot.',
      paragraphs: [
        'After introducing a concept, I use structured exercises, discussions, and applied questions so students can try it for themselves. I work with the activities available in each course, and I’d love to bring more of those everyday examples into the exercises over time. There is probably room for more Simba, or Shrek and Donkey.',
        'I was quite introverted as a student. Having time to work through a question can make it easier to ask for clarification without having to speak in front of the whole class straight away. Walking around during activities lets me check in with students individually, without putting them on the spot.',
      ],
    },
    {
      title: 'Find the point where the reasoning changed',
      summary: 'I ask students to walk me through how they reached an answer. Hearing where their reasoning changed helps me address the part they are actually stuck on.',
      paragraphs: [
        'When an answer suggests a misunderstanding, I ask the student to walk me through how they got there. That helps me hear what they already understand and where their reasoning started to move in a different direction.',
        'If I simply explain it again from the perspective of someone who understands it, I might miss the exact part they are stuck on. Listening to their explanation gives me a better place to start.',
      ],
    },
    {
      title: 'Ask “why?”',
      summary: 'I remember getting answers right by memorising rules, then feeling lost when the question changed. Asking “why?” and “what if?” helps students practise reasoning they can use in a new situation.',
      paragraphs: [
        'As a student, I could sometimes memorise a rule well enough to get an answer right without really understanding it. Then the question changed slightly, or appeared in an unfamiliar context, and I no longer knew what to do.',
        'That is why I ask: Why? How did you arrive at that answer? What made you choose that option? What would happen if the situation changed? I want students to have the reasoning to return to when a memorised rule is no longer enough.',
      ],
    },
  ] satisfies ContentSection[],
  simba: {
    introduction: 'I often joke that Simba is my teaching assistant. A photo of him sleeping or a video of him catching flies gets students’ attention and gives us a way into statistics.',
    sleepQuestion: 'If Simba sleeps an average of 18 hours a day, what is the probability that he sleeps less than 10 hours on a given day?',
    sleepExplanation: 'The average alone cannot tell us. We also need to know how his sleep varies from day to day and what distribution might describe it. That missing information gives us a reason to talk about probability, variability, and distributions before reaching for a formula.',
    fliesIntroduction: 'Now imagine each attempt to catch a fly has a 0.5 chance of success, independent of the other attempts. In this simplified model, we can count successful catches in each batch.',
    fliesQuestions: [
      { trials: 3, question: 'If Simba tries to catch 3 flies per batch and we repeat this 1,000 times, what would the distribution of successful catches look like?' },
      { trials: 20, question: 'What changes if Simba tries to catch 20 flies per batch, again repeating it 1,000 times?' },
    ],
    fliesExplanation: 'Each count follows a binomial distribution. With 3 flies, there are only four possible counts: 0, 1, 2, or 3. With 20 flies and the same 0.5 chance, the distribution is more closely approximated by a normal curve. This is a way into the Central Limit Theorem: a binomial count is a sum of independent success-or-failure outcomes.',
    repetitionNote: 'Increasing the number of flies in each batch changes the distribution’s shape. Repeating the batches 1,000 times helps us see that distribution; repetition alone does not make it normal.',
  },
  realWorld: {
    question: 'What could go wrong when we move this intervention from research into the real world?',
    introduction: 'Imagine a mental health program evaluated in a supportive research setting, then rolled out across an entire school. I like to start with the practical differences students can picture.',
    settings: [
      {
        title: 'In the research setting',
        details: ['Participants want to benefit from the program.', 'Students actively engage with the activities.', 'Parents support participation.', 'Teachers and the school community support the program.', 'Implementation is carefully monitored.'],
      },
      {
        title: 'Across a whole school',
        details: ['Busy teachers may feel they already have too much work.', 'Some students find it boring or do not want to take part.', 'Some parents worry about time away from academic learning.', 'Delivery may be less consistent between classes.'],
      },
    ],
    prompts: ['Will the original finding apply in the same way?', 'What might affect implementation?', 'What adaptations might be needed?'],
    explanation: 'From there, external validity becomes a question about whether findings apply to other people and settings. Intervention fidelity asks how closely delivery follows the intended program. We can then discuss what needs to stay consistent and what might need adapting. The terms give names to practical questions we have already started thinking about.',
  },
} as const;

export const timeline = [
  {
    period: 'Current',
    title: 'PhD candidate in Psychology, thesis submitted',
    place: 'Edith Cowan University',
    type: 'study',
  },
  {
    period: 'Current',
    title: 'Online facilitator',
    place: 'Graduate Diploma of Psychology (Advanced), Edith Cowan University',
    type: 'teaching',
  },
  {
    period: 'Current',
    title: 'Quantitative research methods tutor & tutoring coordinator',
    place: 'The University of Queensland',
    type: 'teaching',
  },
  {
    period: 'Previous experience',
    title: 'Program evaluation and research support',
    place: 'Youth resilience and anxiety prevention · research review, stakeholder communication, and program materials',
    type: 'research',
  },
] as const;

export const teachingExperience = [
  {
    title: 'Quantitative research methods',
    period: 'Current',
    detail:
      'Tutor and tutoring coordinator at The University of Queensland, supporting students through foundational statistics and research design.',
  },
  {
    title: 'Online facilitation',
    period: 'Current',
    detail:
      'Online facilitator for Edith Cowan University’s Graduate Diploma of Psychology (Advanced), supporting students with their learning online.',
  },
  {
    title: 'Psychology marking',
    detail:
      'Providing constructive assessment feedback on psychology research and writing.',
  },
] satisfies { title: string; period?: string; detail: string }[];

export const teachingTopics = [
  {
    title: 'Jamovi foundations',
    description: 'A friendly first step into data, variables, and reproducible analysis.',
  },
  {
    title: 'Correlations',
    description: 'Reading relationships between variables with care and context.',
  },
  {
    title: 't-tests',
    description: 'Comparing group means and understanding uncertainty.',
  },
  {
    title: 'Chi-square',
    description: 'Working with categorical data and observed patterns.',
  },
  {
    title: 'ANOVA',
    description: 'Exploring differences across more than two groups.',
  },
  {
    title: 'Regression',
    description: 'Using models to ask focused questions of data.',
  },
] as const;

export const about = {
  story: [
    'I was an anxious, quiet child who found it hard to speak up. Moving from Hong Kong to Australia meant asking for help, talking to people, and finding my way through unfamiliar situations, even when I wanted to avoid them.',
    'Learning about anxiety helped me make sense of some of those earlier experiences. Research and teaching brought more things I once couldn’t imagine doing: meetings, conferences, presenting research, and standing in front of a class.',
    'I’m still quiet and introverted. I can enjoy teaching and talking with colleagues, ask for help when I need it, and still want plenty of time to myself.',
  ],
  interests: [
    'Outside work, I enjoy travelling alone, finding good food, and taking photos of small details on random streets. Often it is something that other people seem to walk straight past.',
    'I also like painting, thinking about philosophical questions, and talking to ChatGPT. And, of course, there is life at home with Simba.',
  ],
  instagram: [
    'I’m developing an Instagram account to share short, approachable explanations of anxiety, particularly for Hong Kong audiences. I’m interested in how language and culture shape these conversations, and how psychology can feel less intimidating outside university.',
    'These are our emotions. Understanding them can help them feel less foreign and frightening, and is part of learning to look after ourselves and support the people around us.',
  ],
} as const;

export const home = {
  introduction: 'I’m a psychology researcher and educator with experience supporting mental health program evaluation. My work spans reviewing evaluation plans, interpreting research findings, and making evidence accessible to the people delivering and considering programs.',
  research: 'I’ve supported international evaluation research on a resilience-building and anxiety-prevention program for children and adolescents. My PhD uses individual-participant-data meta-analysis to explore what prevention programs change and who benefits.',
  teaching: 'I use familiar examples to give students a way into statistics, then ask them to work through the reasoning themselves. Sometimes my cat Simba helps with the examples.',
} as const;

export const collaboration = {
  title: 'Evaluation, education, and collaboration.',
  invitation: 'I welcome conversations about evaluation and education roles, collaborations, and helping organisations think through how to evaluate their mental health programs.',
} as const;

export const notes = {
  introduction: 'Short notes on research, statistics, and psychological interventions.',
  highlight: 'Some start with a teaching question; others explore a paper or an everyday observation.',
} as const;

export type PageInvitation = {
  text: string;
  label: string;
  href: string;
};

export const pageInvitations = {
  research: {
    text: collaboration.invitation,
    label: 'Get in touch',
    href: `mailto:${site.email}`,
  },
  teaching: {
    text: 'Continue exploring the ideas behind research methods and statistics.',
    label: 'Explore the statistics notes',
    href: '/blog/#statistics',
  },
  notes: {
    text: 'Explore my evaluation experience, research questions, and publications.',
    label: 'Explore research & evaluation',
    href: '/research/',
  },
  about: {
    text: collaboration.invitation,
    label: 'Email Josie',
    href: `mailto:${site.email}`,
  },
} satisfies Record<string, PageInvitation>;

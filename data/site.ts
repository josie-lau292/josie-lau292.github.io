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
    'Psychology researcher and educator focused on youth mental health, program evaluation, and health-data analysis.',
} as const;

export const profileFacts = [
  { label: 'Field', value: 'Psychology' },
  { label: 'Focus', value: 'Youth mental health' },
  { label: 'Methods', value: 'Evidence synthesis and quantitative analysis' },
] as const;

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

export const researchProjects = [
  {
    label: 'Current research',
    title: 'Anxiety prevention across individual data',
    description:
      'An individual-participant-data meta-analysis of anxiety-prevention programs for young people. IPD meta-analysis makes it possible to look beyond average effects and ask for whom, and under what circumstances, prevention approaches may be most helpful.',
    note:
      'The work brings together careful synthesis, transparent analysis, and findings intended to inform future programs and policy.',
  },
] as const;

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
    period: 'Ongoing',
    title: 'Research and project experience',
    place: 'Youth mental health, program evaluation, and evidence synthesis',
    type: 'research',
  },
] as const;

export const teachingExperience = [
  {
    title: 'Quantitative research methods',
    detail:
      'Tutor and tutoring coordinator at The University of Queensland, supporting students through foundational statistics and research design.',
  },
  {
    title: 'Online facilitation',
    detail:
      'Facilitator for Edith Cowan University’s Graduate Diploma of Psychology (Advanced), creating a supportive online learning environment.',
  },
  {
    title: 'Psychology marking',
    detail:
      'Providing clear, constructive assessment feedback that helps students develop as researchers and writers.',
  },
] as const;

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

export const personalNotes = [
  {
    label: 'Travel',
    text: 'Unfamiliar streets, shared meals, and seeing ordinary things with fresh attention.',
  },
  {
    label: 'At home',
    text: 'Life with a cat who is very clear about when it is time to step away from a screen.',
  },
] as const;

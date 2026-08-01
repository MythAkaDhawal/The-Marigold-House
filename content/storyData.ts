export interface KeepsakeItem {
  id: string;
  title: string;
  date: string;
  type: 'ticket' | 'flower' | 'note' | 'coffee' | 'photo';
  summary: string;
  detail: string;
  rotationDeg: number;
}

export interface ChapterMeta {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  bgTheme: 'dawn-ivory' | 'parchment' | 'clay-rose-tint' | 'clay-rose-full' | 'ink-maroon' | 'deep-parchment' | 'night-sky';
  bgColor: string;
  textColor: string;
}

export const CHAPTERS_META: Record<string, ChapterMeta> = {
  'chapter-0': {
    id: 'chapter-0',
    number: 0,
    title: 'The Envelope',
    subtitle: 'For your eyes alone',
    bgTheme: 'dawn-ivory',
    bgColor: '#F3E6D2',
    textColor: '#3A2420',
  },
  'chapter-1': {
    id: 'chapter-1',
    number: 1,
    title: 'The Beginning',
    subtitle: 'Where light first caught',
    bgTheme: 'parchment',
    bgColor: '#ECDFC7',
    textColor: '#3A2420',
  },
  'chapter-2': {
    id: 'chapter-2',
    number: 2,
    title: 'The Small Moments',
    subtitle: 'Details only two people know',
    bgTheme: 'clay-rose-tint',
    bgColor: '#E6C0B8',
    textColor: '#3A2420',
  },
  'chapter-3': {
    id: 'chapter-3',
    number: 3,
    title: 'The Letter',
    subtitle: 'Uninterrupted words',
    bgTheme: 'clay-rose-full',
    bgColor: '#C97C6D',
    textColor: '#F3E6D2',
  },
  'chapter-4': {
    id: 'chapter-4',
    number: 4,
    title: 'The Promise',
    subtitle: 'The golden hour',
    bgTheme: 'ink-maroon',
    bgColor: '#3A2420',
    textColor: '#F3E6D2',
  },
  'chapter-5': {
    id: 'chapter-5',
    number: 5,
    title: 'The Path Ahead',
    subtitle: 'The next morning',
    bgTheme: 'deep-parchment',
    bgColor: '#E6D7C3',
    textColor: '#3A2420',
  },
  'epilogue': {
    id: 'epilogue',
    number: 6,
    title: 'The Hidden Garden',
    subtitle: 'Under the quiet stars',
    bgTheme: 'night-sky',
    bgColor: '#261815',
    textColor: '#F3E6D2',
  },
};

export const STORY_CONTENT = {
  envelope: {
    recipient: 'My Dearest',
    subtext: 'A quiet place built for just one person',
    sealPrompt: 'Tap the wax seal to open',
    logotype: 'The Marigold Hour',
  },
  beginning: {
    headline: 'We did not start with a grand gesture.',
    paragraphs: [
      'It began in the quiet space between ordinary hours. A busy lane, a busy street and a unexpected meeting ... A chaotic day for me but a very good day for us ... hopefully',
      'Before I knew your name completely, I knew the specific way you pause when you are thinking of the exact right word. You didn’t rush. Neither did I.',
      'Some things are written quickly. We were written slowly, line by line, until every margin was filled with light.',
    ],
    quote: '“They say that there is a golden hour before dusk when the world holds its breath. That is when I found you ...”',
  },
  smallMoments: {
    headline: 'The Keepsakes',
    subheadline: 'Press any item to hold the memory up to the light.',
    keepsakes: [
      {
        id: 'ticket',
        title: 'First Spark #402',
        date: '[ ... ]',
        type: 'ticket',
        summary: 'The missed connection',
        detail: 'The time the eyes met for the firs time ... when everything else disappeared for a moment ... The feeling that maybe .. maybe I know this person for a long time',
        rotationDeg: -2.5,
      },
      {
        id: 'flower',
        title: 'Jab we Met .. truly',
        date: '[ ... ]',
        type: 'flower',
        summary: 'In that busy moment on the road',
        detail: 'When the eyes met again in that unexpected moment and place ... When finally we got our guts together to finally initiate the conversation ... I knew that I have to know you more ... and I am glad that I did .. even if it has only been a little time .. there is a very long way ahead of us',
        rotationDeg: 1.8,
      },
      {
        id: 'note',
        title: 'The Moments',
        date: '[ ... ]',
        type: 'note',
        summary: 'Those few moments together',
        detail: 'In those few moments together .. I felt so comfortable and happy with you ... Like I have known you for a long time .. and I am so glad that I met you. It just .. idk. Let us see how things go ...',
        rotationDeg: -1.2,
      },
      {
        id: 'coffee',
        title: 'The quiteness',
        date: '[ ... ]',
        type: 'coffee',
        summary: 'The Silence that does not feel awkward or boring',
        detail: 'Even in the moments we both sit idle and silent .. that is the moment I enjoy the most .. those are the moments I feel most at peace ... with you ... I can just sit there looking at you for hours .. and I would not even get bored ... I just love being with you. (No idea about ur side though .. lol)',
        rotationDeg: 3.1,
      },
      {
        id: 'photo',
        title: 'The Note',
        date: '[ ... ]',
        type: 'photo',
        summary: 'When the duality collides',
        detail: 'When the hearts which were made to love are confused and withheld because of their own stupidity .. the guilt of the past weighs heavy on shoulders of both ... Someday maybe ',
        rotationDeg: -0.8,
      },
    ] as KeepsakeItem[],
  },
  letter: {
    headline: 'A Written Promise',
    promptToOpen: 'Unfold the letter',
    dateStamp: 'Written in the Marigold Hour',
    salutation: 'Heyy~',
    bodyParagraphs: [
      `Once you grow older, the more you realize\nIt is not the people who speak the most that truly empathic.\n\nIt is about the ones who notice your silence in a crowd,\nWho understands your quiet without needing it said out loud.`,
      `But what if they arrive a little too late?\nWhen your heart already surrendered to fate.\n\nWhat if no one sees the art you hide in your pain,\nAnd all your unspoken colors just wash away in rain?`,
      `And reality...?\n\nIt is strange how humanity slowly changed its face,\nTurning emotions into something people erase.\n\nHow kindness became 'too much', and love became fears,\nWhile everyone secretly aches to keep someone near.`,
      `Sometimes I wonder if the world lost something above,\nThe day people started feeling embarrassed of love.\n\nNow hearts stay guarded, distant, and cold,\nAs if caring deeply is weakness untold.`,
      `And sometimes life introduces\nsomeone new too soon,\n\nRight when your old scars\nstill ache beneath the moon.`,
      `Someone gentler, warmer,\nbetter than before.\n\nYet your heart still trembles\nnear the door.`,
      `Not because they lack\nthe love you seek,\n\nBut because healing still\nfeels weak.`,
      `And it hurts in ways\nfew speak of about—\n\nWhen timing stands b/w\nyou & a beautiful love,`,
    ],
    closing: 'Someone~,',
    signature: 'Always & Forever',
  },
  promise: {
    headline: 'Will you walk this path with me?',
    subtext: 'Press the seal below to give your answer.',
    ctaLabel: 'I Will, Forever',
    successHeadline: 'Sealed in light.',
    successMessage: 'Your answer is held safely. The path ahead is ours to share.',
  },
  pathAhead: {
    headline: 'The Next Morning',
    subheadline: 'The sun rises on what comes next.',
    bodyText: 'Our story doesn’t end at dusk. It breathes into the morning air. Save this date, or keep this letter close whenever you need a reminder of how deeply you are loved.',
    saveDateLabel: 'Reserve Our Date',
    shareLabel: 'Share This Memory',
  },
  epilogue: {
    headline: 'The Hidden Garden',
    subtext: 'You lingered past the last page. Thank you for staying quiet with me.',
    easterEggHint: 'Tip: Some marigolds blossom when touched softly. Look for stars above.',
    replayLabel: 'Reopen from the Beginning',
    credits: 'Crafted with care for The Marigold Hour • 2026',
  },
};

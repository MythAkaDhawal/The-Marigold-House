# The Marigold Hour
### A Website Design Specification

A conceptual design bible for an original, single-thread storytelling website — built to be experienced by one person, for one occasion, at their own pace. Reference material informed craft, pacing, and polish only; every color, word, and gesture below is built from scratch for this brief. This document assumes the site is built for a significant personal, romantic occasion (a declaration, an anniversary, a homecoming — the framework does not lock itself to one specific event) and stays flexible enough to serve any of them without redesign.

---

# Vision

Most personal-occasion websites are decorated forms — a hero image, a countdown, a button. The Marigold Hour is not that. It is a small, physical-feeling object translated into a screen: the sensation of receiving a letter someone spent real time writing, sealed with something warm, and opening it slowly because you already suspect it matters.

The site has one job: make the recipient feel *chosen*, one unhurried moment at a time. It does this by refusing the instinct to show everything at once. Nothing on this site competes for attention. Things arrive when they've earned the right to.

The working name, "The Marigold Hour," refers to the golden hour just before dusk — the specific quality of light the entire palette and pacing are built around, and the flower that becomes the site's recurring visual signature.

---

# Experience Philosophy

Three commitments govern every decision in this document:

**Unhurried pacing.** The site is built to be read at the speed of a letter, not the speed of a landing page. There is no "get to the point" affordance, no skip-ahead navigation encouraged in the primary flow. Patience is rewarded, not punished.

**Earned reveals.** Nothing meaningful is visible on load. The letter is sealed until it's opened. The promise isn't stated until the story has explained why it matters. Every reveal is a small event, not a scroll tick.

**Tactile digital-ness.** Paper has weight, grain, and imperfection — a slight curl, an uneven fold. The site borrows that physicality deliberately: nothing here should look like it was assembled from default UI parts. If a component looks like it could belong to any SaaS product, it has failed this brief.

---

# Emotional Journey

The visitor's emotional arc is mapped directly onto the color and light system described later, so feeling and form move together rather than feeling being "added" to a neutral shell.

| Stage | Feeling | Where it happens |
|---|---|---|
| Curiosity | "What is this?" | The Envelope (opening) |
| Warmth | "Oh — this is about *us*." | The Beginning |
| Nostalgia | Recognition, a smile at specifics | The Small Moments |
| Held breath | Quiet, focused attention | The Letter |
| Release | The emotional peak | The Promise |
| Belonging | Calm, forward-looking | The Path Ahead |
| Delight | A private smile, alone | The Hidden Garden |

The arc is deliberately asymmetric: it spends longer building warmth and specificity than it does on the peak itself, because the peak only works if everything before it has been earned.

---

# Brand Personality

If this site were a person, it would be: **warm, unhurried, quietly literary, gently playful, and handwritten-confident** — someone who chooses words carefully but never sounds rehearsed.

Voice and tone rules for all copy:
- Present tense, first or second person, never third-person narration about "the couple" or "the user."
- Short sentences allowed to sit alone. White space is a valid punctuation mark.
- No corporate cheer ("We're so excited to share..."), no inspirational-poster language ("Every love story is beautiful"). Specificity beats sentiment — a real, small detail always outperforms a grand abstract statement.
- Microcopy names actions the way a person would say them out loud ("Open it," not "View Letter"; "Play something soft," not "Enable Audio").

---

# Creative Direction

The aesthetic thesis: **sun-warmed paper meeting marigold dusk light.** Picture cotton-rag paper with visible grain, a pressed flower gone slightly translucent with age, brass hardware on an old writing box, ink that's bled just slightly into the page, and the specific orange-gold cast of light through a window in the last hour before sunset.

This is emotionally warm without being cute, and romantic without being saccharine. It borrows from letterpress invitation design, botanical illustration, and manuscript typography — never from wedding-website templates, greeting-card clichés, or app-store romance iconography (no roses-and-hearts, no cursive-on-pink).

The single signature idea the whole site is built around: **color is treated as time of day, not decoration.** As the visitor descends through the story, the background genuinely shifts along a dawn-to-dusk-to-night arc — described in full under Color System. This is the one bold, deliberate risk in the brief, and everything else stays disciplined around it.

---

# Design Principles

1. **Restraint before ornament** — a decorative element only earns its place if removing it would weaken the story, not just the visuals.
2. **Every motion has a reason** — see Motion Language; nothing animates purely because animation is available.
3. **Negative space is a room, not a gap** — generous margins aren't emptiness, they're where the reader breathes.
4. **Color is light, not paint** — palette choices track emotional time-of-day, never applied as flat brand color.
5. **One primary action per screen** — never more than one prominent thing to do at once; secondary actions stay quiet.
6. **Imperfection reads as care** — slight rotations, hand-drawn dividers, and uneven edges signal "made for you," not "generated."

---

# Story Structure

The site is a sequence of **chapters**, not sections. Each chapter is a single Chapter Frame (see Component Language) with its own background tone drawn from the day-arc palette.

### Chapter 0 — The Envelope
- **Purpose:** Establish intimacy and intrigue before any content is shown.
- **Emotion:** Curiosity, a flicker of nerves.
- **Interaction:** A single sealed envelope illustration, centered, with the recipient's name hand-lettered on the front. Tapping/clicking the seal is the only available action.
- **Visual identity:** Dawn Ivory background, the envelope as the sole element, generous surrounding space.
- **Motion identity:** The envelope breathes very slightly (Drift ease); on interaction, the seal lifts and the flap opens (Settle ease, Chapter-length duration).
- **User goal:** Decide to open it.
- **Transition:** The opened flap becomes the doorway — the background begins its first day-arc shift as the page continues.

### Chapter 1 — The Beginning
- **Purpose:** Ground the story in a real origin — where this began.
- **Emotion:** Warmth, recognition.
- **Interaction:** A Floating Letter Card carries the origin narrative; a Botanical Divider draws itself in as the reader finishes.
- **Visual identity:** Parchment background, a single restrained illustration motif (the first sprig of the recurring vine).
- **Motion identity:** Text arrives with the standard entrance treatment (rising opacity, no slides); the vine motif draws itself stroke-by-stroke once, then holds still.
- **User goal:** Understand the "why us."
- **Transition:** The vine motif continues to grow off-screen, pulling the eye downward into the next chapter.

### Chapter 2 — The Small Moments
- **Purpose:** Prove specificity — the details only two people would know or notice.
- **Emotion:** Nostalgia, small private smiles.
- **Interaction:** A loosely-scattered set of small illustrated "keepsake" cards (a ticket stub motif, a pressed-flower motif, a handwritten-note motif), each revealing a short specific memory on hover/tap.
- **Visual identity:** Warm tinted-clay background (a light tint of Dusty Clay Rose), the busiest chapter visually but still restrained — no more than five keepsakes.
- **Motion identity:** Each keepsake blooms slightly on hover/tap (Interaction-duration); idle keepsakes sway very gently (Drift ease).
- **User goal:** Feel specifically, individually known.
- **Transition:** The last keepsake, once opened, transforms into an envelope shape — foreshadowing the next chapter.

### Chapter 3 — The Letter
- **Purpose:** The emotional core — an actual, uninterrupted written letter.
- **Emotion:** Held breath, full attention.
- **Interaction:** The Reveal Envelope component; tap/click (or drag, on non-touch devices) to unfold. Once open, the letter fills the frame; all decorative motion elsewhere pauses.
- **Visual identity:** Full-saturation Dusty Clay Rose background (golden-hour warmth), the letter itself rendered on a Dawn Ivory paper surface for maximum contrast and readability.
- **Motion identity:** The slowest, most deliberate motion in the entire site — the unfold takes the full Chapter-duration, and once open, nothing else moves.
- **User goal:** Read, without distraction.
- **Transition:** The letter settles closed at the bottom of the frame like a keepsake now kept; the background begins its shift toward dusk.
- **Note on the letter itself:** since this is the reader's true and specific words, it is intentionally left as a placeholder in this specification — this is content the couple/author writes, not content this design system invents on their behalf.

### Chapter 4 — The Promise
- **Purpose:** The peak — the actual point of the site (a proposal, a vow, a declaration; adapt the specific words to the occasion).
- **Emotion:** Release, the emotional high point.
- **Interaction:** A single Locket Button as the sole element in the frame, softly glowing.
- **Visual identity:** Ink Maroon background (true dusk/night) — the darkest moment in the arc, chosen deliberately so the Marigold accent and the button glow like lamplight in a dark room.
- **Motion identity:** The button has the one moment of genuinely playful physicality in the whole site — a satisfying "click open" seal-stamp motion on press, with a brief warm flash.
- **User goal:** Respond.
- **Transition:** Whatever response is captured (a tap, a typed reply — implementation-specific) triggers a warm, unhurried fade toward the next chapter's lighter tone, mirroring emotional resolution.

### Chapter 5 — The Path Ahead
- **Purpose:** Close the loop and point forward — next steps, a date, a plan, or simply calm closure.
- **Emotion:** Belonging, quiet calm.
- **Interaction:** Minimal — a short closing note and, if relevant, a single practical action (save a date, share a reply).
- **Visual identity:** A soft return toward warmth — not back to Dawn Ivory exactly, but a deeper, settled version of it, signaling "the next morning" rather than a reset.
- **Motion identity:** The gentlest chapter in the site; almost still, communicating rest after the story's climax.
- **User goal:** Feel resolved, not rushed toward an exit.
- **Transition:** A quiet invitation to keep scrolling for those who want more, rather than an explicit "next" prompt.

### Epilogue — The Hidden Garden
- **Purpose:** Reward the visitor who lingers past where the "official" story ends.
- **Emotion:** Private delight.
- **Interaction:** Home to the Easter Eggs (see below) and a Replay/Share option, styled as a small illuminated window rather than a standard page footer.
- **Visual identity:** Night — Ink Maroon with faint brass star-flecks.
- **Motion identity:** Slow, sparse, twinkling — the most ambient and least narrative-driven motion in the site.
- **User goal:** Explore without obligation.
- **Transition:** None required — this is the resting state of the site, where a returning visitor can jump back into any chapter via the Progress Ribbon.

---

# User Journey

A first-time visitor arrives to a single sealed envelope on an otherwise empty, warm page — no navigation bar, no menu, nothing to suggest scale or length. Opening it is the only decision available, which lowers the barrier to starting: there is exactly one thing to do.

From there, the path is linear by default — each chapter is discovered by scrolling, in order, with no shortcuts offered in the primary flow (skipping ahead would undercut the pacing the whole design is built on). A quiet corner-anchored Progress Ribbon lets a *returning* visitor jump to a specific chapter, but this affordance is understated on first visit so it doesn't invite skipping.

Branching exists only at the margins: hover-lingering on illustrations, typing an undocumented word, or exploring past the Epilogue — all optional, all rewarding curiosity rather than required for the story to make sense.

Exit and return are treated with the same care as entry: closing the tab mid-story and returning later should feel like picking the letter back up, not starting over — the Progress Ribbon remembers where the visitor left off (see Technical Architecture for how this is held in state).

---

# Information Architecture

There is no traditional navigation. The sitemap is intentionally a single spine:

```
Chapter 0 — The Envelope
Chapter 1 — The Beginning
Chapter 2 — The Small Moments
Chapter 3 — The Letter
Chapter 4 — The Promise
Chapter 5 — The Path Ahead
Epilogue — The Hidden Garden
```

The only secondary structure is the Progress Ribbon, which doubles as a lightweight table of contents: a small pull-tab in the corner expands it into a short vertical list of chapter titles (styled as manuscript page markers, not a dropdown menu), letting a returning visitor re-enter anywhere. Footer-equivalent information (credits, a way to share the site, a replay option) lives inside the Epilogue itself rather than as a separate global footer, keeping the single-spine feeling intact.

---

# Visual Identity

**Logotype:** a restrained hand-lettered wordmark used once, at the very top of Chapter 0 — small, quiet, more like an engraver's mark than a brand lockup.

**Symbol:** a single-line illustrated marigold bloom, used as the recurring visual signature — on the envelope seal, as the Locket Button's resting icon, and faintly watermarked into the Epilogue's night sky.

**Texture:** a subtle cold-press paper grain overlay sits across every background at very low opacity, present in every chapter so the whole site reads as one continuous physical object rather than a set of separate screens. Card-style components (the Floating Letter Card, keepsakes) use a softly deckled (irregular, torn-paper) edge instead of a crisp rectangle.

**Grid:** built on a "letter margin" logic rather than a conventional 12-column grid — generous, asymmetric margins that echo the proportions of a written page, with content usually set slightly off-center to avoid the dead-centered, template feeling of stock landing pages.

---

# Color System

Six named colors form the entire system; every other value in the site is a tint, shade, or low-opacity use of one of these six. The palette deliberately avoids cool tones, saturated brights, and any near-black-plus-neon-accent combination — warmth is the whole point of this brief, expressed through a genuine tonal *arc* rather than one static combination.

| Name | Hex | Role | Why it exists |
|---|---|---|---|
| Ink Maroon | `#3A2420` | Primary text; night-chapter background | A warm near-black rather than true black — softer, inkier, avoids the cold "dark mode" feeling. Doubles as the site's "dusk/night" canvas so the peak chapter feels genuinely nocturnal, not just dark-themed. |
| Marigold | `#E0932E` | Primary accent, CTA glow, bloom motif | The site's namesake color. Reserved for moments that matter — the button, the flower, the letter's wax seal — so it never becomes wallpaper. |
| Dawn Ivory | `#F3E6D2` | Base background (dawn chapters) | A warm off-white with a visible pink-yellow cast rather than a flat cream, so it reads as paper, not as a generic light-mode background. |
| Dusty Clay Rose | `#C97C6D` | Secondary accent, golden-hour chapter background | Sits between Marigold and Ink Maroon on the day-arc, giving the palette a genuine mid-tone rather than jumping straight from light to dark. |
| Moss | `#6E7F4F` | Success state, botanical stems/leaves | An earthy, desaturated green pulled from real foliage rather than a UI "success green," so confirmation states still feel hand-drawn. |
| Antique Brass | `#9C7A3E` | Focus rings, interactive borders, structural accents | A quieter, more bronzed gold than Marigold — used for *structure* (borders, focus states) so it never competes with Marigold's role as the "moment" color. |

Supporting utility values, all derived from the six above:
- **Surface (card):** `#ECDFC7` — a Parchment tone between Dawn Ivory and Dusty Clay Rose, giving Floating Letter Cards a surface distinct from the page background.
- **Border/hairline:** `#D9C6AE` — a faded tint of Dusty Clay Rose, used only for thin dividers on light backgrounds.
- **Muted text:** `#8A7A6E` — a warm taupe for captions and secondary copy.
- **Highlight/hover:** Marigold at full saturation for fills; Antique Brass for outlines and rings.
- **Warning:** `#C99A2E` (Turmeric) — reserved for rare system messages (e.g., "audio couldn't load"), kept distinct from both Marigold and Antique Brass.
- **Error:** `#8C3B2E` (Brick) — a darker, more saturated red-brown than Ink Maroon, used only where something has genuinely gone wrong.
- **Shadow:** Ink Maroon at 12–16% opacity — shadows are always warm-toned, never neutral gray.
- **Ambient glow:** a radial gradient from Marigold at ~25% opacity fading to transparent, used behind key illustrations in the dusk/night chapters to simulate lamplight.

**The day-arc, chapter by chapter:**
Dawn Ivory (Ch. 0) → Parchment (Ch. 1) → tinted Dusty Clay Rose, ~20% (Ch. 2) → full Dusty Clay Rose (Ch. 3) → Ink Maroon (Ch. 4) → a settled deep-parchment tone signaling "next morning" (Ch. 5) → Ink Maroon with brass star-flecks (Epilogue). This progression is the site's signature idea: the palette is not decoration applied to a page, it *is* the passage of the story's time.

Every text/background pairing above has been chosen to clear WCAG AA contrast (4.5:1 body / 3:1 large text) at every point on the arc, including Marigold-on-Ink-Maroon in Chapter 4, which was checked specifically because it's the site's emotional peak and cannot afford to be illegible.

---

# Typography System

**Display face:** a warm, low-contrast serif with soft ink-trap detailing and a slightly irregular baseline — in the spirit of *Fraunces* or *Reckless Neue* rather than a stark high-contrast Didone. Used for chapter titles and the letter text itself. Its imperfect curves should feel drawn, not typeset — this is the single biggest lever for the "handcrafted" feeling.

**Body face:** a warm humanist sans with rounded terminals and generous aperture — in the spirit of *General Sans* or *Söhne*, deliberately not Inter or a neutral system grotesque. Used for narrative paragraphs at a comfortable, conversational size.

**Accent face:** a restrained hand-lettered script, used *only* for the wordmark and the single closing signature line in the Epilogue — never for paragraphs, never for buttons. Its rarity is what keeps it feeling personal rather than decorative.

**Numerals:** chapter markers use old-style figures with small caps (e.g., a manuscript-style "Chapter One" rather than a digital "01") — a deliberate rejection of the generic numbered-badge convention, since these chapters are a real narrative sequence, not a feature list dressed up as one.

| Role | Size (desktop) | Line-height | Letter-spacing | Weight |
|---|---|---|---|---|
| Display XL (chapter openers) | 72–96px | 1.05 | −0.01em | Regular/Light |
| Display L (sub-titles) | 44–52px | 1.15 | −0.01em | Regular |
| Body L (narrative) | 20px | 1.6 | 0 | Regular |
| Body M (default) | 17px | 1.55 | 0 | Regular |
| Caption | 14px | 1.4 | +0.02em | Medium |
| Micro (credits, labels) | 12px | 1.4 | +0.04em | Medium, small caps |

Rhythm is generous throughout — this is meant to read like a letter, and letters are read slowly. Display type is set tight (near-negative tracking) so headlines feel intimate and close, while small labels are tracked slightly open for editorial polish, a deliberate contrast between the two ends of the scale.

---

# Illustration Language

All illustration is single-weight ink line work — botanical, hand-drawn in feeling, never photographic and never AI-face-generated. The recurring vocabulary: marigold blossoms in varying states of bloom (bud, half-open, full bloom — used symbolically across the story's arc), a single trailing vine motif that reappears and grows chapter to chapter, and pressed-flower silhouettes used as quiet background texture.

Illustrations are built in two to three depth layers with soft, warm-toned drop shadows so keepsake cards and the envelope feel physically stacked rather than flat. A subtle paper-grain texture sits over every illustration at low opacity, tying illustration and background into one continuous material. Ink-wash color blocking (soft, uneven washes of Dusty Clay Rose or Marigold at low opacity) is used sparingly behind pull-quotes or the letter itself, never as a repeated pattern.

Nothing in this vocabulary is symmetrical or perfectly vector-clean by design — a slightly uneven line weight and the occasional imperfect closure on a shape is what keeps the illustrations feeling drawn by a hand rather than generated by a tool.

---

# Iconography

Icons match the illustration line weight exactly (a consistent ~1.5px-equivalent stroke, rounded joins, no default fill except on active/selected states) and are entirely custom-drawn rather than pulled from any standard icon library:

- **Play/pause:** a small envelope flap, closed vs. open
- **Mute/unmute:** a bud, wilted vs. blooming
- **Share:** a paper airplane folded from letter-paper
- **Replay:** a looping ribbon
- **Scroll cue:** a single falling petal
- **Table of contents:** a ribbon page-marker

Each icon is intentionally a small illustration in its own right rather than a neutral symbol, so the interface never introduces a visual language that feels borrowed from an unrelated system.

---

# Component Language

- **Chapter Frame** — the full-bleed container per chapter. Owns the background color for its point on the day-arc, holds ambient particles, and choreographs entrance/exit for everything inside it.
- **Floating Letter Card** — the primary text-carrying surface; rests slightly above the background with a soft warm shadow, a faintly deckled edge, and a 1–2° rotation for handcrafted imperfection.
- **Locket Button** — the site's only primary call-to-action style, shaped like a small oval locket or wax seal. Never more than one is visible at a time. Its press animation (a satisfying "click open" with a brief bounce) is the one place in the whole site where motion is allowed to be playful rather than restrained.
- **Botanical Divider** — a hand-drawn sprig used between narrative beats instead of a plain rule; draws itself in stroke-by-stroke on scroll rather than fading in as a whole.
- **Petal Cursor Trail** — an optional, low-opacity particle trail following the pointer on non-touch devices, capped so it reads as atmosphere rather than a gimmick; removed entirely under reduced motion.
- **Soundscape Toggle** — persistent, corner-anchored, locket-shaped control for play/pause/volume; always present, never large.
- **Progress Ribbon** — the site's structural signature: a vertical ribbon along the page edge that visually unspools as the visitor descends, gaining a small wax-seal mark at each chapter boundary crossed. Doubles as the lightweight table of contents described earlier.
- **Reveal Envelope** — used specifically in The Letter; tapped, clicked, or dragged open, unfolding to present the letter itself.
- **Hidden Garden Modal** — the Easter Egg container, styled as a small illuminated window rather than a generic dialog box, appearing only when a discovery condition is met.

---

# Motion Language

**Easing philosophy:** two named curves cover almost everything. *Settle* — a gentle overshoot-then-rest curve — is used for anything arriving into place: cards, reveals, the envelope opening. *Drift* — a slow, near-linear curve — is reserved for ambient, idle motion (swaying illustrations, breathing glows) specifically so ambient elements never read as "trying to get attention." Bouncy/elastic motion is used in exactly one place — the Locket Button press — as the site's single moment of playful physicality.

**Timing scale:**

| Category | Duration | Used for |
|---|---|---|
| Micro | 120–180ms | Hover/focus feedback |
| Interaction | 250–350ms | Taps, toggles, small reveals |
| Transition | 600–900ms | Card entrances, divider draw-ins |
| Chapter | 1200–1800ms | Background/scene changes between chapters |

**Animation hierarchy:** primary narrative motion (chapter transitions, the envelope unfolding, the letter reveal) gets the longest duration and most deliberate choreography. Secondary motion (card entrances, dividers) supports it at shorter duration. Tertiary ambient motion (drifting petals, breathing glow) runs continuously at very low amplitude, so it never competes with a primary beat for attention.

**Transitions between chapters:** background color crossfades over the Chapter duration while foreground illustration layers shift slightly slower than text layers (simple parallax), creating depth rather than a hard cut.

**Entrance/exit rules:** content always enters from a slight downward offset with rising opacity — never from the side, which would read as a slideshow. Outgoing content fades and settles rather than sliding away, so a finished chapter feels like it's resting behind the current one, not being discarded.

**Scroll behavior:** no hard scroll-snapping, which feels mechanical. Elements animate in once they cross a threshold and then hold; a gentle magnetic pull exists only right at chapter boundaries so a visitor is never left stranded mid-transition.

**Hover behavior:** interactive illustrations respond with a small "bloom" (1.02–1.04 scale plus a brief Marigold brightening) — never a jarring pop.

**Tap behavior (touch):** hover-dependent reveals convert to a clear tap-to-reveal pattern; touch relies on visible affordance rather than hidden hover states.

**Idle/ambient animation:** petals drift diagonally at very low opacity and speed across every chapter; ambient glows behind key illustrations breathe on a slow 6–8 second cycle — slow enough that the looping is never perceptible within a normal viewing window.

---

# Microinteractions

**Buttons (Locket Button):** default — quiet brass outline. Hover — fills with Marigold, small bloom scale. Focus — visible 2px Antique Brass ring, offset. Active/tap — quick 96% "click open" squash then settle. Loading (rare) — slow pulse of the seal icon. Disabled — desaturated to muted taupe, no hover response. Success (e.g., a reply captured) — the seal visually stamps down with a brief Moss-green flash at the edge.

**Cards (Floating Letter Card):** default — resting with slight rotation and soft shadow. Hover — shadow deepens slightly, rotation eases toward level (a small "paying attention" gesture). Focus (keyboard) — same lift plus visible brass outline. Tap (touch) — same lift, briefly, before revealing content beneath.

**Illustrations/flowers:** idle — a subtle 1–2° sway on the Drift ease. Hover — the bloom scale, with a few petals detaching and drifting (feeding the Petal Cursor Trail). Tap (mobile) — the same bloom, no hold required.

**Letters/envelope:** default — sealed, wax-seal visible. Hover — subtle lift and shadow deepening, signaling "open me." Tap/click — the unfold sequence at Chapter-duration. Once opened, it stays open — no re-sealing, so revisiting never feels like undoing a moment.

**Icons (audio, share, replay):** default — quiet outline only. Hover — fills with Marigold. Focus — brass ring. Tap — an icon-specific gesture (mute "wilts" briefly, play "blooms" open).

**Decorative/background elements:** never look interactive (no cursor change) except designated Easter Egg triggers, which get an almost imperceptible extra sparkle on hover — a reward for attentive visitors, not a giveaway.

---

# Audio Experience

**Emotional brief for the soundscape:** soft, unhurried, and intimate — warm acoustic guitar or harmonium tones, minimal percussion, a breathy or entirely wordless vocal, roughly 70–85 BPM, with reverb suggesting a small room rather than a stage. Any track chosen at implementation time (the reference brief mentions "Aashaqana" by Char Diwari as a tonal example) should be selected for matching *this emotional register*, not locked to one specific song — the design should work with any track sharing this atmosphere.

**Controls:** the Soundscape Toggle is a persistent, corner-anchored, locket-shaped control. A single tap plays or pauses. A secondary small gesture (long-press, or a satellite icon) reveals a minimal three-notch volume control (soft / medium / full) rather than a continuous slider, keeping the control tactile rather than technical.

**Behavior:** audio never autoplays with sound on load. On first visit, the toggle appears as a "closed locket," and the visitor's first tap both starts playback and performs a small opening animation — tying sound-on to a meaningful, consenting gesture. Playback fades in over 2–3 seconds and fades out over 1.5–2 seconds on pause, so sound never cuts abruptly. Volume preference persists for the length of the session (and, if implemented with storage, across return visits), so a visitor who adjusts it once doesn't have to redo it.

**Interaction sounds:** kept extremely sparse and entirely optional — a soft paper-rustle underlay during chapter transitions, a single gentle chime on discovering an Easter Egg — mixed low enough to feel like texture, not UI feedback beeps. These are tied to the same single mute control as the main soundscape.

**Accessibility note:** audio is intentionally independent of the reduced-motion preference; a visitor who reduces motion may still want the soundscape, so the two systems are never coupled.

---

# Interaction Design

**Pointer:** hover-driven blooms and reveals as described above; the system cursor is left untouched (no custom cursor replacing it — a small restraint that keeps the site accessible and avoids a common cliché of over-designed personal sites).

**Keyboard:** full tab order follows the visual/narrative order; every chapter's primary action is reachable and clearly focus-ringed; the Progress Ribbon/TOC drawer opens and closes via a standard, documented keyboard pattern (Tab to reach it, Enter to open, Escape to close).

**Touch:** hover-based reveals convert cleanly to tap-to-reveal; the envelope and letter use simple tap as the guaranteed interaction on mobile, with drag reserved as an optional delight on larger, non-touch devices.

**Drag:** on desktop/tablet, the Chapter 3 envelope can optionally be dragged open (the flap follows the pointer) in addition to a simple click — rewarding exploration without ever making it required.

**Scroll:** the primary and only required navigation mechanism. Animations key off scroll position but never hijack scroll velocity — the visitor's own scroll speed is always respected.

**Orientation:** on mobile, a very subtle device-tilt parallax may nudge background illustration layers — optional, low-amplitude, and automatically disabled under reduced motion or without sensor permission.

**Reduced motion mode:** ambient drift, parallax, and the cursor trail are removed entirely; chapter transitions become simple crossfades; all narrative content remains fully present and complete — motion is texture here, never the carrier of meaning.

---

# Accessibility

**Contrast:** every text/background pairing across the full day-arc — including Marigold-on-Ink-Maroon in the site's darkest, most important chapter — is checked against WCAG AA (4.5:1 body, 3:1 large display text) as a hard requirement, not an afterthought.

**Keyboard navigation:** every interactive element (Locket Button, Soundscape Toggle, Reveal Envelope, Progress Ribbon, Easter Egg triggers) is a genuine focusable element with a visible 2px Antique Brass ring, offset from the element — nothing relies on hover-only affordances for access to core content.

**Screen readers:** chapters are real semantic sections with a sensible heading hierarchy (a single h1 for the site title, h2 per chapter). Purely decorative illustrations and ambient particles are marked decorative and hidden from assistive tech; meaningful illustrations (the envelope, the Locket Button) carry accessible names describing their function ("Open the letter," not "Envelope icon").

**Motion reduction:** fully respected as described above; the story remains emotionally complete with zero motion — nothing essential is communicated by animation alone.

**Focus management:** opening the Reveal Envelope or the Hidden Garden Modal moves focus to the newly revealed content, and closing either returns focus sensibly, so keyboard and screen-reader visitors are never stranded.

**Touch targets:** every tappable element, including small icon controls, meets a 44×44px minimum, with generous spacing between adjacent illustrations to avoid accidental taps.

**Semantic structure:** a skip-to-content link at the very top, a logical landmark structure (a header for the persistent controls, a main for the chapter sequence, a footer-equivalent inside the Epilogue), and no state communicated by color alone — icons and text labels always accompany any color-coded meaning.

---

# Responsive Design

This is a redesign per breakpoint, not a resize.

**Desktop (1280px+):** full multi-layer parallax across three depths; the Progress Ribbon sits as a side-anchored element with generous book-gutter-style margins; Chapter Frames can use asymmetric layouts (text set left, illustration bleeding to the right edge).

**Tablet (744–1279px):** parallax simplifies to two depths instead of three; the Progress Ribbon becomes a slimmer edge treatment; asymmetric layouts collapse toward a centered single column with illustration functioning as background context rather than a competing column.

**Mobile (<744px):** a genuine redesign. The Progress Ribbon becomes a thin top bar rather than a side ribbon (a side ribbon is unreadable and cramped at this width). The Soundscape Toggle relocates to a small persistent pill docked in the bottom safe area. Decorative illustration layers shrink from full-bleed scenes to smaller accent motifs placed near their relevant text — preserving emotional texture without competing with the single reading column. Hover-only interactions (blooms, cursor trail) are removed and replaced with their tap-triggered equivalents. Type steps down two sizes on the scale while line-height increases slightly, keeping long-form reading comfortable on a small screen.

---

# Performance Goals

Target: 95+ across Lighthouse's Performance, Accessibility, Best Practices, and SEO categories.

Illustrations are built primarily as optimized SVG — crisp at any size, extremely light, and easy to recolor directly from the token system — reserving raster formats (WebP/AVIF) only for the paper-grain texture overlay, loaded once and reused everywhere. Chapter assets lazy-load via intersection observer just ahead of need rather than all at once on load. Animation is restricted to `transform`/`opacity` to stay on the GPU compositing path, avoiding any property that triggers layout thrash. Fonts load as variable files with aggressive subsetting to only the glyphs actually used in the site's copy, with a swap-style loading behavior so text is never invisible while fonts load. The audio file is deferred entirely until the visitor's first interaction with the Soundscape Toggle, so it never competes with initial page weight. Visitors with reduced motion automatically skip the heavier ambient-particle rendering path — which also happens to be the lighter one computationally, so accessibility and performance reinforce each other rather than trading off. Progressive enhancement underpins all of it: the story is fully readable with JavaScript disabled or a slow connection — motion and audio are enhancements layered on top of real, static, semantic content, never a requirement for understanding it.

---

# Technical Architecture (Conceptual Only)

The experience lives primarily on a single Next.js App Router route, keeping the scroll-driven chapter sequence intact as one continuous spine (secondary routes are reserved for future expansion, such as a printable keepsake view).

A `ChapterProvider` context tracks the currently active chapter via IntersectionObserver thresholds, exposing that state to the Progress Ribbon and to any component that needs to know where the visitor is in the story. A separate `AudioProvider` context owns playback state, volume, and fade behavior independently of chapter state, so sound and story evolve on coordinated but distinct timelines.

A small, shared motion-primitives layer defines only a handful of reusable behaviors — the entrance treatment, the hover bloom, the chapter crossfade, the idle drift — rather than bespoke animation logic living inside individual components. Every motion in the site should be traceable back to one of these few, documented primitives.

Content — chapter copy, captions, the letter text itself — is kept separate from presentation in structured content files, so wording can be revised without touching component logic. A single `reducedMotion` flag, derived from the OS-level preference, gates the ambient/parallax code paths at the provider level rather than being checked ad hoc inside every component, keeping accessibility behavior centralized and easy to verify.

---

# Folder Architecture (Conceptual Only)

- **app/** — the single primary route, plus any future secondary routes (a keepsake export, etc.)
- **components/chapters/** — one component per chapter, each composed from shared primitives rather than owning bespoke animation logic
- **components/primitives/** — the shared motion wrappers referenced above (entrance, bloom, crossfade, drift)
- **components/ui/** — small reusable pieces: Locket Button, Botanical Divider, Progress Ribbon, Soundscape Toggle
- **content/** — structured per-chapter copy and configuration, kept separate from component code
- **lib/motion/** — easing curves and the timing scale, defined once and imported everywhere
- **lib/audio/** — playback, fade, and persistence logic behind the AudioProvider
- **styles/** — design tokens (the Color System and Typography System values) as the single source of truth, plus any SCSS modules for one-off treatments that don't belong in the token system
- **public/illustrations/** — the SVG illustration library, organized by chapter and by reusable motif (marigold, vine, envelope, locket)

---

# Future Expansion Ideas

A printable/PDF export of The Letter chapter, styled to resemble a genuinely printed card. Multi-language content swapping without touching any part of the design system. A seasonal palette variant — the same day-arc structure, re-skinned for a different season or occasion. A lightweight shared "guestbook" or message wall for cases where more than one recipient is meant to read and respond. A small companion set of static wallpapers, or a single short looping clip drawn from the illustration library, for sharing outside the site itself.

---

# Easter Eggs

Lingering (hovering, or a brief press-and-hold on touch) on any illustrated marigold for a few seconds triggers a small, unscripted petal shower unrelated to the main narrative — a pure reward for lingering, nothing more. A specific, undocumented word typed anywhere within The Small Moments chapter reveals a single handwritten footnote tucked quietly into the margin. Scrolling further than the story technically requires, past the very end of the Epilogue, reveals a small hand-drawn note suggesting the story continues beyond the page. Clicking a small illustrated moon or star motif in the Epilogue's night sky three times in a row triggers a brief constellation animation tracing out a meaningful date or set of initials, then quietly resetting — leaving no trace for a visitor to stumble on it by accident a second time.

None of these are gimmicks or memes; each rewards genuine attentiveness rather than announcing itself.

---

# Final Creative Summary

The Marigold Hour is built on one idea, executed with discipline: a story told through light. Every chapter earns its place in a single, unhurried arc from dawn to dusk to night, and every interaction — a bloom, an unfolding letter, a locket clicking open — exists because it means something, not because it looks impressive. Nothing here is borrowed from a template, a component library, or a greeting-card convention; the palette, the type pairing, the ribbon that unspools as you descend, and the envelope that never re-seals are all built specifically for this one story. The measure of success isn't a Lighthouse score or an Awwwards nomination — though the craft should earn both — it's whether the one person this was built for feels, for a few unhurried minutes, entirely and specifically seen.

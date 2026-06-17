import ardenThumb from "@/assets/prototypes/arden-house-hero.jpg";
import bennettThumb from "@/assets/prototypes/bennett-skin-hero.jpg";
import castellanoThumb from "@/assets/prototypes/castellano-hero.png";
import aeviaThumb from "@/assets/prototypes/aevia-hero.jpg";
import meridianThumb from "@/assets/prototypes/meridian-hero.png";
import mesaThumb from "@/assets/prototypes/mesa-hero.png";

import ardenAccent from "@/assets/library/interiors/the_interior_of_a_serene_high-end_med_spa_reception_bright_an_72b1d7a6-f614-4255-919a-cefe807d98ea_0.jpg";
import bennettAccent from "@/assets/library/interiors/a_calm_modern_treatment_room_shot_like_editorial_interior_des_1e026ffb-19e2-40d0-91aa-722887a7f583_1.jpg";
import castellanoAccent from "@/assets/library/interiors/dramatic_luxury_interior_with_black_reflective_floor_and_ivor_1603da1b-66bc-44d2-ac3a-d932702109c7_0.jpg";
import aeviaAccent from "@/assets/library/interiors/boutique_skin_studio_atmosphere_towels_and_skincare_bottles_o_1c1360a9-1a82-4da6-be6b-21f5c180300e_2.jpg";
import meridianAccent from "@/assets/library/interiors/premium_medspa_website_design_mood_image_spa_towels_skincare__08b0c333-8208-47ac-bd24-17b568accd7a_1.jpg";
import mesaAccent from "@/assets/library/interiors/modern_skin_studio_reception_soft_beige_and_ivory_palette_cle_3d88b1f8-0ecc-4141-90b7-93e07234e582_1.jpg";

export type StudioProject = {
  id: string;
  slug: string;
  name: string;
  practiceType: string;
  city: string;
  year: string;
  oneLiner: string;
  premise: string;
  optimizations: string[];
  previewUrl: string;
  embedAllowed: boolean;
  /** Prototype site screenshot for tiles and scroll fallback */
  thumbImage: string;
  /** Editorial MJ accent for case page atmosphere */
  accentImage: string;
  accentCaption?: string;
};

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    id: "01",
    slug: "arden-house",
    name: "Arden House Aesthetics",
    practiceType: "Boutique injectables",
    city: "Old Town Alexandria",
    year: "2026",
    oneLiner:
      "Boutique medical aesthetics in Old Town Alexandria — quiet luxury that reassures the cautious buyer instead of chasing the eager one.",
    premise:
      "For the buyer who wants to look rested, not \"done.\" Most injectables sites are loud and promotional, which is exactly what scares off the affluent, cautious client. This build works as a luxury filter — it reassures the hesitant rather than pressuring the eager.",
    optimizations: [
      "Drag-to-reveal results. Instead of a grid of poorly-lit before/afters, an interactive slider lets the visitor physically wipe away tired skin to reveal the result. The transformation becomes something they do, not something they're shown.",
      "Scarcity built into the calendar. The in-page booking modal displays greyed-out \"booked\" slots — quietly signaling demand without a single \"limited spots!\" banner.",
      "Financing placed to protect the brand. Financing appears only on the top-tier plan and the high-ticket treatment — accessible where it matters, invisible where it would cheapen the rest.",
      "A soft-capture lead magnet. For the not-yet-ready buyer, a guide (\"Looking Rested, Not Done\") trades value for an email — building a qualified list out of visitors who'd otherwise leave.",
    ],
    previewUrl: "https://arden-house-aesthetics.vercel.app/",
    embedAllowed: true,
    thumbImage: ardenThumb,
    accentImage: ardenAccent,
    accentCaption: "Reception calm before the consult.",
  },
  {
    id: "02",
    slug: "meridian-aesthetics",
    name: "Meridian Aesthetics + Laser",
    practiceType: "Clinical aesthetics & laser",
    city: "Bethesda",
    year: "2026",
    oneLiner:
      "A Bethesda aesthetics practice built on results, not romance — concern-first routing and transparent downtimes that sell through honesty.",
    premise:
      "The deliberate outlier. Where most aesthetics sites drown in spa romance, this one treats the field as a rigorous medical discipline — mapped protocols, honest downtimes, verifiable results. Cool where the others are warm, because the practice's authority is the selling point.",
    optimizations: [
      "Concern-first routing. The visitor doesn't need to decode laser names. They pick the problem — texture, volume loss, tone — and the site returns the exact protocols that address it. Patient anxiety meets a concrete answer in one click.",
      "Transparent treatment data. Every treatment lists its downtime and expected results up front, in a grid. Managing expectations is the trust-builder; nothing is hidden behind a consultation.",
      "Proof mapped to procedure. Patient quotes are tied to the specific treatment each person received, above a before/after teaser that funnels to a dedicated results page. Specific proof, not a generic carousel.",
      "Booking at every decision point. The primary action repeats right where decisions happen — after the concern explorer, under the membership tiers, at the end of the page.",
    ],
    previewUrl: "https://meridian-skin-lab.vercel.app/",
    embedAllowed: true,
    thumbImage: meridianThumb,
    accentImage: meridianAccent,
    accentCaption: "Clinical mood before the device list.",
  },
  {
    id: "03",
    slug: "castellano-wellness",
    name: "Castellano Wellness",
    practiceType: "Medical skincare",
    city: "Madison Avenue, NYC",
    year: "2026",
    oneLiner:
      "Medical skincare on Madison Avenue — an editorial booking experience with a treatment-matching quiz and credibility placed before price.",
    premise:
      "Board-certified dermatology on the Upper East Side. Medical skincare sites usually pick the wrong fear: they either dress down into day-spa templates or freeze into hospital-portal coldness. This build holds the line between credible and inviting — a practice that looks as considered as the work it does.",
    optimizations: [
      "The treatment-matching quiz. A visitor who doesn't know what they need is a visitor who leaves. A four-step assessment surfaces a personalized recommendation and routes straight to booking — capturing the interested-but-unsure, not just the already-decided.",
      "Credibility before the price list. The doctor's credentials — degree, institution, years in practice — sit early, before any service or number. The visitor knows who is doing the work before they evaluate what it costs.",
      "A booking path in three places. Fixed in the nav, restated quietly in the hero, and again inside the consultation form at the foot of the page. Always one motion away, never shouting.",
      "Memberships as the second conversion. A visitor not ready for a single appointment can still convert into a recurring relationship — tiers placed late, with the eye guided to the commitment tier.",
    ],
    previewUrl: "https://castellano-wellness.vercel.app/",
    embedAllowed: true,
    thumbImage: castellanoThumb,
    accentImage: castellanoAccent,
    accentCaption: "Madison Avenue editorial tone.",
  },
  {
    id: "04",
    slug: "bennett-skin",
    name: "Bennett Skin & Dermatology",
    practiceType: "Physician-led dermatology",
    city: "Charleston",
    year: "2026",
    oneLiner:
      "Physician-led private dermatology in Charleston — generational trust and answered anxieties, in warm coastal calm.",
    premise:
      "An established, physician-led private practice. The category splits into cold hospital-network templates and trendy influencer med spas with no medical authority. This build refuses both — a warm, multi-generational, deeply trusted clinical practice that still looks expensive.",
    optimizations: [
      "Generational proof, not a review carousel. Social proof is a single full-width pull-quote about a thirty-year, three-generation relationship with the physician. It sells trust and longevity — what this category's buyers actually weigh — rather than a cosmetic before/after.",
      "Anxiety-reducers at the exact point of decision. Right before the final booking CTA: \"now accepting new patients,\" \"most major insurance accepted,\" \"we respond within one business day.\" The specific hesitations of a dermatology patient, answered where they'd otherwise stall.",
      "Context-aware booking. Each treatment card opens the booking modal with that reason pre-selected — less friction, fewer drop-offs between interest and action.",
      "Booking that follows you on mobile. A fixed call / request-a-visit bar anchors the bottom of every mobile screen, recognizing where local-practice traffic actually comes from.",
    ],
    previewUrl: "https://bennet-dermatology.vercel.app/",
    embedAllowed: true,
    thumbImage: bennettThumb,
    accentImage: bennettAccent,
    accentCaption: "Treatment room restraint.",
  },
  {
    id: "05",
    slug: "mesa-skin-studio",
    name: "The Mesa Skin Studio",
    practiceType: "Barrier-focused skincare",
    city: "Santa Monica",
    year: "2026",
    oneLiner:
      "A Santa Monica skin studio — barrier-obsessed care delivered as quiet, editorial hospitality with a no-pressure first visit.",
    premise:
      "A boutique studio built on barrier repair, sensitive skin, and consistency. Esthetics sites tend to swing between clinical intake form and pushy e-commerce catalog. This one treats the visit like hospitality — quiet guidance that leads to booking instead of overwhelming on the way there.",
    optimizations: [
      "Guided funnels over a wall of services. A scannable \"skin mapping\" preview grouped by goal, plus a three-question \"Find Your Facial\" quiz that confidently recommends a starting point — removing the decision paralysis that kills a long service menu.",
      "A complimentary first visit, stated plainly. The booking flow advertises a free 45-minute skin-mapping consult with no pressure to buy that day. The perceived risk of a first appointment drops to near zero.",
      "Trust woven into the page, not exiled to a tab. Reviews sit beneath the philosophy section; the founder's bio carries her actual opinionated voice. Authority by presence, not a forgotten testimonials page.",
      "Retention as a quiet nudge. After the quiz result: \"most people keep this up monthly on The Ritual\" — a contextual path to membership instead of a hard upsell.",
    ],
    previewUrl: "https://mesa-skin-studio.vercel.app/",
    embedAllowed: true,
    thumbImage: mesaThumb,
    accentImage: mesaAccent,
    accentCaption: "California light, minimal footprint.",
  },
  {
    id: "06",
    slug: "aevia-skin-bar",
    name: "Aevia Skin Bar",
    practiceType: "Membership skin care, NP-led",
    city: "NP-led practice",
    year: "2026",
    oneLiner:
      "Medical-grade, membership-led skin care — clinical authority wrapped in warm editorial luxury, engineered to convert underneath.",
    premise:
      "A medical-grade practice built around recurring membership and NP-led protocols. The category tends to read as either cold clinic or cheap discount site. This build hides serious conversion optimization inside warm, editorial restraint — luxury on the surface, engineered underneath.",
    optimizations: [
      "A complimentary analysis as the front door. \"Your first skin analysis is complimentary — 45 minutes with a provider, no membership required,\" under the hero button and in the booking drawer. The highest-friction step becomes the lowest-risk one.",
      "The quiz as lead magnet — without a blocking pop-up. The skin quiz returns a custom protocol, then asks for an email in a single line that resolves to \"Sent. Check your inbox\" — capturing the lead without ever blocking the booking.",
      "Calm scarcity and risk reversal, together. \"Founding membership — enrollment is limited\" beside \"month to month, cancel anytime.\" Urgency and reassurance in the same breath, neither one loud.",
      "The hardest interaction, rebuilt for thumbs. The membership pricing — a heavy scrolling sequence on desktop — becomes a native horizontal swipe on mobile, where most conversions happen.",
    ],
    previewUrl: "https://aevia-skin-bar.vercel.app/",
    embedAllowed: true,
    thumbImage: aeviaThumb,
    accentImage: aeviaAccent,
    accentCaption: "Monthly ritual, not one-off appointments.",
  },
];

export function getProjectBySlug(slug: string): StudioProject | undefined {
  return STUDIO_PROJECTS.find((p) => p.slug === slug);
}

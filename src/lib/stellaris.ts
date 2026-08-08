/**
 * Central content model for the Stellaris corporate portfolio site.
 *
 * Governance notes:
 * - Stellaris Portfolio HQ is the governance layer, not a consumer product.
 * - Status language must stay neutral. Never assert public availability,
 *   pricing, customers, certifications, or launch dates here.
 */

/**
 * Contact routing is NOT active during private preview. There is no public
 * inbox, form handler, or support queue yet. Never introduce a placeholder
 * email address here — an address that cannot receive mail must not appear
 * to be a working contact channel.
 */
export const CONTACT_ROUTING_ACTIVE = false;

export const CONTACT_ROUTING_STATUS =
  "Contact routing is not active during private preview. Public inquiry addresses have not been established, so this site publishes none.";

export const CONTACT_ROUTING_SHORT = "Contact routing not yet active — private preview.";

export const CONTACT_ROUTING_INTERNAL =
  "Until routing is established, inquiries are handled through internal Stellaris Portfolio HQ channels.";

export const PORTFOLIO_NAME = "Stellaris Portfolio HQ";

/** Neutral, evidence-safe status labels. */
export type ProductStatus = "In development" | "Private preview" | "Product program";

export type Product = {
  id: string;
  /** URL segment under /products */
  slug: string;
  name: string;
  shortName: string;
  domain: string;
  tagline: string;
  /** Portfolio-level summary — not a feature catalog. */
  summary: string;
  status: ProductStatus;
  /** Design-system accent classes so each product feels distinct but related. */
  accent: {
    text: string;
    border: string;
    surface: string;
    dot: string;
  };
  problem: string;
  purpose: string;
  themes: { title: string; body: string }[];
  audience: string[];
  statusNote: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "career",
    slug: "career",
    name: "Stellaris Career — Resume Engine",
    shortName: "Stellaris Career",
    domain: "Career development",
    tagline: "Evidence-based support for the moments that decide a career step.",
    summary:
      "A career platform built on a person's real record of work. It supports tailoring an application to a specific opportunity, preparing for interviews, evaluating an offer, and thinking through longer-term development.",
    status: "In development",
    accent: {
      text: "text-career",
      border: "border-career/35",
      surface: "bg-career/6",
      dot: "bg-career",
    },
    problem:
      "Most career tooling optimises for volume: more applications, more listings, more noise. The harder work begins after someone has identified an opportunity they genuinely want — understanding what the role asks for, representing their experience truthfully, preparing for the conversations, and judging an offer without pressure.",
    purpose:
      "Stellaris Career is designed to work from a person's actual record of work rather than generated claims, and to keep the person in the decision seat at every step.",
    themes: [
      {
        title: "Evidence-based record",
        body: "Career history, achievements, and supporting detail held as a structured record the person controls and can correct.",
      },
      {
        title: "Application preparation",
        body: "Reading a specific opportunity closely and preparing tailored material that traces back to real experience.",
      },
      {
        title: "Interview preparation",
        body: "Working through likely questions and structuring answers from the person's own examples.",
      },
      {
        title: "Offer evaluation and negotiation support",
        body: "Making the shape of an offer legible so trade-offs can be weighed deliberately.",
      },
      {
        title: "Longer-term development",
        body: "Capturing progress over time so the record stays current between career moves.",
      },
    ],
    audience: [
      "Professionals preparing for a specific, considered career move",
      "People who want their materials grounded in what they actually did",
      "Anyone re-entering or changing field who needs their record read fairly",
    ],
    statusNote:
      "Stellaris Career is in development. Detailed tools, current scope, and availability live in the product experience rather than on this corporate site. This page does not describe a released feature set.",
  },
  {
    id: "family",
    slug: "family-manager",
    name: "Stellaris Family Manager",
    shortName: "Family Manager",
    domain: "Household coordination",
    tagline: "Turning scattered household signals into plans someone can act on.",
    summary:
      "A coordination platform for households: messages, calendars, activities, tasks, travel detail, pets, and caregiving responsibilities brought together into organised plans and timely reminders.",
    status: "In development",
    accent: {
      text: "text-family",
      border: "border-family/35",
      surface: "bg-family/6",
      dot: "bg-family",
    },
    problem:
      "Household coordination arrives as fragments — a message thread, a printed schedule, an email confirmation, a note on a counter. The work of turning those fragments into a plan usually falls on one person, and the cost of missing one is real.",
    purpose:
      "Family Manager is designed to collect those fragments into a shared, structured picture of the household, so plans are visible to the people who need them and assistance arrives before something is missed.",
    themes: [
      {
        title: "One household picture",
        body: "Members, children, pets, and caregivers modelled as part of the household rather than as afterthoughts.",
      },
      {
        title: "From fragments to plans",
        body: "Activities, schedules, and commitments organised into something a household can act on together.",
      },
      {
        title: "Timely assistance",
        body: "Surfacing what needs attention next instead of presenting another full inbox.",
      },
      {
        title: "Shared responsibility",
        body: "Making it clear who is doing what, so coordination is not carried silently by one person.",
      },
      {
        title: "Travel and logistics detail",
        body: "Keeping the practical details of a trip or a week in one place.",
      },
    ],
    audience: [
      "Households coordinating multiple schedules",
      "Parents and caregivers carrying planning load",
      "Families sharing responsibility across more than one home",
    ],
    statusNote:
      "Stellaris Family Manager is in development. This page describes intended purpose and design direction. It does not assert that any specific integration, connected calendar, or messaging source is live.",
  },
  {
    id: "cookingplanit",
    slug: "cookingplanit",
    name: "CookingPlanIt",
    shortName: "CookingPlanIt",
    domain: "Everyday planning",
    tagline: "Practical planning for meals, recipes, and the shopping around them.",
    summary:
      "A planning platform for meals, recipes, grocery coordination, and the everyday cooking workflows that sit between deciding what to eat and getting it on the table.",
    status: "In development",
    accent: {
      text: "text-cooking",
      border: "border-cooking/35",
      surface: "bg-cooking/6",
      dot: "bg-cooking",
    },
    problem:
      "Deciding what to cook is rarely the hard part. Keeping decisions, recipes, shopping, and the realities of a given week aligned is — and it repeats every week.",
    purpose:
      "CookingPlanIt is a planning program focused on the practical workflow around cooking rather than on recipe discovery alone.",
    themes: [
      {
        title: "Meal planning",
        body: "Planning across a week in a way that reflects the time and constraints actually available.",
      },
      {
        title: "Recipes as working material",
        body: "Treating recipes as something to plan and shop against, not only to read.",
      },
      {
        title: "Grocery coordination",
        body: "Connecting a plan to what needs to be bought.",
      },
      {
        title: "Everyday cooking workflow",
        body: "Supporting the sequence of steps a week of cooking actually requires.",
      },
    ],
    audience: [
      "People planning meals for a household",
      "Anyone coordinating cooking and shopping across a week",
    ],
    statusNote:
      "CookingPlanIt is in development. A migrated build exists as evidenced work, and reconciliation within Stellaris Portfolio HQ is underway. This page describes purpose and direction at portfolio level; it does not claim a fully audited capability set or public availability.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const NAV = [
  { label: "Products", to: "/products" as const },
  { label: "For Organizations", to: "/for-organizations" as const },
  { label: "How We Build", to: "/how-we-build" as const },
  { label: "About", to: "/about" as const },
  { label: "Trust", to: "/trust" as const },
  { label: "Contact", to: "/contact" as const },
];

export const LEGAL_NAV = [
  { label: "Privacy", to: "/privacy" as const },
  { label: "Terms", to: "/terms" as const },
  { label: "Cookies", to: "/cookies" as const },
  { label: "Accessibility", to: "/accessibility" as const },
];

export const BUILD_PRINCIPLES = [
  {
    n: "01",
    title: "Start with the real workflow",
    body: "We describe the actual sequence of work a person does before deciding what, if anything, an AI system should contribute. The workflow leads; the technique follows.",
  },
  {
    n: "02",
    title: "Preserve truth and user control",
    body: "Systems work from what a person has actually provided or confirmed. Drafts and recommendations are proposals a person can accept, change, or reject.",
  },
  {
    n: "03",
    title: "Separate verified from planned",
    body: "Across the portfolio we distinguish what is built and tested from what is designed or intended. Planned work is never presented as delivered.",
  },
  {
    n: "04",
    title: "Design for privacy and security",
    body: "Products are designed to collect what a workflow needs, keep personal records separated by default, and treat sharing between products as an explicit choice.",
  },
  {
    n: "05",
    title: "Build modular systems",
    body: "Each product is developed as its own system so it can improve, or be corrected, without destabilising the rest of the portfolio.",
  },
  {
    n: "06",
    title: "Maintain evidence and governance",
    body: `${PORTFOLIO_NAME} keeps requirements, decisions, and status records for each product so claims made publicly can be traced back to something recorded.`,
  },
];

export const APPROACH = [
  {
    title: "Useful before impressive",
    body: "A system earns its place by reducing real effort in a real workflow, not by demonstrating a capability.",
  },
  {
    title: "Truthful by construction",
    body: "Our products work from a person's own record. We do not invent experience, history, or detail to fill a gap.",
  },
  {
    title: "Private by design",
    body: "Personal records are treated as belonging to the person. Separation is the default; connection is a decision.",
  },
  {
    title: "Built around real workflows",
    body: "Each product begins from an observed sequence of work — applying for a role, running a household week, planning meals.",
  },
];

export const INQUIRY_TYPES = [
  "General",
  "Product interest",
  "Licensing",
  "Partnership",
  "Enterprise or pilot",
  "Privacy or trust",
  "Support routing",
] as const;

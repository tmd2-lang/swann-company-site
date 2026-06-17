/** What a conversion-ready site does for the practice — not Swann pricing, not fake client ROI. */
export type BenefitStat = {
  display: string;
  label: string;
  /** When set, animate with Counter instead of static display */
  animate?: { value: number; prefix?: string; suffix?: string };
};

export const CONVERSION_BENEFITS: BenefitStat[] = [
  {
    display: "24/7",
    label: "An open booking path when front desk is closed and buyers are researching at night.",
  },
  {
    display: "0",
    animate: { value: 0 },
    label: "Extra ad spend required to start, if you already have traffic and proof.",
  },
  {
    display: "More",
    label: "Consults booked from the same visitors you are already paying to attract.",
  },
  {
    display: "At the CTA",
    label: "Reviews, credentials, and before-and-after proof where the decision actually happens.",
  },
  {
    display: "Real pages",
    label: "Treatment depth that answers cost, fit, timeline, and safety. Not a one-line service menu.",
  },
  {
    display: "Mobile-first",
    label: "A path that works on the phone, where most aesthetic research and booking starts.",
  },
];

export const BENEFIT_TICKER = [
  { v: "More bookings", l: "from the traffic you already have" },
  { v: "Trust at the CTA", l: "not buried three scrolls away" },
  { v: "After-hours demand", l: "captured without more staff hours" },
  { v: "Treatment pages", l: "that answer hesitation before the call" },
  { v: "One clear path", l: "book online, text, or call-back" },
  { v: "Higher perceived value", l: "before they compare you on price" },
];

import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-size-a-diesel-generator",
    title: "How to Size a Diesel Generator: A Practical Guide",
    excerpt:
      "Undersizing risks nuisance trips under motor inrush; oversizing wastes capital and causes wet-stacking. Here's how to get the number right.",
    category: "Buying Guides",
    publishedAt: "2026-06-12",
    readingTime: "7 min read",
    author: "SNJ Technical Team",
    body: [
      "The single most common mistake in genset sizing is calculating from nameplate ratings instead of actual running load. A building's connected load and its diversified running load are rarely the same number, and sizing to the wrong one either wastes capital on an oversized unit or leaves you exposed under real conditions.",
      "## Start with a load list, not a guess",
      "List every piece of equipment that needs to ride through an outage, its running power draw in kW, and — critically — its starting inrush if it has a motor. Air conditioning compressors, water pumps, and lift motors can draw three to six times their running current for a few seconds at start-up, and your genset needs to survive that spike even if it never has to sustain it.",
      "## Apply a safety margin, not a guess",
      "A 20–25% margin over your calculated running load is standard practice. This isn't padding — it accounts for diversity assumptions that don't hold under real conditions, and it gives the alternator headroom so it isn't running at the edge of its rating continuously, which shortens its service life.",
      "## Convert kW to kVA correctly",
      "Gensets are rated in kVA, and the conversion from your calculated kW load depends on your power factor — typically 0.8 for mixed commercial and industrial loads. Dividing your kW figure by 0.8 gives you the kVA rating to size against, not simply matching the numbers directly.",
      "## When in doubt, use a calculator built for this",
      "Our [power requirement calculator](/tools/calculator) runs this exact process — enter your load list or a quick facility-type estimate, and it returns a recommended kVA rating along with matching models from our catalog.",
    ],
  },
  {
    slug: "amc-vs-pay-per-visit-maintenance",
    title: "AMC vs. Pay-Per-Visit: What Actually Costs Less Over 5 Years",
    excerpt:
      "A side-by-side look at maintenance economics for a 125 kVA genset running standard commercial duty over a five-year horizon.",
    category: "Maintenance",
    publishedAt: "2026-05-03",
    readingTime: "6 min read",
    author: "SNJ Technical Team",
    body: [
      "Facility managers often default to pay-per-visit servicing because it looks cheaper on a per-incident basis — until an emergency callout, a compounded failure from a deferred repair, or an insurance audit finding forces an unplanned major expense.",
      "## The visible cost: scheduled service",
      "A quarterly scheduled visit under AMC typically costs less per visit than an equivalent ad-hoc service call, because it's planned labor and bundled consumables rather than emergency dispatch pricing.",
      "## The hidden cost: deferred failure",
      "Genset failures rarely happen at convenient times. An emergency breakdown callout costs more per hour than a scheduled visit, and if the failure occurs during an actual mains outage, the cost of the outage itself — spoiled inventory, halted production, a compliance breach — usually dwarfs the repair bill.",
      "## What AMC actually buys you",
      "Beyond the maintenance schedule itself, AMC customers get priority dispatch on the emergency line and a maintained service history that both extends engine life and preserves resale value if you ever sell the unit.",
      "## The five-year picture",
      "Across the sites we service, AMC customers see materially fewer major-component failures over a five-year window than pay-per-visit customers running an identical duty cycle, largely because early-stage wear gets caught at a scheduled visit instead of becoming a breakdown.",
    ],
  },
  {
    slug: "wet-stacking-explained",
    title: "Wet Stacking: Why Your Genset Runs Fine on Test but Fails Under Load",
    excerpt:
      "A genset that passes a no-load weekly test can still be silently accumulating unburned fuel deposits that cause failure under real duty.",
    category: "Technical",
    publishedAt: "2026-04-18",
    readingTime: "5 min read",
    author: "SNJ Technical Team",
    body: [
      "Wet stacking occurs when a diesel engine runs for extended periods at low load relative to its rating, preventing combustion temperatures from reaching the point where fuel burns completely. The result is unburned fuel and carbon accumulating in the exhaust system, and over time, in the engine itself.",
      "## Why a no-load weekly test hides the problem",
      "Most facilities run a weekly exerciser cycle with no connected load, which keeps the engine mechanically exercised but does essentially nothing to prevent wet stacking — if anything, no-load running is the primary cause of it.",
      "## The fix is load, not more testing",
      "The most effective prevention is running the genset under at least 60–70% of its rated load periodically, which is exactly what a proper load bank test verifies and, done regularly enough, actively prevents.",
      "## What to watch for",
      "Black or dark exhaust smoke, oil that looks unusually diluted at routine checks, and a noticeable drop in performance under real load compared to a no-load test are all warning signs worth flagging to your maintenance provider immediately.",
    ],
  },
  {
    slug: "choosing-between-diesel-and-gas-gensets",
    title: "Diesel or Gas: Choosing the Right Fuel Type for Your Site",
    excerpt:
      "Gas isn't a drop-in replacement for diesel — it changes your fuel logistics, response time, and duty-cycle economics.",
    category: "Buying Guides",
    publishedAt: "2026-03-22",
    readingTime: "6 min read",
    author: "SNJ Technical Team",
    body: [
      "The diesel-versus-gas decision comes down to three questions: how you're using the genset, what fuel infrastructure already exists at your site, and how much you value emissions and noise reduction against upfront cost.",
      "## Standby vs. continuous duty changes the math",
      "For pure standby applications that run only during outages, diesel's energy density and simple on-site storage usually make it the more practical choice. For continuous or near-continuous prime power, gas gensets' lower per-hour fuel cost and extended service intervals often win out over the operating life of the unit.",
      "## Fuel infrastructure is the real constraint",
      "A gas genset needs a reliable piped natural gas connection or an on-site biogas source — if neither exists at your site, the infrastructure cost to bring one in can outweigh any operating-cost advantage.",
      "## Emissions and noise",
      "Gas gensets generally run quieter and with a cleaner emissions profile than an equivalent diesel unit, which matters more for sites with strict local noise ordinances or sustainability reporting requirements than for a rarely-used backup unit in an industrial yard.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

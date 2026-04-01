# TrashDash Resale Marketplace
## A Second Revenue Stream from What You're Already Hauling

---

## The Problem

Every truckload TrashDash picks up contains items with real resale value — furniture, appliances, tools, electronics. Right now, that value goes to the landfill along with **$62/ton** in tipping fees (the 2024 national average, up 10% year-over-year).^[2] Customers paid you to take it. You're paying the dump to accept it. The items disappear.

Meanwhile, the US secondhand market hit **$56 billion in 2025** and is growing at **14% per year** — 5–6x faster than traditional retail.^[1] Platforms like KSL Classifieds, Facebook Marketplace, and eBay have millions of buyers actively searching for exactly the kind of items TrashDash hauls every day.

The opportunity: **stop paying to throw away inventory and start getting paid for it.**

---

## Proof This Works

This isn't theoretical. Junk removal companies are already doing this:

| Company | What They Did | Result |
|---|---|---|
| **Daniel's company (Orange County, CA)** | Opened a thrift store fed by junk removal inventory | Thrift store revenue **exceeded** junk removal revenue |
| **Remoov (San Francisco)**^[3] | Built a resale operation into the removal service. Customers get 50% of resale price. Operates a showroom called Reperch. | Differentiated from every competitor. Customers choose them because they get money back. |
| **Junkluggers of Pittsburgh**^[4] | Opened **Remix Market**, a semi-thrift store stocked by removal jobs | Second revenue stream with near-zero inventory cost |
| **College HUNKS**^[5] | 70% landfill diversion through donation partnerships | Average franchise grosses $1.45M/year. Top 25% gross $3.09M with $309K EBITDA. |

The pattern: companies that resell instead of dump consistently outperform those that don't.

---

## The TrashDash Advantage

TrashDash is already positioned better than most:

1. **Free inventory** — Customers pay TrashDash to take their stuff. Cost of goods: zero.
2. **Utah's marketplace dominance** — KSL Classifieds is the dominant local marketplace in Utah, Idaho, and Wyoming. Parent company Deseret Digital Media reaches over 20 million monthly unique visitors across its properties.^[6] KSL charges nothing to list. No other state has a single platform this dominant for local resale.
3. **No storefront needed** — Start with online listings and an auction house. Zero rent, zero retail overhead.
4. **Landfill fee savings** — Even before a single item sells, diverting 50% of volume saves $75–$200 per truckload in tipping fees.
5. **Built-in labor** — The crew is already on-site handling the items. Adding a photo and a condition tag takes 30 seconds per item.
6. **Employee attribution** — Workers who identify valuable items can be tracked and rewarded, creating an incentive to salvage rather than dump.

---

## What the Business Looks Like

### Revenue Model

```
┌─────────────────────────────────────────────────────┐
│                   CURRENT MODEL                      │
│                                                      │
│   Customer pays for removal  ──→  Items go to dump   │
│         ($99 – $699+)              (-$62/ton avg)    │
│                                                      │
│   Revenue: Removal fee only                          │
│   Expense: Tipping fees                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                  EXPANDED MODEL                      │
│                                                      │
│   Customer pays for removal  ──→  Items sorted       │
│         ($99 – $699+)              │                 │
│                                    ├─→ Resale (KSL,  │
│                                    │   FB, eBay)     │
│                                    ├─→ Auction house  │
│                                    ├─→ Donate         │
│                                    └─→ Dump (last     │
│                                         resort)      │
│                                                      │
│   Revenue: Removal fee + resale income               │
│   Expense: Reduced tipping fees                      │
└─────────────────────────────────────────────────────┘
```

### Unit Economics Per Truckload

| Line Item | Current | With Resale |
|---|---|---|
| Removal fee collected | $350–$600^[7] | $350–$600 |
| Tipping/disposal fees | -$62/ton avg^[2] | -$31/ton (50% diversion) |
| Resale revenue | $0 | +$100–$300 |
| **Net per load** | **~$250** | **~$425–$625** |

Industry profit margins run 20–35%.^[7] Conservative estimate with resale: **$175–$375 additional profit per truckload.**

At 3 loads/week, that's an extra **$2,100–$4,500/month** — and it scales linearly with volume.

---

## What the Software Looks Like

The platform manages items from the moment they come off the truck to the moment they sell. Four pieces:

### 1. Mobile Capture (PWA — works on any phone)

Photography happens at the offload point — not at the customer's home. The crew finishes the job, drives to the staging area, and sorts the load. Anything with resale potential gets scanned.

**What it does:**
- Snap up to 4 photos of an item
- Select condition: Like New / Good / Fair / Poor
- Tag it to the job (auto-linked by the day's schedule)
- Hit "Submit" — takes 30 seconds per item

**What happens next:**
- Photos are sent to an AI vision model (OpenAI GPT-4o)
- AI returns: item name, category, suggested price range, written listing description
- eBay sold-listings data validates the price against real transactions
- Item enters the review queue with a recommended channel (KSL, auction house, donate, dump)

No app store download. No training. Open a link, take photos, done.

### 2. Review Dashboard (Desktop)

Back at base, someone opens the dashboard and works through the queue.

**What they see:**
- Queue of submitted items with photos and AI suggestions
- Each item shows: AI-generated title, description, price, category, and recommended channel
- AI recommends a path for each item based on estimated value, size, and shippability:
  - **$50+ and storable** → List on KSL / FB Marketplace first (0% commission)
  - **Bulky or medium-value** → Straight to auction house (avoid storage costs)
  - **Small + high-value + shippable** → Consider eBay (future phase)
  - **Low-value but usable** → Donate
  - **Actual junk** → Landfill
- One-click to accept the recommendation, or override and reroute
- Reject button for unsalvageable items

**On approve:**
- Items routed to KSL/FB → enter the listing queue (Chrome extension or Vendoo)
- Items routed to auction house → added to the next drop-off manifest
- Items routed to donation → logged for tax receipt tracking

### 3. KSL Listing Extension (Chrome)

KSL doesn't have a public API, so we built around it.

**How it works:**
- Install a lightweight Chrome extension
- Navigate to KSL → Create Listing
- Extension detects the page, shows a sidebar with the next approved item
- Click "Fill" — title, description, price, category, and photos auto-populate
- Review the form, click "Post" on KSL

**What this solves:**
- Manually typing a KSL listing: ~5 minutes per item
- With the extension: ~30 seconds per item
- At 20 items/day, that saves **over an hour of daily labor**

**Lifecycle management:**
- Items listed on KSL/FB get a 7–10 day window
- If no buyer, the system flags them for price drop or reroute to auction house
- Automatic reminders prevent items from sitting in staging indefinitely

For Facebook Marketplace, existing tools like Vendoo ($10–$30/mo) handle direct automated posting. KSL is the semi-manual channel — but also the most valuable one in Utah. eBay is a future phase, reserved for small high-value items worth the packing and shipping overhead.

### 4. Tracking & Analytics

The dashboard tracks everything end-to-end:

- Which job site each item came from
- Which employee captured it
- Which channel it was routed to (KSL, auction, donation, landfill)
- Which platform it sold on and for how much
- Days to sell, sell-through rate
- Revenue per job, per employee, per category
- Auction house performance (what percentage of drop-offs actually sell, at what margin)

This data answers real questions: *Should we be targeting estate cleanouts over garage cleanouts? Is furniture or appliances more profitable? Which crew members have the best eye for salvageable items? Is the auction house actually worth it or should we be listing more ourselves?*

---

## Technical Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Mobile PWA  │────→│    Convex        │────→│  Review         │
│  (Next.js)   │     │  (Reactive DB +  │     │  Dashboard      │
│              │     │   File Storage + │     │  (Next.js)      │
│  - Camera    │     │   Clerk Auth)    │     │                 │
│  - Forms     │     │                  │     │  - Queue        │
│  - Offline   │     │  - Items table   │     │  - Edit/Approve │
│    sync      │     │  - Jobs table    │     │  - Analytics    │
└──────────────┘     │  - Listings      │     └────────┬────────┘
                     │  - Photo storage │              │
                     └────────┬─────────┘              │
                              │                        │
                     ┌────────▼─────────┐     ┌────────▼────────┐
                     │  OpenAI Vision   │     │  Listing Layer  │
                     │  API             │     │                 │
                     │                  │     │  - KSL Chrome   │
                     │  - Item ID       │     │    Extension    │
                     │  - Category      │     │  - Vendoo for   │
                     │  - Price est.    │     │    FB/eBay      │
                     │  - Description   │     │  - Direct API   │
                     └──────────────────┘     │    (future)     │
                              │               └─────────────────┘
                     ┌────────▼─────────┐
                     │  eBay Sold Data  │
                     │  (price check)   │
                     └──────────────────┘
```

### Monthly Operating Costs

| Service | Cost |
|---|---|
| Convex (database, file storage) | Free tier |
| Clerk (auth) | Free tier (up to 10K MAUs) |
| OpenAI Vision API (~500 items/mo) | ~$30 |
| Vendoo (cross-platform listing) | $10–$30 |
| Vercel (hosting) | Free tier |
| Domain (if separate from trashdash) | ~$1 |
| **Total** | **~$50–$75/month** |

This is intentionally lean. No servers to manage, no infrastructure to maintain. Pay-as-you-go services that scale with usage.

---

## Rollout Plan

### Phase 0: Validate (Now — No Tech Required)

**Goal:** Prove items sell before building anything.

- Start photographing interesting items on jobs (phone camera, notes app)
- Manually list 10–20 items on KSL and Facebook Marketplace
- Track what sells, how fast, and for how much
- Contact a local auction house — drop off a load, see what the split looks like

**Timeline:** 2–4 weeks
**Cost:** $0
**Success metric:** Do items actually sell? What's the average revenue per item?

### Phase 1: MVP Platform (After Phase 0 Validates)

**Goal:** Streamline capture and listing to handle volume.

- Build mobile capture PWA
- Integrate OpenAI Vision for item identification and pricing
- Build review dashboard
- Build KSL Chrome extension
- Set up Vendoo for FB/eBay cross-posting

**Timeline:** 6–8 weeks of development
**Cost:** ~$50–$75/month operating
**Success metric:** Time-per-listing under 1 minute. 50+ items listed/month.

### Phase 2: Scale & Optimize

**Goal:** Maximize sell-through and revenue per item.

- eBay sold-data integration for price validation
- Analytics dashboard (revenue by category, job, employee)
- Employee incentive tracking (who captures the most valuable items)
- QR code labels for warehouse/staging workflows
- Automated relisting for unsold items with price drops

**Timeline:** 4–6 weeks after Phase 1
**Success metric:** Sell-through rate above 60%. Revenue per truckload increase measurable.

### Phase 3: Own the Marketplace (Long-Term)

**Goal:** Build a branded resale destination.

- TrashDash-branded marketplace (trashdashfinds.com or similar)
- Local pickup and delivery options
- Customer-facing: "Your items found a new home" notifications
- Potential brick-and-mortar if volume justifies it
- Expand the model to partner with other junk removal operators (franchise the platform)

---

## Why a Partnership Makes Sense

This resale marketplace is a different business from building a website. It's a product — one that generates recurring revenue, compounds over time, and could eventually operate independently of any single junk removal company.

### What I Bring

- **Technical execution** — I can build the entire platform: mobile app, AI integration, Chrome extension, dashboard, analytics. No outside contractors, no agency fees.
- **AI-powered pricing and identification** — The domain expertise for pricing secondhand goods isn't a person — it's a pipeline. AI vision identifies items from photos, eBay's sold-listings API provides real transaction data for comparable items, and the system cross-references condition to land on a market-validated price. This replaces the need for someone who "just knows what things are worth" with millions of data points from actual sales. The platform gets smarter over time as it accumulates its own sell-through data.
- **Product thinking** — I'm not just writing code to spec. I'm designing the workflow, choosing the architecture, and making the tradeoffs that determine whether this thing works or doesn't. The AI pricing pipeline, the Chrome extension approach for KSL, the phased rollout — these are product decisions, not development tasks.
- **Ongoing iteration** — Software isn't a one-time build. It needs monitoring, updates, new features as the business learns what works. A partner iterates and improves because they benefit from the outcome. A contractor moves on to the next gig.
- **Low-cost infrastructure** — The entire platform runs on less than $75/month. I've designed it to be lean specifically because this is a bootstrap, not a venture-funded startup.

### What You Bring

- **The business** — Trucks, crews, customers, jobs. Without the junk removal operation, there's no inventory. The platform is worthless without product flowing through it.
- **The supply chain** — You control the single hardest part of any resale business: sourcing. Every job is free inventory that customers paid you to take.
- **Relationships** — Auction houses, local buyers, Daniel's network. The on-the-ground connections that make the physical side work.
- **Growth engine** — Every new customer, every new truck, every new employee feeds more inventory into the system.

### The Structure

I'm proposing an equity partnership in the resale operation specifically — not in TrashDash Junk Removal as a whole. The junk removal business is yours. The resale marketplace is something we build together as a separate venture.

**The deal:**
- I build and maintain the entire platform at **no upfront development cost** — no invoices, no hourly billing for this work
- We form a separate LLC for the resale operation
- **50/50 equity split** in that entity
- Net resale revenue (after platform operating costs and any direct resale expenses like staging, delivery, etc.) is split according to equity
- I continue to handle TrashDash web presence and tech needs as a separate engagement
- Platform IP lives in the joint entity — if we license it to other operators down the road, that revenue flows through the partnership

**Why 50/50 is fair:**
- I'm contributing 300+ hours of development, product design, and AI integration work at no charge — that's the equivalent of $30K–$50K in market-rate development cost as my buy-in
- I'm covering ongoing platform costs (~$75/month) and all maintenance, updates, and iteration indefinitely
- Without the platform, the resale operation doesn't scale — manual KSL listings cap out at a few items per day. The technology is what turns a side hustle into a revenue stream.
- Without the inventory, the platform is empty. Neither side works alone.
- Both of us are betting time, not cash. That's the cleanest kind of partnership.

**What protects both of us:**
- Operating agreement with defined roles: I handle technology and platform, you handle operations and supply
- If either party wants out, the other gets right of first refusal to buy the departing partner's share at fair market value
- Vesting schedule if we want to be formal — 2-year vest with a 6-month cliff, so neither side walks away early with half the company
- The junk removal business (TrashDash) stays 100% yours regardless of what happens with the resale entity

The ceiling here isn't one junk removal company's resale operation. If the platform works for TrashDash, it works for every independent junk removal operator in the country — that's 25,000+ operators with no software built for this.^[1] That's the long play. But it starts with proving it works for one truck in Utah.

---

## Summary

| | Now | With Resale Platform |
|---|---|---|
| Revenue per truckload | ~$250 net | ~$425–$625 net |
| Landfill tipping fees | $150/load | $75/load (50% diversion) |
| Monthly resale income (3 loads/wk) | $0 | $2,100–$4,500 |
| Competitive advantage | Good website, good service | Good website, good service, **and** a tech-enabled resale pipeline no local competitor has |
| Scalability | Linear (more trucks = more removal revenue) | Compounding (more trucks = more removal revenue **+ more resale inventory**) |

The items are already on the truck. The buyers are already on KSL. The AI to connect them costs $30/month. The question is whether we build the bridge.

---

*Prepared by Brandon Armstrong — April 2026*

---

## Sources

1. **US Secondhand Market Size & Growth** — ThredUp Resale Report & DontPayFull Recommerce Statistics (2025). US secondhand market valued at $56B in 2025, up 14.3% YoY, projected $74B by 2029. Recommerce growing 5–6x faster than traditional retail. [ThredUp](https://www.thredup.com/resale) | [DontPayFull](https://www.dontpayfull.com/explore/recommerce-statistics) | [Retail Dive](https://www.retaildive.com/news/resale-secondhand-apparel-market-growth-projections/711476/)

2. **Landfill Tipping Fees** — Environmental Research & Education Foundation (EREF) 2024 Report. National average tipping fee: $62.28/ton (up 10% from $56.80 in 2023). Northeast averages $80.67/ton; South Central $44.87/ton. Fees have risen ~30% since 2016 in inflation-adjusted terms. [Waste Optima (EREF summary)](https://www.wasteoptima.com/blog/eref-2024-landfill-tipping-fees) | [Waste Advantage Magazine](https://wasteadvantagemag.com/eref-report-shows-10-increase-in-u-s-landfill-tipping-fees-largest-increase-since-2022/)

3. **Remoov Business Model** — Remoov.com (San Francisco). Customers receive 50% of gross resale price. Items are photographed, appraised, and listed across online marketplaces + a physical showroom (Reperch, 2415 17th St, San Francisco). 281 reviews on Yelp. [Remoov](https://remoovit.com) | [Remoov FAQ](https://remoovit.com/faq) | [Reperch pricing guide](https://reperch.com/blog/know-when-youre-getting-a-deal-smart-pricing-tips-for-used-furniture)

4. **Junkluggers Remix Market** — Junkluggers of Pittsburgh opened Remix Market, a semi-thrift store selling items that donation centers reject. Portion of proceeds goes to nonprofits. [Curio412 profile](https://www.curio412.com/post/good-spirits-disrupting-the-dump-the-junkluggers) | [Junkluggers](https://www.junkluggers.com/about-us/donations/)

5. **College HUNKS Revenue** — 2025 Franchise Disclosure Document (FDD). Average franchise gross revenue: $1.45M (2024). Top 25%: $3.09M average gross, $309K average EBITDA. 70% landfill diversion rate. 230% growth over 10 years. [Franchise Chatter 2025 Review](https://www.franchisechatter.com/2025/08/09/college-hunks-hauling-junk-moving-franchise-review-2025-costs-fees-news-average-revenues-and-or-profits/) | [College HUNKS Franchise](https://collegehunksfranchise.com/investment-financials)

6. **KSL / Deseret Digital Media Reach** — Deseret Digital Media reaches 20M+ monthly unique visitors across its properties (2022 press release). KSL.com ranks #50 in News & Media Publishers category per SimilarWeb (Feb 2026). KSL Classifieds serves Utah, Idaho, and Wyoming with free listings. [GlobeNewsWire](https://www.globenewswire.com/news-release/2022/09/06/2510655/0/en/KSL-Marketplace-Launches-Messages-Feature-Helping-Locals-Communicate-and-Transact-Quickly-and-Confidently.html) | [SimilarWeb](https://www.similarweb.com/website/ksl.com/)

7. **Junk Removal Industry Economics** — Average job revenue: $350–$600 depending on load size. Profit margins: 20–35% industry-wide. Revenue per truck: $50K–$200K/year. Gross expense breakdown: fuel 5–7%, labor ~20%, disposal/tipping 8–11%, vehicle ~3%. [JunkSpots](https://junkspots.com/guides/how-much-do-junk-removal-companies-make/) | [Happen Ventures](https://happenventures.com/starting-and-running-a-junk-removal-business/) | [Financial Models Lab](https://financialmodelslab.com/blogs/how-much-makes/junk-removal-service)

8. **Used Furniture Resale Values** — Used furniture typically sells at 30–60% of original retail. Name-brand in near-new condition: ~50% of retail. Quality vintage/restored pieces: up to 80%. Depreciation of roughly 5% per 1–2 years of ownership. [Reperch](https://reperch.com/blog/know-when-youre-getting-a-deal-smart-pricing-tips-for-used-furniture) | [MoneyPantry](https://moneypantry.com/pricing-used-furniture/) | [Mardan Furniture](https://mardanfurniture.com/what-is-your-used-furniture-really-worth-a-quick-pricing-guide/)

9. **Estate Sale / Auction Commissions** — Estate sale companies charge 35–60%, national average 40% (EstateSales.net 2024 survey). Auction houses use tiered models: ~35% on first $10K, lower at higher volumes. Buyer's premiums of 15–20% are added on top. [EstateSales.org](https://estatesales.org/how-much-do-estate-sale-companies-charge) | [Brown Button](https://brownbutton.com/how-much-do-estate-sale-companies-charge/) | [EstateSales.net](https://www.estatesales.net/help/how-much-does-an-estate-sale-cost)

10. **HiBid Auction Platform Pricing** — 0.4% of gross proceeds + per-bid fees ($0.25/bid, capped). Designed for professional auctioneers running their own auctions. [AuctionFlex/HiBid](https://www.auctionflex.com/hibid-pricing.htm)

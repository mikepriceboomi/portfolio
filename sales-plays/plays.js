/* Sales plays — the data behind index.html.
 *
 * To add an asset to a play, add one line to its `assets` list:
 *   { type: "clickable", title: "Data Hub clickable demo", url: "https://mikepriceboomi.github.io/domain-expert-demos/dm-101-clickable/" },
 *
 * Each play belongs to one `domain` (an id from DOMAINS below). Leave it out for a play that
 * spans every domain; it then shows under "All domains" only.
 * `hidden: true` keeps a play in this file but off both pages.
 * Asset types: demo-portal · process · clickable · video · mq · deck · talk-track · whiteboard · highspot · doc · other
 * Keep asset titles short and don't repeat the play name; the type and source (Highspot, …) show underneath.
 * `keywords` are searched but never shown — add competitor names, acronyms, synonyms.
 * Icons: official Boomi icons only (assets/). Where none exists yet, leave `icon` empty and set
 * `glyph` to a short label ("SAP") or a generic glyph ("plug", "signal") — never an invented logo.
 */
/* The team's domains — the main filter. Order here is the order of the tabs.
 * `empty` is the message a tab shows while it has no plays. */
window.DOMAINS = [
  { id: "data-management",         name: "Data Management",          experts: "Scott · Salomé · Ale" },
  { id: "ipaas-b2b",               name: "iPaaS & B2B/EDI",          experts: "Ian" },
  { id: "api-management",          name: "API Management",           experts: "Kevin" },
  { id: "connectivity-governance", name: "AI Connectivity & Governance", experts: "Or",
    empty: "Plays for Boomi Connect and the gateways (MCP, AI and API) belong here." },
  { id: "platform-solutions",      name: "Platform Solutions",       experts: "Michael",
    empty: "Platform solution plays are built around a customer outcome rather than a single product. None are listed yet." }
];

window.PLAYS = [
  {
    id: "mft-modernisation", domain: "ipaas-b2b",
    month: "Apr", year: 2026,
    title: "Unified B2B (MFT/EDI)",
    summary: "Demonstrate a seamless inbound 850 (purchase order) flow from an external trading partner to an internal SAP instance, using SFTP and EDI validation.",
    products: ["MFT", "B2B/EDI", "Integration", "SAP"],
    icon: "assets/icon-mft.png",
    keywords: "mft modernisation modernization managed file transfer sftp as2 edi x12 850 purchase order 997 acknowledgment trading partner self-service portal idoc orders05 order-to-cash",
    assets: [
      { type: "demo-portal", title: "Demo portal walkthrough", url: "https://us.flow-prod.boomi.com/25a0026b-a4ad-4959-9dd8-2d038b96127a/play/demoportal/?flow-id=6508b5a2-9984-482c-81d3-951969bdb920&demoId=477" },
      { type: "video", title: "Microdemo", url: "https://boomi.highspot.com/items/69b47880935cdef777f3c241" },
      { type: "process", title: "Pre-built demo processes", url: "https://platform.boomi.com/AtomSphere.html#build;accountId=presales_demochild-WRHG7X;branchName=main;components=5425d4d3-f00b-4343-8ec4-801a8647f27f,70dfbc0f-033e-4a3d-b793-dc9a28fecf8b;componentIdOnFocus=70dfbc0f-033e-4a3d-b793-dc9a28fecf8b" }
    ]
  },
  {
    id: "data-hub-attach", domain: "data-management",
    month: "May", year: 2026,
    title: "Data Hub attach",
    summary: "Net-new Integration deals, plus Data Hub attach on recent OnePlatform wins.",
    products: ["Data Hub", "Integration"],
    icon: "assets/icon-datahub.png",
    keywords: "mdm master data golden record onePlatform attach new logo no naked attach",
    assets: [
      { type: "highspot", title: "Attach DataHub to Every Integration Deal", url: "https://boomi.highspot.com/items/69bc019540025baa5042340e" },
      { type: "deck", title: "Data Hub GTM deck", url: "https://docs.google.com/presentation/d/1-TcynYKkwbFlZ2LWnOH-2GMDdZZ2iYqT/edit?usp=sharing&rtpof=true&sd=true" },
      { type: "deck", title: "Data Hub customer presentation", url: "https://docs.google.com/presentation/d/1mMY22RakvbrB3zuvxEATgkOpXgt0kKmmhuyPjgva9Gs/edit?usp=sharing" },
      { type: "clickable", title: "Data Activation clickable demo", url: "https://boomi.highspot.com/items/6a2049f5bdc53303d41bcb09" }
    ]
  },
  {
    id: "bdi-dual-motion", domain: "data-management",
    month: "Jun", year: 2026,
    title: "BDI dual motion",
    summary: "A new-logo entry point against Fivetran and Matillion; upsell and attach to current customers.",
    products: ["BDI"],
    icon: "assets/icon-bdi.png",
    keywords: "data integration rivery elt fivetran matillion competitive upsell attach new logo",
    assets: [
      { type: "deck", title: "BDI GTM enablement deck", url: "https://docs.google.com/presentation/d/1iPW6Ihv38ToAPz4Y2sZJbqFyT5jw5NVVsC9BS5ruwR8/edit?usp=sharing" }
    ]
  },
  {
    id: "connect-your-sap-data", domain: "ipaas-b2b",
    month: "Jul", year: 2026,
    title: "Connect Your SAP Data",
    summary: "New-logo S/4HANA, BW and PI/PO migrations, plus upsell to 500+ Direct JCo accounts.",
    products: ["SAP", "Integration"],
    icon: "", glyph: "SAP",
    keywords: "sap s4hana s/4hana bw pi po pi/po jco migration boomi for sap",
    assets: [
      { type: "highspot", title: "Boomi for SAP sales play", url: "https://boomi.highspot.com/items/6a56932a18c2155abee06d71" },
      { type: "deck", title: "Boomi for SAP GTM enablement deck", url: "https://docs.google.com/presentation/d/1jd_2HqtsB4OiEeLnvby9ZIIxI62dYVJy6_oPfpDbAWQ/edit?usp=sharing" },
      { type: "clickable", title: "Boomi for SAP Data Connector demo", url: "https://app.arcade.software/share/2DxIoCBvalmXIkLuL9C6" }
    ]
  },
  {
    id: "bdi-provisioning", domain: "data-management",
    month: "Aug", year: 2026,
    title: "Qualify BDI In Every New Logo",
    summary: "Banners to 2,300 AgentStudio accounts → train → upsell to the rest of the base.",
    products: ["BDI", "Agentstudio"],
    icon: "assets/icon-bdi.png",
    keywords: "bdi provisioning data integration rivery agentstudio agent studio banner upsell base qualify new logo",
    assets: [
      { type: "deck", title: "BDI GTM enablement deck", url: "https://docs.google.com/presentation/d/1iPW6Ihv38ToAPz4Y2sZJbqFyT5jw5NVVsC9BS5ruwR8/edit?usp=sharing" },
      { type: "clickable", title: "BDI clickable demo", url: "https://boomi.highspot.com/items/6ab133b307dc97113a379ac2" }
    ]
  },
  {
    id: "boomi-connect", domain: "connectivity-governance",
    month: "Sep", year: 2026,
    title: "Boomi Connect",
    summary: "Scaling business with Boomi Connect, powered by the Lunar-Dev acquisition.",
    products: ["Connect"],
    icon: "assets/icon-connect.svg",
    keywords: "connect mcp gateway ai gateway lunar-dev lunar dev ai tools agents",
    assets: [
      { type: "deck", title: "GTM deck", url: "https://docs.google.com/presentation/d/1gZd_n-QmWfXvT2oizrUZfVdYb5DaODCpMU7dCoRhfAU/edit?usp=sharing" },
      { type: "video", title: "Microdemo (2 min)", url: "https://boomi.highspot.com/items/6adb69a868927d1b02929eab" },
      { type: "clickable", title: "Connect + AI Gateway clickable demo", url: "https://boomi.highspot.com/items/6adf74872b6ddebbbbd83a90" }
    ]
  },
  {
    id: "meta-hub", domain: "data-management",
    month: "Sep", year: 2026,
    title: "Meta Hub",
    summary: "Unify and govern metadata to create trusted, connected data for analytics and AI.",
    products: ["Meta Hub"],
    icon: "assets/icon-metahub.svg",
    keywords: "metadata catalog governance lineage analytics ai data management",
    assets: []
  },
  {
    id: "bdi-competitors-takeout", domain: "data-management",
    month: "Oct", year: 2026,
    title: "BDI Competitors Takeout + Elementary",
    summary: "Takeout campaign.",
    products: ["BDI"],
    icon: "assets/icon-bdi.png",
    keywords: "data integration rivery takeout competitive displacement elementary fivetran matillion",
    assets: [
      { type: "deck", title: "BDI GTM enablement deck", url: "https://docs.google.com/presentation/d/1iPW6Ihv38ToAPz4Y2sZJbqFyT5jw5NVVsC9BS5ruwR8/edit?usp=sharing" }
    ]
  },
  {
    id: "knowledge-hub", domain: "data-management",
    month: "Oct", year: 2026,
    title: "Knowledge Hub",
    summary: "Unify enterprise knowledge to deliver trusted, AI-ready information that powers agents.",
    products: ["Knowledge Hub"],
    icon: "assets/icon-knowledgehub.svg",
    keywords: "knowledge rag retrieval unstructured documents agents ai-ready data management",
    assets: []
  },
  {
    id: "signal-based-flagging", hidden: true,   // off the site for now
    month: "Ongoing", year: 2026, ongoing: true,
    title: "Signal-based flagging",
    summary: "30–40 upsell opportunities a week surfaced, plus real-time Slack alerts on new-logo signals.",
    products: ["Signals"],
    icon: "", glyph: "signal",
    keywords: "signals slack alerts intent upsell opportunities new logo",
    assets: []
  }
];

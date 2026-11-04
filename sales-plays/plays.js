/* Sales plays — the data behind index.html.
 *
 * To add an asset to a play, add one line to its `assets` list:
 *   { type: "clickable", title: "Data Hub clickable demo", url: "https://mikepriceboomi.github.io/domain-expert-demos/dm-101-clickable/" },
 *
 * Asset types: clickable · video · mq · deck · talk-track · whiteboard · highspot · doc · other
 * `keywords` are searched but never shown — add competitor names, acronyms, synonyms.
 * Icons: official Boomi icons only (assets/). Where none exists yet, leave `icon` empty and set
 * `glyph` to a short label ("SAP") or a generic glyph ("plug", "signal") — never an invented logo.
 */
window.PLAYS = [
  {
    id: "mft-modernisation",
    month: "Apr", year: 2026,
    title: "MFT Modernisation",
    summary: "Replace all SFTP integrations with a scalable MFT.",
    products: ["MFT", "Integration"],
    icon: "assets/icon-mft.png",
    keywords: "managed file transfer sftp ftp file transfer modernization modernisation",
    assets: []
  },
  {
    id: "data-hub-attach",
    month: "May", year: 2026,
    title: "Data Hub attach",
    summary: "Net-new Integration deals, plus Data Hub attach on recent OnePlatform wins.",
    products: ["Data Hub", "Integration"],
    icon: "assets/icon-datahub.png",
    keywords: "mdm master data golden record onePlatform attach new logo",
    assets: []
  },
  {
    id: "bdi-dual-motion",
    month: "Jun", year: 2026,
    title: "BDI dual motion",
    summary: "A new-logo entry point against Fivetran and Matillion; upsell and attach to current customers.",
    products: ["BDI"],
    icon: "assets/icon-bdi.png",
    keywords: "data integration rivery elt fivetran matillion competitive upsell attach new logo",
    assets: []
  },
  {
    id: "connect-your-sap-data",
    month: "Jul", year: 2026,
    title: "Connect Your SAP Data",
    summary: "New-logo S/4HANA, BW and PI/PO migrations, plus upsell to 500+ Direct JCo accounts.",
    products: ["SAP", "Integration"],
    icon: "", glyph: "SAP",
    keywords: "sap s4hana s/4hana bw pi po pi/po jco migration boomi for sap",
    assets: []
  },
  {
    id: "bdi-provisioning",
    month: "Aug", year: 2026,
    title: "BDI provisioning",
    summary: "Banners to 2,300 AgentStudio accounts → train → upsell to the rest of the base.",
    products: ["BDI", "Agentstudio"],
    icon: "assets/icon-bdi.png",
    keywords: "data integration rivery agentstudio agent studio banner provisioning upsell base",
    assets: []
  },
  {
    id: "boomi-connect",
    month: "Sep", year: 2026,
    title: "Boomi Connect",
    summary: "Scaling business with Boomi Connect, powered by the Lunar-Dev acquisition.",
    products: ["Connect"],
    icon: "", glyph: "plug",
    keywords: "connect mcp gateway lunar-dev lunar dev ai tools agents",
    assets: []
  },
  {
    id: "meta-hub",
    month: "Sep", year: 2026,
    title: "Meta Hub",
    summary: "Unify and govern metadata to create trusted, connected data for analytics and AI.",
    products: ["Meta Hub"],
    icon: "assets/icon-metahub.png",
    keywords: "metadata catalog governance lineage analytics ai data management",
    assets: []
  },
  {
    id: "bdi-competitors-takeout",
    month: "Oct", year: 2026,
    title: "BDI Competitors Takeout + Elementary",
    summary: "Takeout campaign.",
    products: ["BDI"],
    icon: "assets/icon-bdi.png",
    keywords: "data integration rivery takeout competitive displacement elementary fivetran matillion",
    assets: []
  },
  {
    id: "knowledge-hub",
    month: "Oct", year: 2026,
    title: "Knowledge Hub",
    summary: "Unify enterprise knowledge to deliver trusted, AI-ready information that powers agents.",
    products: ["Knowledge Hub"],
    icon: "assets/icon-knowledgehub.png",
    keywords: "knowledge rag retrieval unstructured documents agents ai-ready data management",
    assets: []
  },
  {
    id: "signal-based-flagging",
    month: "Ongoing", year: 2026, ongoing: true,
    title: "Signal-based flagging",
    summary: "30–40 upsell opportunities a week surfaced, plus real-time Slack alerts on new-logo signals.",
    products: ["Signals"],
    icon: "", glyph: "signal",
    keywords: "signals slack alerts intent upsell opportunities new logo",
    assets: []
  }
];

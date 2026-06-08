/* ============================================================
   QUICKVEE MERCHANT GUIDE — SCRIPT
   ============================================================ */

// ---------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------

// Icons are inline SVG strings — 24x24 viewBox, stroke-based
const ICONS = {
  play:        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>`,
  camera:      `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  shoppingbag: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
  toggle:      `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="16" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  clipboard:   `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>`,
  store:       `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-5h16l1 5"/><path d="M3 9a2 2 0 002 2 2 2 0 002-2 2 2 0 002 2 2 2 0 002-2 2 2 0 002 2 2 2 0 002-2"/><path d="M5 11v8h14v-8"/><path d="M10 15h4v4h-4z"/></svg>`,
  printer:     `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  rocket:      `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  reorder:     `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`,
  grid:        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  layers:      `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  tag:         `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  image:       `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
  edit:        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
};

const GROUPS = [
  { label: "Get Your Products Ready",   ids: [1, 2] },
  { label: "Set Up Your Store",         ids: [3, 4] },
  { label: "Go Live & Keep It Running", ids: [5] },
];

// Each section has steps[] (shown in TOC). Each step has slides[] (individual content frames).
const SECTIONS = [
  {
    id: 1,
    icon: ICONS.shoppingbag,
    title: "Product Setup",
    description: "Add photos, descriptions, variants, and tags to your products.",
    steps: [
      {
        label: "Watch Before You Start",
        description: "A short intro video to get you oriented before diving in.",
        slides: [
          { label: "Intro Video", type: "video", image: "124A7724.JPG", instruction: "Watch this short intro before getting started." },
        ],
      },
      {
        label: "Product Setup",
        description: "Follow each step to get your first product ready for online ordering.",
        slides: [
          { label: "Intro", type: "step-intro" },
          {
            label: "Merchant Dashboard",
            image: "Images/Set Up Your Products/1.png",
            instruction: "Open the Merchant Dashboard.",
            tip: "Found on the POS and at https://quickvee.com/merchants/login.",
          },
          {
            label: "Choose Product",
            image: "Images/Set Up Your Products/3.png",
            instruction: "From the left menu, click Inventory, then click Products.<br><br>Search for the product you want to edit.<br><br>Click on your product.",
            tip: "Search by name, code, or by using the filters.",
          },
          {
            label: "Categories & Variants",
            image: "Images/Set Up Your Products/4.png",
            instruction: "View and edit your product's details on this page.<br><br>Add categories and variants.",
          },
          {
            label: "Description, Tags,<br>Brand, & Image",
            image: "Images/Set Up Your Products/13.png",
            instruction: "Scroll down to the bottom of the page.<br><br>Add a description, tags, brand, and a product image.",
            tip: "If you don't have a picture, skip this step and our support team will help you later.<br><br>The more detail you add, the better your product will reach more customers.",
          },
          {
            label: "Reorder & Restock",
            image: "Images/Set Up Your Products/10.png",
            instruction: "Scroll up to the Variants section and go to the Variant you want to edit.<br><br>Fill out both the Reorder Point and Restock Amount, then click the blue Update button (bottom right).",
            definitions: [
              { term: "Reorder Point", desc: "The number where the item is considered low stock." },
              { term: "Restock Amount", desc: "The number of units you plan to order more from your vendor." },
            ],
          },
        ],
      },
      {
        label: "Check Stock",
        description: "Count your stock on your POS system before you go live.",
        slides: [
          { label: "Intro", type: "step-intro" },
          { label: "Merchant Dashboard", image: "Images/Set Up Your Products/1.png", instruction: "Open the Merchant Dashboard.", tip: "Found on the POS and at https://quickvee.com/merchants/login." },
          { label: "Create New Stocktake", image: "Images/Doing A Stocktake/2.png", instruction: "From the left menu, click Stocktake.<br><br>Click on the blue Add New Stocktake button on the top right." },
          { label: "Search Products", image: "Images/Doing A Stocktake/3.png", instruction: "Search by product name or by UPC." },
          { label: "Fill Out & Save", image: "Images/Doing A Stocktake/4.png", instruction: "Enter the quantity for each item field.<br><br>Save your stocktake now or as a draft to edit later.", bullets: ["Only count your stock for the categories you're putting online.", "Do this before you go live.", "Expect about an hour wait time for corrections to go live if doing 3–4 categories."] },
        ],
      },
      { label: "Recap", description: "A quick summary of everything you just did.", slides: [{ label: "Recap", type: "recap", note: "Repeat these steps for every product you want to go online with.", bullets: ["Makes sure your stock counts are accurate so you don't sell out online when you sell out in store.", "Shows discrepancies so you can catch theft or shrinkage.", "Creates accountability — the store owner can see who ran the stocktake and when."] }] },
    ],
  },
  {
    id: 3,
    icon: ICONS.printer,
    title: "Connect Printer",
    description: "Connect your POS printer so online orders print automatically.",
    steps: [
      {
        label: "Watch Before You Start",
        description: "Read this before touching anything — skipping this step means you won't get order notifications.",
        slides: [
          { label: "Intro Video", type: "video", image: "coming-soon.png", instruction: "Watch this short intro before getting started.", warning: "DO NOT SKIP THIS STEP.<br>If you skip this step you CANNOT receive online orders." },
        ],
      },
      {
        label: "Set Up Your Online Printer",
        description: "Follow each step on your POS system to connect your printer for online orders.",
        slides: [
          { label: "Intro", type: "step-intro", warning: "DO NOT SKIP THIS STEP.<br>If you skip this step you CANNOT receive online orders." },
          { label: "Station Settings", image: "Images/Setting Up Your Printer/1.png", instruction: "Open Station Settings on your POS." },
          { label: "Online Setup Printer", image: "Images/Setting Up Your Printer/3.png", instruction: "On the left, click on Hardware, then click on Online Setup Printer (top middle)." },
          { label: "Select Printer Box", image: "coming-soon.png", instruction: "Click the online printer box." },
          { label: "Receipts Prompt", image: "coming-soon.png", instruction: "A prompt will ask how many receipts to print per order. Press Yes or Skip — either one works." },
          { label: "Save & Test", image: "coming-soon.png", instruction: "Tap Save first, then tap Test to confirm something prints." },
          { label: "Second Printer Box", image: "coming-soon.png", instruction: "Repeat for the second box.<br><br>Once both are saved and tested you are done.", tip: "If needed, you can reprint a receipt manually from the Orders page." },
        ],
      },
      { label: "Recap", description: "A quick summary of everything you just did.", slides: [{ label: "Recap", type: "recap", note: "This step is not optional.<br><br>Without setting up your online printer, your POS will not receive online orders — no notification, no receipt, nothing.<br><br>If it's not done, orders will come in and you won't know about them." }] },
    ],
  },
  {
    id: 4,
    icon: ICONS.store,
    title: "Online Store Setup",
    description: "Configure your store settings and turn on online ordering.",
    steps: [
      {
        label: "Watch Before You Start",
        description: "A short intro before you configure your online store.",
        slides: [
          { label: "Intro Video", type: "video", image: "coming-soon.png", instruction: "Watch this short intro before getting started." },
        ],
      },
      {
        label: "Starting Categories",
        description: "Choose which categories you want to go online with before setting up your products.",
        slides: [
          { label: "Intro", type: "step-intro" },
          { label: "Merchant Dashboard", image: "Images/Enabling Your Online Store/1.png", instruction: "Navigate to your Merchant Dashboard.", tip: "The merchant dashboard can be accessed through the POS or online at quickvee.com/merchants/login" },
          { label: "Starting Categories", image: "Images/Set Up Your Products/2.png", instruction: "From the left menu, click Inventory, then click Categories.<br><br>Choose the categories you want online by switching on the toggles.", tip: "Don't go online with everything at once! Start with 2 to 4 of your best sellers (Like Disposable Vapes, CBD, and Kratom)." },
        ],
      },
      {
        label: "Enable Your Online Store",
        description: "Follow each step to get your store live for online ordering.",
        slides: [
          { label: "Intro", type: "step-intro" },
          { label: "Online Ordering", image: "Images/Enabling Your Online Store/3.png", instruction: "On the left menu, click on Store Settings, then click on Online Store Settings.<br><br>Toggle on Online Ordering." },
          { label: "Set Working Hours", image: "Images/Enabling Your Online Store/4.png", instruction: "Set your store's working hours for online ordering.", tip: "We recommend adding a 30 minute buffer between your opening and closing times." },
          { label: "Delivery Details", image: "Images/Enabling Your Online Store/5.png", instruction: "Set your delivery fees.", tip: "We recommend setting the minimum amount for delivery to $0 and the radius between 15–20 miles." },
          { label: "Fee Details", image: "Images/Enabling Your Online Store/8.png", instruction: "Set your delivery fees, delivery and pickup tip details, and future order details.", tip: "We recommend the following settings:<br><br>• Flat Delivery Fee = $0<br>• Per Mile Delivery Fee = $0<br>• Pickup Default Tip = 10%<br>• Delivery Default Tip = 10%" },
          { label: "Printing Options", image: "Images/Enabling Your Online Store/9.png", instruction: "Toggle both printing options ON to ensure you receive online orders.<br><br>When done click the blue Update button (bottom right)." },
        ],
      },
      {
        label: "Contact Support",
        description: "Get Quickvee to set up Uber delivery and schedule your launch.",
        slides: [
          { label: "Intro", type: "step-intro", warning: "DO NOT SKIP THIS STEP.<br>You must contact Quickvee to enable Uber delivery." },
          {
            label: "Contact Quickvee",
            image: "wip",
            instruction: "When enabling online ordering, your store defaults to self-delivery and pickup only.<br><br>To offer Uber delivery, you need to contact Quickvee to switch it on from the backend — this can only be done by Quickvee.",
            contact: {
              cta: "Contact Quickvee to schedule your launch day and time.",
              email: "support@quickvee.com",
              phone: "+1 (800) 000-0000",
              tagline: "Quickvee will enable Uber delivery at that exact time so your store goes live on your terms.",
            },
          },
        ],
      },
      { label: "Recap", description: "A quick summary of everything you just did.", slides: [{ label: "Recap", type: "recap", note: "On your launch day, Quickvee does one final review to make sure everything looks right on the backend before your store goes live." }] },
    ],
  },
  {
    id: 5,
    icon: ICONS.rocket,
    title: "Launch",
    description: "Review your store, confirm everything looks right, and go live.",
    steps: [
      {
        label: "Watch Before You Start",
        description: "A short intro video to get you oriented before launching.",
        slides: [
          { label: "Intro Video", type: "video", image: "coming-soon.png", instruction: "Watch this short intro before getting started." },
        ],
      },
      {
        label: "Staff Training",
        description: "Walk your staff through every step from order received to delivery.",
        slides: [
          { label: "Intro", type: "step-intro" },
          {
            label: "Customer Orders Online",
            image: "wip",
            instruction: "The customer places an order from your Quickvee Online Storefront.",
          },
          {
            label: "POS Receives Order",
            image: "wip",
            instruction: "When an order comes in, the POS automatically receives it.<br><br>Staff will hear a notification sound and see a packing slip receipt from the printer.",
          },
          {
            label: "Incoming Orders",
            image: "wip",
            instruction: "Open the Orders page on the POS, then tap the Online tab to see incoming online orders.<br><br>Tap Accept on the order.",
          },
          {
            label: "Packing",
            image: "wip",
            instruction: "Tap Packing on the order.<br><br>Staff packs the order.<br><br>The customer automatically receives a notification that their order is being packed.",
          },
          {
            label: "Ready",
            image: "wip",
            instruction: "When order is finished being packed, tap Ready on the order.<br><br>This marks the order Ready For Delivery and an Uber driver will come and pick it up.",
            warning: "This is the most critical step. Hitting Ready is what dispatches the Uber driver — don't tap it until the order is actually ready to be picked up.",
          },
          {
            label: "Uber Picks Up Order",
            image: "wip",
            instruction: "Staff will confirm with the Uber driver it's the right order and hand it off to them.<br><br>The Uber driver takes a photo confirming they picked up the order, updating the status for the customer.<br><br><strong>At this point, your staff no longer needs to do anything for the order.</strong>",
          },
          {
            label: "Final Delivery",
            image: "wip",
            instruction: "At delivery, the Uber driver checks the customer's ID — The customer must be 21+.<br><br>Once the driver marks the order Complete, the status automatically updates on your POS.",
          },
        ],
      },
      { label: "Recap", description: "A quick summary of everything you just did.", slides: [{ label: "Recap", type: "recap", closing: {
        title: "You're live! 🎉",
        body: "Your online store is ready for Uber delivery. Customers can now order online, and Uber will deliver it. Once your staff packs the order and clicks Ready, everything else happens automatically.",
        itemsHeading: "Tips for Growing Your Business:",
        tipItems: [
          { term: "Add More Products", desc: "Once your first items sell well, start adding more products one by one until your whole store is online." },
          { term: "Keep Counts Accurate", desc: "Count your stock regularly so you don't accidentally sell out online." },
          { term: "Collect Customer Info", desc: "Make sure your staff types in real customer phone numbers and emails. You can use this later to send out text blasts and sales promotions." },
          { term: "Use Coupons", desc: "Store points and coupons work online too, which keeps customers coming back." },
        ],
        footer: {
          title: "We've Got Your Back",
          body: "If you get stuck, need to add new items, or want to change your delivery distance, Quickvee support is always just a phone call away.",
        },
      }}, {
        label: "Quick Staff Steps",
        image: "coming-soon.png",
        instruction: "Train your staff on the steps below.<br><br>Everything after handing off the order to the Uber driver happens automatically.",
        bullets: [
          "Hear POS notification or see packing slip print.",
          "Go to Orders, then Online tab.",
          "Tap Accept.",
          "Tap Packing.",
          "Pack order & staple the receipt to the bag.",
          "Tap Ready.",
          "Hand off order to the Uber driver.",
        ],
        numbered: true,
      }] },
    ],
  },
];

// ---------------------------------------------------------------------------
// STATE
// ---------------------------------------------------------------------------

const STORAGE_KEY       = "quickvee_guide_progress";
const VIDEO_WATCHED_KEY = "quickvee_intro_watched";

let completedSections    = loadProgress(); // Set of completed section IDs
let currentSectionId     = null;           // ID of the section being viewed
let currentStepIndex     = 0;             // 0-based index of the current step (TOC item)
let currentSlideIndex    = 0;             // 0-based index of the current slide within the step
let videoTimerInterval   = null;           // Interval handle for video countdown
let expandedSteps        = new Set([0]);   // Step indices currently expanded in the TOC
let launchWasReady       = false;          // Tracks whether launch unlock animation has fired
let completedStepIndices = new Set();      // Step indices completed within the current section

// ---------------------------------------------------------------------------
// PERSISTENCE
// ---------------------------------------------------------------------------

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedSections]));
}

// ---------------------------------------------------------------------------
// DOM HELPERS
// ---------------------------------------------------------------------------

const $ = (id) => document.getElementById(id);

function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  $(`${name}-view`).classList.add("active");
  // FABs only visible on home page
  const inSection = name === "section";
  document.querySelectorAll(".fab").forEach((f) => {
    f.style.display = inSection ? "none" : "";
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

// ---------------------------------------------------------------------------
// HOME VIEW
// ---------------------------------------------------------------------------

function fireConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;";
  document.body.appendChild(canvas);
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  const COLORS = ["#2563eb","#60a5fa","#fbbf24","#34d399","#f472b6","#a78bfa","#fb923c"];
  const particles = Array.from({ length: 140 }, () => ({
    x:  Math.random() * canvas.width,
    y: -12 - Math.random() * 40,
    r:  Math.random() * 5 + 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 5,
    vy:  Math.random() * 2.5 + 1.5,
    rot:  Math.random() * 360,
    rotV: (Math.random() - 0.5) * 12,
    rect: Math.random() > 0.45,
  }));

  const DURATION = 3200;
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fade = Math.max(0, 1 - Math.max(0, elapsed - DURATION * 0.55) / (DURATION * 0.45));
    particles.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += 0.06;
      p.rot += p.rotV;
      ctx.save();
      ctx.globalAlpha = fade;
      ctx.fillStyle   = p.color;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      if (p.rect) { ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); }
      else        { ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    if (elapsed < DURATION) { requestAnimationFrame(step); }
    else { canvas.remove(); }
  }
  requestAnimationFrame(step);
}

function triggerLaunchUnlock(cardEl) {
  fireConfetti();
  if (cardEl) {
    cardEl.classList.add("unlocking");
    setTimeout(() => cardEl.classList.remove("unlocking"), 620);
  }
}

function renderHome() {
  const grid    = $("cards-grid");
  const fill    = $("progress-fill");
  const text    = $("progress-text");
  const pct     = $("progress-pct");

  const TRACKED_IDS  = SECTIONS.filter(s => s.id !== 5).map(s => s.id);
  const count        = TRACKED_IDS.filter(id => completedSections.has(id)).length;
  const wasReady     = launchWasReady;
  launchWasReady     = false; // reset so animation can fire when allReady is newly true
  const total        = TRACKED_IDS.length;
  const percent      = Math.round((count / total) * 100);
  const allReady     = count === total;

  const progressColor = count === 0 ? "#ef4444"
                      : count < total ? (count / total < 0.5 ? "#f97316" : "#eab308")
                      : "#22c55e";

  fill.style.width  = `${percent}%`;
  fill.style.setProperty("--progress-color", progressColor);
  text.textContent  = `${count} of ${total} completed`;
  pct.textContent   = `${percent}%`;
  const hint = $("progress-hint");
  if (hint) hint.style.display = allReady ? "none" : "";

  grid.innerHTML = "";

  const isLocked = (section) => section.id === 5 && !allReady;

  // Next incomplete section (sections 1–4 only) to show "Start Here" indicator
  const nextUp = SECTIONS.filter(s => s.id !== 5).find(s => !completedSections.has(s.id));

  const buildCard = (section, displayNum) => {
    const done = completedSections.has(section.id);
    const locked = isLocked(section);
    const isLaunch = section.id === 5;
    const launchReady = isLaunch && allReady;
    const isNextUp = nextUp && section.id === nextUp.id;
    const card = document.createElement("button");
    card.className = `section-card${done ? " done" : ""}${locked ? " locked" : ""}${launchReady ? " launch-ready" : ""}${isNextUp ? " next-up" : ""}`;
    card.setAttribute("role", "listitem");
    card.setAttribute("aria-label", `${section.title}${done ? " — completed" : locked ? " — locked" : isNextUp ? " — start here" : ""}`);
    card.disabled = locked;
    card.innerHTML = `
      <span class="card-number" aria-hidden="true">
        ${done ? `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5L5.5 9.5L10.5 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : locked ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>` : displayNum}
      </span>
      <span class="card-icon" aria-hidden="true">${section.icon}</span>
      <span class="card-title">${section.title}</span>
      ${isNextUp ? `<span class="card-start-here">Start Here</span>` : ""}
    `;
    if (launchReady && !wasReady) {
      launchWasReady = true;
      requestAnimationFrame(() => triggerLaunchUnlock(card));
    }
    if (!locked) card.addEventListener("click", () => enterSection(section.id));
    return card;
  };

  // Row 1 — sections 1–4
  const mainRow = document.createElement("div");
  mainRow.className = "cards-row";
  mainRow.setAttribute("role", "list");
  SECTIONS.filter(s => s.id !== 5).forEach((s, i) => mainRow.appendChild(buildCard(s, i + 1)));
  grid.appendChild(mainRow);

  // Row 2 — Launch
  const launchRow = document.createElement("div");
  launchRow.className = "cards-row";
  launchRow.setAttribute("role", "list");
  launchRow.appendChild(buildCard(SECTIONS.find(s => s.id === 5), SECTIONS.filter(s => s.id !== 5).length + 1));
  grid.appendChild(launchRow);
}

// ---------------------------------------------------------------------------
// SECTION / STEP VIEW
// ---------------------------------------------------------------------------

function enterSection(sectionId) {
  clearVideoTimer();
  currentSectionId     = sectionId;
  currentStepIndex     = 0;
  currentSlideIndex    = 0;
  expandedSteps        = new Set([0]);
  completedStepIndices = new Set();
  const section = SECTIONS.find((s) => s.id === sectionId);
  $("section-title-heading").textContent = section.title.replace(/<br>/gi, " ");
  renderTOC();
  renderStep();
  showView("section");
}

// ---------------------------------------------------------------------------
// TABLE OF CONTENTS
// ---------------------------------------------------------------------------

function renderTOC() {
  const nav = $("toc-nav");
  if (!nav) return;
  nav.innerHTML = "";

  const section = SECTIONS.find((s) => s.id === currentSectionId);
  if (!section) return;

  const checkSVG   = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const chevronSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

  section.steps.forEach((step, stepIdx) => {
    const isCurrentStep = stepIdx === currentStepIndex;
    const isDone        = completedStepIndices.has(stepIdx);
    const isExpanded    = expandedSteps.has(stepIdx);
    const isSingle      = step.slides.length === 1;

    const item = document.createElement("div");
    item.className = `toc-item${isCurrentStep ? " current" : ""}${isDone ? " done" : ""}`;

    const btn = document.createElement("button");
    btn.className = "toc-section-btn";
    btn.setAttribute("aria-expanded", isSingle ? "false" : String(isExpanded));
    btn.title = step.label;
    btn.innerHTML = `
      <span class="toc-step-num" aria-hidden="true">${isDone && !isCurrentStep ? checkSVG : stepIdx + 1}</span>
      <span class="toc-title-text">${step.label}</span>
      ${!isSingle ? `<span class="toc-chevron" aria-hidden="true">${chevronSVG}</span>` : ""}
    `;

    btn.addEventListener("click", () => {
      clearVideoTimer();
      if (isSingle) {
        // Navigate directly — no expand/collapse
        currentStepIndex  = stepIdx;
        currentSlideIndex = 0;
        renderStep();
      } else if (stepIdx !== currentStepIndex) {
        currentStepIndex  = stepIdx;
        currentSlideIndex = 0;
        expandedSteps.add(stepIdx);
        renderStep();
      } else {
        // Already on this step — toggle expand/collapse
        if (expandedSteps.has(stepIdx)) {
          expandedSteps.delete(stepIdx);
        } else {
          expandedSteps.add(stepIdx);
        }
      }
      renderTOC();
      $("toc-sidebar").classList.remove("mobile-open");
    });

    item.appendChild(btn);

    // Slides sub-list — only for multi-slide steps when expanded
    if (!isSingle && isExpanded) {
      const slideList = document.createElement("ul");
      slideList.className = "toc-steps-list";
      step.slides.forEach((slide, slideIdx) => {
        const li = document.createElement("li");
        li.className = `toc-step${isCurrentStep && slideIdx === currentSlideIndex ? " active" : ""}`;
        const slideBtn = document.createElement("button");
        slideBtn.innerHTML = slide.label || `Slide ${slideIdx + 1}`;
        slideBtn.addEventListener("click", () => {
          clearVideoTimer();
          if (stepIdx !== currentStepIndex) {
            currentStepIndex = stepIdx;
          }
          currentSlideIndex = slideIdx;
          renderTOC();
          renderStep();
        });
        li.appendChild(slideBtn);
        slideList.appendChild(li);
      });
      item.appendChild(slideList);
    }

    nav.appendChild(item);
  });
}

// ---------------------------------------------------------------------------
// VIDEO TIMER
// ---------------------------------------------------------------------------

function clearVideoTimer() {
  if (videoTimerInterval !== null) {
    clearInterval(videoTimerInterval);
    videoTimerInterval = null;
  }
}

function startVideoTimer() {
  const nextBtn     = $("next-btn");
  const completeBtn = $("complete-btn");
  const notice      = $("video-notice");
  const countEl     = $("video-count");

  // Already watched this section's video — keep notice hidden, buttons enabled
  const sectionVideoKey = `${VIDEO_WATCHED_KEY}_${currentSectionId}`;
  if (localStorage.getItem(sectionVideoKey)) {
    return;
  }

  // Lock next/complete while counting down
  nextBtn.disabled = true;
  nextBtn.classList.add("btn-locked");
  if (completeBtn && !completeBtn.classList.contains("hidden")) {
    completeBtn.disabled = true;
  }

  let remaining = 10;
  if (countEl) countEl.textContent = remaining;

  videoTimerInterval = setInterval(() => {
    remaining--;
    if (countEl) countEl.textContent = remaining;

    if (remaining <= 0) {
      clearVideoTimer();
      localStorage.setItem(sectionVideoKey, "1");
      nextBtn.disabled = false;
      nextBtn.classList.remove("btn-locked");
      if (completeBtn && !completeBtn.classList.contains("hidden")) {
        completeBtn.disabled = false;
      }
      if (notice) {
        notice.innerHTML = `<span>✓ All good — continue when ready.</span>`;
        notice.style.background = "var(--success-bg)";
        notice.style.borderColor = "#86efac";
        notice.style.color = "var(--success)";
      }
    }
  }, 1000);
}

// ---------------------------------------------------------------------------
// STEP RENDERING
// ---------------------------------------------------------------------------

function renderStep() {
  clearVideoTimer();

  const section    = SECTIONS.find((s) => s.id === currentSectionId);
  const step       = section.steps[currentStepIndex];
  const slide      = step.slides[currentSlideIndex];
  const totalSteps = section.steps.length;
  const totalSlides = step.slides.length;

  const isFirst = currentStepIndex === 0 && currentSlideIndex === 0;
  const isLast  = currentStepIndex === totalSteps - 1 && currentSlideIndex === totalSlides - 1;

  // Header meta

  // Progress bar based on step position (slides within a step progress fractionally)
  const progress = ((currentStepIndex + (currentSlideIndex + 1) / totalSlides) / totalSteps) * 100;
  const stepColor = progress === 0   ? "#ef4444"
                  : progress < 50    ? "#f97316"
                  : progress < 100   ? "#eab308"
                  :                    "#22c55e";
  $("step-progress-fill").style.width = `${progress}%`;
  $("step-progress-fill").style.setProperty("--step-progress-color", stepColor);

  // --- Build content based on slide type ---
  const content = $("step-content");

  if (slide.type === "overview") {
    const stepsToShow = section.steps;
    const checkBadge  = `<span class="card-check" aria-hidden="true"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5L5.5 9.5L10.5 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;

    const cardsHtml = stepsToShow.map((s, i) => {
      const isDone     = completedStepIndices.has(i);
      const stateClass = isDone ? " ov-done" : "";
      return `
        <button class="section-card overview-step-card${stateClass}" data-step-index="${i}">
          ${isDone ? checkBadge : ""}
          <span class="card-title">${s.label}</span>
        </button>
      `;
    }).join("");

    content.innerHTML = `
      <div class="overview-slide">
        <div class="overview-cards-row">${cardsHtml}</div>
      </div>
    `;

    content.querySelectorAll(".overview-step-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentStepIndex  = parseInt(btn.dataset.stepIndex, 10);
        currentSlideIndex = 0;
        expandedSteps.add(currentStepIndex);
        renderTOC();
        renderStep();
      });
    });
  } else if (slide.type === "recap") {
    const recapSteps = section.steps.slice(1, -1); // steps between Watch Before You Start and Recap
    const listItems = recapSteps.map((s) => `<li class="recap-item"><span class="recap-check">✓</span><span>${s.label}</span></li>`).join("");
    content.innerHTML = `
      <div class="recap-slide">
        <div class="recap-icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h2 class="recap-title">${section.title} complete!</h2>
        <p class="recap-subtitle">Here's everything you just did:</p>
        <ul class="recap-list">${listItems}</ul>
        ${slide.bullets ? `<ul class="slide-bullets recap-bullets">${slide.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
        ${slide.note ? `<div class="recap-note-banner"><span class="recap-note-icon">🔁</span><p class="recap-note-text">${slide.note}</p></div>` : ""}
        ${slide.closing ? `
          <div class="recap-closing">
            <p class="recap-closing-title">${slide.closing.title}</p>
            <p class="recap-closing-body">${slide.closing.body}</p>
            ${slide.closing.itemsHeading ? `<p class="recap-closing-items-heading">${slide.closing.itemsHeading}</p>` : ""}
            ${slide.closing.items ? `<ul class="slide-bullets recap-bullets">${slide.closing.items.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
            ${slide.closing.tipItems ? `<ul class="recap-tip-list">${slide.closing.tipItems.map(t => `<li class="recap-tip-item"><span class="recap-tip-term">${t.term}</span><span class="recap-tip-desc">${t.desc}</span></li>`).join("")}</ul>` : ""}
            ${slide.closing.footer ? `<div class="recap-closing-footer"><p class="recap-closing-footer-title">${slide.closing.footer.title}</p><p class="recap-closing-footer-body">${slide.closing.footer.body}</p></div>` : ""}
          </div>` : ""}
      </div>
    `;
  } else if (slide.type === "step-intro") {
    content.innerHTML = `
      <div class="step-intro-slide">
        <h2 class="step-intro-title">${step.label}</h2>
        ${step.description ? `<p class="step-intro-desc">${step.description}</p>` : ""}
        ${slide.warning ? `<div class="step-warning">⚠️ ${slide.warning}</div>` : ""}
      </div>
    `;
  } else if (slide.type === "video") {
    const alreadyWatched = !!localStorage.getItem(`${VIDEO_WATCHED_KEY}_${currentSectionId}`);
    content.innerHTML = `
      <div class="video-slide">
        <img src="${slide.image}" alt="Intro video thumbnail" />
        <div class="video-badge">
          ${ICONS.play}
          <span>Intro Video</span>
        </div>
      </div>
      <div class="step-instruction">
        <p>${slide.instruction}</p>
      </div>
      ${slide.warning ? `<div class="step-warning">⚠️ ${slide.warning}</div>` : ""}
      ${!alreadyWatched ? `
        <div class="video-watch-notice" id="video-notice">
          <span>Watch the video to continue</span>
          <span class="video-countdown" id="video-count">10</span>
        </div>
      ` : ""}
    `;
    if (!alreadyWatched) {
      startVideoTimer();
    }
  } else {
    const contactBlock = slide.contact ? `
      <div class="slide-contact-inner">
        <p class="slide-contact-cta" style="font-size:20px;font-weight:800;">${slide.contact.cta}</p>
        <p class="slide-contact-detail" style="font-size:20px;font-weight:800;">${slide.contact.email}</p>
        <p class="slide-contact-detail" style="font-size:20px;font-weight:800;">${slide.contact.phone}</p>
        <p class="slide-contact-tagline">${slide.contact.tagline}</p>
      </div>` : "";

    content.innerHTML = `
      ${buildPlaceholder(slide.image, slide.smallImage)}
      <div class="step-instruction${slide.contact ? " has-contact" : ""}">
        <p>${slide.instruction}</p>
        ${contactBlock}
      </div>
      ${slide.warning ? `<div class="step-warning">⚠️ ${slide.warning}</div>` : ""}
      ${slide.definitions ? `<div class="slide-definitions">${slide.definitions.map(d => `<div class="slide-def-card"><span class="slide-def-term">${d.term}</span><p class="slide-def-desc">${d.desc}</p></div>`).join("")}</div>` : ""}
      ${slide.bullets ? `<${slide.numbered ? "ol" : "ul"} class="slide-bullets${slide.numbered ? " slide-numbered" : ""}">${slide.bullets.map((b) => `<li>${b}</li>`).join("")}</${slide.numbered ? "ol" : "ul"}>` : ""}
      ${slide.tip ? `<div class="step-tip">💡 ${typeof slide.tip === "string" ? slide.tip : "Pro tip — keep this in mind as you continue."}</div>` : ""}
    `;
  }

  // --- Nav buttons ---
  const prevBtn     = $("prev-btn");
  const nextBtn     = $("next-btn");
  const completeBtn = $("complete-btn");

  prevBtn.disabled     = isFirst;
  nextBtn.disabled     = false;
  nextBtn.classList.remove("btn-locked");
  completeBtn.disabled = false;

  if (isLast) {
    nextBtn.classList.add("hidden");
    completeBtn.classList.remove("hidden");
    completeBtn.textContent = completedSections.has(currentSectionId)
      ? "✓ Already Complete"
      : "✓ Mark as Complete";
  } else {
    nextBtn.classList.remove("hidden");
    completeBtn.classList.add("hidden");
  }
}

function buildPlaceholder(filename, small) {
  if (!filename || filename === "coming-soon.png") {
    return `<div class="coming-soon-notice">✏️ Content for this section is being written — check back soon.</div>`;
  }
  if (filename === "wip") {
    return `<div class="wip-placeholder"><span class="wip-placeholder-text">WORK IN PROGRESS.<br>ADD 2D GRAPHICS HERE.</span></div>`;
  }
  return `<img class="slide-screenshot${small ? " slide-screenshot-sm" : ""}" src="${filename}" alt="Screenshot: ${filename}" />`;
}

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------

$("back-btn").addEventListener("click", () => {
  clearVideoTimer();
  currentSectionId  = null;
  currentStepIndex  = 0;
  currentSlideIndex = 0;
  renderHome();
  showView("home");
});

// TOC collapse / expand
$("toc-toggle").addEventListener("click", () => {
  const sidebar = $("toc-sidebar");
  const btn     = $("toc-toggle");
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    const open = sidebar.classList.toggle("mobile-open");
    btn.setAttribute("aria-label", open ? "Collapse contents" : "Expand contents");
    btn.classList.toggle("rotated", !open);
  } else {
    const collapsed = sidebar.classList.toggle("collapsed");
    btn.setAttribute("aria-label", collapsed ? "Expand contents" : "Collapse contents");
    btn.classList.toggle("rotated", collapsed);
  }
});

$("prev-btn").addEventListener("click", () => {
  const section = SECTIONS.find((s) => s.id === currentSectionId);
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else if (currentStepIndex > 0) {
    currentStepIndex--;
    currentSlideIndex = section.steps[currentStepIndex].slides.length - 1;
  }
  renderTOC();
  renderStep();
});

$("next-btn").addEventListener("click", () => {
  const section     = SECTIONS.find((s) => s.id === currentSectionId);
  const totalSlides = section.steps[currentStepIndex].slides.length;
  const totalSteps  = section.steps.length;
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
  } else if (currentStepIndex < totalSteps - 1) {
    // Mark current step complete and auto-collapse it
    completedStepIndices.add(currentStepIndex);
    expandedSteps.delete(currentStepIndex);
    // Advance and auto-expand the new step
    currentStepIndex++;
    currentSlideIndex = 0;
    expandedSteps.add(currentStepIndex);
  }
  renderTOC();
  renderStep();
});

$("complete-btn").addEventListener("click", () => {
  if (!completedSections.has(currentSectionId)) {
    completedSections.add(currentSectionId);
    saveProgress();
    renderTOC();
    showToast("Section complete! Great work. 🎉");
  }
  // Return home after a short delay so the toast is readable
  setTimeout(() => {
    clearVideoTimer();
    renderHome();
    showView("home");
  }, 150);
});

// ---------------------------------------------------------------------------
// RESET
// ---------------------------------------------------------------------------

$("reset-btn").addEventListener("click", () => {
  if (!confirm("Reset all your progress? This cannot be undone.")) return;
  completedSections = new Set();
  saveProgress();
  renderHome();
  showToast("Progress reset.");
});

// ---------------------------------------------------------------------------
// INIT
// ---------------------------------------------------------------------------

renderHome();
showView("home");

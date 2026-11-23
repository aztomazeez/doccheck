/* =====================================================================
   CONTROL PANEL  -  THIS IS THE ONLY FILE YOU EVER NEED TO EDIT
   ---------------------------------------------------------------------
   Rules (very important):
   1. Change only the words INSIDE the quotation marks "like this".
   2. Never delete a quotation mark " or a comma ,
   3. After editing, tap "Commit changes" on GitHub. The site updates
      in about a minute.
   4. To make a word bold, put ** on both sides:  **like this**
   5. You can type {price}, {turnaround} and {brand} inside any text.
      They are replaced automatically with your real price, delivery
      time and business name.
   ===================================================================== */

var CONFIG = {

  /* ================= 1. THE BASICS ================= */

  brandName: "DocCheck Pro",

  /* Your WhatsApp number: country code + number, NO plus, NO leading 0.
     09126259221 becomes 2349126259221 */
  whatsappNumber: "2349126259221",

  /* Your Meta Pixel ID (numbers only) */
  pixelId: "1156321070111782",

  /* Your website address (used for link previews). Change only if it changes. */
  siteUrl: "https://aztomazeez.github.io/doccheck/",


  /* ================= 2. PAYMENT (customers only see "Pay now") ================= */

  /* Which payment link is live: "flutterwave" or "paystack".
     Change this one word to switch provider. Customers never notice. */
  paymentProvider: "flutterwave",

  /* Paste your payment links. Make each link accept ANY amount,
     because every quote is different. Leave "" to hide the Pay now buttons. */
  paymentLinks: {
    flutterwave: "https://flutterwave.com/pay/doccheck",
    paystack: ""
  },

  payNowText: "Pay now",

  /* Currency code used for Meta tracking: "USD", "GBP" or "NGN" */
  currencyCode: "USD",


  /* ================= 3. SPECIAL PROMOTION (optional) =================
     Choose ONE word:
       "none"      = no promotion
       "firstTime" = percent off for first-time customers (they mention a code)
       "deadline"  = percent off until a REAL end date, with a live countdown
       "multiDoc"  = percent off when they send several documents
       "referral"  = percent off when they bring a friend
     (Only promise a discount you will really give.) */
  promo: "none",

  promoSettings: {
    firstTime: { percentOff: 10, code: "FIRST" },
    deadline:  { percentOff: 10, endDate: "2026-12-31T23:59:00" },
    multiDoc:  { minDocs: 2, percentOff: 10 },
    referral:  { percentOff: 10 }
  },


  /* ================= 4. TESTIMONIALS (optional) =================
     Add ONLY real feedback from real customers, with their permission.
     Leave empty and the section stays hidden.
     Example (remove the // to use):
       { name: "Real first name", text: "What they really said." },
  */
  testimonials: [
  ],


  /* ================= 5. SEARCH AND LINK-PREVIEW WORDS (SEO) ================= */
  seo: {
    title: "Human Document Review & Editing for Academic and Professional Documents | DocCheck Pro",
    description: "Human review and editing of academic and professional documents by real experts. We find the red flags that can cause failure, rejection or non-approval. Confidential. From $9.99.",
    keywords: "document review, human document review, proofreading, human editing, academic editing, thesis review, dissertation editing, essay review, professional document review, report review, proposal review, grant application review, business plan review, confidential document review",
    image: "https://aztomazeez.github.io/doccheck/share.jpg"
  },


  /* ================= 6. ALL THE WORDS ON YOUR PAGE ================= */

  offer: {

    /* How long delivery takes. EDIT THIS to what you can really deliver. */
    turnaround: "24 to 48 hours",

    /* Used for Meta tracking: roughly what an average order is worth */
    purchaseValue: 9.99,

    /* The WhatsApp message customers send you. {service} is filled in
       automatically from the button they tap. Use \n for a new line. */
    whatsappTemplate: "Hi, I'd like {service}.\n\nDocument type:\nSubject or field:\nDeadline:\nWhat it must achieve (marking criteria, journal or employer requirements):\nWhat I'd like help with:\n\nI'll send my document now.",
    mainAsk: "a quote",

    /* ---- Top of the page ---- */
    badge: "Real experts. Strictly confidential.",
    headline: "Find what could get your document rejected, before you submit.",
    subhead: "Human review and editing of academic and professional documents. We spot the red flags that lead to failure, rejection or non-approval. From **{price}**.",
    trust: [
      "Reviewed by real people, no AI",
      "Strictly confidential",
      "Free quote. Pay only after you approve it"
    ],

    /* Button words (different places on the page) */
    cta: {
      main: "Get my free quote on WhatsApp",
      quote: "Send my document for a quote",
      ask: "Ask a question on WhatsApp"
    },
    ctaNote: "Send your document and tell us exactly what you need.",

    /* ---- Choose your service ---- */
    servicesEyebrow: "Our services",
    servicesTitle: "Choose your service",
    services: [
      { icon: "search", tag: "Red-flag review",
        title: "Human Review",
        text: "A real expert reads your whole document and finds what could cause failure, rejection or non-approval.",
        bullets: ["Checked against your requirements, criteria or guidelines",
                  "Every red flag marked and explained in the margin",
                  "Clear fixes, with your priorities in order",
                  "An editable Word file with comments"],
        button: "Get a Human Review quote",
        ask: "a Human Review" },
      { icon: "pen", tag: "Hands-on",
        title: "Human Editing",
        text: "Our experts improve the document itself, keeping your ideas and your voice.",
        bullets: ["Stronger structure, flow and clarity",
                  "Consistent tone, terms and presentation",
                  "Your meaning and arguments stay yours",
                  "Tracked changes plus a clean copy"],
        button: "Get a Human Editing quote",
        ask: "Human Editing" },
      { icon: "shield", tag: "Recommended", rec: true,
        title: "Review + Editing",
        text: "Find the red flags, then polish the whole document. Best for important submissions.",
        bullets: ["Everything in Human Review",
                  "Everything in Human Editing",
                  "Ideal for theses, dissertations, proposals and applications"],
        button: "Get a Review + Editing quote",
        ask: "Review + Editing" },
      { icon: "chat", tag: "Not sure?",
        title: "Ask us which",
        text: "Tell us about your document and what it must achieve. We will recommend the right service.",
        bullets: ["Send a few pages or the whole document",
                  "We tell you what it needs",
                  "No payment until you approve your quote"],
        button: "Ask which I need",
        ask: "advice on which service I need" }
    ],

    /* ---- What we look for ---- */
    lookEyebrow: "What we look for",
    lookTitle: "The red flags that decide whether it is approved",
    lookText: "We read like the person who will judge your document, and we mark everything that could count against it.",
    look: [
      { icon: "flag",   title: "Fit with your requirements", text: "Marking criteria, guidelines, brief, word limit and required structure." },
      { icon: "link",   title: "Argument and logic",         text: "Gaps in reasoning, unsupported claims and conclusions that go further than the evidence." },
      { icon: "book",   title: "Evidence and sources",       text: "Weak, mismatched or missing support, and referencing a reader would question." },
      { icon: "chart",  title: "Method, data and numbers",   text: "Design flaws, calculation errors and figures that do not add up." },
      { icon: "layout", title: "Structure and presentation", text: "Organisation, flow, missing sections and layout that misses what is required." },
      { icon: "shield", title: "Compliance and integrity",   text: "Ethics, consent, attribution and anything a panel or reader could challenge." }
    ],

    /* ---- What we do and don't do ---- */
    scopeEyebrow: "Our promise",
    scopeTitle: "What we do, and what we don't",
    scopeDoTitle: "We do",
    scopeDo: [
      "Review your document against what it must achieve",
      "Mark every red flag and explain how to fix it",
      "Improve structure, flow and clarity (Human Editing)",
      "Keep your ideas, arguments and voice yours",
      "Keep your document strictly confidential",
      "Tell you honestly if we cannot help"
    ],
    scopeDontTitle: "We don't",
    scopeDont: [
      "Write or rewrite your content or arguments",
      "Change your data, findings or meaning",
      "Invent or add sources",
      "Guarantee grades, approvals or outcomes"
    ],
    scopeNote: "Your work stays your own. Please follow your institution's or employer's rules on review and editing support.",

    /* ---- How it works (payStep = which step shows the Pay now button) ---- */
    stepsEyebrow: "Simple process",
    stepsTitle: "How it works",
    steps: [
      "**Send** your document on WhatsApp and tell us exactly what you need.",
      "**Get your quote**, based on page count and the service you choose.",
      "**Pay** when you are happy with the quote.",
      "**Receive** your reviewed or edited Word file within {turnaround}."
    ],
    payStep: 3,
    payStepNote: "Only pay after you have received and approved your quote.",
    stepsFoot: "",

    /* ---- What to send us ---- */
    sendEyebrow: "For an accurate quote",
    sendTitle: "What to send us",
    send: [
      "**Your document** (Word or PDF)",
      "**The document type** and your subject or field",
      "**Your requirements**: marking criteria, journal or employer guidelines, brief or word limit",
      "**Your deadline**",
      "**Exactly what you want**: review, editing or both, and any areas you are worried about"
    ],
    sendNote: "The more you tell us, the more accurate your quote and your result.",

    /* ---- Confidentiality ---- */
    confTitle: "Strictly confidential",
    confText: "Your document and your details are used only for your order and are never shared with anyone.",
    conf: [
      "Used only for your review or editing",
      "Never shared, published or reused",
      "Discussed only with you"
    ],

    /* ---- Fields and documents ---- */
    fieldsEyebrow: "Our experts",
    fieldsTitle: "Academic and professional fields",
    fields: ["Business & Management", "Finance & Economics", "Law", "Health & Medicine", "Education",
             "Engineering & Technology", "Sciences", "Social Sciences", "Humanities", "Public Policy"],
    docsTitle: "Documents we work on",
    docs: ["Essays and coursework", "Theses", "Dissertations", "Research proposals", "Journal articles",
           "Conference papers", "Reports and case studies", "Business plans and proposals",
           "Grant applications", "Policy documents", "White papers", "Tenders and professional submissions"],
    docsNote: "Not listed? Send it and we will tell you if we can help.",

    /* ---- Price ---- */
    priceEyebrow: "Clear pricing",
    priceLabel: "Starting at",
    priceValue: "$9.99",
    priceNote: "Final price depends on your document's page count and the service you choose. You see your exact quote before you pay.",

    /* Optional price guide. Set showPriceGuide to true ONLY after you
       have changed these example prices to your real prices. */
    showPriceGuide: false,
    priceGuide: [
      { label: "Up to 10 pages", price: "$9.99" },
      { label: "11 to 20 pages", price: "$14.99" },
      { label: "21 to 30 pages", price: "$19.99" },
      { label: "31 to 50 pages", price: "$29.99" },
      { label: "Over 50 pages", price: "Custom quote" }
    ],

    /* ---- Questions and answers ---- */
    faqEyebrow: "Good to know",
    faqTitle: "Questions",
    faq: [
      { q: "What is a Human Review?",
        a: "A real expert reads your whole document and finds what could cause it to fail, be rejected or not be approved. Every red flag is marked in the margin with an explanation and a suggested fix, and you receive your priorities in order." },
      { q: "What is Human Editing?",
        a: "Our experts improve the document itself: structure, flow, clarity and consistency. Your ideas, arguments and voice stay yours. You receive tracked changes and a clean copy." },
      { q: "Which service should I choose?",
        a: "Choose Human Review if you want to know what is wrong and fix it yourself. Choose Human Editing if you want us to improve the document. Choose Review + Editing for important submissions. Not sure? Message us and we will advise." },
      { q: "What should I send you?",
        a: "Your document, the document type and subject, your requirements (marking criteria, guidelines, brief or word limit), your deadline, and exactly what you want. The more you tell us, the better the result." },
      { q: "Is my document confidential?",
        a: "Yes. Your document and your details are used only for your order and are never shared with anyone." },
      { q: "Do you use AI?",
        a: "No. Your document is reviewed and edited by real people." },
      { q: "Will you change my ideas or my meaning?",
        a: "No. We never write or rewrite your content, change your data or findings, or invent sources. If something is unclear, we flag it for you." },
      { q: "Can you promise approval or a grade?",
        a: "No. We cannot guarantee grades, approvals or outcomes. We show you what could count against your document so you can fix it before you submit." },
      { q: "Which subjects do you cover?",
        a: "Our experts cover academic and professional fields, including business, finance, law, health, education, engineering, sciences, social sciences, humanities and public policy. If yours is not listed, send it and we will tell you if we can help." },
      { q: "How much does it cost?",
        a: "Prices start at {price}. The final price depends on your page count and the service you choose. You get an exact quote on WhatsApp before you pay anything." },
      { q: "Do I pay before I send my document?",
        a: "No. Send your document first, get your quote, and pay only when you are happy with it." },
      { q: "How long does it take?",
        a: "Usually within {turnaround} after payment. Your quote will confirm the timing for your document." },
      { q: "How do I pay?",
        a: "After you approve your quote, tap Pay now to pay securely online." }
    ],

    /* ---- Final call to action ---- */
    finalTitle: "Know what could go wrong before your reader does.",
    finalText: "Send your document, get your free quote, and decide after you see the price.",

    /* ---- Small print at the bottom of the page ---- */
    disclaimer: "We provide document review and editing only. We do not write, rewrite or change the ideas, arguments or data in your work, and we do not guarantee grades, approvals or outcomes. Please follow your institution's or employer's rules on third-party review and editing support.",

    /* ---- Thank-you page (shown after payment) ---- */
    thankYouTitle: "Payment received. Thank you!",
    thankYouText: "Your order is now in progress. You will receive your work within {turnaround}. If you have anything to add, message us on WhatsApp.",
    thankYouButton: "Message us on WhatsApp",
    thankYouWhatsappMessage: "Hi, I have just paid for my order."
  }
};

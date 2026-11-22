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
    title: "Proofreading & Human Editing for Academic and Professional Documents | DocCheck Pro",
    description: "Human proofreading and editing for essays, theses, dissertations, reports and professional documents. Edited by a real person. Tracked changes and a clean copy. From $9.99.",
    keywords: "proofreading, human editing, academic proofreading, thesis proofreading, dissertation editing, essay editing, report editing, professional document editing, copy editing, grammar, UK English",
    image: "https://aztomazeez.github.io/doccheck/share.jpg"
  },


  /* ================= 6. ALL THE WORDS ON YOUR PAGE ================= */

  offer: {

    /* How long delivery takes. EDIT THIS to what you can really deliver. */
    turnaround: "24 to 48 hours",

    /* Used for Meta tracking: roughly what an average order is worth */
    purchaseValue: 9.99,

    /* Message that opens in WhatsApp from the main green buttons */
    whatsappMessage: "Hi, I would like a quote for proofreading and editing. I will send my document now.",

    /* ---- Top of the page ---- */
    badge: "Edited by a real person, not an AI tool",
    headline: "Proofreading and human editing for academic and professional documents.",
    subhead: "Clear, polished writing for essays, theses, dissertations, reports and more. Your meaning and your voice stay yours. From **{price}**.",
    trust: [
      "Edited by a real person",
      "Your ideas and voice stay yours",
      "Free quote. Pay only after you approve it"
    ],

    /* Button words (different places on the page) */
    cta: {
      main: "Get my free quote on WhatsApp",
      quote: "Send my document for a quote",
      ask: "Ask a question on WhatsApp"
    },
    ctaNote: "Send your document, get a quote, and pay only after you approve it.",

    /* ---- Choose your service ---- */
    servicesTitle: "Choose your service",
    services: [
      { tag: "Final polish",
        title: "Proofreading",
        text: "A careful final check of your finished draft.",
        bullets: ["Spelling, grammar and punctuation", "Typos and repeated words", "Formatting and reference-style consistency"],
        button: "Get a proofreading quote",
        message: "Hi, I would like a quote for proofreading. I will send my document now." },
      { tag: "Recommended",
        title: "Human editing",
        text: "Proofreading plus clearer, smoother writing.",
        bullets: ["Everything in proofreading", "Clarity, flow and sentence structure", "Tone, terminology and consistency", "Comments where something is unclear"],
        button: "Get an editing quote",
        message: "Hi, I would like a quote for human editing (including proofreading). I will send my document now." },
      { tag: "Not sure?",
        title: "Ask us which",
        text: "Tell us about your document and we will recommend the right level.",
        bullets: ["Send a few pages or the whole document", "We tell you what it needs", "No payment until you approve your quote"],
        button: "Ask which I need",
        message: "Hi, I am not sure whether I need proofreading or editing. Can you advise?" }
    ],

    /* ---- Why a human editor ---- */
    whyTitle: "Why a human editor beats an automated checker",
    whyText: [
      "Automated grammar tools see words, not your argument. They can miss context, change your meaning or flatten your voice.",
      "A human editor reads your whole document, keeps your meaning, and explains changes where it matters."
    ],
    compare: {
      leftTitle: "Automated tool only",
      leftItems: [
        "Suggests changes without understanding your argument",
        "May change your meaning or tone",
        "Misses inconsistent terms and structure",
        "Leaves you to judge every suggestion"
      ],
      rightTitle: "With a human editor",
      rightItems: [
        "Reads your document in context",
        "Keeps your meaning, terms and voice",
        "Fixes consistency across the whole document",
        "Explains changes with comments"
      ]
    },

    /* ---- What we do and don't do ---- */
    scopeTitle: "What we do, and what we don't",
    scopeDoTitle: "We do",
    scopeDo: [
      "Correct grammar, spelling and punctuation",
      "Improve clarity, flow and sentence structure (editing)",
      "Keep terminology, tone and formatting consistent",
      "Check your reference style is applied consistently",
      "Apply UK or US English spelling, your choice",
      "Leave comments where something is unclear"
    ],
    scopeDontTitle: "We don't",
    scopeDont: [
      "Write or rewrite your content or arguments",
      "Change your data, findings or meaning",
      "Invent or add sources",
      "Guarantee grades or outcomes"
    ],
    scopeNote: "Your work stays your own. Please follow your institution's rules on proofreading and editing support.",

    /* ---- Documents we work on ---- */
    docsTitle: "Documents we work on",
    docs: ["Essays", "Assignments", "Theses", "Dissertations", "Research proposals", "Journal articles",
           "Lab and case study reports", "Literature reviews", "Business reports", "Policy briefs",
           "Proposals and white papers", "Professional documents"],
    docsNote: "Not listed? Send it and we will tell you if we can help.",

    /* ---- Price ---- */
    priceLabel: "Starting at",
    priceValue: "$9.99",
    priceNote: "Final price depends on your document's page count and how much work it needs. You see your exact quote before you pay.",

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

    /* ---- How it works (payStep = which step shows the Pay now button) ---- */
    stepsTitle: "How it works",
    steps: [
      "**Send** your document on WhatsApp (Word or PDF).",
      "**Get your quote**, based on page count and the level of editing.",
      "**Pay** when you are happy with the quote.",
      "**Receive** your edited Word file with tracked changes, plus a clean copy."
    ],
    payStep: 3,
    payStepNote: "Only pay after you have received and approved your quote.",
    stepsFoot: "Delivery is usually within {turnaround} after payment.",

    /* ---- Questions and answers ---- */
    faqTitle: "Questions",
    faq: [
      { q: "What is the difference between proofreading and editing?",
        a: "Proofreading is a final check for spelling, grammar, punctuation and typos. Editing goes further. It improves clarity, flow, sentence structure and consistency, and it includes proofreading. If you are unsure, send a few pages and we will recommend one." },
      { q: "Will you change my ideas or my meaning?",
        a: "No. We improve the language, not your content. Your ideas, arguments, data and voice stay yours. If something is unclear, we leave a comment instead of guessing." },
      { q: "Is my document edited by a person or by AI?",
        a: "By a real person. We do not use AI tools to rewrite your document." },
      { q: "How much does it cost?",
        a: "Prices start at {price}. The final price depends on your page count and how much work your document needs. You get an exact quote on WhatsApp before you pay anything." },
      { q: "Do I pay before I send my document?",
        a: "No. Send your document first, get your quote, and pay only when you are happy with it." },
      { q: "How long does it take?",
        a: "Usually within {turnaround} after payment. Your quote will confirm the timing for your document." },
      { q: "Can I see what you changed?",
        a: "Yes. You receive a Word file with tracked changes and comments, plus a clean copy with all changes accepted." },
      { q: "Which referencing styles do you check?",
        a: "We check that your chosen style (such as APA, Harvard, MLA or Chicago) is applied consistently, and that in-text citations match your reference list. We never add or invent sources." },
      { q: "Do you use UK or US English?",
        a: "Either. Tell us your preference and we will apply it consistently throughout." },
      { q: "Is my document private?",
        a: "Your document is used only for your editing and is not shared with anyone." },
      { q: "Do you guarantee a grade?",
        a: "No. We cannot promise grades or outcomes. We make your writing clearer and more accurate. Please check your institution's rules on proofreading and editing support." },
      { q: "How do I pay?",
        a: "After you approve your quote, tap Pay now to pay securely online." }
    ],

    /* ---- Final call to action ---- */
    finalTitle: "Get your document proofread and edited by a real person.",
    finalText: "Send it now, get your free quote, and decide after you see the price.",

    /* ---- Small print at the bottom of the page ---- */
    disclaimer: "We provide proofreading and editing only. We do not write, rewrite or change the ideas, arguments or data in your work, and we do not guarantee grades or outcomes. Please follow your institution's rules on third-party proofreading and editing support.",

    /* ---- Thank-you page (shown after payment) ---- */
    thankYouTitle: "Payment received. Thank you!",
    thankYouText: "Your editing has started. We will send your edited Word file with tracked changes and a clean copy within {turnaround}. If you have anything to add, message us on WhatsApp.",
    thankYouButton: "Message us on WhatsApp",
    thankYouWhatsappMessage: "Hi, I have just paid for my document editing."
  }
};

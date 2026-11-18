/* =====================================================================
   CONTROL PANEL  -  THIS IS THE ONLY FILE YOU EVER NEED TO EDIT
   ---------------------------------------------------------------------
   Rules (very important):
   1. Change only the words INSIDE the quotation marks "like this".
   2. Never delete a quotation mark " or a comma ,
   3. After editing, save/commit. The site updates in about a minute.
   4. To make a word bold, put ** on both sides:  **like this**
   5. You can type {price}, {turnaround} and {brand} inside any text.
      They are replaced automatically with your real price, delivery
      time and business name.
   ===================================================================== */

var CONFIG = {

  /* ================= 1. THE BASICS ================= */

  /* Business name shown on the page */
  brandName: "DocCheck Pro",

  /* Your WhatsApp number: country code + number, NO plus, NO leading 0.
     09126259221 becomes 2349126259221 */
  whatsappNumber: "2349126259221",

  /* Your Meta Pixel ID (numbers only) */
  pixelId: "1156321070111782",

  /* WHICH OFFER TO SHOW. Type one:
       "review"  = Human Document Review + FREE Turnitin reports (NEW)
       "check"   = the earlier simple $3 Turnitin check (OLD)
     Change this one word to switch back and forth any time. */
  activeOffer: "review",


  /* ================= 2. PAYMENT (customers only see "Pay now") ================= */

  /* Which payment link is live right now: "flutterwave" or "paystack".
     Change this one word to switch provider. Customers never notice. */
  paymentProvider: "paystack",

  /* Paste your payment links here (the full https://... address).
     TIP: for the review offer, make the link accept ANY amount
     (leave the amount empty), because every quote is different.
     Leave "" if you don't have a link yet; the Pay now buttons
     then hide automatically. */
  paymentLinks: {
    flutterwave: "",
    paystack: "https://paystack.shop/pay/doccheck-review"
  },

  /* Text on the payment button */
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
    deadline:  { percentOff: 10, endDate: "2026-12-15T23:59:00" },
    multiDoc:  { minDocs: 2, percentOff: 10 },
    referral:  { percentOff: 10 }
  },


  /* ================= 4. TESTIMONIALS (optional) =================
     Add ONLY real feedback from real customers, with their permission.
     Leave it empty and the section stays hidden.
     Example (remove the // to use):
       { name: "Real first name", text: "What they really said." },
  */
  testimonials: [
  ],


  /* ================= 5. THE OFFERS (all the words on your page) ================= */

  offers: {

    /* ---------- OFFER: review  (NEW: human review + free reports) ---------- */
    review: {
      pageTitle: "Human Document Review + FREE Turnitin Reports",

      /* How long delivery takes. EDIT THIS to what you can really deliver. */
      turnaround: "24 hours",

      /* Used for Meta tracking: roughly what an average order is worth */
      purchaseValue: 9.99,

      /* Message that opens in WhatsApp when someone taps the green button */
      whatsappMessage: "Hi, I would like a human document review with the free Turnitin reports. I will send my document now.",

      /* Hero (top of page) */
      badge: "FREE Turnitin reports included",
      headline: "Don't trust an AI score alone. Get a real human to review your document.",
      subhead: "Human document review plus **FREE** Turnitin Similarity and AI Detection reports. Starting at **{price}**.",
      trust: [
        "Reviewed by a real person",
        "Private and confidential",
        "Free quote. Pay only after you approve it"
      ],

      /* Button texts (different places on the page) */
      cta: {
        main: "Send my document on WhatsApp",
        quote: "Get my free quote",
        ask: "Ask a question on WhatsApp"
      },
      ctaNote: "Takes 1 minute. No payment until you approve your quote.",

      /* What you get */
      getTitle: "What you get",
      get: [
        { title: "Human Document Review", free: false,
          text: "A real reviewer reads your document and explains your results in plain language." },
        { title: "Turnitin Similarity Report", free: true,
          text: "See your similarity percentage and exactly where the matches are." },
        { title: "Turnitin AI Detection Report", free: true,
          text: "See your AI writing indicator, with a human opinion on what it means." }
      ],
      getNote: "FREE Turnitin reports are provided after successful payment for the Human Document Review.",

      /* Why human review */
      whyTitle: "Why a human review matters",
      whyText: [
        "An automated tool gives you a number. It cannot read your document in context.",
        "Studies have found that AI detectors can wrongly flag genuine human writing, especially from people who write in English as a second language."
      ],
      compare: {
        leftTitle: "Automated report only",
        leftItems: [
          "A percentage with no explanation",
          "Quotes and references can count as matches",
          "Honest writing can still get flagged",
          "You are left to guess what to do"
        ],
        rightTitle: "With human review",
        rightItems: [
          "Your results explained in plain language",
          "A person reads your document in context",
          "Clear pointers on what may need attention",
          "You know where you stand before you submit"
        ]
      },

      /* Price */
      priceLabel: "Starting at",
      priceValue: "$9.99",
      priceNote: "Final price depends on your document's page count and complexity. You see your exact quote before you pay.",

      /* Optional price guide. Set showPriceGuide to true ONLY after you
         have changed these example prices to your real prices. */
      showPriceGuide: false,
      priceGuide: [
        { label: "Up to 10 pages", price: "$9.99" },
        { label: "11 to 30 pages", price: "$20" },
        { label: "31 to 60 pages", price: "$35" },
        { label: "Over 60 pages", price: "Custom quote" }
      ],

      /* How it works. payStep = which step shows the Pay now button */
      stepsTitle: "How it works",
      steps: [
        "**Send** your document via WhatsApp.",
        "**Receive** your price quotation.",
        "**Make payment** when you are happy with the quote.",
        "**Receive** your human review and FREE Turnitin reports."
      ],
      payStep: 3,
      payStepNote: "Only pay after you have received and approved your quote.",
      stepsFoot: "Delivery is usually within {turnaround} after payment.",

      /* Questions and answers */
      faqTitle: "Questions",
      faq: [
        { q: "How much does it cost?",
          a: "Prices start at {price}. The final price depends on your document's page count and complexity. You get an exact quote on WhatsApp before you pay anything." },
        { q: "Do I have to pay before I send my document?",
          a: "No. Send your document first, get your quote, and pay only when you are happy with it." },
        { q: "What are the FREE Turnitin reports?",
          a: "Your Turnitin Similarity Report and AI Detection Report are included at no extra charge once you have paid for the Human Document Review." },
        { q: "How long does it take?",
          a: "Usually within {turnaround} after payment. Your quote will confirm the timing for your document." },
        { q: "Will you promise a certain score?",
          a: "No. We do not promise or guarantee any score. We help you understand your results so you can decide what to do next." },
        { q: "Is my document private?",
          a: "Your document is used only for your review and reports, and it is not shared with anyone." },
        { q: "What file should I send?",
          a: "A Word (.docx) or PDF file works best. Send it as a document in WhatsApp." }
      ],

      /* Final call to action */
      finalTitle: "Get your document reviewed by a real person.",
      finalText: "Send it now, get your free quote, and decide after you see the price.",

      /* Thank-you page (shown after payment) */
      thankYouTitle: "Payment received. Thank you!",
      thankYouText: "Your human review has started. If you have anything to add, message us on WhatsApp.",
      thankYouButton: "Message us on WhatsApp",
      thankYouWhatsappMessage: "Hi, I have just paid for my document review."
    },


    /* ---------- OFFER: check  (OLD: simple $3 Turnitin check) ---------- */
    check: {
      pageTitle: "Turnitin Similarity and AI Report Check",
      turnaround: "15 minutes",
      purchaseValue: 3,
      whatsappMessage: "Hi, I want to check my document.",

      badge: "Fast and confidential",
      headline: "Know your Turnitin score before your lecturer does.",
      subhead: "Get your **similarity report** and **AI report** in about {turnaround}. Only **{price}** per check.",
      trust: [
        "Private and confidential",
        "No sign-up needed",
        "Message us and send your file"
      ],
      cta: {
        main: "Send my file on WhatsApp",
        quote: "Check my document now",
        ask: "Ask a question on WhatsApp"
      },
      ctaNote: "No sign-up. Just message us and send your file.",

      getTitle: "What you get",
      get: [
        { title: "Similarity Report", free: false, text: "See your similarity percentage." },
        { title: "AI Detection Report", free: false, text: "See your AI writing score." },
        { title: "Fast delivery", free: false, text: "Your report in about {turnaround}." }
      ],
      getNote: "",

      whyTitle: "",
      whyText: [],
      compare: null,

      priceLabel: "Only",
      priceValue: "$3",
      priceNote: "per document check",
      showPriceGuide: false,
      priceGuide: [],

      stepsTitle: "How it works (3 easy steps)",
      steps: [
        "**Tap the green button** and send your document on WhatsApp.",
        "**Pay** {price} per document. We confirm quickly.",
        "**Receive your report** in about {turnaround}."
      ],
      payStep: 2,
      payStepNote: "",
      stepsFoot: "",

      faqTitle: "Questions",
      faq: [
        { q: "How much is it?", a: "{price} per document check." },
        { q: "How fast do I get my report?", a: "Usually in about {turnaround} once your file and payment are confirmed." },
        { q: "What file should I send?", a: "A Word (.docx) or PDF file works best. Send it as a document on WhatsApp." },
        { q: "Is my document safe?", a: "It is used only for the check and is not shared with anyone." }
      ],

      finalTitle: "Check it today, not on deadline day.",
      finalText: "Send your file now and know your score before you submit.",

      thankYouTitle: "Payment received. Thank you!",
      thankYouText: "Last step: send your document on WhatsApp so we can start your check.",
      thankYouButton: "Send my file on WhatsApp",
      thankYouWhatsappMessage: "Hi, I have paid. Here is my document."
    }
  }
};

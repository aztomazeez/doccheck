/* =====================================================================
   EDIT ONLY THIS FILE TO CHANGE YOUR PRICE, NUMBER, OFFER, PIXEL, ETC.
   Keep the quotation marks "" and the commas , exactly as they are.
   After editing, save and re-upload this ONE file to Cloudflare.
   ===================================================================== */

var CONFIG = {

  /* Your business name (shown at the top of the page) */
  brandName: "DocCheck Pro",

  /* Your WhatsApp number in INTERNATIONAL format:
     country code + number, NO plus sign, NO leading zero.
     Example: 09126259221 becomes 2349126259221 */
  whatsappNumber: "2349126259221",

  /* Price per document check */
  price: 3,

  /* Currency symbol shown on the page, and the currency CODE for Meta
     ($ = USD, pound = GBP, naira = NGN) */
  currencySymbol: "$",
  currencyCode: "USD",

  /* How fast you deliver (shown on the page) */
  turnaround: "15 minutes",

  /* Your Meta Pixel ID (numbers only, from Meta Events Manager) */
  pixelId: "1156321070111782",

  /* OPTIONAL online payment link (Flutterwave / Paystack / Selar).
     Leave as "" if customers will pay inside WhatsApp. */
  paymentLink: "",

  /* The first message customers send you on WhatsApp */
  whatsappMessage: "Hi, I want to check my document.",

  /* ---------- OFFER / DISCOUNT ----------
     Choose ONE by typing its name below:
       "bulk"      = discount when they send several documents
       "firstTime" = discount for first-time customers
       "deadline"  = discount that ends on a real date (with countdown)
       "referral"  = discount when they bring a friend
       "bundle"    = buy a few checks, get one free
       "none"      = no offer
  */
  discountStrategy: "bulk",

  /* Settings for each offer. Change the numbers any time. */
  discounts: {
    bulk:      { minDocs: 2, percentOff: 20 },
    firstTime: { percentOff: 25, code: "FIRST" },
    deadline:  { percentOff: 20, endDate: "2026-11-30T23:59:00" },
    referral:  { percentOff: 15 },
    bundle:    { buy: 3, free: 1 }
  },

  /* ---------- TESTIMONIALS ----------
     Add ONLY real feedback from real customers (with permission).
     Leave the list empty [] and the section stays hidden.
     Example of one entry (remove the // to use it):
       { name: "Real customer name", text: "Real message from the customer." },
  */
  testimonials: [
  ]
};

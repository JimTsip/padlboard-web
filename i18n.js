// Padlboard landing i18n: Greek by default, EN via the switcher.
// The desktop layout is the Pencil export (EN copy) — we translate its text
// nodes in place from this dictionary and can restore the originals, so the
// switcher works both ways without touching the exported markup.
(function () {
  var EL = {
    "Games": "Παιχνίδια",
    "Coaches": "Προπονητές",
    "Courts": "Γήπεδα",
    "Scoring": "Σκοράρισμα",
    "Download": "Κατέβασέ το",
    "GAMES · COACHES · COURTS · SCORES": "ΠΑΙΧΝΙΔΙΑ · ΠΡΟΠΟΝΗΤΕΣ · ΓΗΠΕΔΑ · ΣΚΟΡ",
    "EVERYTHING PADEL.": "ΟΛΟ ΤΟ PADEL.",
    "ONE APP.": "ΕΝΑ APP.",
    "Find open games near you, book top coaches, reserve courts, and track every match on your Apple Watch. The whole padel world — in one app.":
      "Βρες ανοιχτά παιχνίδια κοντά σου, κλείσε κορυφαίους προπονητές, κράτησε γήπεδα και κατέγραψε κάθε αγώνα στο Apple Watch σου. Όλος ο κόσμος του padel — σε ένα app.",
    "Download on the": "Κατέβασέ το στο",
    "Explore the app": "Εξερεύνησε το app",
    "OPEN MATCHES": "ΑΝΟΙΧΤΑ ΠΑΙΧΝΙΔΙΑ",
    "NEVER SIT": "ΠΟΤΕ ΞΑΝΑ",
    "ON THE BENCH.": "ΣΤΟΝ ΠΑΓΚΟ.",
    "Short a player? Post an open match. Free tonight? Jump into a game near you that needs a fourth. Real players, real courts, matched by level.":
      "Σου λείπει παίκτης; Ανέβασε ανοιχτό παιχνίδι. Έχεις χρόνο απόψε; Μπες σε παιχνίδι κοντά σου που ψάχνει τέταρτο. Πραγματικοί παίκτες, πραγματικά γήπεδα, ταίριασμα ανά επίπεδο.",
    "Browse open games": "Δες τα ανοιχτά παιχνίδια",
    "1 SPOT LEFT": "ΕΜΕΙΝΕ 1 ΘΕΣΗ",
    "Today · 19:30": "Σήμερα · 19:30",
    "Level 3.5 – 4.0": "Επίπεδο 3.5 – 4.0",
    "Join this match": "Μπες στο παιχνίδι",
    "4.9 · 120 reviews": "4.9 · 120 κριτικές",
    "Technique": "Τεχνική",
    "Certified · 8 yrs": "Πιστοποίηση · 8 χρόνια",
    "COACHES": "ΠΡΟΠΟΝΗΤΕΣ",
    "LEVEL UP WITH": "ΑΝΕΒΑ ΕΠΙΠΕΔΟ",
    "A REAL COACH.": "ΜΕ ΑΛΗΘΙΝΟ COACH.",
    "Browse certified coaches by level, specialty and price. See real ratings from real players, then book a session in seconds.":
      "Δες πιστοποιημένους προπονητές ανά επίπεδο, ειδικότητα και τιμή. Αληθινές αξιολογήσεις από αληθινούς παίκτες — και κλείσε μάθημα σε δευτερόλεπτα.",
    "Verified certifications & experience": "Επαληθευμένες πιστοποιήσεις & εμπειρία",
    "Filter by level, price and location": "Φίλτρα ανά επίπεδο, τιμή και περιοχή",
    "Instant booking with live availability": "Άμεση κράτηση με ζωντανή διαθεσιμότητα",
    "Find your coach": "Βρες τον προπονητή σου",
    "COURTS · COMING SOON": "ΓΗΠΕΔΑ · ΕΡΧΕΤΑΙ ΣΥΝΤΟΜΑ",
    "YOUR COURT.": "ΤΟ ΓΗΠΕΔΟ ΣΟΥ.",
    "BOOKED IN SECONDS.": "ΚΛΕΙΣΜΕΝΟ ΣΕ ΔΕΥΤΕΡΟΛΕΠΤΑ.",
    "See real-time availability at clubs around you, compare prices, and lock your slot instantly. No phone calls, no waiting.":
      "Δες διαθεσιμότητα σε πραγματικό χρόνο στα clubs γύρω σου, σύγκρινε τιμές και κλείδωσε τη θέση σου αμέσως. Χωρίς τηλέφωνα, χωρίς αναμονή.",
    "Marousi · 1.4 km · Indoor": "Μαρούσι · 1.4 km · Κλειστό",
    "AVAILABLE TODAY": "ΔΙΑΘΕΣΙΜΟ ΣΗΜΕΡΑ",
    "/ 90 min": "/ 90'",
    "Book": "Κράτηση",
    "ONE TAP.": "ΕΝΑ ΑΓΓΙΓΜΑ.",
    "FULL SCORE.": "ΟΛΟ ΤΟ ΣΚΟΡ.",
    "Tap the team that won the point — Padlboard derives games, sets, serve and side, and tracks your heart rate live. Leave your phone in the bag.":
      "Πάτα την ομάδα που κέρδισε τον πόντο — το Padlboard βγάζει γκέιμ, σετ, σερβίς και πλευρά, και καταγράφει τους παλμούς σου ζωντανά. Άσε το κινητό στην τσάντα.",
    "Live heart rate": "Ζωντανοί παλμοί",
    "Haptic feedback": "Δόνηση σε κάθε πόντο",
    "Auto serve & side": "Αυτόματο σερβίς & πλευρά",
    "YOU": "ΕΣΥ",
    "RIVALS": "ΑΝΤΙΠΑΛΟΙ",
    "READY TO PLAY?": "ΩΡΑ ΓΙΑ ΠΑΙΧΝΙΔΙ;",
    "Get in the game": "Μπες στο παιχνίδι",
    "Games, coaches, courts and live scoring — the whole padel world in one app. Free to download, ready in seconds.":
      "Παιχνίδια, προπονητές, γήπεδα και ζωντανό σκορ — όλος ο κόσμος του padel σε ένα app. Δωρεάν, έτοιμο σε δευτερόλεπτα.",
    "Also on Apple Watch": "Και στο Apple Watch",
    "Requires iPhone · Apple Watch optional · No ads": "Απαιτεί iPhone · Προαιρετικό Apple Watch · Χωρίς διαφημίσεις",
    "FOR CLUBS & VENUES": "ΓΙΑ CLUBS & ΓΗΠΕΔΑ",
    "Own a padel court?": "Έχεις γήπεδο padel;",
    "Fill it with players.": "Γέμισέ το με παίκτες.",
    "List your courts, get discovered by thousands of nearby players, and turn quiet off-peak hours into booked, paid games.":
      "Καταχώρισε τα γήπεδά σου, εμφανίσου σε χιλιάδες κοντινούς παίκτες και μετάτρεψε τις ήσυχες ώρες σε κλεισμένα, πληρωμένα παιχνίδια.",
    "avg extra revenue / month": "μ.ό. επιπλέον έσοδα / μήνα",
    "List your court — free": "Καταχώρισε το γήπεδό σου — δωρεάν",
    "Games, coaches, courts and live scoring — the whole padel world in one app.":
      "Παιχνίδια, προπονητές, γήπεδα και ζωντανό σκορ — όλος ο κόσμος του padel σε ένα app.",
    "PRODUCT": "ΠΡΟΪΟΝ",
    "COMPANY": "ΕΤΑΙΡΕΙΑ",
    "About": "Σχετικά",
    "Careers": "Καριέρα",
    "Press": "Τύπος",
    "Contact": "Επικοινωνία",
    "LEGAL": "ΝΟΜΙΚΑ",
    "Privacy": "Απόρρητο",
    "Terms": "Όροι",
    "© 2026 Padlboard · Made in the EU": "© 2026 Padlboard · Φτιαγμένο στην ΕΕ"
  };

  // English for the (Greek-authored) mobile layout.
  var MOBILE_EN = {
    "Σκόραρε με ένα άγγιγμα από το Apple Watch ή το iPhone, βρες παρέα, γήπεδα και προπονητές — και δες πώς πραγματικά παίζεις.":
      "Score with one tap from your Apple Watch or iPhone, find people to play, courts and coaches — and see how you really play.",
    "Κατέβασέ το στο": "Download on the",
    "Κατέβασε το Padlboard — δωρεάν": "Get Padlboard — free",
    "Απόρρητο": "Privacy",
    "Όροι": "Terms",
    "Υποστήριξη": "Support"
  };

  var textNodes = null;
  function collect() {
    textNodes = [];
    var root = document.getElementById("d-landing");
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = raw.replace(/\s+/g, " ").trim();
      if (key && EL[key]) textNodes.push({ node: n, en: raw, el: EL[key] });
    }
  }

  function apply(lang) {
    if (!textNodes) collect();
    textNodes.forEach(function (t) { t.node.nodeValue = lang === "el" ? t.el : t.en; });
    document.querySelectorAll("#m-landing [data-i18n]").forEach(function (elm) {
      var greek = elm.getAttribute("data-el") || elm.textContent;
      if (!elm.getAttribute("data-el")) elm.setAttribute("data-el", greek);
      var en = MOBILE_EN[elm.getAttribute("data-el").trim()];
      if (en) elm.textContent = lang === "el" ? elm.getAttribute("data-el") : en;
    });
    var mh1 = document.querySelector("#m-landing h1");
    if (mh1) mh1.style.display = ""; // hero headline is EN brand copy either way
    document.documentElement.lang = lang;
    localStorage.setItem("padl_lang", lang);
    var sw = document.getElementById("lang-switch");
    if (sw) sw.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
  }

  function buildSwitcher() {
    var css = document.createElement("style");
    css.textContent =
      "#lang-switch{position:fixed;top:14px;right:14px;z-index:9999;display:flex;gap:2px;" +
      "background:rgba(8,4,32,.72);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.18);" +
      "border-radius:999px;padding:3px}" +
      "#lang-switch button{border:0;background:transparent;color:#cfc8ee;font:700 12px Inter,sans-serif;" +
      "padding:5px 11px;border-radius:999px;cursor:pointer}" +
      "#lang-switch button.on{background:#F5FF00;color:#080420}";
    document.head.appendChild(css);
    var box = document.createElement("div");
    box.id = "lang-switch";
    ["el", "en"].forEach(function (lang) {
      var b = document.createElement("button");
      b.textContent = lang.toUpperCase();
      b.dataset.lang = lang;
      b.addEventListener("click", function () { apply(lang); });
      box.appendChild(b);
    });
    document.body.appendChild(box);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSwitcher();
    var lang = new URLSearchParams(location.search).get("lang") ||
               localStorage.getItem("padl_lang") || "el";
    apply(lang === "en" ? "en" : "el");
  });
})();

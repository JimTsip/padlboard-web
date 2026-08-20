// Padlboard landing i18n: Greek by default, EN via the switcher.
// The desktop layout is the Pencil export (EN copy) — we translate its text
// nodes in place from this dictionary and can restore the originals, so the
// switcher works both ways without touching the exported markup.
(function () {
  var EL = {
    "Log in": "Σύνδεση",
    "Players": "Παίκτες",
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
  /**
   * Το HTML της σελίδας είναι ΕΛΛΗΝΙΚΟ: το markup μεταφράστηκε μια για πάντα,
   * ώστε ένας crawler που δεν τρέχει JavaScript να διαβάζει ελληνικά — η αγορά
   * είναι η Ελλάδα, και πριν από αυτό το raw HTML είχε 317 αγγλικές λέξεις
   * έναντι 22 ελληνικών.
   *
   * Γι' αυτό εδώ κοιτάμε ΚΑΙ τις δύο κατευθύνσεις: αν ο κόμβος είναι ελληνικός
   * τον γυρνάμε ανάποδα με το αντίστροφο λεξικό, αν είναι αγγλικός (παλιό
   * cache, μελλοντικό export από το Pencil) δουλεύει όπως πριν.
   */
  var EN_BY_EL = null;
  function reverse() {
    if (EN_BY_EL) return EN_BY_EL;
    EN_BY_EL = {};
    Object.keys(EL).forEach(function (en) { EN_BY_EL[EL[en]] = en; });
    return EN_BY_EL;
  }

  function collect() {
    textNodes = [];
    var root = document.getElementById("d-landing");
    if (!root) return;
    var back = reverse();
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = raw.replace(/\s+/g, " ").trim();
      if (!key) continue;
      if (EL[key]) textNodes.push({ node: n, en: raw, el: raw.replace(key, EL[key]) });
      else if (back[key]) textNodes.push({ node: n, en: raw.replace(key, back[key]), el: raw });
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
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
  }

  function makePill() {
    var box = document.createElement("div");
    box.className = "lang-switch";
    ["el", "en"].forEach(function (lang) {
      var b = document.createElement("button");
      b.textContent = lang.toUpperCase();
      b.dataset.lang = lang;
      b.addEventListener("click", function (e) { e.stopPropagation(); apply(lang); });
      box.appendChild(b);
    });
    return box;
  }

  function buildSwitcher() {
    var css = document.createElement("style");
    css.textContent =
      ".lang-switch{display:inline-flex;gap:2px;align-self:center;" +
      "background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);" +
      "border-radius:999px;padding:3px;margin-left:18px;flex:none}" +
      ".lang-switch button{border:0;background:transparent;color:#cfc8ee;font:700 12px Inter,sans-serif;" +
      "padding:5px 11px;border-radius:999px;cursor:pointer;line-height:1}" +
      ".lang-switch button.on{background:#F5FF00;color:#080420}" +
      "#m-landing .m-head{display:flex;align-items:center;justify-content:space-between}" +
      "#m-landing .lang-switch{margin-left:0}";
    document.head.appendChild(css);

    // Desktop: slot the pill into the header row (it lives inside the scaled
    // stage, so it scales with the rest of the nav).
    //
    // Μπαίνει ΠΡΙΝ τη «Σύνδεση», όχι πριν το «Κατέβασέ το»: αλλιώς ο διακόπτης
    // γλώσσας σφηνώνεται ανάμεσα στα δύο κουμπιά και τα χωρίζει. Η σειρά που
    // θέλουμε είναι EL/EN · Σύνδεση · Κατέβασέ το.
    var login = document.querySelector('#d-landing a[href="/login"]');
    var candidates = Array.prototype.slice.call(document.querySelectorAll("#d-landing div"));
    var download = candidates.find(function (d) {
      var t = (d.textContent || "").replace(/\s+/g, " ").trim();
      return (t === "Download" || t === "Κατέβασέ το") && d.querySelectorAll("div,span").length <= 2;
    });
    var anchorEl = login || download;
    if (anchorEl && anchorEl.parentElement) {
      anchorEl.parentElement.insertBefore(makePill(), anchorEl);
    } else {
      // Fallback: fixed top-right if the header structure ever changes.
      var fixedBox = makePill();
      fixedBox.style.cssText += "position:fixed;top:14px;right:14px;z-index:9999;background:rgba(8,4,32,.72)";
      document.body.appendChild(fixedBox);
    }

    // Mobile: right side of the header, opposite the logo.
    var mobileHead = document.querySelector("#m-landing .m-head");
    if (mobileHead) mobileHead.appendChild(makePill());
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSwitcher();
    var lang = new URLSearchParams(location.search).get("lang") ||
               localStorage.getItem("padl_lang") || "el";
    apply(lang === "en" ? "en" : "el");
  });
})();

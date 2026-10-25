/**
 * @license
 * Ayeshaeman — Website Developer Portfolio
 * Plain JavaScript Implementation (Zero framework dependencies, Netlify static hosting ready)
 */

/* ==========================================================================
   1. SITE CONFIGURATION (Configured with WhatsApp number 03188900639)
   ========================================================================== */
export const SITE_CONFIG = {
  /**
   * WHATSAPP NUMBER:
   * Configured with 03188900639 (International wa.me format: 923188900639)
   */
  whatsappNumber: "923188900639",
  displayPhoneNumber: "0318 8900639",
  internationalPhoneNumber: "+92 318 8900639",

  /**
   * INSTAGRAM URL:
   * Insert your full Instagram profile URL here.
   */
  instagramUrl: "https://instagram.com",

  /**
   * PROJECT LIVE DEMO URLS:
   * Active Netlify demos configured below:
   */
  projectDemos: {
    salon: "https://effulgent-genie-1e75a0.netlify.app",          // Luna Beauty Studio Live Demo
    business: "https://splendorous-brigadeiros-8cc316.netlify.app", // Mughal Hotel & Business Live Demo
    clinic: "",                                                    // Demo coming soon
    landing: ""                                                   // Demo coming soon
  }
};

/* ==========================================================================
   2. PORTFOLIO DATA (Detailed information for the interactive lightbox modal)
   ========================================================================== */
const PORTFOLIO_DATA = {
  salon: {
    id: "salon",
    title: "Beauty Salon Website",
    category: "Beauty & Salon Concept",
    image: "/images/portfolio-salon.jpg",
    demoUrl: SITE_CONFIG.projectDemos.salon,
    description:
      "An elegant salon website featuring beauty services, a gallery, responsive design and WhatsApp appointment requests. Built to showcase treatments, stylist profiles, and visual work while keeping mobile booking as effortless as a single tap.",
    features: [
      "Custom Treatment Menu with pricing tiers",
      "Direct 1-tap WhatsApp booking buttons with prefilled treatments",
      "Visual Before/After treatment portfolio gallery",
      "Location, opening hours and salon amenities breakdown",
      "Mobile-first responsive design for fast on-the-go browsing",
      "Zero app download or complex customer accounts required"
    ]
  },
  clinic: {
    id: "clinic",
    title: "Aesthetic Clinic Website",
    category: "Aesthetics & Dermatology Concept",
    image: "/images/portfolio-clinic.jpg",
    demoUrl: SITE_CONFIG.projectDemos.clinic,
    description:
      "A clean, professional website concept for a beauty or aesthetics business, with clear service information and contact options. Designed to foster patient trust, outline practitioner credentials, and streamline private consultation requests.",
    features: [
      "Medical aesthetic & skincare service categories",
      "Complimentary consultation enquiry pathways",
      "Practitioner credentials & medical background showcase",
      "Transparent treatment process & safety standards",
      "Clean neutral aesthetic with gold accents for a clinical luxury feel",
      "Fully responsive on smartphones, tablets and desktop screens"
    ]
  },
  business: {
    id: "business",
    title: "Business Website",
    category: "Corporate & Hospitality Concept",
    image: "/images/portfolio-business.jpg",
    demoUrl: SITE_CONFIG.projectDemos.business,
    description:
      "A modern website concept designed to establish credibility and make it easier for customers to enquire. Emphasizes value propositions, service clarity, and straightforward enquiry pathways for commercial and hospitality clients.",
    features: [
      "Structured value proposition & core offerings grid",
      "Direct WhatsApp reservation & quotation request actions",
      "Company background, room amenities and team overview",
      "Fast page load times with semantic lightweight code",
      "Accessible colour contrast and legible typography",
      "Deployable directly to high-speed global static hosting"
    ]
  },
  landing: {
    id: "landing",
    title: "Landing Page",
    category: "Campaign & High-Conversion Concept",
    image: "/images/portfolio-landing.jpg",
    demoUrl: SITE_CONFIG.projectDemos.landing,
    description:
      "A focused landing-page concept with clear messaging, strong visual hierarchy and prominent calls to action. Structured to present a single primary offer clearly without distractions, maximizing enquiry and sign-up conversions.",
    features: [
      "Single-minded conversion focus with minimal exit links",
      "High-clarity value headline and supporting benefits",
      "Prominent primary and secondary action buttons",
      "Interactive WhatsApp enquiry trigger for instant questions",
      "Lightweight assets for rapid mobile loading",
      "Tested for seamless responsiveness across all screen sizes"
    ]
  }
};

/* ==========================================================================
   3. INITIALIZATION & DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initDynamicYear();
  initContactLinks();
  initProjectDemos();
  initMobileMenu();
  initPortfolioFilters();
  initPortfolioModal();
  initProjectPlanner();
  initServiceCardButtons();
  initFaqAccordion();
  initWhatsAppBot();
  highlightActiveNavPage();
});

/* ==========================================================================
   4. DYNAMIC YEAR
   ========================================================================== */
function initDynamicYear() {
  const yearEls = document.querySelectorAll("#current-year");
  yearEls.forEach((el) => {
    el.textContent = new Date().getFullYear().toString();
  });
}

/* ==========================================================================
   5. CONTACT & SOCIAL LINKS (WhatsApp Number 03188900639)
   ========================================================================== */
function initContactLinks() {
  const defaultMessage =
    "Hi Ayeshaeman, I'm interested in a website for my business. Could we discuss my project?";

  // WhatsApp link configuration across all pages
  const whatsappBtns = document.querySelectorAll(
    "#whatsapp-direct-btn, #footer-whatsapp-link, .btn-talk-whatsapp"
  );

  whatsappBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleWhatsAppClick(defaultMessage);
    });
  });

  // Instagram link configuration
  const instaBtns = document.querySelectorAll(
    "#instagram-direct-btn, #footer-instagram-link"
  );

  instaBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (SITE_CONFIG.instagramUrl.includes("REPLACE_WITH_YOUR_INSTAGRAM_URL")) {
        e.preventDefault();
        window.open("https://instagram.com", "_blank", "noopener,noreferrer");
      } else {
        btn.setAttribute("href", SITE_CONFIG.instagramUrl);
      }
    });
  });
}

/**
 * Handles launching WhatsApp safely with prefilled message to 03188900639 (923188900639)
 */
export function handleWhatsAppClick(messageText) {
  const encodedText = encodeURIComponent(messageText);
  let rawNumber = (SITE_CONFIG.whatsappNumber || "923188900639").replace(/[^0-9]/g, "");

  // If Pakistani format starting with 03 (11 digits e.g. 03188900639), convert to 923188900639
  if (rawNumber.startsWith("03") && rawNumber.length === 11) {
    rawNumber = "92" + rawNumber.slice(1);
  } else if (!rawNumber.startsWith("92") && rawNumber.startsWith("3") && rawNumber.length === 10) {
    rawNumber = "92" + rawNumber;
  }

  const whatsappUrl = `https://wa.me/${rawNumber}?text=${encodedText}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/* ==========================================================================
   6. PORTFOLIO DEMO LINKS CONFIGURATION
   ========================================================================== */
function initProjectDemos() {
  const holders = document.querySelectorAll(".demo-link-holder");

  holders.forEach((holder) => {
    const projectId = holder.getAttribute("data-project");
    const demoUrl = SITE_CONFIG.projectDemos[projectId];

    if (demoUrl && demoUrl.trim() !== "") {
      holder.innerHTML = `
        <a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-live-demo">
          <span>View Live Demo</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5" aria-hidden="true" style="width:14px;height:14px;">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      `;
    } else {
      holder.innerHTML = `<span class="demo-soon-pill">Demo coming soon</span>`;
    }
  });
}

/* ==========================================================================
   7. ACCESSIBLE MOBILE MENU WITH TOUCH OPTIMIZATION
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const links = drawer ? drawer.querySelectorAll("a") : [];

  if (!btn || !drawer) return;

  const toggleMenu = (forceState) => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    const newState = forceState !== undefined ? forceState : !isExpanded;

    btn.setAttribute("aria-expanded", String(newState));
    drawer.setAttribute("aria-hidden", String(!newState));

    if (newState) {
      drawer.classList.add("open");
    } else {
      drawer.classList.remove("open");
    }
  };

  btn.addEventListener("click", () => toggleMenu());

  links.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      toggleMenu(false);
      btn.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 860 && drawer.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   8. PORTFOLIO FILTER TABS
   ========================================================================== */
function initPortfolioFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll(".project-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
}

/* ==========================================================================
   9. PORTFOLIO LIGHTBOX / DETAILS MODAL
   ========================================================================== */
function initPortfolioModal() {
  const modal = document.getElementById("project-modal");
  const backdrop = document.getElementById("modal-backdrop");
  const closeBtn = document.getElementById("btn-close-modal");
  const contentEl = document.getElementById("modal-content");
  const triggerBtns = document.querySelectorAll(".btn-preview-modal");

  if (!modal || !contentEl) return;

  const openModal = (projectId) => {
    const data = PORTFOLIO_DATA[projectId];
    if (!data) return;

    const demoUrl = SITE_CONFIG.projectDemos[projectId];
    const hasLiveDemo = demoUrl && demoUrl.trim() !== "";

    contentEl.innerHTML = `
      <div class="modal-img-wrap">
        <img src="${data.image}" alt="${data.title} preview" class="modal-img" />
      </div>
      <div class="modal-header-meta">
        <span>${data.category}</span>
        <span>·</span>
        <span>Verified Design Concept</span>
      </div>
      <h3 class="modal-title" id="modal-project-title">${data.title}</h3>
      <p class="modal-desc">${data.description}</p>
      
      <div class="modal-features-list">
        ${data.features
          .map(
            (feat) => `
          <div class="modal-feat-item">
            <span class="modal-feat-bullet">/</span>
            <span>${feat}</span>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="modal-actions">
        ${
          hasLiveDemo
            ? `<a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-live-demo">
                <span>View Live Demo</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
               </a>`
            : `<span class="demo-soon-pill">Demo coming soon</span>`
        }
        <button type="button" class="btn-whatsapp-solid modal-discuss-btn" data-project="${data.title}">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z"/>
          </svg>
          <span>Discuss on WhatsApp</span>
        </button>
      </div>
    `;

    const discussBtn = contentEl.querySelector(".modal-discuss-btn");
    if (discussBtn) {
      discussBtn.addEventListener("click", () => {
        closeModal();
        const msg = `Hi Ayeshaeman, I saw your "${data.title}" concept in your portfolio and would like to discuss building a similar website for my business.`;
        handleWhatsAppClick(msg);
      });
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  triggerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      openModal(modalId);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  const similarBtns = document.querySelectorAll(".btn-similar");
  similarBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projName = btn.getAttribute("data-similar-project") || "";
      const msg = `Hi Ayeshaeman, I'm interested in building a website similar to your "${projName}" portfolio concept. Could we discuss this?`;
      handleWhatsAppClick(msg);
    });
  });
}

/* ==========================================================================
   10. INTERACTIVE PROJECT PLANNER (WhatsApp to 03188900639 & Clipboard)
   ========================================================================== */
function initProjectPlanner() {
  const serviceSelect = document.getElementById("planner-service");
  const bizInput = document.getElementById("planner-biz");
  const timelineSelect = document.getElementById("planner-timeline");
  const notesInput = document.getElementById("planner-notes");
  const previewEl = document.getElementById("live-message-preview");

  const btnSendWhatsApp = document.getElementById("btn-send-planner-whatsapp");
  const btnCopy = document.getElementById("btn-copy-planner-text");

  if (!serviceSelect || !previewEl) return;

  const updatePreview = () => {
    const service = serviceSelect.value || "a website";
    const biz = bizInput.value.trim();
    const timeline = timelineSelect.value;
    const notes = notesInput.value.trim();

    let text = `Hi Ayeshaeman, I'm interested in ${service}`;
    if (biz) {
      text += ` for my business "${biz}"`;
    } else {
      text += ` for my business`;
    }
    text += `. Target timeline: ${timeline}.`;

    if (notes) {
      text += ` Specific notes: ${notes}.`;
    } else {
      text += ` Could we discuss my project?`;
    }

    previewEl.textContent = text;
    return text;
  };

  [serviceSelect, bizInput, timelineSelect, notesInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", updatePreview);
      input.addEventListener("change", updatePreview);
    }
  });

  updatePreview();

  if (btnSendWhatsApp) {
    btnSendWhatsApp.addEventListener("click", () => {
      const msg = updatePreview();
      handleWhatsAppClick(msg);
    });
  }

  if (btnCopy) {
    btnCopy.addEventListener("click", async () => {
      const msg = updatePreview();
      try {
        await navigator.clipboard.writeText(msg);
        showToast("Enquiry message copied to clipboard!");
      } catch (err) {
        showToast("Message highlighted — copy with Ctrl+C");
      }
    });
  }
}

/* ==========================================================================
   11. SERVICE CARD BUTTONS ("Discuss on WhatsApp")
   ========================================================================== */
function initServiceCardButtons() {
  const serviceBtns = document.querySelectorAll(".btn-service-action");

  serviceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetService = btn.getAttribute("data-service-target");
      const msg = `Hi Ayeshaeman, I would like to discuss your "${targetService}" service for my business.`;
      handleWhatsAppClick(msg);
    });
  });
}

/* ==========================================================================
   12. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll(".faq-question-btn");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      faqButtons.forEach((otherBtn) => {
        const otherItem = otherBtn.closest(".faq-item");
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      if (isExpanded) {
        item.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ==========================================================================
   13. FLOATING WHATSAPP BOT WIDGET (Bottom Right)
   ========================================================================== */
function initWhatsAppBot() {
  const botBtn = document.getElementById("whatsapp-bot-btn");
  const chatBox = document.getElementById("whatsapp-chat-box");
  const closeChatBtn = document.getElementById("btn-close-chat");
  const quickActions = document.querySelectorAll(".chat-action-btn");
  const chatInput = document.getElementById("chat-bot-input");
  const sendChatBtn = document.getElementById("btn-send-chat");

  if (!botBtn || !chatBox) return;

  const toggleChat = (forceState) => {
    const isOpen = chatBox.classList.contains("open");
    const newState = forceState !== undefined ? forceState : !isOpen;

    if (newState) {
      chatBox.classList.add("open");
      botBtn.setAttribute("aria-expanded", "true");
      if (chatInput) chatInput.focus();
    } else {
      chatBox.classList.remove("open");
      botBtn.setAttribute("aria-expanded", "false");
    }
  };

  botBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleChat();
  });

  if (closeChatBtn) {
    closeChatBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleChat(false);
    });
  }

  document.addEventListener("click", (e) => {
    if (chatBox.classList.contains("open") && !chatBox.contains(e.target) && e.target !== botBtn) {
      toggleChat(false);
    }
  });

  quickActions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const promptText = btn.getAttribute("data-prompt");
      toggleChat(false);
      handleWhatsAppClick(promptText);
    });
  });

  const sendCustomMessage = () => {
    const text = chatInput ? chatInput.value.trim() : "";
    if (text) {
      toggleChat(false);
      if (chatInput) chatInput.value = "";
      handleWhatsAppClick(text);
    }
  };

  if (sendChatBtn) {
    sendChatBtn.addEventListener("click", sendCustomMessage);
  }

  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendCustomMessage();
      }
    });
  }
}

/* ==========================================================================
   14. ACTIVE NAVIGATION PAGE HIGHLIGHTER
   ========================================================================== */
function highlightActiveNavPage() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll(".nav-desktop .nav-link, .mobile-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").toLowerCase();
    
    if (
      (currentPath.endsWith(href) && href !== "#" && href !== "/") ||
      (currentPath.endsWith("/") && (href === "index.html" || href === "/")) ||
      (currentPath.includes("services.html") && href.includes("services.html")) ||
      (currentPath.includes("portfolio.html") && href.includes("portfolio.html")) ||
      (currentPath.includes("process.html") && href.includes("process.html")) ||
      (currentPath.includes("about.html") && href.includes("about.html")) ||
      (currentPath.includes("contact.html") && href.includes("contact.html"))
    ) {
      link.classList.add("active");
    }
  });
}

/* ==========================================================================
   15. HELPER UTILITIES
   ========================================================================== */
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

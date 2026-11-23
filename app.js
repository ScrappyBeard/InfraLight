/* ==========================================================================
   Infralight — Interactive Experience Logic (infralight.co.uk)
   ========================================================================== */

(() => {
  "use strict";

  const PRACTICES = {
    "fractional-cio": {
      index: "Practice 01 / 05",
      cadence: "Retained 1–3 days/wk · Interim · Board Seat",
      title: "Fractional CIO & Technology Directorships",
      topic: "Fractional CIO & Directorships",
      summary:
        "Senior board-level technology leadership for organisations scaling rapidly, navigating transformation, or preparing for investment—bringing executive accountability without the delay or overhead of a permanent hire.",
      deliverables: [
        "Multi-year IT, cloud & AI strategy aligned to commercial objectives",
        "Board reporting, risk registers, cyber governance & regulatory readiness",
        "Target operating model design, team hiring & engineering leadership coaching",
        "Strategic vendor selection, contract renegotiation & supplier consolidation",
        "Buy-side and sell-side technical due diligence for M&A and PE boards"
      ],
      outcomes: [
        {
          heading: "Executive Clarity",
          body: "Translating technical risk and cloud spend into clear boardroom decisions."
        },
        {
          heading: "Delivery Momentum",
          body: "Unblocking stalled programmes and establishing clear accountability."
        }
      ],
      tags: ["Board Advisory", "IT Operating Models", "M&A Due Diligence", "Vendor Governance"]
    },
    "multi-cloud": {
      index: "Practice 02 / 05",
      cadence: "Azure Specialist · GCP Delivery",
      title: "Azure & GCP Infrastructure Architecture",
      topic: "Azure & GCP Infrastructure Architecture",
      summary:
        "Resilient, secure-by-default enterprise foundations centred on Microsoft Azure—supported by Google Cloud Platform (GCP) capability—engineered as repeatable code to accelerate delivery while hardening availability and security.",
      deliverables: [
        "Azure Cloud Adoption Framework (CAF) Enterprise-Scale Landing Zones, Management Groups & Policy guardrails",
        "Infrastructure as Code (Terraform, Bicep, OpenTofu, Ansible) & declarative GitOps automation",
        "Kubernetes platform engineering (Azure AKS & Google GKE), SRE practices & observability",
        "Entra ID Zero-Trust identity, Virtual WAN / Private Link networking, Azure Arc hybrid & multi-region HA/DR",
        "Google Cloud (GCP) secondary landing zones, Shared VPC, Cloud Run & cross-cloud workload integration"
      ],
      outcomes: [
        {
          heading: "Azure-Grade Foundations",
          body: "Eliminating configuration drift with golden Terraform/Bicep modules and policy-as-code."
        },
        {
          heading: "Operational Resilience",
          body: "Engineered zone-redundant HA/DR, unified telemetry, and markedly lower MTTR."
        }
      ],
      tags: ["Microsoft Azure", "Google Cloud (GCP)", "Terraform & Bicep", "AKS / GKE · Zero Trust"]
    },
    "ai-platforms": {
      index: "Practice 03 / 05",
      cadence: "Platform Build · AI Readiness & Governance",
      title: "AI Platform Development",
      topic: "AI Platform Development",
      summary:
        "Production-grade enterprise AI infrastructure engineered on Microsoft Azure and Google Cloud for security, UK/EU data residency, and measurable ROI—bridging the gap between fragile prototypes and dependable business-critical AI services.",
      deliverables: [
        "Private enterprise AI platforms built on Azure AI Foundry, Azure OpenAI & GCP Vertex AI",
        "Retrieval-Augmented Generation (RAG) pipelines with Azure AI Search, vector indexing & data grounding",
        "LLMOps / MLOps engineering, model evaluation harnesses & automated deployment pipelines",
        "Data sovereignty, Microsoft Purview governance, PII redaction, RBAC guardrails & audit logging",
        "Inference throughput engineering, PTU vs. Pay-Go capacity sizing & token FinOps telemetry"
      ],
      outcomes: [
        {
          heading: "Safe Production Adoption",
          body: "Enterprise data stays within private VNet/VPC boundaries with verifiable guardrails."
        },
        {
          heading: "Controlled AI Economics",
          body: "Right-sized model routing and live token cost visibility from day one."
        }
      ],
      tags: ["Azure AI Foundry", "Azure OpenAI", "GCP Vertex AI", "Enterprise RAG & LLMOps"]
    },
    assessments: {
      index: "Practice 04 / 05",
      cadence: "2–6 Week Fixed-Scope Diagnostic & Design",
      title: "Architecture Assessments & Designs",
      topic: "Architecture Assessments & Designs",
      summary:
        "Independent, unvarnished illumination of technical risk, scalability ceilings, security gaps, and architectural debt—paired with crisp target-state blueprints your engineering teams can execute immediately.",
      deliverables: [
        "Comprehensive Well-Architected Reviews across Microsoft Azure, Google Cloud (GCP) & hybrid estates",
        "High-Level Designs (HLD), Low-Level Designs (LLD) & Architecture Decision Records",
        "Single-point-of-failure, resilience, security posture & technical debt diagnostics",
        "Pre-investment, pre-migration & PE/VC technical due diligence assessments",
        "Prioritised 30 / 60 / 90-day remediation roadmap with commercial costings"
      ],
      outcomes: [
        {
          heading: "Objective Risk Visibility",
          body: "Board-ready clarity on hidden fragility before it causes downtime or overruns."
        },
        {
          heading: "Actionable Blueprints",
          body: "Build-ready designs rather than abstract slide decks that sit on a shelf."
        }
      ],
      tags: ["Well-Architected Reviews", "HLD / LLD Blueprints", "ADRs", "Technical Due Diligence"]
    },
    finops: {
      index: "Practice 05 / 05",
      cadence: "Diagnostic Sprint · Ongoing FinOps Governance",
      title: "FinOps & Cloud Economics",
      topic: "FinOps & Cloud Economics",
      summary:
        "Transforming Azure, GCP and AI spend from an unpredictable monthly surprise into a transparent, governed unit-economic lever shared seamlessly between finance, leadership, and engineering.",
      deliverables: [
        "Azure & GCP cost allocation, tagging taxonomy, showback & chargeback models",
        "Workload rightsizing, idle-capacity automation, Azure Hybrid Benefit & storage/egress optimisation",
        "Commitment strategy: Azure Reservations, Savings Plans, Enterprise Agreements & GCP CUDs",
        "Executive FinOps dashboards, real-time anomaly alerts & budget guardrails",
        "Engineering enablement, cost-aware CI/CD checks & AI workload unit costing"
      ],
      outcomes: [
        {
          heading: "Immediate Run-Rate Relief",
          body: "Structured savings without degrading application resilience or velocity."
        },
        {
          heading: "Durable Cost Culture",
          body: "Clear unit economics connecting infrastructure spend directly to margin."
        }
      ],
      tags: ["Azure Reservations & EA", "Showback & Chargeback", "Unit Economics", "GCP CUDs"]
    }
  };

  const CLOUD_BLUEPRINTS = {
    azure: {
      title: "Microsoft Azure Enterprise Foundations",
      code: "CAF · ENTRA ID · AKS · ARC",
      rows: [
        [
          "Landing Zone",
          "Cloud Adoption Framework management groups, Azure Policy guardrails, Hub-and-Spoke / Virtual WAN, Private Link & Entra ID Zero Trust."
        ],
        [
          "Platform & IaC",
          "Modular Terraform & Bicep pipelines, hardened AKS clusters, Azure Container Apps, Azure DevOps / GitHub Actions & GitOps delivery."
        ],
        [
          "Hybrid & Security",
          "Azure Arc hybrid estate control, ExpressRoute connectivity, Defender for Cloud, Microsoft Sentinel & Key Vault secrets governance."
        ],
        [
          "FinOps & Resilience",
          "Azure Hybrid Benefit, Reservations & Savings Plans optimisation, availability-zone HA/DR and Enterprise Agreement cost modelling."
        ]
      ]
    },
    "azure-ai": {
      title: "Microsoft Azure AI & Data Platform",
      code: "AI FOUNDRY · OPENAI · FABRIC",
      rows: [
        [
          "Private AI Plane",
          "Azure AI Foundry & Azure OpenAI Service deployed behind Private Endpoints, API Management token gateways & UK South/West residency."
        ],
        [
          "Enterprise RAG",
          "Azure AI Search hybrid/vector grounding, Document Intelligence ingestion, SharePoint & Microsoft 365 permission-trimmed retrieval."
        ],
        [
          "Data & Governance",
          "Microsoft Fabric lakehouse pipelines, Azure Databricks, Microsoft Purview lineage, sensitivity labels & automated PII redaction."
        ],
        [
          "AI FinOps & Ops",
          "Provisioned Throughput Units (PTU) vs. Pay-Go capacity modelling, evaluation harnesses, prompt-shield guardrails & per-team chargeback."
        ]
      ]
    },
    gcp: {
      title: "Google Cloud Platform (Secondary Cloud)",
      code: "ORG POLICY · GKE · VERTEX AI",
      rows: [
        [
          "Landing Zone",
          "GCP Resource Hierarchy, Organization Policies, Shared VPC architecture, Cloud Armor, VPC Service Controls & Cloud IAM federation with Entra ID."
        ],
        [
          "Platform & IaC",
          "Terraform Cloud Foundation Fabric, GKE Autopilot/Standard platform engineering, Cloud Run & Cloud Build / Argo CD pipelines."
        ],
        [
          "AI & Data Plane",
          "Vertex AI model garden & private pipelines, BigQuery analytics warehouse, vector search & grounded enterprise agent workflows."
        ],
        [
          "FinOps & Resilience",
          "BigQuery billing exports, Committed Use Discounts (CUDs), Spot/Preemptible workload shaping and regional high availability."
        ]
      ]
    },
    ai: {
      title: "Cross-Cloud AI Governance & Guardrails",
      code: "RAG · LLMOPS · COMPLIANCE",
      rows: [
        [
          "Private Model Access",
          "Zero-data-retention API gateways, private VNet/VPC endpoints, and multi-model routing across Azure AI Foundry, GCP Vertex AI & open-weight models."
        ],
        [
          "Enterprise Grounding",
          "Document ingestion pipelines, permission-aware RAG retrieval, semantic chunking and citation verification tied to corporate identity."
        ],
        [
          "Safety & Evaluation",
          "Automated prompt/output evaluation suites, PII redaction, prompt-injection filters, and full audit logging for UK/EU compliance."
        ],
        [
          "AI FinOps Control",
          "Per-team token attribution, semantic caching, tiered model routing (frontier vs. compact models) and budget circuit-breakers."
        ]
      ]
    }
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatGBP(amount) {
    if (amount >= 1000000) {
      return `£${(amount / 1000000).toFixed(2).replace(/\.00$/, "")}m`;
    }
    if (amount >= 1000) {
      return `£${Math.round(amount / 1000).toLocaleString("en-GB")}k`;
    }
    return `£${Math.round(amount).toLocaleString("en-GB")}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    /* 1. Sticky header scroll state */
    const header = document.getElementById("siteHeader");
    if (header) {
      const syncHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
      };
      syncHeader();
      window.addEventListener("scroll", syncHeader, { passive: true });
    }

    /* 2. Mobile Drawer Navigation */
    const navToggle = document.getElementById("navToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");

    const closeDrawer = () => {
      if (!navToggle || !mobileDrawer) return;
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      mobileDrawer.classList.remove("is-open");
      mobileDrawer.hidden = true;
    };

    if (navToggle && mobileDrawer) {
      navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        if (isOpen) {
          closeDrawer();
        } else {
          navToggle.setAttribute("aria-expanded", "true");
          navToggle.setAttribute("aria-label", "Close menu");
          mobileDrawer.hidden = false;
          mobileDrawer.classList.add("is-open");
        }
      });

      mobileDrawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeDrawer);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !mobileDrawer.hidden) {
          closeDrawer();
          navToggle.focus();
        }
      });
    }

    /* 3. Active Section Highlighting in Primary Nav */
    const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
    const observedSections = navLinks
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if ("IntersectionObserver" in window && observedSections.length) {
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = `#${entry.target.id}`;
              navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === id);
              });
            }
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
      );
      observedSections.forEach((sec) => navObserver.observe(sec));
    }

    /* 4. Interactive Five-Practice Explorer */
    const practiceTabs = Array.from(document.querySelectorAll(".practice-tab"));
    const practiceDossier = document.getElementById("practiceDossier");
    const dossierIndex = document.getElementById("dossierIndex");
    const dossierCadence = document.getElementById("dossierCadence");
    const dossierTitle = document.getElementById("dossierTitle");
    const dossierSummary = document.getElementById("dossierSummary");
    const dossierDeliverables = document.getElementById("dossierDeliverables");
    const dossierOutcomes = document.getElementById("dossierOutcomes");
    const dossierTags = document.getElementById("dossierTags");
    const dossierEnquireBtn = document.getElementById("dossierEnquireBtn");

    function selectPractice(key, animate = true) {
      const data = PRACTICES[key];
      if (!data || !practiceDossier) return;

      practiceTabs.forEach((tab) => {
        const active = tab.dataset.practice === key;
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.tabIndex = active ? 0 : -1;
      });

      practiceDossier.setAttribute("aria-labelledby", `practiceTab-${key}`);

      const applyContent = () => {
        if (dossierIndex) dossierIndex.textContent = data.index;
        if (dossierCadence) dossierCadence.textContent = data.cadence;
        if (dossierTitle) dossierTitle.textContent = data.title;
        if (dossierSummary) dossierSummary.textContent = data.summary;
        if (dossierDeliverables) {
          dossierDeliverables.innerHTML = data.deliverables
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("");
        }
        if (dossierOutcomes) {
          dossierOutcomes.innerHTML = data.outcomes
            .map(
              (o) =>
                `<div class="dossier-outcome-item"><strong>${escapeHtml(o.heading)}</strong>${escapeHtml(o.body)}</div>`
            )
            .join("");
        }
        if (dossierTags) {
          dossierTags.innerHTML = data.tags
            .map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`)
            .join("");
        }
        if (dossierEnquireBtn) {
          dossierEnquireBtn.dataset.topic = data.topic;
        }
      };

      if (animate) {
        practiceDossier.classList.add("is-switching");
        window.setTimeout(() => {
          applyContent();
          practiceDossier.classList.remove("is-switching");
        }, 120);
      } else {
        applyContent();
      }
    }

    practiceTabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => selectPractice(tab.dataset.practice));
      tab.addEventListener("keydown", (e) => {
        let nextIdx = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          nextIdx = (idx + 1) % practiceTabs.length;
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          nextIdx = (idx - 1 + practiceTabs.length) % practiceTabs.length;
        }
        if (nextIdx !== null) {
          e.preventDefault();
          practiceTabs[nextIdx].focus();
          selectPractice(practiceTabs[nextIdx].dataset.practice);
        }
      });
    });

    /* Jump-to-practice buttons from Hero bar & Footer */
    document.querySelectorAll("[data-jump-practice]").forEach((el) => {
      el.addEventListener("click", (e) => {
        const key = el.dataset.jumpPractice;
        if (!PRACTICES[key]) return;
        e.preventDefault();
        selectPractice(key, false);
        const section = document.getElementById("practices");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    /* Dossier Enquire CTA pre-fills Contact Topic */
    const enquiryTopic = document.getElementById("enquiryTopic");
    const enquiryName = document.getElementById("enquiryName");
    const enquiryMessage = document.getElementById("enquiryMessage");

    if (dossierEnquireBtn) {
      dossierEnquireBtn.addEventListener("click", () => {
        const topic = dossierEnquireBtn.dataset.topic;
        if (enquiryTopic && topic) {
          enquiryTopic.value = topic;
        }
        const contact = document.getElementById("contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "smooth", block: "start" });
          window.setTimeout(() => enquiryName && enquiryName.focus(), 550);
        }
      });
    }

    /* 5. Multi-Cloud & AI Technical Blueprint Switcher */
    const cloudTabs = Array.from(document.querySelectorAll(".cloud-tab"));
    const cloudBlueprint = document.getElementById("cloudBlueprint");
    const bpTitle = document.getElementById("bpTitle");
    const bpCode = document.getElementById("bpCode");
    const bpRows = document.getElementById("bpRows");

    function selectCloud(key) {
      const bp = CLOUD_BLUEPRINTS[key];
      if (!bp || !cloudBlueprint) return;

      cloudTabs.forEach((tab) => {
        const active = tab.dataset.cloud === key;
        tab.setAttribute("aria-selected", active ? "true" : "false");
      });

      cloudBlueprint.setAttribute("aria-labelledby", `cloudTab-${key}`);
      if (bpTitle) bpTitle.textContent = bp.title;
      if (bpCode) bpCode.textContent = bp.code;
      if (bpRows) {
        bpRows.innerHTML = bp.rows
          .map(
            ([label, value]) =>
              `<div class="cloud-bp-row"><span class="cloud-bp-label">${escapeHtml(label)}</span><span class="cloud-bp-value">${escapeHtml(value)}</span></div>`
          )
          .join("");
      }
    }

    cloudTabs.forEach((tab) => {
      tab.addEventListener("click", () => selectCloud(tab.dataset.cloud));
    });

    /* 6. Interactive FinOps & Architecture Opportunity Modeller */
    const spendSlider = document.getElementById("spendSlider");
    const spendReadout = document.getElementById("spendReadout");
    const footprintBtns = Array.from(document.querySelectorAll("#footprintGroup .seg-btn"));
    const maturityBtns = Array.from(document.querySelectorAll("#maturityGroup .seg-btn"));
    const priorityBoxes = Array.from(document.querySelectorAll("#priorityChecks input[type='checkbox']"));

    const savingsRangeEl = document.getElementById("savingsRange");
    const savingsCaptionEl = document.getElementById("savingsCaption");
    const barRightsize = document.getElementById("barRightsize");
    const barRightsizeVal = document.getElementById("barRightsizeVal");
    const barCommit = document.getElementById("barCommit");
    const barCommitVal = document.getElementById("barCommitVal");
    const barArch = document.getElementById("barArch");
    const barArchVal = document.getElementById("barArchVal");
    const recTitle = document.getElementById("recTitle");
    const recNote = document.getElementById("recNote");
    const modellerCarryBtn = document.getElementById("modellerCarryBtn");

    const modellerState = {
      monthlyK: 75,
      footprint: "single",
      maturity: "low"
    };

    let latestModellerSummary = "";

    function recalcModeller() {
      if (!spendSlider) return;
      const monthly = modellerState.monthlyK * 1000;
      const annual = monthly * 12;

      const spendLabel =
        modellerState.monthlyK >= 500
          ? "£500,000+ / mo"
          : `£${monthly.toLocaleString("en-GB")} / mo`;

      if (spendReadout) spendReadout.textContent = spendLabel;
      spendSlider.setAttribute("aria-valuetext", spendLabel);

      // Conservative benchmark multipliers grounded in real enterprise FinOps ranges
      const maturityRates = {
        low: { low: 0.22, high: 0.32, rightsize: 11, commit: 10, arch: 8 },
        mid: { low: 0.14, high: 0.23, rightsize: 7, commit: 7, arch: 5 },
        high: { low: 0.08, high: 0.15, rightsize: 4, commit: 5, arch: 3 }
      };

      const footprintLift = {
        single: 0.0,
        multi: 0.03,
        hybrid: 0.04
      };

      const base = maturityRates[modellerState.maturity] || maturityRates.low;
      const lift = footprintLift[modellerState.footprint] || 0;

      const lowPct = Math.min(0.36, base.low + lift * 0.65);
      const highPct = Math.min(0.42, base.high + lift);

      const lowSavings = annual * lowPct;
      const highSavings = annual * highPct;

      const lowPctInt = Math.round(lowPct * 100);
      const highPctInt = Math.round(highPct * 100);

      if (savingsRangeEl) {
        savingsRangeEl.textContent = `${formatGBP(lowSavings)} – ${formatGBP(highSavings)}`;
      }
      if (savingsCaptionEl) {
        savingsCaptionEl.textContent = `Estimated ${lowPctInt}%–${highPctInt}% run-rate optimisation on ${formatGBP(annual)} annual spend across rightsizing, commitments, and architecture simplification.`;
      }

      const rPct = base.rightsize + (modellerState.footprint !== "single" ? 1 : 0);
      const cPct = base.commit + (modellerState.monthlyK >= 100 ? 2 : 0);
      const aPct = base.arch + (modellerState.footprint === "hybrid" ? 2 : modellerState.footprint === "multi" ? 1 : 0);

      if (barRightsize) barRightsize.style.width = `${Math.min(100, rPct * 4.5)}%`;
      if (barRightsizeVal) barRightsizeVal.textContent = `~${rPct}%`;
      if (barCommit) barCommit.style.width = `${Math.min(100, cPct * 4.5)}%`;
      if (barCommitVal) barCommitVal.textContent = `~${cPct}%`;
      if (barArch) barArch.style.width = `${Math.min(100, aPct * 4.5)}%`;
      if (barArchVal) barArchVal.textContent = `~${aPct}%`;

      const checkedPriorities = priorityBoxes.filter((b) => b.checked).map((b) => b.value);
      const wantsCIO = checkedPriorities.some((v) => v.includes("Fractional CIO"));
      const wantsAI = checkedPriorities.some((v) => v.includes("AI platform"));
      const wantsAssess = checkedPriorities.some((v) => v.includes("Architecture assessment"));

      let title = "4-Week Architecture & FinOps Diagnostic";
      let note =
        "Rapid Azure & cloud audit delivering a board-ready savings business case, quick-win execution plan, and target landing-zone governance blueprint.";

      if (wantsCIO && wantsAI) {
        title = "Retained Fractional CIO + Azure AI & Cloud Governance Programme";
        note =
          "Executive boardroom oversight paired with a governed enterprise AI platform architecture and continuous Azure / GCP FinOps accountability.";
      } else if (wantsCIO) {
        title = "Fractional CIO Retainer + 30-Day Estate Baseline";
        note =
          "Immediate board-level technology directorship kicking off with an objective architecture, resilience, and cloud-spend baseline.";
      } else if (wantsAI) {
        title = "Enterprise AI Platform Blueprint & FinOps Guardrails";
        note =
          "Private, compliant RAG / model-serving architecture on Azure AI Foundry or GCP Vertex AI paired with token/PTU cost telemetry and landing-zone security.";
      } else if (!wantsAssess && modellerState.maturity !== "low") {
        title = "Targeted FinOps Commitment & Unit-Economics Sprint";
        note =
          "Focused Azure Reservations, Savings Plans, Hybrid Benefit & GCP CUDs strategy, chargeback allocation, and automated rightsizing guardrails.";
      } else if (modellerState.monthlyK >= 200) {
        title = "6-Week Azure Enterprise Architecture, EA & FinOps Transformation";
        note =
          "Deep architectural review, Microsoft Enterprise Agreement / commitment modelling, and multi-subscription governance designed for high-spend estates.";
      }

      if (recTitle) recTitle.textContent = title;
      if (recNote) recNote.textContent = note;

      const footprintText =
        modellerState.footprint === "single"
          ? "Azure Estate"
          : modellerState.footprint === "multi"
            ? "Azure + GCP"
            : "Azure Hybrid / On-Premises";

      const maturityText =
        modellerState.maturity === "low"
          ? "Ad-hoc / Unaudited"
          : modellerState.maturity === "mid"
            ? "Developing"
            : "Established";

      latestModellerSummary = [
        `Modeller Snapshot:`,
        `• Monthly Spend: ${spendLabel}`,
        `• Estate Footprint: ${footprintText}`,
        `• Governance Maturity: ${maturityText}`,
        `• Priorities: ${checkedPriorities.length ? checkedPriorities.join(", ") : "General Advisory"}`,
        `• Indicative Savings Range: ${formatGBP(lowSavings)}–${formatGBP(highSavings)}/yr (${lowPctInt}%–${highPctInt}%)`,
        `• Suggested Starting Point: ${title}`,
        ``,
        `Additional context:`
      ].join("\n");
    }

    if (spendSlider) {
      spendSlider.addEventListener("input", () => {
        modellerState.monthlyK = Number(spendSlider.value);
        recalcModeller();
      });
    }

    footprintBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modellerState.footprint = btn.dataset.footprint;
        footprintBtns.forEach((b) => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
        recalcModeller();
      });
    });

    maturityBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modellerState.maturity = btn.dataset.maturity;
        maturityBtns.forEach((b) => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
        recalcModeller();
      });
    });

    priorityBoxes.forEach((box) => box.addEventListener("change", recalcModeller));

    if (modellerCarryBtn) {
      modellerCarryBtn.addEventListener("click", () => {
        if (enquiryMessage) {
          enquiryMessage.value = latestModellerSummary + "\n";
        }
        if (enquiryTopic) {
          const checked = priorityBoxes.filter((b) => b.checked).map((b) => b.value);
          if (checked.some((v) => v.includes("Fractional CIO"))) {
            enquiryTopic.value = "Fractional CIO & Directorships";
          } else if (checked.some((v) => v.includes("AI platform"))) {
            enquiryTopic.value = "AI Platform Development";
          } else {
            enquiryTopic.value = "FinOps & Cloud Economics";
          }
        }
        const contact = document.getElementById("contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "smooth", block: "start" });
          window.setTimeout(() => enquiryName && enquiryName.focus(), 550);
        }
      });
    }

    recalcModeller();

    /* 7. Copy Email Button */
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", async () => {
        const email = copyEmailBtn.dataset.email || "steven@infralight.co.uk";
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          }
          copyEmailBtn.textContent = "Copied";
          window.setTimeout(() => {
            copyEmailBtn.textContent = "Copy";
          }, 2200);
        } catch {
          copyEmailBtn.textContent = email;
        }
      });
    }

    /* 8. Formspree AJAX Enquiry Form */
    const form = document.getElementById("enquiryForm");
    const statusEl = document.getElementById("enquiryStatus");
    const submitBtn = document.getElementById("enquirySubmitBtn");

    if (form && statusEl) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        statusEl.className = "form-status";

        // Honeypot check
        const hp = form.querySelector("input[name='company']");
        if (hp && hp.value.trim() !== "") return;

        const nameVal = (document.getElementById("enquiryName")?.value || "").trim();
        const emailVal = (document.getElementById("enquiryEmail")?.value || "").trim();
        const msgVal = (document.getElementById("enquiryMessage")?.value || "").trim();

        if (!nameVal || !emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal) || !msgVal) {
          statusEl.textContent = "Please provide your name, a valid work email address, and a brief note on how Infralight can help.";
          statusEl.classList.add("is-error");
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending...";
        }

        try {
          const res = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { Accept: "application/json" }
          });

          if (res.ok) {
            statusEl.textContent = "Thank you — your briefing request has been sent directly to Infralight. Expect a response within one UK business day.";
            statusEl.classList.add("is-success");
            form.reset();
          } else {
            const payload = await res.json().catch(() => null);
            statusEl.textContent =
              payload && payload.errors
                ? payload.errors.map((err) => err.message).join(", ")
                : "Unable to send right now. Please email steven@infralight.co.uk directly.";
            statusEl.classList.add("is-error");
          }
        } catch {
          statusEl.textContent =
            "Network submission was unavailable in this environment. Please email steven@infralight.co.uk directly.";
          statusEl.classList.add("is-error");
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Briefing Request";
          }
        }
      });
    }

    /* 9. Subtle Scroll Reveal */
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      reveals.forEach((el) => revealObserver.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }
  });
})();

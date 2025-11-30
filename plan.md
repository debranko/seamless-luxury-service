# Obedio Website Restructuring Plan

Based on the analysis of the provided documents ("OBEDIO MASTER DOC BROSHURE.docx", "Obedio za integratore pozivnica.docx", "Obedio za posadu.docx", "Za Stevu.docx") and the current codebase, here is the plan to restructure the website to accurately reflect the brand's philosophy, technical capabilities, and target audience messaging.

## 1. Core Philosophy & Branding
*   **Current State:** The site has a good visual base but lacks the depth of the "Intelligence of Service" philosophy.
*   **Goal:** Infuse the "Built to serve. Designed to seduce." ethos throughout.
*   **Key Changes:**
    *   Update Hero headline to: "Built to serve. Designed to seduce."
    *   Update Hero subheadline to: "The Intelligence of Service."
    *   Ensure the "Silent precision. Lasting impression." tone is present in all copy.

## 2. Section Restructuring & Content Updates

### A. Hero Section (`components/sections/HeroNew.tsx`)
*   **Headline:** "Built to serve. Designed to seduce."
*   **Subheadline:** "The Intelligence of Service."
*   **CTA:** "Explore Obedio" (Primary), "For Integrators" (Secondary).
*   **Visual:** Keep the current high-quality render/video background.

### B. The Philosophy / Intro (New Section)
*   **Source:** Page 1 of Master Doc.
*   **Content:** "Unlike other systems, Obedio is not defined by its shape—it defines its own."
*   **Focus:** Sovereign reliability, uncompromising privacy, native language support.

### C. Guest Experience (`components/sections/ProblemSolution.tsx` -> `GuestExperience.tsx`)
*   **Source:** Page 2 of Master Doc.
*   **Refocus:** Shift from generic "Problem/Solution" to a narrative about "Voice-to-Text" and "Privacy".
*   **Key Points:**
    *   **Voice-to-Text:** "From spoken word to immediate action."
    *   **Translation:** "Guest speaks Russian, Crew reads English."
    *   **Privacy:** "The Two-Step Microphone." Explain the mechanical switch (Activation vs. Recording).

### D. Network & Reliability (`components/sections/SovereignAutonomy.tsx`)
*   **Source:** Page 3 of Master Doc.
*   **Key Points:**
    *   **Sovereign Autonomy:** No internet required. 100% local.
    *   **Intelligent Hybrid:** RF + Wi-Fi dynamic path selection.
    *   **Emergency Mesh:** Repeater mesh network if server fails.

### E. Software Intelligence (`components/sections/SoftwareSupremacy.tsx`)
*   **Source:** Page 4 of Master Doc.
*   **Key Points:**
    *   **Crew Management:** Automated Duty Roster (no swapping watches).
    *   **"Serving Now":** Real-time task tracking.
    *   **"Shake-to-Delegate":** Hands-free delegation.
    *   **3-Stage Escalation:** Ensuring no call is ignored.

### F. Hardware Experience (`components/sections/ProductShowcase.tsx`)
*   **Source:** Page 5 of Master Doc.
*   **Key Points:**
    *   **Main Button:** 5 functions (Touch, Press, Double Touch, Double Press, Press & Hold).
    *   **Auxiliary Buttons:** 4 optional buttons for Crestron/DND.

### G. Ecosystem (`components/sections/Ecosystem.tsx`)
*   **Source:** Page 6 of Master Doc.
*   **Key Points:**
    *   **Crew Smartwatch:** 7-day battery life, optimized Wear OS.
    *   **Integrations:** Crestron, Control4, Savant.

### H. Bespoke Design (`components/sections/BespokeArchitecture.tsx`)
*   **Source:** Page 7 of Master Doc.
*   **Key Points:** "This is not customization. It is bespoke architecture."
*   **Focus:** Changing the enclosure shape, materials (wood, stone, metal), and dimensions.

### I. Target Audience Sections (Refined)

#### 1. For Owners (`components/sections/ForOwners.tsx`)
*   **Focus:** Privacy, Luxury, Bespoke Design.
*   **Key Message:** "Time is the only luxury you cannot buy back."
*   **Content:**
    *   Privacy by Design (Physical switch).
    *   Bespoke Architecture (Matches interior).
    *   Sovereign Reliability (Works without internet).

#### 2. For Integrators (`components/sections/ForIntegrators.tsx`)
*   **Source:** "Obedio za integratore pozivnica.docx" & Page 6/8 of Master Doc.
*   **Focus:** Technical reliability, ease of installation, API.
*   **Key Message:** "Built for AV integrators. Not just for guests."
*   **Content:**
    *   **Sovereign Autonomy:** No cloud dependency.
    *   **Plug-and-Play:** Pre-provisioned systems based on GA.
    *   **API & WebHooks:** For advanced automation.
    *   **Specs:** Node.js/Prisma server, RF/Wi-Fi hybrid.

#### 3. For Crew (`components/sections/ForCrew.tsx`)
*   **Source:** "Obedio za posadu.docx".
*   **Focus:** Making their job easier, reducing friction.
*   **Key Message:** "Stop managing your call system. Start managing your service."
*   **Content:**
    *   **7-Day Battery:** No more dead watches.
    *   **Automated Roster:** No more swapping sweaty watches.
    *   **Shake-to-Delegate:** Hands-free control.
    *   **"On My Way":** One-tap response for unclear messages.

## 3. Proposed Site Map (Order of Sections)
1.  **HeroNew** (The Hook)
2.  **Philosophy** (The "Why")
3.  **GuestExperience** (Voice & Privacy)
4.  **BespokeArchitecture** (Design)
5.  **SoftwareSupremacy** (Crew & Management)
6.  **SovereignAutonomy** (Network & Reliability)
7.  **Ecosystem** (Watch & Integrations)
8.  **ForOwners** (Targeted Summary)
9.  **ForIntegrators** (Targeted Summary)
10. **ForCrew** (Targeted Summary)
11. **FinalCTA** (Contact)

## 4. Next Steps
1.  **Approve Plan:** Confirm this structure aligns with your vision.
2.  **Implementation:** I will systematically update each component to reflect the new content and structure.
3.  **Refinement:** We will review the visual presentation to ensure it matches the "dark, opulent" aesthetic described.
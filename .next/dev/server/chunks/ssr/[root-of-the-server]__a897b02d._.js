module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contributions",
    ()=>contributions,
    "defaultNotes",
    ()=>defaultNotes,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 'b2b-financial',
        title: 'Optimization of B2B Financial Processes',
        subtitle: 'OmniAdmin & X-Card',
        gradient: 'linear-gradient(160deg, #4a6b5a 0%, #2d4a3e 100%)',
        body: [
            'A deep dive into the financial operations of mid-sized B2B companies, identifying friction points in approval workflows, expense tracking, and multi-user access. The goal was to reduce time-on-task for finance managers by at least 40%.',
            'Through extensive user research — 14 interviews, diary studies, and contextual inquiry — we mapped the full journey of a financial transaction from request to reconciliation. The pain points were clear: too many handoffs, unclear ownership, and tools that weren\'t designed for collaborative finance.',
            'The redesign introduced a modular card system for expense requests, real-time approval chains, and an activity feed that gave every stakeholder visibility without inbox overload. A new permission model allowed granular control without requiring IT intervention.',
            'The result was a 52% reduction in task completion time for common workflows, a 78% increase in user satisfaction scores, and adoption across three enterprise clients within the first quarter of launch.'
        ]
    },
    {
        id: 'healthcare-ux',
        title: 'Healthcare UX Redesign',
        subtitle: 'MedFlow Platform',
        gradient: 'linear-gradient(160deg, #4a2d3a 0%, #2d1a25 100%)',
        body: [
            'MedFlow serves clinical staff across 40+ hospitals. The legacy system required extensive training and had an error rate that concerned risk management teams. This project was a full redesign of the patient intake and handoff system.',
            'We embedded with nursing staff during 12-hour shifts, observed handoffs between departments, and conducted cognitive load assessments during peak hours. The existing system demanded too much working memory at exactly the moments when nurses had none to spare.',
            'The new design prioritized progressive disclosure — showing only what\'s needed for the current task — alongside a customizable dashboard that allowed each role to configure their view. Color and iconography were redesigned to be legible under stress and on aging monitors.',
            'Post-launch audits showed a 34% reduction in documentation errors and a 29-minute reduction in average patient handoff time across participating facilities.'
        ]
    },
    {
        id: 'fintech-dashboard',
        title: 'Fintech Dashboard System',
        subtitle: 'ClearPay Analytics',
        gradient: 'linear-gradient(160deg, #2d3a5a 0%, #1a2540 100%)',
        body: [
            'ClearPay needed a unified analytics dashboard that could serve both power-user analysts and executive stakeholders — typically two audiences with very different needs and very different tolerances for complexity.',
            'Research revealed the tension: analysts needed granularity and raw data access; executives needed narrative and highlight detection. Neither group trusted a system built for the other. The challenge was designing one surface that served both without compromise.',
            'The solution was a layered information architecture — a high-level narrative view with progressive drill-down into raw data, all within the same screen flow. Custom chart components were built to communicate confidence intervals and trend direction in a single glance.',
            'Within six months of launch, weekly active users increased by 3x and the dashboard replaced four legacy reporting tools that had each required separate training programs.'
        ]
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Experience Reimagined',
        subtitle: 'Retail Reimagined',
        gradient: 'linear-gradient(160deg, #5a4a2d 0%, #3a2d1a 100%)',
        body: [
            'A major retail brand\'s digital presence was fragmented across three platforms, each with different interaction patterns and visual languages. The result was customer confusion, abandoned carts, and a brand perception gap between digital and physical stores.',
            'The project began with a competitive audit and 20 moderated usability sessions. The key finding: customers expected the warmth and assistance of in-store staff but got cold, product-grid interfaces that prioritized inventory over experience.',
            'We introduced a guided discovery flow — a conversational layer that helped customers articulate what they were looking for — alongside contextual product storytelling and a redesigned checkout that reduced steps from 7 to 3.',
            'Cart abandonment dropped by 41% in the first two months. Average order value increased by 18%, attributed to the improved discovery experience surfacing complementary items in context rather than as a separate upsell step.'
        ]
    }
];
const contributions = [
    {
        id: 'design-system',
        title: 'Design System',
        preview: 'A comprehensive design system built to scale across multiple products.',
        body: [
            'A contribution to the open-source design system ecosystem — a set of foundational components, tokens, and documentation built to help small teams ship consistent products without a dedicated design systems engineer.',
            'The system covers typography, color, spacing, interactive states, and accessibility guidelines. Every component includes usage notes, anti-patterns, and example compositions to reduce guesswork for designers and developers alike.',
            'Published through Figma Community, it\'s been duplicated by over 3,000 teams and received contributions from designers across 14 countries. The token architecture is compatible with Tailwind CSS and vanilla CSS custom properties.',
            'Ongoing maintenance focuses on expanding the motion guidelines and adding a dark mode token layer that doesn\'t require maintaining two separate sets of components.'
        ]
    },
    {
        id: 'ux-lead',
        title: 'UX Lead',
        preview: 'Leading UX strategy and research for cross-functional teams.',
        body: [
            'As UX Lead for a cross-functional product team, I was responsible for translating research insights into design direction and ensuring quality from concept to launch.',
            'I established a research operations practice from scratch — standardizing how we recruited participants, stored findings, and socialized insights across the organization. This reduced time-from-insight-to-action from 6 weeks to under 2.',
            'I mentored three mid-level designers, running weekly design critiques focused on decision rationale rather than aesthetic preference. Each designer shipped at least one major feature independently within their first six months.',
            'At the strategic level, I contributed to roadmap prioritization by quantifying design debt and user pain in terms that resonated with product and engineering partners.',
            'The team shipped 11 significant product improvements over 18 months, with an average satisfaction increase of 22 points per feature measured at 30-day post-launch.'
        ]
    },
    {
        id: 'figma-community',
        title: 'Figma Community',
        preview: 'Open-source resources and templates for the design community.',
        body: [
            'Over three years of active publishing on Figma Community, I\'ve released 12 free resources used by designers at companies ranging from two-person startups to Fortune 500 firms.',
            'Notable releases include a UX audit template duplicated 8,000+ times, a heuristic evaluation kit with pre-built severity scales, and a research synthesis board for turning interview data into actionable insights.',
            'Each release includes a companion article explaining the thinking behind the structure — not just what the file contains, but why it\'s organized the way it is.',
            'The community engagement has been genuinely reciprocal: feedback from users in Brazil, Germany, and India has shaped how I think about internationalization and the assumptions baked into Western design frameworks.'
        ]
    }
];
const defaultNotes = [
    {
        id: 1,
        title: 'Portfolio en construcción',
        date: 'Hoy',
        body: 'Este portafolio se encuentra actualmente en construcción.\n\nPróximamente:\n• Casos de estudio completos\n• Imágenes de proyectos reales\n• CV actualizado\n• Versión en inglés'
    },
    {
        id: 2,
        title: 'React Hooks Best Practices',
        date: 'Ayer',
        body: 'Always use useCallback for functions passed to child components to prevent unnecessary re-renders.\n\nKey Rules:\n• Use useCallback when passing callbacks\n• Use useMemo for expensive calculations\n• Keep dependencies array accurate'
    }
];
}),
"[project]/Downloads/fer-portfolio-v2 2/src/hooks/usePortfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotes",
    ()=>useNotes,
    "usePortfolio",
    ()=>usePortfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
function usePortfolio() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentScreen: 'work',
        previousScreen: 'work',
        activeProjectId: null,
        activeContributionId: null,
        menuOpen: false
    });
    const navTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((screen)=>{
        setState((s)=>({
                ...s,
                previousScreen: s.currentScreen,
                currentScreen: screen,
                menuOpen: false
            }));
    }, []);
    const openProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setState((s)=>({
                ...s,
                previousScreen: 'work',
                currentScreen: 'project',
                activeProjectId: id,
                menuOpen: false
            }));
    }, []);
    const openContribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setState((s)=>({
                ...s,
                previousScreen: 'contributions',
                currentScreen: 'contribution',
                activeContributionId: id,
                menuOpen: false
            }));
    }, []);
    const goBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setState((s)=>({
                ...s,
                currentScreen: s.previousScreen
            }));
    }, []);
    const openMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setState((s)=>({
                ...s,
                menuOpen: true
            })), []);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setState((s)=>({
                ...s,
                menuOpen: false
            })), []);
    const showPill = state.currentScreen === 'work' || state.currentScreen === 'about';
    const showBack = state.currentScreen === 'project' || state.currentScreen === 'contribution';
    const showMenu = !showBack;
    return {
        state,
        navTo,
        openProject,
        openContribution,
        goBack,
        openMenu,
        closeMenu,
        showPill,
        showBack,
        showMenu
    };
}
function useNotes() {
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultNotes"]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultNotes"][0].id);
    const activeNote = notes.find((n)=>n.id === activeId) ?? notes[0];
    const createNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const newNote = {
            id: Date.now(),
            title: 'New Note',
            date: 'Now',
            body: ''
        };
        setNotes((prev)=>[
                newNote,
                ...prev
            ]);
        setActiveId(newNote.id);
    }, []);
    const updateNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, field, value)=>{
        setNotes((prev)=>prev.map((n)=>n.id === id ? {
                    ...n,
                    [field]: value
                } : n));
    }, []);
    return {
        notes,
        activeId,
        activeNote,
        setActiveId,
        createNote,
        updateNote
    };
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/hooks/useDraggable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDraggable",
    ()=>useDraggable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useDraggable(initial = {
    x: 80,
    y: 60
}) {
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const onMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // Don't drag when clicking buttons inside the handle
        if (e.target.closest('button')) return;
        dragging.current = true;
        origin.current = {
            x: e.clientX,
            y: e.clientY
        };
        startPos.current = pos;
        const onMove = (e)=>{
            if (!dragging.current) return;
            const dx = e.clientX - origin.current.x;
            const dy = e.clientY - origin.current.y;
            setPos({
                x: Math.max(0, Math.min(window.innerWidth - 340, startPos.current.x + dx)),
                y: Math.max(0, Math.min(window.innerHeight - 740, startPos.current.y + dy))
            });
        };
        const onUp = ()=>{
            dragging.current = false;
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    }, [
        pos
    ]);
    return {
        pos,
        onMouseDown
    };
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Screen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const variants = {
    enter: {
        opacity: 0,
        x: 24
    },
    center: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -16
    }
};
function Screen({ id, children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            duration: 0.28,
            ease: [
                0.32,
                0.72,
                0,
                1
            ]
        },
        className: `absolute inset-0 overflow-y-auto no-scrollbar ${className}`,
        style: {
            paddingTop: 70,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 80
        },
        children: children
    }, id, false, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const item = {
    hidden: {
        opacity: 0,
        y: 16
    },
    show: {
        opacity: 1,
        y: 0
    }
};
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1
        }
    }
};
function WorkScreen({ onOpenProject }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "work",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: container,
            initial: "hidden",
            animate: "show",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                    variants: item,
                    className: "font-serif text-[46px] leading-[1.05] text-[#1a1a1a] mt-2 mb-5",
                    children: [
                        "Hello, I'm",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                            lineNumber: 16,
                            columnNumber: 26
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#5a7a5c] italic",
                            children: "Fer Loera"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                            lineNumber: 16,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: item,
                    className: "text-[13px] leading-relaxed text-[#555] mb-6",
                    children: "I bridge UX/UI design with the study of human behavior to add strategic value to every pixel. I specialize in creating digital products where empathy and psychological evidence drive the design."
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: item,
                    className: "flex items-center gap-2 mb-8",
                    children: [
                        '01 Research',
                        '02 Analysis',
                        '03 Synthesis'
                    ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-1 last:flex-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] tracking-widest text-[#999] uppercase font-medium whitespace-nowrap",
                                    children: step
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                i < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px bg-[#ddd]"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, step, true, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: item,
                    className: "text-[14px] font-medium text-[#1a1a1a] mb-4",
                    children: "Selected work"
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: item,
                    className: "flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 pb-3",
                    style: {
                        scrollSnapType: 'x mandatory'
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>onOpenProject(project.id),
                            whileHover: {
                                scale: 1.03
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            transition: {
                                duration: 0.18
                            },
                            className: "flex-shrink-0 w-40 h-48 rounded-2xl p-4 flex flex-col justify-end text-left",
                            style: {
                                background: project.gradient,
                                scrollSnapAlign: 'start'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-[15px] text-white/90 leading-snug mb-1",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-white/50 tracking-wide",
                                    children: project.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const item = {
    hidden: {
        opacity: 0,
        y: 16
    },
    show: {
        opacity: 1,
        y: 0
    }
};
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
};
function AboutScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: container,
            initial: "hidden",
            animate: "show",
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                    variants: item,
                    className: "text-[46px] leading-[1.1] font-serif text-[#5a7a5c] mt-2",
                    children: "About me"
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: item,
                    className: "flex flex-col gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] font-semibold text-[#1a1a1a] leading-snug",
                            children: "The mindset"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] leading-relaxed text-[#444]",
                            children: "My approach to design is rooted in the study of Human Behavior. I believe that a truly functional product isn't just easy to use; it's built on evidence, empathy, and a deep understanding of how people think and act."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] leading-relaxed text-[#444]",
                            children: "With a background in UI and a passion for UX Research, I focus on creating scalable systems and meaningful experiences. I'm constantly evolving, adapting, and looking for ways to add value through detail-oriented and people-centered strategy."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContributionsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const rotations = [
    -1.5,
    1.2,
    -0.8
];
const offsets = [
    4,
    55,
    8
];
function ContributionsScreen({ onOpenContribution }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "contributions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "font-serif text-[40px] text-[#1a1a1a] mt-2 mb-7",
                children: "Contributions"
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    minHeight: 500
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contributions"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>onOpenContribution(c.id),
                        initial: {
                            opacity: 0,
                            y: 24,
                            rotate: rotations[i]
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            rotate: rotations[i]
                        },
                        transition: {
                            delay: i * 0.1 + 0.1,
                            duration: 0.4,
                            ease: [
                                0.32,
                                0.72,
                                0,
                                1
                            ]
                        },
                        whileHover: {
                            rotate: 0,
                            scale: 1.04,
                            zIndex: 10
                        },
                        className: "absolute text-left bg-white rounded-xl p-5 shadow-md w-56",
                        style: {
                            marginLeft: offsets[i],
                            top: i * 190,
                            transformOrigin: 'top center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-2.5 left-5 w-4 h-4 rounded-full",
                                style: {
                                    background: '#e54',
                                    boxShadow: '0 2px 6px rgba(220,60,40,0.4)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-serif text-[20px] text-[#1a1a1a] mb-2 leading-snug",
                                children: c.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] leading-relaxed text-[#777]",
                                children: c.preview
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.id, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConnectScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const item = {
    hidden: {
        opacity: 0,
        y: 16
    },
    show: {
        opacity: 1,
        y: 0
    }
};
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
};
const links = [
    {
        label: 'Send an email',
        href: 'mailto:ferloera.ux@gmail.com',
        download: false
    },
    {
        label: 'Go to Figma Community',
        href: 'https://www.figma.com/@ferloeraux',
        download: false
    },
    {
        label: "Download Fer's CV",
        href: '/Loera_Fernando_Curriculum_2026.pdf',
        download: true
    }
];
const socials = [
    {
        label: 'LinkedIn',
        img: '/plateLinkedIn.png',
        href: 'https://www.linkedin.com/in/ferloeraux/'
    },
    {
        label: 'Dribbble',
        img: '/plateDribbble.png',
        href: 'https://dribbble.com/fflloo'
    },
    {
        label: 'Medium',
        img: '/plateMedium.png',
        href: 'https://medium.com/@ferloera.ux'
    },
    {
        label: 'Instagram',
        img: '/plateInstagram.png',
        href: 'https://www.instagram.com/ferloera.ux/'
    }
];
function MailIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function ArrowIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 17 17 7M7 7h10v10"
        }, void 0, false, {
            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function ConnectScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "connect",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: container,
            initial: "hidden",
            animate: "show",
            className: "flex flex-col gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                    variants: item,
                    className: "text-[46px] leading-[1.1] font-serif text-[#5a7a5c] mt-2",
                    children: "Connect"
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: item,
                    className: "flex flex-col",
                    children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            download: l.download || undefined,
                            target: !l.download && !l.href.startsWith('mailto') ? '_blank' : undefined,
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-3 py-3 border-b border-[#d8d8d4] last:border-none text-[#625f5f] hover:text-[#1a1a1a] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 text-[#625f5f]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {}, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                        lineNumber: 71,
                                        columnNumber: 57
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 text-[15px] font-[DM_Sans,sans-serif]",
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 text-[#625f5f]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {}, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                        lineNumber: 73,
                                        columnNumber: 57
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, l.label, true, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: item,
                    className: "flex flex-col gap-4 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[18px] font-semibold text-[#111813]",
                            children: "Find me on"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: socials.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: s.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex flex-col items-center gap-2",
                                    initial: {
                                        opacity: 0,
                                        scale: 0.85
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.3 + i * 0.07,
                                        type: 'spring',
                                        stiffness: 260
                                    },
                                    whileHover: {
                                        scale: 1.04
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: s.img,
                                            alt: s.label,
                                            className: "w-full aspect-square object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-widest uppercase font-medium text-[#111813]",
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.label, true, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 14
    },
    show: {
        opacity: 1,
        y: 0
    }
};
function ProjectScreen({ projectId }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === projectId);
    if (!project) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: `project-${projectId}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: container,
                initial: "hidden",
                animate: "show",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        variants: item,
                        className: "font-serif text-[32px] leading-[1.15] text-[#1a1a1a] mb-6",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: item,
                        className: "flex items-center gap-2 mb-6",
                        children: [
                            '01 Research',
                            '02 Analysis',
                            '03 Synthesis'
                        ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-1 last:flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-widest text-[#999] uppercase font-medium whitespace-nowrap",
                                        children: step
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    i < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-px bg-[#ddd]"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, step, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    project.body.map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: item,
                            className: "text-[13px] leading-[1.75] text-[#555] mb-4",
                            children: para
                        }, i, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.4
                },
                className: "sticky bottom-4 flex justify-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#1a1a1a] rounded-full flex gap-0.5 p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                        lineNumber: 36,
                                        columnNumber: 111
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                "Read"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                            lineNumber: 39,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                            lineNumber: 39,
                                            columnNumber: 179
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                "Links"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContributionScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/ui/Screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 14
    },
    show: {
        opacity: 1,
        y: 0
    }
};
function ContributionScreen({ contributionId }) {
    const contribution = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contributions"].find((c)=>c.id === contributionId);
    if (!contribution) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$ui$2f$Screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: `contribution-${contributionId}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: container,
                initial: "hidden",
                animate: "show",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: item,
                        className: "text-[9px] tracking-[0.1em] uppercase text-[#999] font-semibold mb-2",
                        children: "Contributions"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        variants: item,
                        className: "font-serif text-[32px] leading-[1.15] text-[#1a1a1a] mb-6",
                        children: contribution.title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    contribution.body.map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: item,
                            className: "text-[13px] leading-[1.75] text-[#555] mb-4",
                            children: para
                        }, i, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.4
                },
                className: "sticky bottom-4 flex justify-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#1a1a1a] rounded-full flex gap-0.5 p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors",
                            children: "Read"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors",
                            children: "Links"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhoneShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$hooks$2f$usePortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/hooks/usePortfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$hooks$2f$useDraggable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/hooks/useDraggable.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$WorkScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/screens/WorkScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$AboutScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/screens/AboutScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ContributionsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ConnectScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ConnectScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ProjectScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ProjectScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ContributionScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/screens/ContributionScreen.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function PhoneShell() {
    const { state, navTo, openProject, openContribution, goBack, openMenu, closeMenu, showPill, showBack, showMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$hooks$2f$usePortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePortfolio"])();
    const { pos, onMouseDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$hooks$2f$useDraggable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDraggable"])({
        x: 80,
        y: 60
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute",
        style: {
            left: pos.x,
            top: pos.y,
            width: 340,
            zIndex: 100
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-14 rounded-t-[44px] z-[150] cursor-grab active:cursor-grabbing",
                onMouseDown: onMouseDown
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[340px] h-[740px] rounded-[44px] overflow-hidden relative",
                style: {
                    background: '#f0f0ee',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3.5 left-1/2 -translate-x-1/2 w-[120px] h-9 bg-[#0a0a0a] rounded-[20px] z-50 flex items-center justify-end pr-2.5 gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 h-2.5 rounded-full bg-[#1a1a1a]"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-[#22aa55]"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: openMenu,
                            className: "absolute top-5 right-5 w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-1 z-[160] hover:bg-white/90 transition-colors",
                            children: [
                                0,
                                1,
                                2
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-4 h-px bg-[#444] rounded block"
                                }, i, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                    lineNumber: 48,
                                    columnNumber: 33
                                }, this))
                        }, "menu", false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0,
                                x: -8
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -8
                            },
                            onClick: goBack,
                            className: "absolute top-5 left-5 w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center z-[160] text-[#444] text-base hover:bg-white/90 transition-colors",
                            children: "←"
                        }, "back", false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            state.currentScreen === 'work' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$WorkScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onOpenProject: openProject
                            }, "work", false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 69,
                                columnNumber: 46
                            }, this),
                            state.currentScreen === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$AboutScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "about", false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 70,
                                columnNumber: 47
                            }, this),
                            state.currentScreen === 'contributions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ContributionsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onOpenContribution: openContribution
                            }, "contributions", false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 71,
                                columnNumber: 55
                            }, this),
                            state.currentScreen === 'connect' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ConnectScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "connect", false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 72,
                                columnNumber: 49
                            }, this),
                            state.currentScreen === 'project' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ProjectScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                projectId: state.activeProjectId
                            }, `project-${state.activeProjectId}`, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 73,
                                columnNumber: 49
                            }, this),
                            state.currentScreen === 'contribution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$screens$2f$ContributionScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                contributionId: state.activeContributionId
                            }, `contribution-${state.activeContributionId}`, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                lineNumber: 74,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showPill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 12
                            },
                            className: "absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] rounded-full flex gap-0.5 p-1 z-30",
                            children: [
                                'work',
                                'about'
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>navTo(tab),
                                    className: `px-5 py-2 rounded-full text-[13px] font-medium transition-all capitalize ${state.currentScreen === tab ? 'bg-white/12 text-white' : 'text-white/40 hover:text-white/70'}`,
                                    children: tab.charAt(0).toUpperCase() + tab.slice(1)
                                }, tab, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this))
                        }, "pill", false, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: state.menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "absolute inset-0 z-[200] flex flex-col justify-between p-7 pt-16",
                            style: {
                                background: 'rgba(240,240,238,0.92)',
                                backdropFilter: 'blur(12px)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeMenu,
                                    className: "absolute top-5 right-5 w-8 h-8 bg-black/8 rounded-lg text-base text-[#666] flex items-center justify-center hover:bg-black/12",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        'work',
                                        'about',
                                        'contributions',
                                        'connect'
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            initial: {
                                                opacity: 0,
                                                x: -16
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: i * 0.06
                                            },
                                            onClick: ()=>navTo(item),
                                            className: "font-serif text-[36px] text-[#1a1a1a] text-left py-1 capitalize hover:text-[#5a7a5c] transition-colors bg-transparent border-none",
                                            children: item.charAt(0).toUpperCase() + item.slice(1)
                                        }, item, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[#aaa]",
                                    children: [
                                        "This portfolio was programmed by",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                            lineNumber: 128,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-[#666] underline",
                                            children: "tomas-martinez"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "menu-overlay", true, {
                            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function Dock({ onNotesToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-5 left-1/2 -translate-x-1/2 flex items-end gap-2.5 px-4 py-2.5 z-[500] rounded-[20px]",
        style: {
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px) saturate(1.8)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                label: "Portfolio",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    style: {
                        background: 'radial-gradient(circle at 40% 35%, #333, #0a0a0a)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3.5 h-3.5 rounded-full",
                        style: {
                            background: 'radial-gradient(circle, #555, #222)',
                            border: '2px solid #333'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                label: "Figma Community",
                href: "https://figma.com/@ferloera",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    style: {
                        background: 'linear-gradient(135deg, #ff7262, #a259ff, #1abcfe, #0acf83)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "26",
                        height: "26",
                        viewBox: "0 0 38 57",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z",
                                fill: "#1ABCFE"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 18 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z",
                                fill: "#0ACF83"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M19 0V19H28.5C31.02 19 33.44 18 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z",
                                fill: "#FF7262"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 18 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z",
                                fill: "#FF7262"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z",
                                fill: "#A259FF"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                label: "LinkedIn",
                href: "https://linkedin.com/in/ferloera",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    style: {
                        background: '#0a66c2'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-lg font-serif",
                        children: "in"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                label: "Dribbble",
                href: "https://dribbble.com/ferloera",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    style: {
                        background: 'linear-gradient(135deg, #e94584, #c032a0)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "white",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 12c3-2 7-3 10-1 2 2 3 6 2 9M22 12c-3-1-7-1-9 1-3 2-4 7-3 9M7 3c1 3 3 6 6 7 3 1 6 0 9-2",
                                stroke: "white",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                label: "Notes",
                onClick: onNotesToggle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center bg-[#ffd60a]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "30",
                        height: "30",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "4",
                                y: "12",
                                width: "24",
                                height: "16",
                                rx: "2",
                                fill: "#ffd60a"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "4",
                                y: "4",
                                width: "24",
                                height: "12",
                                rx: "2",
                                fill: "#ffc500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "18",
                                x2: "24",
                                y2: "18",
                                stroke: "#9a6e00",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "22",
                                x2: "20",
                                y2: "22",
                                stroke: "#9a6e00",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "26",
                                x2: "16",
                                y2: "26",
                                stroke: "#9a6e00",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function DockItem({ label, href, onClick, children }) {
    const base = "relative flex items-center justify-center w-[52px] h-[52px] rounded-[12px] cursor-pointer overflow-hidden group";
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-[rgba(30,30,30,0.9)] backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10",
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
            href: href,
            target: "_blank",
            rel: "noreferrer",
            className: base,
            whileHover: {
                scale: 1.25,
                y: -8
            },
            transition: {
                duration: 0.18
            },
            children: inner
        }, void 0, false, {
            fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: base,
        onClick: onClick,
        whileHover: {
            scale: 1.25,
            y: -8
        },
        transition: {
            duration: 0.18
        },
        children: inner
    }, void 0, false, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/data/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function NotesWindow({ isOpen, onClose }) {
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultNotes"]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultNotes"][0].id);
    const activeNote = notes.find((n)=>n.id === activeId) ?? notes[0];
    // Position state (lazy init avoids SSR window access)
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Initialize position on first render (client only)
    const getPos = ()=>{
        if (pos) return pos;
        return {
            x: Math.max(20, window.innerWidth - 720),
            y: 80
        };
    };
    function onDragStart(e) {
        if (e.target.closest('button, input, textarea, a')) return;
        dragging.current = true;
        const current = getPos();
        origin.current = {
            x: e.clientX,
            y: e.clientY
        };
        startPos.current = current;
        const onMove = (e)=>{
            if (!dragging.current) return;
            setPos({
                x: Math.max(0, startPos.current.x + e.clientX - origin.current.x),
                y: Math.max(0, startPos.current.y + e.clientY - origin.current.y)
            });
        };
        const onUp = ()=>{
            dragging.current = false;
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    }
    function createNote() {
        const n = {
            id: Date.now(),
            title: 'New Note',
            date: 'Now',
            body: ''
        };
        setNotes((prev)=>[
                n,
                ...prev
            ]);
        setActiveId(n.id);
    }
    function updateNote(id, field, value) {
        setNotes((prev)=>prev.map((n)=>n.id === id ? {
                    ...n,
                    [field]: value
                } : n));
    }
    if (!isOpen) return null;
    const currentPos = getPos();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.96,
            y: 8
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.96,
            y: 8
        },
        transition: {
            duration: 0.2
        },
        className: "fixed z-[400] flex flex-col overflow-hidden",
        style: {
            left: currentPos.x,
            top: currentPos.y,
            width: 680,
            height: 460,
            background: '#f5f5f0',
            borderRadius: 12,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseDown: onDragStart,
                className: "flex items-center gap-2 px-3.5 py-2.5 border-b border-[#c8c8c3] flex-shrink-0 cursor-grab active:cursor-grabbing select-none",
                style: {
                    background: 'linear-gradient(180deg, #e8e8e3 0%, #dcdcd7 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:brightness-90 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-center text-[12px] text-[#666] font-medium",
                        children: "Notes"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 text-[#888] text-sm select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⊞"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "≡"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 93,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 93,
                                columnNumber: 53
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-48 bg-[#e8e8e3] border-r border-[#d0d0cb] flex flex-col overflow-hidden flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[#999] uppercase tracking-wider font-semibold px-3 pt-3 pb-1.5",
                                children: "☁ iCloud"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 bg-black/8 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] text-[#666]",
                                        children: "📁"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    " All Notes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[#999] uppercase tracking-wider font-semibold px-3 pt-3 pb-1.5",
                                children: "Folders"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📁"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    " Portfolio Notes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📁"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    " Ideas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[#999] uppercase tracking-wider font-semibold px-3 pt-3 pb-1.5",
                                children: "Tags"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#e54]",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    " Important"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#5a7]",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    " WIP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: createNote,
                                className: "m-2 py-2 text-[12px] text-[#555] bg-black/6 hover:bg-black/10 rounded-lg transition-colors",
                                children: "+ New Note"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-52 border-r border-[#d8d8d3] overflow-y-auto no-scrollbar flex-shrink-0 bg-[#f0f0eb]",
                        children: notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActiveId(note.id),
                                className: `px-3.5 py-3 border-b border-[#e4e4df] cursor-pointer transition-colors ${note.id === activeId ? 'bg-[rgba(255,210,0,0.2)]' : 'hover:bg-black/4'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-semibold text-[#1a1a1a] mb-0.5 truncate",
                                        children: note.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#888] mr-1.5",
                                        children: note.date
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#999]",
                                        children: [
                                            note.body.slice(0, 30),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, note.id, true, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-5 flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "text-[18px] font-semibold text-[#1a1a1a] mb-4 border-none outline-none bg-transparent w-full",
                                style: {
                                    fontFamily: 'inherit'
                                },
                                value: activeNote?.title ?? '',
                                onChange: (e)=>updateNote(activeId, 'title', e.target.value),
                                placeholder: "Title"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "flex-1 text-[13px] text-[#333] leading-relaxed border-none outline-none bg-transparent w-full resize-none",
                                style: {
                                    fontFamily: 'inherit'
                                },
                                value: activeNote?.body ?? '',
                                onChange: (e)=>updateNote(activeId, 'body', e.target.value),
                                placeholder: "Start writing..."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-3",
                                children: [
                                    '# Important',
                                    '# WIP'
                                ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-black/6 rounded-full text-[10px] text-[#666] cursor-pointer hover:bg-black/10",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/fer-portfolio-v2 2/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/PhoneShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$Dock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/Dock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$NotesWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/fer-portfolio-v2 2/src/components/NotesWindow.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Home() {
    const [notesOpen, setNotesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-screen h-screen overflow-hidden relative",
        style: {
            background: 'radial-gradient(ellipse at 20% 50%, #1e2a1e 0%, #0a0a0a 60%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: notesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$NotesWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: notesOpen,
                    onClose: ()=>setNotesOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Downloads/fer-portfolio-v2 2/src/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$fer$2d$portfolio$2d$v2__2$2f$src$2f$components$2f$Dock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onNotesToggle: ()=>setNotesOpen((o)=>!o)
            }, void 0, false, {
                fileName: "[project]/Downloads/fer-portfolio-v2 2/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/fer-portfolio-v2 2/src/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a897b02d._.js.map
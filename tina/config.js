import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields: [
          // ── HERO ──────────────────────────────────────────────────────────
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Location Badge" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              { type: "string", name: "byline", label: "Byline" },
              { type: "string", name: "description", label: "Description (HTML allowed)", ui: { component: "textarea" } },
              { type: "string", name: "cta_primary", label: "Primary Button Text" },
              { type: "string", name: "cta_secondary", label: "Secondary Button Text" },
              {
                type: "object", name: "stats", label: "Stats", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                ],
              },
            ],
          },
          // ── PAIN ──────────────────────────────────────────────────────────
          {
            type: "object", name: "pain", label: "Pain Section",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "description2", label: "Description 2", ui: { component: "textarea" } },
              {
                type: "object", name: "cards", label: "Pain Cards", list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon (emoji)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // ── SERVICES ──────────────────────────────────────────────────────
          {
            type: "object", name: "services", label: "Services Section",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              {
                type: "object", name: "cards", label: "Service Cards", list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon (emoji)" },
                  { type: "string", name: "tag", label: "Tag (e.g. Plumbers)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
              {
                type: "object", name: "everything_included", label: "Everything Included Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "features", label: "Features", list: true },
                ],
              },
            ],
          },
          // ── RESULTS ───────────────────────────────────────────────────────
          {
            type: "object", name: "results", label: "Results / Why Me Section",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              { type: "string", name: "description", label: "Description 1", ui: { component: "textarea" } },
              { type: "string", name: "description2", label: "Description 2", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "CTA Button Text" },
              {
                type: "object", name: "stats", label: "Stats", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                ],
              },
              {
                type: "object", name: "promo_card", label: "Promo Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // ── PROCESS ───────────────────────────────────────────────────────
          {
            type: "object", name: "process", label: "Process Section",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              {
                type: "object", name: "steps", label: "Steps", list: true,
                fields: [
                  { type: "string", name: "number", label: "Step Number (e.g. 01)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "cta", label: "CTA Button Text" },
            ],
          },
          // ── TESTIMONIALS ──────────────────────────────────────────────────
          {
            type: "object", name: "testimonials", label: "Testimonials",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              {
                type: "object", name: "items", label: "Testimonials", list: true,
                fields: [
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "company", label: "Company" },
                  { type: "string", name: "initial", label: "Avatar Initial (single letter)" },
                ],
              },
            ],
          },
          // ── FAQ ───────────────────────────────────────────────────────────
          {
            type: "object", name: "faq", label: "FAQ",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "headline", label: "Headline (HTML allowed)", ui: { component: "textarea" } },
              {
                type: "object", name: "items", label: "FAQ Items", list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // ── FOOTER ────────────────────────────────────────────────────────
          {
            type: "object", name: "footer", label: "Footer",
            fields: [
              { type: "string", name: "tagline", label: "Tagline", ui: { component: "textarea" } },
              { type: "string", name: "email", label: "Email Address" },
              { type: "string", name: "copyright", label: "Copyright Text" },
            ],
          },
        ],
      },
    ],
  },
});

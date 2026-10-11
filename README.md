# Savorly — Restaurant Marketplace Front-End Template

Savorly is a responsive, browser-based restaurant and food-discovery marketplace template. It is intended as a starting point that a buyer can rebrand and customize for a restaurant, food business, or marketplace concept.

The project is built with **HTML, CSS, and vanilla JavaScript**. It does not require a framework or a build step. The included interactions are front-end demonstrations: this template is **not a complete production ordering platform** and is not connected to a database, payment provider, authentication service, delivery system, or mailing-list service.

> **Before publishing:** Replace the sample restaurant information, menu data, image assets, contact details, promotion text, social links, and legal/support links. Connect any features that need to store data or trigger real-world actions to suitable back-end services.

## Contents

- [Why this is useful for buyers](#why-this-is-useful-for-buyers)
- [Features](#features)
- [Project files](#project-files)
- [Requirements](#requirements)
- [Run the template locally](#run-the-template-locally)
- [Quick customization](#quick-customization)
- [Menu and cuisine data](#menu-and-cuisine-data)
- [Images and other assets](#images-and-other-assets)
- [How the page is organized](#how-the-page-is-organized)
- [Interactive behavior](#interactive-behavior)
- [Design and responsive layout](#design-and-responsive-layout)
- [Accessibility notes](#accessibility-notes)
- [Production-readiness notes](#production-readiness-notes)
- [Troubleshooting](#troubleshooting)
- [Browser support and limitations](#browser-support-and-limitations)

## Why this is useful for buyers

This template is designed to save time for buyers who want to launch a food brand, restaurant landing page, or small marketplace concept without building every interface element from scratch. Instead of starting with a blank file, the buyer receives a complete front-end layout with realistic sections, sample content, interactive behavior, and styling that already works in the browser.

For a buyer, the main value is speed and clarity:

- It showcases a polished restaurant storefront in a few minutes.
- It helps stakeholders visualize the layout, style, and flow before custom branding and production work begins.
- It separates presentation from business logic, so the buyer can update menu items, pricing, branding, and copy without rewriting the full structure.
- It is easy to demo on a laptop or phone during client presentations, investor discussions, or internal review meetings.

This is best suited for buyers who want a branded front-end concept, a quick prototype, or a foundation for a custom restaurant website. It is not designed to replace a full e-commerce or order-management system out of the box.

### What the buyer gets

A buyer receives:

- A ready-made storefront layout with a hero section, benefits, cuisine cards, menu grid, partner strip, footer, and cart drawer.
- A responsive front-end built only with HTML, CSS, and JavaScript.
- Data-driven sections that can be edited in one place, especially in `script.js`.
- Theme support, search/filtering, favorites, and cart interactions for a realistic demo experience.
- A structure that is easy to customize for a specific restaurant, cafe, food brand, delivery concept, or niche menu.

### Best fit for

This template is a strong fit for:

- Independent restaurants, cafes, and food brands that need a branded landing page.
- Startups validating a food marketplace concept.
- Agencies creating client mockups or pitch decks.
- Developers who need a clean visual foundation and want to replace sample data with real business details.

### What still needs to be added before launch

Before a buyer uses this template as a real live business website, they still need to:

- Replace sample restaurant details, menu content, pricing, and images.
- Verify all legal links and contact information.
- Connect billing, payments, inventory, and order processing to actual business systems.
- Add real customer accounts, privacy terms, and subscriptions if needed.
- Confirm that all accessibility, mobile, and browser-compliance checks pass for their target customers.

This template is a front-end starter, not a complete operational food platform.

## Features

The template includes the following front-end sections and interactions:

- **Responsive storefront layout** for desktop, tablet, and mobile screens.
- **Brand header and navigation** with search, theme, favorites, cart, and account-style controls.
- **Featured-meal hero carousel** with previous/next controls and timed slide changes.
- **Service-benefit strip** for delivery, refunds, checkout, and support messages.
- **Cuisine/category cards** generated from JavaScript data.
- **Menu cards** generated from a sample dish catalogue, with category filtering and a show-all control.
- **Dish search and suggestions** for finding sample menu items.
- **Favorites** with a visible count.
- **Browser-side cart drawer** with item quantities and a calculated subtotal/delivery total.
- **Promotional panels**, a copyable promotional code, and an offer countdown.
- **Partner/restaurant name strip** generated from a data array.
- **WhatsApp contact link** whose number and default message are configurable.
- **Newsletter form demonstration** with local front-end validation/feedback.
- **Light and dark themes**, with the selected theme stored in browser local storage when available.
- **Loading screen, scroll/reveal effects, progress indicator, pointer effects, and decorative animations** where supported.
- **Inline code comments** to help buyers identify what can be changed and what should generally be left alone.

Some visible controls are design placeholders or front-end demos. See [Interactive behavior](#interactive-behavior) and [Production-readiness notes](#production-readiness-notes) for important details.

## Project files

Keep these files together unless you update the paths that connect them.

| File or folder | Purpose                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `savorly.html` | Main page structure, content sections, navigation, SVG icon symbols, cart drawer shell, footer, and links to the stylesheet and script.                             |
| `style.css`    | Visual design, theme variables, typography, component styling, animation, focus states, and responsive layout rules.                                                |
| `script.js`    | Store configuration, sample content, image paths, rendering, search/filter behavior, favorites, cart calculations, theme switching, and visual interactions.        |
| `images/`      | Expected location for menu, hero, cuisine, and promotional image files referenced by the JavaScript and HTML. Add your own appropriately licensed image files here. |

The source references `style.css` and `script.js` relative to `savorly.html`. Image paths such as `images/pizza.jpg` are also relative to the HTML file. If you rename or move files, update the corresponding references.

## Requirements

- A modern browser with JavaScript enabled.
- A text editor or IDE for editing the source files.
- An image folder containing the image files referenced by the template, if you want the photo areas to display real images.
- An internet connection for the externally hosted Google Font and for links such as WhatsApp. The page can still use its fallback font if the Google Font is unavailable.

**No package manager, Node.js runtime, framework, or compilation step is required to view the site.** Node.js can optionally be used to check the JavaScript syntax during development.

## Run the template locally

1. Extract the project files into one folder.
2. Make sure `savorly.html`, `style.css`, and `script.js` are in the same folder.
3. Place the image assets in an `images/` subfolder, matching the filenames used by the data in `script.js` and by the promotional markup in `savorly.html`.
4. Open `savorly.html` in a modern browser.
5. Test the navigation, carousel, search, cuisine filters, favorites, theme toggle, cart drawer, promotional-code button, and WhatsApp link.

For a more realistic local development environment, serve the folder with any simple static HTTP server and open the local URL it provides. A server is not needed for the template's basic static use, but it can help avoid browser-specific restrictions when working with local assets.

## Quick customization

Most routine customization is intended to happen in the data and configuration section near the top of `script.js`, plus the shared design variables near the top of `style.css`.

### 1. Change the restaurant name and settings

Open `script.js` and find the `CONFIG` object near the top. Update the values for:

| Setting            | What it controls                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| `brand`            | The business name displayed in places marked with `data-brand`.                                            |
| `currency`         | The currency symbol shown with prices. This is a display setting, not currency conversion.                 |
| `deliveryFee`      | The sample delivery fee used by the front-end cart calculation.                                            |
| `freeDeliveryOver` | The sample subtotal threshold at which the delivery fee is waived.                                         |
| `promoCode`        | The code shown in the promotional area and copied by its button.                                           |
| `offerEnds`        | Optional ISO date/time for the promotion expiry; `null` uses the script's default expiry behavior.         |
| `autoplayMs`       | The hero carousel's slide interval in milliseconds.                                                        |
| `whatsapp`         | WhatsApp phone number, including country code and digits only. Do not include `+`, spaces, or punctuation. |
| `whatsappMessage`  | The default message inserted into the WhatsApp contact link.                                               |

Update the business name and sample marketing copy in `savorly.html` too where the wording is hard-coded rather than generated from the configuration.

### 2. Change the colors and overall style

Open `style.css` and look for the `:root` custom properties near the beginning of the file. These variables define the primary orange, backgrounds, surfaces, text, borders, accent colors, shadows, corner radius, typography, and layout dimensions.

- Change the shared variables first to rebrand the site consistently.
- Review the `[data-theme="dark"]` overrides so the dark theme remains legible.
- Keep text/background contrast strong and preserve visible keyboard focus styles.
- Later sections of the stylesheet style individual components; responsive rules are near the end.

### 3. Change the hero carousel

In `script.js`, edit the `SLIDES` array. Each slide contains its eyebrow label, title lines, supporting text, featured item name/description/price, main image, and optional secondary images. Keep the array/object structure intact when changing the content.

### 4. Change service-benefit messages

Edit the `FEATURES` array in `script.js`. Each entry contains an icon name, title, and supporting line. Icon names must correspond to SVG symbols declared in `savorly.html` (for example, `truck` or `shield`). Do not promise services the business does not actually provide.

### 5. Change categories and dishes

Edit `CUISINES` and `DISHES` in `script.js`. More details are in [Menu and cuisine data](#menu-and-cuisine-data).

### 6. Change partner names

Edit the `PARTNERS` array in `script.js`. These are sample labels and should be replaced with real partner names or removed if the business does not need this section.

### 7. Update footer and links

In `savorly.html`, replace the sample description, social links, company/support/legal labels, and other demo destinations. Several links are labels without an `href`; add a valid destination or remove the link element before launch. Add the real social profile URLs to the social anchors. Review the copyright year and all contact information.

## Menu and cuisine data

### Cuisine objects

Each object in the `CUISINES` array includes:

- `id`: a unique internal identifier.
- `name`: the label shown to customers.
- `count`: a display label, such as `120+`; it is sample presentation text and is not calculated from a live inventory.
- `tint`: a CSS style variant for the card.
- `img`: the relative image path.

Every cuisine `id` should be unique. A dish's `cuisine` value must match one of these IDs for category filtering and labels to work correctly.

### Dish objects

Each object in the `DISHES` array includes:

- `id`: a unique identifier used by the cart and rendering logic.
- `name`: dish name.
- `sub`: short description.
- `price`: numeric sample price, using the same currency basis as `CONFIG.currency`.
- `rating`: sample display rating; it is not retrieved from customer reviews.
- `cuisine`: matching cuisine ID from `CUISINES`.
- `tag`: optional badge information; use `null` to hide the badge.
- `featured`: whether the dish appears in the initial featured set before the user chooses to see all.
- `img`: image path created with the `photo()` helper.

When adding a dish, use a unique `id`, a valid cuisine ID, a numeric price, and an image path that exists. When removing or renaming a cuisine, update the related dish entries too. The supplied names, prices, ratings, promotions, counts, and descriptions are demonstration data; verify all business details before use.

### Currency and pricing

The `currency` value only changes the displayed symbol. It does not convert prices or determine a locale-specific number format. Set every dish price, delivery fee, and free-delivery threshold to the same intended currency and update the visible promotional copy accordingly. The cart is a front-end demonstration and should not be used as an authoritative pricing or tax system.

## Images and other assets

The `photo()` helper in `script.js` builds image paths in the form `images/<filename>.jpg`. For example, `photo('pizza')` points to `images/pizza.jpg`.

1. Create an `images/` folder next to `savorly.html` if it does not already exist.
2. Add the image files referenced in `SLIDES`, `CUISINES`, and `DISHES`, along with the files used directly in `savorly.html` promotional blocks.
3. Match the filenames and extensions exactly. File paths can be case-sensitive when deployed to many web servers.
4. Use high-quality images with appropriate crop and dimensions for the relevant card or hero area.
5. Only use images you own or have permission to use.
6. If you prefer different filenames or file extensions, update the relevant paths in `script.js` or `savorly.html`.

Some page image containers are designed to show a labelled placeholder when no image path is supplied. An empty image area does not mean the site has fetched a remote menu or restaurant catalogue; this template has no live content service.

## How the page is organized

The main sections in `savorly.html` are:

1. **Document setup** — metadata, title, font link, stylesheet link, and an early theme-restoration script.
2. **Visual effects and preloader** — progress indicator, pointer ring, canvas effects, and loading screen.
3. **SVG icon library** — reusable symbols referenced by icon names throughout the HTML and JavaScript. Keep symbol IDs synchronized with their references.
4. **Header and navigation** — brand, search, theme, favorites, cart, and account-style controls.
5. **Side and bottom navigation** — responsive navigation for different screen sizes.
6. **Hero carousel** — slide content is generated from `SLIDES` in `script.js`.
7. **Service benefits** — generated from `FEATURES`.
8. **Cuisine/category section** — category cards are inserted into `#cuisineRow`.
9. **Menu section** — dish cards and filter controls are inserted into `#dishGrid` and `#filterBar`.
10. **Promotions** — promotional copy, code, countdown, and image areas.
11. **Partner strip** — names are generated from `PARTNERS`.
12. **Footer** — business description, social links, navigation labels, and newsletter demonstration.
13. **Cart drawer and status messages** — the HTML provides containers that JavaScript fills or controls.
14. **WhatsApp contact link** — its URL is built from the settings in `CONFIG`.

The HTML contains IDs and `data-*` attributes that JavaScript relies on. If you rename or remove elements such as `dishGrid`, `cuisineRow`, `drawer`, `cartList`, `searchForm`, or `themeBtn`, search for their references in `script.js` and update the code consistently.

## Interactive behavior

The template's interactions are implemented in `script.js` and run in the visitor's browser.

### Search and category filters

The search form searches the sample content and displays matching suggestions/results. Cuisine selection filters the displayed menu. The search and filtering behavior only knows about the data included in `script.js`; it does not query an external catalogue.

### Favorites and local storage

Favorite selections and the chosen theme may be stored in browser local storage when the browser permits it. This storage is specific to that browser/profile and is not a user account or a shared server database. Clearing browser data can remove saved state.

### Cart and totals

The cart drawer lets the visitor add sample dishes, adjust quantities, and see front-end totals. The delivery fee and free-delivery threshold are calculated using the `CONFIG` values. This cart does **not** submit an order to a restaurant, reserve stock, validate prices on a server, calculate real taxes, or process payment.

### WhatsApp

The floating contact button and related links open a WhatsApp URL generated from `CONFIG.whatsapp` and the configured message. Replace the sample number with the correct business number and test the link on the devices and browsers your customers use.

### Newsletter

The newsletter form is a local demonstration. It can validate the input and show a confirmation, but it does not save an email address or subscribe the visitor to a mailing list. Connect it to a legitimate email marketing provider or your own secure backend before claiming that subscriptions are active.

### Account control and other placeholders

An account-style control is part of the visual interface, but no complete authentication or customer-account system is included. Likewise, sample delivery, refund, secure checkout, partner, and support messages are presentation content and do not prove that those services are configured.

### Animation and theme

The script checks browser capabilities and the user's reduced-motion preference before running certain effects. The theme setting is stored in local storage when possible. The stylesheet defines the visual rules for both light and dark themes.

## Design and responsive layout

`style.css` controls the complete presentation. Its opening section defines reusable design tokens, including:

- Primary/accent colors and their variants.
- Page and card surface colors.
- Main and muted text colors.
- Border colors, shadows, and corner radii.
- Font family and layout dimensions.
- Dark-theme overrides.

Component rules later in the file style the header, navigation, hero, category cards, menu cards, promotional blocks, footer, cart drawer, and visual effects. Responsive rules adapt the layout to smaller viewports. Test your own copy, images, prices, and labels at mobile, tablet, and desktop sizes; longer business names or translations may require spacing adjustments.

## Accessibility notes

The template includes accessibility-oriented features such as semantic page regions, labels for search and newsletter inputs, accessible names for icon-only controls, status-message regions, visible keyboard focus styling, and reduced-motion checks for some effects.

Before publishing:

- Navigate the site using only a keyboard.
- Confirm focus remains visible and controls can be opened and closed without a mouse.
- Check color contrast in both themes.
- Provide meaningful alt text for informative images; keep decorative images hidden from assistive technology where appropriate.
- Check the page with a screen reader and at zoomed text sizes.
- Ensure motion effects do not prevent visitors from using the page.
- Do not rely on color alone to communicate an item state or promotion.

Accessibility should be re-tested after major HTML, CSS, or JavaScript changes.

## Production-readiness notes

This is a front-end template. Before treating it as a live marketplace, review the following points carefully.

- Replace all demo names, dish details, prices, ratings, partner names, promotional copy, counts, and service claims.
- Add and verify all image assets and confirm image usage rights.
- Replace the sample WhatsApp number and test the contact link.
- Add real destinations to social, support, company, privacy, terms, refund, and other footer links.
- Connect search and menu data to a trusted source if the catalogue needs to be managed dynamically.
- Implement a backend for order creation, order status, inventory, customer data, and business operations.
- Integrate a payment provider securely if online payments are required. Never collect or store raw payment-card details directly in this static template.
- Validate all prices, delivery fees, promotions, and order totals on the server; never trust browser-submitted totals.
- Add authentication and account management if customers need accounts.
- Connect the newsletter form to a real subscription service and obtain any required consent.
- Establish privacy, cookie, retention, refund, and terms policies that match actual operations and applicable law.
- Remove or correct any claims such as “safe checkout,” “easy refunds,” or “help anytime” unless the corresponding services are actually available.
- Test error states, empty search results, empty cart, unavailable images, mobile layout, browser storage restrictions, and keyboard accessibility.
- Review security, performance, and accessibility before launch.

## Troubleshooting

### The page has no styling

Confirm `style.css` is in the same folder as `savorly.html` and that the stylesheet link still points to `style.css`. Check the browser developer tools for a failed file request.

### Menu or cuisine cards are missing

Confirm `script.js` is loading and JavaScript is enabled. Check the browser console for errors. If you edited the data arrays, verify that each object follows the same structure as the examples and that IDs are unique.

### Images do not appear

Confirm the `images/` folder is next to `savorly.html`, filenames match the referenced paths exactly, and the file extension is correct. Also check that the image file is present and can be opened.

### A category filter does not show the expected dishes

Make sure the dish's `cuisine` value exactly matches an `id` in `CUISINES`. These values are identifiers, not display labels.

### The cart or theme does not retain state

The template uses browser local storage where available. Private browsing settings, browser policies, or cleared site data can prevent state from persisting. This is local browser state, not a server-side account.

### The WhatsApp button opens the wrong number

Update `CONFIG.whatsapp` to the intended country code and number using digits only, then reload and test the link.

### The newsletter appears to work but no email arrives

The form is only a front-end demonstration. Connect it to an email subscription service or backend to store and process signups.

### The page looks different after deployment

Check file paths and letter casing, especially for image assets. Also check the browser console and network panel for missing files, and test the responsive layout at the deployed URL.

## Browser support and limitations

The template is intended for current mainstream browsers. Some decorative effects depend on browser capabilities and are disabled or reduced when reduced-motion preferences are detected. A fallback font is specified if the external font cannot load.

Because this is a static front-end template, it does not include:

- A server or database.
- A live restaurant/menu management dashboard.
- Real customer accounts or authentication.
- Payment processing or secure checkout.
- Server-side order submission, delivery tracking, or stock reservation.
- A real newsletter subscription service.
- Live ratings, review collection, or partner integrations.
- Automatic currency conversion or tax calculations.

Those capabilities require additional implementation and testing beyond the included HTML, CSS, and JavaScript.

## License and third-party assets

No license terms are specified by this README. Confirm the license and ownership of the template before redistribution or commercial use. Replace demo photography with images you own or are licensed to use. The page loads the Plus Jakarta Sans font from Google Fonts; review the applicable font and third-party service terms for your deployment.

---

**Project:** Savorly restaurant/digital marketplace front-end template  
**Core stack:** HTML5, CSS, vanilla JavaScript  
**Entry page:** `savorly.html`

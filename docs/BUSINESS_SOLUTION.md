### Business Solution — Multi-Merchant Fashion Storefront

#### Purpose
Provide a ready-to-use, configurable ecommerce storefront for fashion merchants to showcase products, enable add-to-cart and wishlist, and inform customers via a built-in fashion news feed.

#### Who is this for?
- Independent fashion retailers
- Boutiques onboarding quickly without bespoke development
- Brands that want a lightweight, customizable storefront

#### Key Capabilities
- Product catalogue for men and women with rich product pages
- Cart and wishlist with persistent state
- Toast notifications for user feedback
- Checkout handoff (mock) with success confirmation page — ready to integrate with payment providers
- Fashion news feed embedded on the site (`/news`)
- Merchant configuration for site name, currency/locale, and product source (static vs JSON)

#### Merchant Onboarding Steps
1) Branding
   - Set `NEXT_PUBLIC_MERCHANT` to a configured merchant key in `src/config/merchant.ts`
   - Adjust `siteName`, `description`, `currency`, `locale`
2) Products
   - Option A (static): Edit `src/data/products.ts` and place images in `public/images/men|women`
   - Option B (JSON): Set `productsSource: "json"` and `productsJsonPath` in `src/config/merchant.ts`; supply JSON file per the schema
3) Images
   - Keep image filenames aligned with product descriptions; use consistent naming (`men-*`, `women-*`)
4) Policies
   - Add your shipping/returns/contact pages via Next.js routes if needed

#### Operations
- Content updates are file-based (git), or drop-in JSON files
- No central database required; can be extended to a headless CMS later

#### Extensibility Roadmap
- Payments: Integrate Stripe/PayPal checkout instead of mock
- Analytics: Add consented analytics and conversion tracking
- Search/Filters: Category/price filters and search across catalog
- Internationalization: Translate labels based on `locale`
- Promotions: Add coupons and promotional banners

#### SLA/Support
- This repo is intended for self-hosted deployments. Testing and rollouts can be gated by `npm run build` and preview deployments (e.g., Vercel).



# Sanity CMS Setup

This project uses Sanity CMS for content management. Each page section is a separate document that can be edited in the Sanity Studio.

## Initial Setup

### 1. Create Sanity API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API → Tokens
4. Create a new token with **Editor** permissions
5. Add it to your `.env.local` file:

```bash
SANITY_API_TOKEN=your_token_here
```

### 2. Seed Initial Documents

Run the seed script to create all section documents with example data:

```bash
npm run sanity:seed
```

Or if you don't have tsx installed globally:

```bash
npx tsx sanity/scripts/seed.ts
```

This will create:

- Hero Section
- Services Section
- About Section
- Testimonials Section
- CTA Section
- Contact Section

All documents will be created with example content that matches the current hardcoded content.

## Studio Access

Access the Sanity Studio at: `http://localhost:3000/studio`

## Document Structure

Each section is a separate document:

- **Hero Section** - Main hero banner content
- **Services Section** - Services grid with icons
- **About Section** - About text and stat cards
- **Testimonials Section** - Client testimonials carousel
- **CTA Section** - Call-to-action with contact info
- **Contact Section** - Contact form heading

## Editing Documents

1. Go to `/studio`
2. Click on any section in the sidebar
3. Edit the content
4. Click "Publish" to make changes live

## Restrictions

- Documents cannot be created or deleted (only edited)
- Each section has exactly one document
- Documents are pre-created with example data

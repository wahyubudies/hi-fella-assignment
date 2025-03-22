# Hi-Fella Test

## Getting Started
First, run the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

### Path Aliases
This project uses path aliases for cleaner imports:

- `@/` - Points to the `src/` directory
- `@public/` - Points to the `public/` directory

Example usage:

```js
// Instead of
import { Button } from '../../../components/ui';

// You can use
import { Button } from '@/components/ui';

// For public assets
import Logo from '@public/images/logo.png';
```

### Directory Structure
```
hi-fella-test/
├── public/               # Static assets
│   ├── icons/            # SVG icons
│   └── images/           # Images and graphics
├── src/                  # Source code
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # Reusable UI components
│   └── data/             # JSON data files
```

#### `/src/app`
Contains the Next.js App Router pages and layouts.

#### `/src/components`
Contains all React components, organized into subdirectories:

- `/layout` : Components that form the structure of the page (Navigation, Footer, etc.)
- `/ui` : Reusable UI components (Button, Badge, Card, etc.)

When creating a new component, you should register it in the corresponding `index.js` file:

```js
// Example: src/components/layout/index.js
export { default as Navigation } from './Navigation';
export { default as Footer } from './Footer';
export { default as ProfileSetupCard } from './ProfileSetupCard';
```

This allows for cleaner imports:

```js
import { Navigation, Footer } from '@/components/layout';
```

#### `/src/data`
Contains JSON data files used throughout the application, such as:

- `setupSteps.json` - Profile setup steps data
- `usersToFollow.json` - User data for the "Who to follow" component
- `featuredProducts.json` - Product data for the featured products section

#### `/public`
Contains static files that are served directly:

- `/icons` : SVG icons used throughout the application
- `/images` : Image assets like logos, avatars, and product images

## Implementation Approach
This project follows these key principles:

1. **Component-Based Architecture** : UI is broken down into reusable components.
2. **Separation of Concerns** : Components are organized by their function (layout vs. UI).
3. **Data Separation** : Static data is stored in JSON files separate from components.
4. **Client-Side Interactivity** : Interactive components use React state and `"use client"` directive.
5. **Responsive Design** : All components are designed to work across different screen sizes.

## Tools and Technologies
- **Next.js 14** : React framework with App Router
- **React** : UI library
- **Tailwind CSS** : Utility-first CSS framework
- **ESLint** : Code linting
- **Next.js Image Optimization** : For optimized image loading
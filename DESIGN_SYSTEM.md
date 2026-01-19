# giddyOS Design System

## Overview

giddyOS is a macOS-inspired desktop environment built as a web application. This design system serves as a comprehensive guide for maintaining consistency and quality when making changes to the project.

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4 with custom CSS
- **State Management**: Zustand
- **Deployment**: GitHub Pages via gh-pages

## Design Philosophy

giddyOS follows macOS design principles with a focus on:
- Clean, minimal aesthetics
- Consistent spacing and alignment
- Smooth hover effects and transitions
- Hierarchical information display
- Familiar desktop environment patterns

### Key Design Principles
1. **Consistency**: Use established patterns for similar interactions
2. **Hierarchy**: Clear visual hierarchy through size, spacing, and contrast
3. **Accessibility**: Keyboard navigation and screen reader support
4. **Performance**: Lightweight animations and efficient rendering
5. **Maintainability**: Modular components with clear separation of concerns

## Color System

### Primary Colors
- **Black**: `#000000` - Primary text, borders, hover states
- **White**: `#FFFFFF` - Backgrounds, text on dark backgrounds

### Semantic Colors
- **Dialog Backdrop**: Red gradient pattern for modal overlays
- **Hover States**: Black background with white text
- **Borders**: 1px solid black for all structural elements

### Usage Guidelines
- Use black/white primarily - minimal color palette for clean aesthetic
- Hover states: Invert colors (black bg → white text)
- Backdrop effects: Use CSS backdrop-filter for glassmorphism effects

## Typography

### Font Family
- **System Default**: Inherits from browser/system fonts
- **No custom fonts**: Maintains native OS appearance

### Text Sizes
- **Header Text**: Default browser size
- **Body Text**: Default browser size
- **Menu Items**: Default browser size
- **Labels**: Default browser size

### Text Styling
- **No custom line-heights**: Use browser defaults
- **No custom letter-spacing**: Use browser defaults
- **Text Transform**: None (except where semantically appropriate)

## Spacing & Layout

### Grid System
- **Layout**: CSS Grid with `grid-template-rows: auto 1fr auto`
- **Header**: Auto-sized
- **Main**: Flexible (`1fr`)
- **Footer**: Auto-sized

### Spacing Scale
- **Small**: 4px (padding, margins)
- **Medium**: 8px (component padding)
- **Large**: 12px (container padding)
- **Extra Large**: 16px (section spacing)

### Component Spacing
- **Header**: `px-4` (16px horizontal padding)
- **Footer**: `p-4` (16px padding) + `gap-2` (8px gaps)
- **Menu Items**: `px-2` (8px horizontal padding)
- **Icons**: Consistent sizing (30px header, 50px dock, 100px desktop)

### Border Radius
- **Buttons**: `rounded-full` (50% border radius)
- **Containers**: `rounded-[10px]` for footer dock
- **Icons**: `rounded-[8px]` default, `rounded-[12px]` on hover

## Components

### Layout Components

#### Header
```tsx
<header className="flex justify-between items-center px-4">
```
- Top navigation bar with logo, menus, and time display
- Border bottom: 1px solid black
- Logo: 30x30px, switches between black/white variants on hover

#### Main
```tsx
<main>
```
- Central content area
- Desktop icons arranged vertically
- Contains modal dialogs

#### Footer
```tsx
<footer className="p-4 gap-2">
```
- macOS-style dock with app icons
- Centered with `margin: 1px auto`
- Glassmorphism effect with `backdrop-filter: blur(10px)`

### Interactive Components

#### Dropdown
```tsx
<div className="dropdown">
  <button className="flex items-center" type="button">
    {trigger}
  </button>
  <div className="dropdown-content" role="menu">
    {content}
  </div>
</div>
```
- Hover-activated dropdown menus
- Positioned absolutely below trigger
- Min width: 200px

#### DesktopIcon
```tsx
<div className="flex flex-col items-center w-fit">
  <div className="w-[100px]">
    <img src={icon} className="w-full" />
  </div>
  <div>
    <p>{name}</p>
  </div>
</div>
```
- Icon + label combination
- 100px wide icon container
- Centered text below icon

#### WindowControlButton
```tsx
<button className="flex items-center justify-center border w-[20px] h-[20px] rounded-full">
  {char}
</button>
```
- Circular buttons for window controls (close, minimize, maximize)
- 20x20px with full border radius

### Dialog/Modal
```tsx
<dialog open={open}>
  <div className="flex border-b">
    {/* Window controls */}
  </div>
  <div className="p-4">
    {/* Content */}
  </div>
</dialog>
```
- Native HTML dialog element
- Custom backdrop with red gradient pattern
- Window controls in header bar

## Icons & Assets

### Icon Sizes
- **Header Logo**: 30x30px
- **Dock Icons**: 50x50px
- **Desktop Icons**: 100px width (maintains aspect ratio)

### Icon States
- **Default**: `object-fit: contain`
- **Hover**: Scale transform + increased border radius
- **Transition**: `all 0.2s ease`

### Asset Organization
```
src/assets/
├── icons/     # App and system icons
├── images/    # Logos and larger graphics
```

## CSS Architecture

### TailwindCSS v4
- **Import**: `@import "tailwindcss";`
- **Utility Classes**: Primary styling method
- **Custom CSS**: Component-specific styles only

### CSS File Structure
```
src/styles/
├── index.css    # Global styles and Tailwind import
├── header.css   # Header-specific styles
├── footer.css   # Footer-specific styles
├── dropdown.css # Dropdown-specific styles
```

### CSS Guidelines
1. **Prefer Tailwind**: Use utility classes for styling
2. **Custom CSS**: Only for complex selectors or unsupported utilities
3. **Component CSS**: Co-located with components
4. **No global styles**: Avoid affecting elements outside component scope

## File Organization

### Component Structure
```
src/components/
├── ComponentName.tsx    # Component implementation
├── ComponentName/       # If complex, use folder
│   ├── index.tsx
│   ├── ComponentName.tsx
│   └── styles.css
```

### State Management
```
src/actions/
├── storeName.ts    # Zustand stores
```

### Menus & Data
```
src/menus/
├── menu.data.ts    # Menu configuration
├── menu.types.ts   # TypeScript interfaces
```

### Assets
```
src/assets/
├── icons/     # PNG/SVG icons
├── images/    # Logos and graphics
```

## State Management

### Zustand Pattern
```ts
const useStore = create((set) => ({
  state: initialValue,
  action: () => set({ state: newValue }),
}));
```

### Current Stores
- **OS Actions**: Dialog/modal state management
- **Single Responsibility**: Each store handles one domain

### State Guidelines
1. **Minimal State**: Only store necessary application state
2. **Actions**: Colocate actions with state definitions
3. **Selectors**: Use selectors for computed values
4. **No Side Effects**: Keep stores pure

## Development Guidelines

### Component Development
1. **TypeScript**: Strict typing for all props and state
2. **Functional Components**: Use function components with hooks
3. **Props Interface**: Define interfaces for component props
4. **Default Props**: Use default parameters or defaultProps

### Styling Guidelines
1. **Tailwind First**: Use Tailwind utilities for styling
2. **Consistent Classes**: Follow established class naming patterns
3. **Responsive**: Design mobile-first where appropriate
4. **Performance**: Avoid unnecessary re-renders

### Code Quality
1. **Prettier**: Automatic code formatting
2. **ESLint**: Code linting (if configured)
3. **TypeScript**: Strict type checking
4. **Clean Code**: Self-documenting code with clear naming

## Naming Conventions

### Components
- **PascalCase**: `ComponentName.tsx`
- **Descriptive**: `DesktopIcon`, `WindowControlButton`
- **No Abbreviations**: Spell out component purposes

### Files
- **kebab-case**: `menu-data.ts`, `os-actions.ts`
- **Descriptive**: `header.css`, `dropdown.css`

### CSS Classes
- **kebab-case**: `header-logo`, `dock-icon`
- **Component Prefix**: `dropdown-menu-item`
- **State Suffixes**: `-hover`, `-active`

### TypeScript
- **Interfaces**: `IComponentName` or `ComponentNameProps`
- **Types**: `MenuItem`, `SystemApp`
- **Constants**: `UPPER_SNAKE_CASE`

## Accessibility

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through interactive elements
- **Focus Indicators**: Visible focus states
- **Keyboard Shortcuts**: Standard shortcuts where applicable

### Screen Readers
- **ARIA Labels**: Appropriate labels for interactive elements
- **Semantic HTML**: Use correct HTML elements
- **Alt Text**: Descriptive alt text for images

### Color Contrast
- **High Contrast**: Black/white provides excellent contrast
- **Focus States**: Clear visual indication of focus

## Performance Considerations

### Bundle Size
- **Tree Shaking**: Only import used utilities
- **Lazy Loading**: Load components as needed
- **Asset Optimization**: Compress images and icons

### Rendering
- **Memoization**: Use React.memo for expensive components
- **State Updates**: Minimize unnecessary re-renders
- **Animations**: Use CSS transforms for smooth animations

### Development
- **Hot Reload**: Fast development with Vite
- **Type Checking**: Fast TypeScript compilation
- **Build Optimization**: Optimized production builds

## Deployment

### GitHub Pages
- **Build Command**: `npm run build`
- **Deploy Command**: `npm run deploy`
- **Base Path**: Root domain deployment

### CI/CD
- **GitHub Actions**: Automated deployment workflow
- **Build Verification**: Pre-deployment build checks

## Contributing

When making changes to giddyOS:

1. **Review Design System**: Ensure changes align with established patterns
2. **Test Components**: Verify functionality and visual consistency
3. **Update Documentation**: Keep this design system current
4. **Follow Patterns**: Use existing components and utilities
5. **Performance Check**: Ensure changes don't impact performance

This design system should be updated whenever new patterns are established or existing patterns change.
# Konsta UI - Angular

**Autonomous Angular Fork v5.0.4**

Pixel perfect mobile UI components built with Tailwind CSS for Angular. Features iOS and Material Design components optimized for mobile applications.

## Installation

```bash
npm install konsta
```

## Peer Dependencies

```bash
npm install @angular/common @angular/core tailwindcss
```

## Usage

Import components and styles in your Angular application:

```typescript
import { Component } from '@angular/core';
import { KButton } from 'konsta';
import 'konsta/theme.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KButton],
  template: `<k-button>Click me</k-button>`
})
export class AppComponent {}
```

## Features

- 65+ Angular components
- iOS and Material Design themes
- Built with Tailwind CSS
- TypeScript support
- Standalone component architecture
- Modern package exports
- Zero dependencies (except peer dependencies)

## Documentation

For the original Konsta UI documentation, visit https://konstaui.com

This is an autonomous Angular-only fork. Check the repository for Angular-specific examples and documentation.

## License

MIT

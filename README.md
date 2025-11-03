# Konsta UI - Angular

**Autonomous Angular Fork v5.0.4**

Pixel perfect mobile UI components built with Tailwind CSS for Angular. Features iOS and Material Design components optimized for mobile applications.

This is an autonomous fork of the original Konsta UI project, focused exclusively on Angular support with modern exports and package structure.

## Features

- 65+ Angular components
- iOS and Material Design themes
- Built with Tailwind CSS
- TypeScript support
- Standalone component architecture
- Modern package exports
- Zero dependencies (except peer dependencies)

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
  template: `
    <k-button>Click me</k-button>
  `
})
export class AppComponent {}
```

## Development

First, install all dependencies:

```bash
npm install
```

### Production Build

To build the production version:

```bash
npm run build
```

Compiled results will be available in the `package/` folder.

### Development Server

To run the Kitchen Sink demo with development environment:

```bash
npm run dev
```

or

```bash
npm run angular
```

## Project Structure

- `src/angular/` - Angular component source code
- `src/shared/` - Framework-agnostic utilities and classes
- `src/styles/` - Global CSS styles
- `kitchen-sink/angular/` - Demo application

## Contributing

All changes should be committed to `src/` files only.

## License

MIT

## Original Project

This is an autonomous fork of [Konsta UI](https://github.com/konstaui/konsta) by Vladimir Kharlampidi.

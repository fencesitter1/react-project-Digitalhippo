---
toc:
  depth_from: 1
  depth_to: 3
  ordered: false

---

# Table of Content

[toc]

# DigitalHippo

react notes of React project:digital hippo

# source

from youtuber Josh 
[Build a Complete Digital Marketplace with Next.js 14, React, tRPC, Tailwind | Full Course 2023](https://www.youtube.com/watch?v=06g6YJ6JCJU&t=327s)

# Getting started

## initialization

- Initialization project

```shell
$ npx create-next-app@latest digitalhippo
```

  - options
    √ Would you like to use TypeScript? ... No / **Yes**
      √ Would you like to use ESLint? ... No / **Yes**
      √ Would you like to use Tailwind CSS? ... No / **Yes**
      √ Would you like to use `src/` directory? ... No / **Yes**
      √ Would you like to use App Router? (recommended) ... No / **Yes**
      √ Would you like to customize the default import alias (@/*)? ... **No** / Yes

- Start the server

  ```shell 
  yarn dev
  ```

  If an error about yarn occurs,you should install yarn first.

  ```shell 
  npm install -g yarn
  ```

- open the local link

  http://localhost:xxxx

- Clear the initial page content
  `src/app/page.tsx`

  ```tsx
  export default function Home() {
  return (
    <p>hello world</p>
  )
  }
  ```

  - Tip: Quickly select all content of the HTML element near the cursor
    Search `emmet:balance(outward)`and set this shortcut in the VSCode keyboard shortcuts settings

- install shadcn/ui library

  ```shell
  npx shadcn-ui@latest init
  ```

  - options
    √ Would you like to use TypeScript (recommended)? ... no / **yes**
    √ Which style would you like to use? » Default
    √ Which color would you like to use as base color? » Slate
    √ Where is your global CSS file? ... app/globals.css
    √ Would you like to use CSS variables for colors? ... no / **yes**
    √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...     
    √ Where is your tailwind.config.js located? ... tailwind.config.js
    √ Configure the import alias for components: ... @/components
    √ Configure the import alias for utils: ... @/lib/utils
    √ Are you using React Server Components? ... no / **yes**
    √ Write configuration to components.json. Proceed? ... **yes**
    Keep the default and YES option

# 11:17 - Making this look good right away

## Modify in layout.tsx

[layout](./src/app/layout.tsx#L19) 

## create MaxWidthWrapper component
- main function 
The [MaxWidthWrapper](./src/components/MaxWidthWrapper.tsx) component provides a styled container with a maximum width and specific padding, ensuring consistent layout across different devices.

- Import as a parent component in the homepage
[page](./src/app/page.tsx#L6)

## change the theme of shadcn/ui
- [shadcn/ui/themes](https://ui.shadcn.com/themes) select your theme 
- copy the code 
- replace corresponding part in [globals.css](./src/app/globals.css)


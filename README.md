---
toc:
  depth_from: 1
  depth_to: 3
  ordered: false

---

# Table of Content

- [Table of Content](#table-of-content)
- [DigitalHippo](#digitalhippo)
- [source](#source)
- [Getting started](#getting-started)
  - [initialization](#initialization)
- [11:17 - Making this look good right away](#1117---making-this-look-good-right-away)
  - [Modify in layout.tsx](#modify-in-layouttsx)
  - [create MaxWidthWrapper component](#create-maxwidthwrapper-component)
  - [change the theme of shadcn/ui](#change-the-theme-of-shadcnui)
- [25:05 - Creating our landing page](#2505---creating-our-landing-page)
  - [tailwind css style](#tailwind-css-style)
    - [Letter Spacing](#letter-spacing)
  - [different device ,different flex discharge](#different-device-different-flex-discharge)
    - [different style of regular ,small and large device](#different-style-of-regular-small-and-large-device)
  - [Add button style of shandcn/ui library](#add-button-style-of-shandcnui-library)
    - [Installtion](#installtion)
    - [Usage](#usage)
    - [Link](#link)
  - [arrows](#arrows)
  - [Lucide icon library](#lucide-icon-library)
    - [Installtion](#installtion-1)
    - [Usage](#usage-1)
  - [hero part](#hero-part)
  - [Strength/ advantage](#strength-advantage)
- [test](#test)



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
      - √ Would you like to use TypeScript? ... No / **Yes**
      - √ Would you like to use ESLint? ... No / **Yes**
      - √ Would you like to use Tailwind CSS? ... No / **Yes**
      - √ Would you like to use `src/` directory? ... No / **Yes**
      - √ Would you like to use App Router? (recommended) ... No / **Yes**
      - √ Would you like to customize the default import alias (@/*)? ... **No** / Yes

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
    
    
    
    - √ Would you like to use TypeScript (recommended)? ... no / **yes**
    - √ Which style would you like to use? » Default
    - √ Which color would you like to use as base color? » Slate
    - √ Where is your global CSS file? ... app/globals.css
    - √ Would you like to use CSS variables for colors? ... no / **yes**
    - √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...     
    - √ Where is your tailwind.config.js located? ... tailwind.config.js
    - √ Configure the import alias for components: ... @/components
    - √ Configure the import alias for utils: ... @/lib/utils
    - √ Are you using React Server Components? ... no / **yes**
    - √ Write configuration to components.json. Proceed? ... **yes**

# 11:17 - Making this look good right away

## Modify in layout.tsx

[layout](./src/app/layout.tsx#L19) 

## create MaxWidthWrapper component
- main function 
The [MaxWidthWrapper](./src/components/maxWidthWrapper.tsx) component provides a styled container with a maximum width and specific padding, ensuring consistent layout across different devices.

- Import as a parent component in the homepage

## change the theme of shadcn/ui
- [shadcn/ui/themes](https://ui.shadcn.com/themes) select your theme 
- copy the code 
- replace corresponding part in [globals.css](./src/app/globals.css)

# 25:05 - Creating our landing page

**Entire code**:[page](./src/app/page.tsx#L29) line29~line78

## tailwind css style 

- sm:text-6xl

The `sm:text-6xl` class is a utility class in Tailwind CSS, a popular utility-first CSS framework.

This class is composed of two parts: `sm:` and `text-6xl`.

- `sm:` is a responsive variant in Tailwind. It applies the following styles only on small (`sm`) screens and above. By default, in Tailwind CSS, `sm:` applies to screens wider than 640px.

- `text-6xl` is a utility that sets the font size of the text. The `6xl` size in Tailwind CSS is by default set to `4rem`, which is typically equivalent to `64px`.

So, `sm:text-6xl` means that the text will have a font size of `4rem` (`64px`) on small screens (screen width of 640px and above). On screens smaller than 640px, this class will have no effect unless there's a base font size defined elsewhere in your styles.

### Letter Spacing

- tracking-tight

```css
.tracking-tight {
  letter-spacing: -0.025em;
}
```

- [official wbsite:Letter Spacing](https://tailwindcss.com/docs/letter-spacing#customizing-your-theme)

![image-20240116190413866](https://cdn.jsdelivr.net/gh/fencesitter1/pictures/img/2024/01/16/image-20240116190413866_19-10-10.png)

- text-muted-foreground

## different device ,different flex discharge

```css
<div className='flex flex-col sm:flex-row gap-4 mt-6'>
```

The meaning of `flex-col sm:flex-row` is that 

on small screens, the child elements are arranged vertically (forming a column). 

On medium screens and larger, the child elements are arranged horizontally (forming a row).

### different style of regular ,small and large device 

```tsx
<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"></div>
```

- sm:grid-cols-2

```css
@media (min-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
// wit
```

This is a CSS rule using a media query. It applies the `.sm:grid-cols-2` class styles when the screen width is at least 640px (typically considered as small devices or larger).

- lg:grid-cols-3

```css
@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

This is a CSS rule using a media query. It applies the `.lg:grid-cols-3` class styles when the screen width is at least 1024px (typically considered as large devices like desktop screens).

## Add button style of shandcn/ui library 

https://ui.shadcn.com/docs/components/button

### Installtion

```shell
npx shadcn-ui@latest add button
```

[button.tsx](src/components/ui/button.tsx) file will be generated.

### Usage

```tsx
import { Button } from "@/components/ui/button"
<Button variant="outline">Button</Button>
```

### Link

You can use the `buttonVariants` helper to create a link that looks like a button.

```tsx
import { buttonVariants } from "@/components/ui/button"

<Link className={buttonVariants({ variant: "outline" })}>Click here </Link>
```

Alternatively, you can set the `asChild` parameter and nest the link component.

```tsx
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}

```

## arrows

Arrows in HTML can be represented using HTML entities, Unicode characters, or CSS. Here are a few examples:

1. **HTML Entities**: These are special strings that start with an ampersand (&) and end with a semicolon (;). They represent special characters that are not easily typed into a document. For example, `&rarr;` represents a right arrow (→), `&larr;` represents a left arrow (←).

   ```html
   <p>Right arrow: &rarr;</p>
   <p>Left arrow: &larr;</p>
   ```

2. **Unicode Characters**: You can also use Unicode characters to represent arrows. For example, the Unicode character for a right arrow is `&#8594;`, and for a left arrow is `&#8592;`.

   ```html
   <p>Right arrow: &#8594;</p>
   <p>Left arrow: &#8592;</p>
   ```

## Lucide icon library

### Installtion

```shell
yarn add lucide-react
```

### Usage

```tsx
import { ArrowDownToLine } from 'lucide-react';
Icon: ArrowDownToLine,
```

- keyshortcut:`alt+shift+↓`

  ​	Copy throughout the section fastly

## hero part

- show

![image-20240116215049819](https://cdn.jsdelivr.net/gh/fencesitter1/pictures/img/2024/01/16/image-20240116215049819_21-50-53.png)

- code

[hero component ](src/app/page.tsx#L29)

## Strength/ advantage

- display

![image-20240116215527157](https://cdn.jsdelivr.net/gh/fencesitter1/pictures/img/2024/01/16/image-20240116215527157_21-55-28.png)

- code

[Icons:some call to actions](src/app/page.tsx#L40)

[Todo:Specific advantage introduction](src/app/page.tsx#L53)

# test
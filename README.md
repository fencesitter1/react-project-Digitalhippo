---
toc:
  depth_from: 1
  depth_to: 3
  ordered: false

---

# Table of Content

[TOC]

# DigitalHippo

react notes of React project:digital hippo

# source

from youtuber Josh 
[Build a Complete Digital Marketplace with Next.js 14, React, tRPC, Tailwind | Full Course 2023](https://www.youtube.com/watch?v=06g6YJ6JCJU&t=327s)

## Github storehouse

[joschan21-digitalhippo](https://github.com/joschan21/digitalhippo?tab=readme-ov-file)

[COPY-PASTE-LIST.md](https://github.com/joschan21/digitalhippo/blob/master/COPY-PASTE-LIST.md)

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

### keyshortcut:`alt+shift+↓`

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



# 44:40 - Creating our dynamic, beautiful navbar

## css-style

- `sticky`: Positions the element as "sticky", which is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.
- `z-50`: Sets the z-index of the element to 50. The z-index property in CSS controls the vertical stacking order of elements that overlap. An element with a higher z-index is rendered in front of an element with a lower one.
- `inset-x-0`: This is shorthand for `left-0` and `right-0`, which position the left and right edges of the element to align with the left and right edges of its nearest positioned ancestor.
- [border width](https://tailwindcss.com/docs/border-width#all-sides) 
  - `border-b`: Adds a border to the bottom edge of an element. The width of the border is defined by the `borderWidth` theme setting, which by default is `1px`.
- hidden: `.hidden {display: none;}`
- `aria-hidden="true"`:is  being used to hide an element from screen readers. This could be because the element is purely decorative.
- `display: flow-root`:By setting `display: flow-root` on a container, you create a new block formatting context. This means that the container will expand to contain its floated children, preventing the container from collapsing. 

## Navbar components

- create `src/components/navbar.tsx`  [navbar.tsx](src/components/navbar.tsx)
- import and rendered in [layout.tsx](src/app/layout.tsx)
- create `src/components/navItems.tsx`  [navItems.tsx](src/components/navItems.tsx)
- need to add line:"use client"

​		You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

- create `src/components/navItem.tsx` [navItem.tsx](src/components/navItem.tsx)

## Server Components and Client Components

- Official website introduction

​		[Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

​		[Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

- difference 

  Server Component is a component that is fetched and rendered **ON THE SERVER**, while Client Component is the one that is fetched and rendered **ON THE CLIENT(browser)**.

  - Client Components are fetched and rendered on the client (browser), requiring the browser to download all necessary JavaScript, including npm packages, to build the webpage. This can lead to **longer loading times** and **potentially poorer user experience**.

  - Server Components, on the other hand, are fetched and rendered on the server. The server returns HTML for these components, reducing the amount of JavaScript the browser needs to download and process. Only JavaScript for Client Components needs to be downloaded. This can result in **shorter browser rendering times and improved user experience.**

- When need to use Client Components?

  Client Components in React are used when you need to leverage features that are only available or make sense on the client-side. Here are some scenarios where you would use Client Components:

  1. **State Management**: If your component needs to maintain its own state or use React's state management features like `useState` or `useContext`, it should be a Client Component. Server Components cannot hold state.

  2. **Effects**: If your component needs to run side effects using `useEffect` (for example, to fetch data on component mount, or to subscribe to an event), it should be a Client Component. Server Components cannot use `useEffect`.

  3. **DOM Manipulation**: If your component needs to directly interact with the DOM (for example, to measure an element's size or position, or to manage focus), it should be a Client Component. Server Components do not have direct access to the DOM.

  4. **Interactivity**: If your component needs to respond to user interactions like clicks or key presses in a way that cannot be handled by server-side rendering (for example, to implement complex animations or transitions), it should be a Client Component.

  In our provided code, [navItems.tsx](src/components/navItems.tsx) is a Client Component because it uses the `useState` hook to manage state.

- How to [Using Client Components in Next.js](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs)?

​		To use Client Components, you can add the React [`"use client"` directive](https://react.dev/reference/react/use-client) at the top of a file, above your imports.

- [a good introduction -Server Components vs. Client Components in Next.js 13](https://blog.bitsrc.io/server-components-vs-client-components-in-next-js-13-617fe96df813)



## Keep a fixed position when the page is scrolled

To make an element stay in a fixed position while scrolling, you can use the CSS `position` property with the value `fixed`or `sitcky`. This removes the element from the normal document flow and positions it relative to the viewport.

Here's an example of how to use it using Tailwind CSS:

```jsx
<div className="fixed/sticky top-0 right-0">
  I'm a fixed element!
</div>
```

In this example, the `div` will be positioned in the top-right corner of the viewport and will stay there even when the page is scrolled. The `top-0` and `right-0` classes are used to position the element at the top and right of the viewport, respectively.

Remember, a fixed element does not leave a gap in the page where it would normally have been located. It's removed from the normal document flow. The space it would have taken up is collapsed.



## icons component

- create `src/components/icons.tsx`
- Specific detail reference code [icons.tsx](src/components/icons.tsx)
- import and use in navbar

## Click on other positions on the page to close Navbar

### Specific code implementation

[navItems.tsx](src/components/navItems.tsx)

```tsx
useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div
      className="flex gap-4 h-full"
      ref={navRef}
    >
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const isOpen = activeIndex === i;

        return (
          <Navitem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen} //!!null = false
          />
        );
      })}
    </div>
  );
```

### UseRef Hook

`useRef` is a built-in hook in React that allows you to create a mutable "reference" object. This object has a `.current` property that can hold any value and does not cause re-renders when its value changes.

Here are some common use cases for `useRef`:

1. **Accessing DOM elements**: You can pass a ref object to the `ref` attribute of a React element. After the component mounts, `.current` will point to the DOM element.

```jsx
import React, { useRef, useEffect } from 'react';

function ExampleComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    console.log(myRef.current);
    myRef.current.style.color = 'red';
  }, []);

  return (
    <div ref={myRef}> // After mounting, myRef.current will point to the div.
      Hello, useRef!
    </div>
  );
}

```

2. **Storing mutable variables**: If you need to keep track of a value across renders but don't want to trigger a re-render when it changes, you can use a ref.

```jsx
import React, { useRef, useEffect } from 'react';

function ExampleComponent() {
  const counterRef = useRef(0);

  useEffect(() => {
    console.log('Current counter value:', counterRef.current);
  }, []);

  const incrementCounter = () => {
    counterRef.current += 1;
  };

  return (
    <div>
      <p>Counter: {counterRef.current}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
// You can update the value without causing a re-render

```

In our code, `const navRef = useRef<HTMLDivElement | null>(null);` creates a ref that will be used to store a reference to a `div` element. This can be useful for measuring the element's size or position, or triggering imperative animations.

### useOnClickOutside Hook

The `useOnClickOutside` hook provides a convenient way to handle clicks outside of a component in ReactJS. Whether you're working on a modal, a dropdown menu, or any other component that needs to close when someone clicks outside of it, this hook can help.

```tsx
import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};
```

## press esc key to close Navbar

```tsx
  useEffect(() => {
    const handlerKeyEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    document.addEventListener('keydown', handlerKeyEsc);
    return () => {
      document.removeEventListener('keydown', handlerKeyEsc);
    };
  }, []);
```

## small screens hide,large screen show

```html
<div className="hidden lg:block lg:ml-8 lg:self-stretch">
 <div className="hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">1</div>
</div>
```



# 1:32:44 - Creating our shopping cart

## steps &&code file

- src/components/cart.tsx [cart.tsx](src/components/cart.tsx)
- `npx shadcn-ui@latest add sheet`
- `npx shadcn-ui@latest add separator`

## Sheet-Dialog component

[doc/sheet](https://ui.shadcn.com/docs/components/sheet)

## css-style

- text-muted-foreground

## Conditional check-Is it empty in the shopping cart

## Properly format price

[formatPrice](src/lib/utils.ts)

```tsx
export const formatPrice = (
  price: number | string,
  options: {
    currency?: 'USD' | 'CNY' | 'EUR' | 'GBP';
    notation?: Intl.NumberFormatOptions['notation'];
  } = {}
) => {
  const { currency = 'CNY', notation = 'compact' } = options;
  const numbericPrice = Number(price);

  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numbericPrice);
};	
```



## props:asChild

In total,the `asChild` prop in Radix primitives allows you to apply Radix's functionality to different element types or custom React components. When `asChild` is set to `true`, Radix doesn't render a default DOM element. Instead, it clones the child of the part and passes Our customized  props and behavior to make it functional.

[radix-ref-asChild](https://www.radix-ui.com/primitives/docs/guides/composition)

##  [statically imported](https://nextjs.org/docs/app/building-your-application/optimizing/images#local-images) image file

- error

**Error****:** **Failed to parse src "public/hippo-empty-cart.png" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)**

- solution

~~src="public/hippo-empty-cart.png"~~ -->`src="/hippo-empty-cart.png"`

# 1:55:55 - Setting up our server
# 2:14:30 - Setting up our admin dashboard
# 2:34:39 - How do we handle the auth flow?
# 2:40:10 - Implementing our auth flow
# 3:03:29 - tRPC setup (super handy backend tool)
# 3:32:33 - Finishing our auth flow
# 4:03:28 - Sending a sign-up verification email
# 4:40:28 - Proper error handling & finishing auth
# 5:14:24 - Making our navbar truly dynamic
# 5:29:41 - How do we architect our data models?
# 5:37:09 - Modelling our data & enabling uploads
# 6:41:37 - Showing products in our store
# 7:19:49 - AirBnB-style image slider
# 7:45:24 - Creating our product detail page
# 8:13:16 - Persistent shopping cart logic
# 8:40:47 - Creating our checkout page
# 9:20:23 - Protecting our API with secured routes
# 9:24:41 - Creating the user checkout sessions
# 9:55:27 - How does our payment flow look like?
# 9:57:57 - Creating the thank-you page
# 10:39:16 - Listening for stripe webhook locally
# 10:47:05 - Creating the receipt email
# 10:54:47 - Deployment to receive webhook in production
# 11:10:44 - Final security tweaks
# 11:36:08 - Final styling tweaks
# 11:56:04 - Final check - awesome!
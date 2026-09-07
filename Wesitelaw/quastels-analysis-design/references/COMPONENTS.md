# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Transition** | unknown | 30× | `.transition` |
| **Mb 4** | unknown | 7× | `.mb-4`, `.subheading` |
| **Cky Accordion** | unknown | 6× | `.cky-accordion` |
| **Cky Accordion Item** | card | 6× | `.cky-accordion-item` |
| **Cky Accordion Header Wrapper** | unknown | 6× | `.cky-accordion-header-wrapper` |
| **Cky Accordion Btn** | button | 6× | `.cky-accordion-btn` |
| **Cky Accordion Header Des** | unknown | 6× | `.cky-accordion-header-des` |
| **Border B 1** | list-item | 6× | `.border-b-1`, `.border-opacity-20`, `.border-white` |
| **!Text White** | unknown | 6× | `.!text-white`, `.2xl:pb-12`, `.[@media(min-width:1360px)]:text-sm` |
| **Cky Accordion Header** | unknown | 4× | `.cky-accordion-header` |
| **Cky Switch** | unknown | 4× | `.cky-switch` |
| **Btn White** | button | 4× | `.btn-white` |
| **Wrapper** | unknown | 3× | `.wrapper` |
| **Entered** | unknown | 3× | `.entered`, `.lazyload`, `.loaded` |
| **2xl:Px 14** | unknown | 3× | `.2xl:px-14`, `.border-b-1`, `.border-opacity-40` |
| **2xl:Text Heading 2xs** | unknown | 3× | `.2xl:text-heading-2xs`, `.bg-clip-text`, `.bg-gradient-four` |
| **2xl:Text Xl** | unknown | 3× | `.2xl:text-xl`, `.text-sm`, `.xl:text-lg` |
| **Blur Out Of Focus Item** | card | 3× | `.blur-out-of-focus-item`, `.border-b-1`, `.border-opacity-40` |
| **Flex** | card | 3× | `.flex`, `.flex-col`, `.items-center` |
| **Mb 6** | unknown | 3× | `.mb-6`, `.w-[100px]` |

## Cards

### Cky Accordion Item

**Instances found:** 6

**CSS classes:** `.cky-accordion-item`

**HTML structure:**

```html
<div class="cky-accordion-item"><div class="cky-accordion-chevron"><i class="cky-chevron-right"></i></div><div class="cky-accordion-header-wrapper"><div class="cky-accordion-header"><button class="cky-accordion-btn" aria-expanded="false" aria-controls="ckyDetailCategorynecessaryBody" aria-label="Necessary" data-cky-tag="detail-category-title" style="color: #d0d0d0;">Necessary</button><span class="cky-always-active" data-cky-tag="always-active">Always Active</span></div><div class="cky-accordion-header-des" data-cky-tag="detail-category-description" style="color: #d0d0d0;"><p>Necessary cookies 
```

**Base styles (from design tokens):**

```css
.cky-accordion-item {
  border: 1px solid #515251;
  border-radius: 24px;
  padding: 8px;
}```

### Blur Out Of Focus Item

**Instances found:** 3

**CSS classes:** `.blur-out-of-focus-item` `.border-b-1` `.border-opacity-40` `.border-white` `.py-6`

**HTML structure:**

```html
<div class="blur-out-of-focus-item py-6 lg:py-20 border-b-1 border-white border-opacity-40"> <div class="flex text-center lg:text-left flex-col lg:flex-row items-center lg:px-14 lg:flex-row-reverse"> <figure class="w-[100px] mb-6 lg:mb-0 lg:w-[30%] lg:flex lg:justify-end"> <span class="inline-svg draw-svg" style="padding-top:100%"><svg width="353" height="354" viewBox="0 0 353 354" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M177.687 286.113C116.68 286.113 67.2247 236.658 67.2247 175.651C67.2247 114.645 116.68 65.1895 177.687 65.1895C238.693 65.1895 288.148 114.645 288.148 175.651
```

**Base styles (from design tokens):**

```css
.blur-out-of-focus-item {
  border: 1px solid #515251;
  border-radius: 24px;
  padding: 8px;
}```

### Flex

**Instances found:** 3

**CSS classes:** `.flex` `.flex-col` `.items-center` `.text-center`

**HTML structure:**

```html
<div class="flex text-center lg:text-left flex-col lg:flex-row items-center lg:px-14 lg:flex-row-reverse"> <figure class="w-[100px] mb-6 lg:mb-0 lg:w-[30%] lg:flex lg:justify-end"> <span class="inline-svg draw-svg" style="padding-top:100%"><svg width="353" height="354" viewBox="0 0 353 354" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M177.687 286.113C116.68 286.113 67.2247 236.658 67.2247 175.651C67.2247 114.645 116.68 65.1895 177.687 65.1895C238.693 65.1895 288.148 114.645 288.148 175.651C288.148 236.658 238.693 286.113 177.687 286.113Z" stroke="#19C37D" stroke-width="1.20724" st
```

**Base styles (from design tokens):**

```css
.flex {
  border: 1px solid #515251;
  border-radius: 24px;
  padding: 8px;
}```

## List Items

### Border B 1

**Instances found:** 6

**CSS classes:** `.border-b-1` `.border-opacity-20` `.border-white` `.group/parent` `.last:border-b-0` `.pb-3`

**HTML structure:**

```html
<li x-on:mouseenter="handleHover($el)" class="group/parent relative border-b-1 border-white border-opacity-20 pb-3 last:border-b-0 xl:border-b-0 xl:pb-0"><a class="hidden xl:inline subheading !text-white font-semibold text-xs [@media(min-width:1360px)]:text-sm flex w-full pb-8 2xl:pb-12 transition xl:!text-white hover:!text-brand-green pr-6" href="https://www.quastels.com/expertise/">Expertise<i class="absolute right-0 -top-[2px] text-lg uil uil-angle-down ml-1"></i></a><button @click="openMenu = 252" class="flex xl:hidden xl:subheading !text-white text-xl font-semibold flex w-full transition"
```

**Base styles (from design tokens):**

```css
.border-b-1 {
  padding: 4px 0;
  border-bottom: 1px solid #515251;
}```

## Buttons

### Cky Accordion Btn

**Instances found:** 6

**CSS classes:** `.cky-accordion-btn`

**HTML structure:**

```html
<button class="cky-accordion-btn" aria-expanded="false" aria-controls="ckyDetailCategorynecessaryBody" aria-label="Necessary" data-cky-tag="detail-category-title" style="color: #d0d0d0;">Necessary</button>
```

**Base styles (from design tokens):**

```css
.cky-accordion-btn {
  color: #ffffff;
  border-radius: 24px;
  padding: 4px 8px;
  cursor: pointer;
}```

### Btn White

**Instances found:** 4

**CSS classes:** `.btn-white`

**HTML structure:**

```html
<a class="btn-white" href="https://www.quastels.com/expertise/" target="">Our expertise<i class="ml-2 text-2xl leading-none uil uil-arrow-right"></i></a>
```

**Base styles (from design tokens):**

```css
.btn-white {
  color: #ffffff;
  border-radius: 24px;
  padding: 4px 8px;
  cursor: pointer;
}```

## Other Components

### Transition

**Instances found:** 30

**CSS classes:** `.transition`

**HTML structure:**

```html
<span style="opacity: 0.2" class="transition">We</span>
```

**Base styles (from design tokens):**

```css
.transition {
  padding: 4px;
}```

### Mb 4

**Instances found:** 7

**CSS classes:** `.mb-4` `.subheading`

**HTML structure:**

```html
<p class="subheading mb-4">Why choose Quastels</p>
```

**Base styles (from design tokens):**

```css
.mb-4 {
  padding: 4px;
}```

### Cky Accordion

**Instances found:** 6

**CSS classes:** `.cky-accordion`

**HTML structure:**

```html
<div class="cky-accordion" id="ckyDetailCategorynecessary"><div class="cky-accordion-item"><div class="cky-accordion-chevron"><i class="cky-chevron-right"></i></div><div class="cky-accordion-header-wrapper"><div class="cky-accordion-header"><button class="cky-accordion-btn" aria-expanded="false" aria-controls="ckyDetailCategorynecessaryBody" aria-label="Necessary" data-cky-tag="detail-category-title" style="color: #d0d0d0;">Necessary</button><span class="cky-always-active" data-cky-tag="always-active">Always Active</span></div><div class="cky-accordion-header-des" data-cky-tag="detail-category
```

**Base styles (from design tokens):**

```css
.cky-accordion {
  padding: 4px;
}```

### Cky Accordion Header Wrapper

**Instances found:** 6

**CSS classes:** `.cky-accordion-header-wrapper`

**HTML structure:**

```html
<div class="cky-accordion-header-wrapper"><div class="cky-accordion-header"><button class="cky-accordion-btn" aria-expanded="false" aria-controls="ckyDetailCategorynecessaryBody" aria-label="Necessary" data-cky-tag="detail-category-title" style="color: #d0d0d0;">Necessary</button><span class="cky-always-active" data-cky-tag="always-active">Always Active</span></div><div class="cky-accordion-header-des" data-cky-tag="detail-category-description" style="color: #d0d0d0;"><p>Necessary cookies are required to enable…</p></div></div>
```

**Base styles (from design tokens):**

```css
.cky-accordion-header-wrapper {
  padding: 4px;
}```

### Cky Accordion Header Des

**Instances found:** 6

**CSS classes:** `.cky-accordion-header-des`

**HTML structure:**

```html
<div class="cky-accordion-header-des" data-cky-tag="detail-category-description" style="color: #d0d0d0;"><p>Necessary cookies are required to enable…</p></div>
```

**Base styles (from design tokens):**

```css
.cky-accordion-header-des {
  padding: 4px;
}```

### !Text White

**Instances found:** 6

**CSS classes:** `.!text-white` `.2xl:pb-12` `.[@media(min-width:1360px)]:text-sm` `.flex` `.font-semibold` `.hidden`

**HTML structure:**

```html
<a class="hidden xl:inline subheading !text-white font-semibold text-xs [@media(min-width:1360px)]:text-sm flex w-full pb-8 2xl:pb-12 transition xl:!text-white hover:!text-brand-green pr-6" href="https://www.quastels.com/expertise/">Expertise<i class="absolute right-0 -top-[2px] text-lg uil uil-angle-down ml-1"></i></a>
```

**Base styles (from design tokens):**

```css
.!text-white {
  padding: 4px;
}```

### Cky Accordion Header

**Instances found:** 4

**CSS classes:** `.cky-accordion-header`

**HTML structure:**

```html
<div class="cky-accordion-header"><button class="cky-accordion-btn" aria-expanded="false" aria-controls="ckyDetailCategoryfunctionalBody" aria-label="Functional" data-cky-tag="detail-category-title" style="color: #d0d0d0;">Functional</button><div class="cky-switch" data-cky-tag="detail-category-toggle"><input type="checkbox" id="ckySwitchfunctional" aria-label="Enable Functional" autocomplete="off" style="background-color: rgb(208, 213, 210);"></div></div>
```

**Base styles (from design tokens):**

```css
.cky-accordion-header {
  padding: 4px;
}```

### Cky Switch

**Instances found:** 4

**CSS classes:** `.cky-switch`

**HTML structure:**

```html
<div class="cky-switch" data-cky-tag="detail-category-toggle"><input type="checkbox" id="ckySwitchfunctional" aria-label="Enable Functional" autocomplete="off" style="background-color: rgb(208, 213, 210);"></div>
```

**Base styles (from design tokens):**

```css
.cky-switch {
  padding: 4px;
}```

### Wrapper

**Instances found:** 3

**CSS classes:** `.wrapper`

**HTML structure:**

```html
<div class="wrapper"> <div class="text-center lg:max-w-[840px] 2xl:max-w-[920px] mx-auto"> <h1 class="js-hero-h1 translate-y-[50px] flex flex-wrap justify-center opacity-0 text-brand-black text-mob-heading-2xl md:text-heading-sm lg:text-heading-sm xl:text-heading-md 2xl:text-heading-lg mb-8" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; color: rgb(255, 255, 255);">Legal excellence<span class="scale-[0.83]">Forward thinking</span></h1> <div class="js-hero-content translate-y-[50px] opacity-0" style="translate: none; rotate: none; scale: none; tra
```

**Base styles (from design tokens):**

```css
.wrapper {
  padding: 4px;
}```

### Entered

**Instances found:** 3

**CSS classes:** `.entered` `.lazyload` `.loaded` `.max-w-[70px]`

**HTML structure:**

```html
<img class="max-w-[70px] lg:max-w-[120px] lazyload entered loaded" data-src="https://www.quastels.com/wp-content/uploads/2026/03/1award-1.png" data-srcset="https://www.quastels.com/wp-content/uploads/2026/03/1award-1.png 959w, https://www.quastels.com/wp-content/uploads/2026/03/1award-1-600x300.png 600w, https://www.quastels.com/wp-content/uploads/2026/03/1award-1-768x384.png 768w, https://www.quastels.com/wp-content/uploads/2026/03/1award-1-120x60.png 120w" data-sizes="(max-width: 959px) 100vw, 959px" alt="1award-1" data-ll-status="loaded" sizes="(max-width: 959px) 100vw, 959px" srcset="https
```

**Base styles (from design tokens):**

```css
.entered {
  padding: 4px;
}```

### 2xl:Px 14

**Instances found:** 3

**CSS classes:** `.2xl:px-14` `.border-b-1` `.border-opacity-40` `.border-white` `.col-span-12` `.last:border-b-0`

**HTML structure:**

```html
<div class="col-span-12 lg:col-span-4 px-2 md:px-8 lg:px-4 2xl:px-14 pb-4 last:pb-0 lg:pb-0 border-b-1 lg:border-b-0 last:border-b-0 border-white border-opacity-40 " style="translate: none; rotate: none; scale: none; transform: translate(0px, 60px); opacity: 0;"> <h3 class="text-[34px] lg:text-[28px] 2xl:text-heading-2xs bg-clip-text bg-gradient-four text-transparent">28 years +</h3> <p class="text-sm xl:text-lg 2xl:text-xl">Driving success and delivering results f…</p> </div>
```

**Base styles (from design tokens):**

```css
.2xl:px-14 {
  padding: 4px;
}```

### 2xl:Text Heading 2xs

**Instances found:** 3

**CSS classes:** `.2xl:text-heading-2xs` `.bg-clip-text` `.bg-gradient-four` `.text-[34px]` `.text-transparent`

**HTML structure:**

```html
<h3 class="text-[34px] lg:text-[28px] 2xl:text-heading-2xs bg-clip-text bg-gradient-four text-transparent">28 years +</h3>
```

**Base styles (from design tokens):**

```css
.2xl:text-heading-2xs {
  padding: 4px;
}```

### 2xl:Text Xl

**Instances found:** 3

**CSS classes:** `.2xl:text-xl` `.text-sm` `.xl:text-lg`

**HTML structure:**

```html
<p class="text-sm xl:text-lg 2xl:text-xl">Driving success and delivering results for more than 25 years.</p>
```

**Base styles (from design tokens):**

```css
.2xl:text-xl {
  padding: 4px;
}```

### Mb 6

**Instances found:** 3

**CSS classes:** `.mb-6` `.w-[100px]`

**HTML structure:**

```html
<figure class="w-[100px] mb-6 lg:mb-0 lg:w-[30%] lg:flex lg:justify-end"> <span class="inline-svg draw-svg" style="padding-top:100%"><svg width="353" height="354" viewBox="0 0 353 354" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M177.687 286.113C116.68 286.113 67.2247 236.658 67.2247 175.651C67.2247 114.645 116.68 65.1895 177.687 65.1895C238.693 65.1895 288.148 114.645 288.148 175.651C288.148 236.658 238.693 286.113 177.687 286.113Z" stroke="#19C37D" stroke-width="1.20724" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset: 0.001; stroke-dasharray: 0px, 999999
```

**Base styles (from design tokens):**

```css
.mb-6 {
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#515251` for all dividers within components


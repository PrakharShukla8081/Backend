# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 60` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.px-6.xl:px-8` | row | — | center | — | 4 |
| `div.hidden.ml-auto` | row | — | center | — | 2 |
| `div.my-12.lg:my-[100px]` | row | space-between | center | — | 2 |
| `div.flex.flex-col` | row | space-between | center | — | 2 |
| `div.cky-prefrence-btn-wrapper` | row | center | center | 8px | 3 |
| `div.flex.flex-col` | row | — | center | 32px | 2 |
| `div.flex.md:items-center` | row | — | center | — | 2 |
| `div.relative.inline-flex` | row | space-between | center | 20px | 2 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.grid.grid-cols-12` | `108px 108px 108px 108px 108px 108px 108px 108px 10` | 0px normal | 3 |
| `div.grid.grid-cols-12` | `108px 108px 108px 108px 108px 108px 108px 108px 10` | — | 2 |
| `div.grid.grid-cols-12` | `108px 108px 108px 108px 108px 108px 108px 108px 10` | — | 2 |
| `ul#menu-footer-menu.footer-menu.grid` | `71.3281px 71.3281px 71.3281px 71.3281px 71.3281px ` | 80px 40px | 8 |

## Structural Containers

### `<header>` (`header.header.py-2`)

```
display:          block
padding:          12px 0px
children:         2
```

### `<footer>` (`footer.footer.py-[80px]`)

```
display:          block
padding:          130px 0px
children:         1
```

### `<section>` (`section.relative.border-t-1`)

```
display:          block
children:         1
```

### `<section>` (`section#hero.pt-[165px].pb-[60px]`)

```
display:          block
padding:          180px 0px 144px
children:         1
```

### `<section>` (`section#intro.relative.z-[7]`)

```
display:          block
children:         1
```

### `<section>` (`section.my-[80px].lg:my-[180px]`)

```
display:          block
children:         1
```

### `<section>` (`section#blur-out-of-focus.relative`)

```
display:          block
children:         1
```

### `<section>` (`section.py-[90px].z-1`)

```
display:          block
padding:          120px 0px 180px
children:         1
```

### `<section>` (`section#reveal-by-scroll.text-center.py-[90px]`)

```
display:          block
padding:          180px 0px
children:         3
```

### `<section>` (`section.my-[80px].lg:my-[100px]`)

```
display:          block
children:         1
```

### `<section>` (`section.my-[80px].lg:my-[140px]`)

```
display:          block
children:         1
```

### `<section>` (`section#latest-news.overflow-hidden.mb-[80px]`)

```
display:          block
children:         1
```

## Layout Rules

- **Container max-width:** `1440px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale


---
name: El Paso 3D Printing
description: A local print shop's site set like a filament spool label on a dark spool.
colors:
  spool-black: "#14120e"
  spool-raised: "#1c1914"
  bone-stock: "#ede7db"
  worn-bone: "#b3ab9d"
  signal-orange: "#ff6b1a"
  kraft-sand: "#cfae82"
  stock-ink-soft: "#625b50"
  orange-ink: "#b8400a"
  print-bed: "#d9d2c4"
  rule: "rgb(237 231 219 / 0.16)"
  rule-strong: "rgb(237 231 219 / 0.38)"
  stock-rule: "rgb(20 18 14 / 0.2)"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 15.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    fontVariation: "'wdth' 62"
  code:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 0.85
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 62"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  key:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontFeature: "'tnum'"
rounded:
  control: "4px"
  label: "8px"
spacing:
  gap: "12px"
  gutter-sm: "16px"
  gutter-lg: "32px"
  section-sm: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.spool-black}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.bone-stock}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  spool-label:
    backgroundColor: "{colors.bone-stock}"
    textColor: "{colors.spool-black}"
    rounded: "{rounded.label}"
    padding: "10px"
  material-label:
    backgroundColor: "{colors.bone-stock}"
    textColor: "{colors.spool-black}"
    rounded: "{rounded.label}"
    padding: "8px 16px 8px 8px"
  service-entry:
    backgroundColor: "transparent"
    textColor: "{colors.bone-stock}"
    padding: "22px 0 28px"
  price-label:
    backgroundColor: "{colors.bone-stock}"
    textColor: "{colors.spool-black}"
    rounded: "{rounded.label}"
    padding: "22px 20px 24px"
  field-cell:
    backgroundColor: "{colors.bone-stock}"
    textColor: "{colors.spool-black}"
    padding: "14px 16px 12px"
  swatch-band:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.spool-black}"
---

# Design System: El Paso 3D Printing

## Overview

**Creative North Star: "The Spool Label"**

The site is set like the label on a filament spool: a dark spool, die-cut bone labels, a loud color swatch, huge material codes, and small spec rows that tell you exactly what you're getting. It is industrial and plain-spoken, the way a good label is, and it lets the owner's prints carry the color.

Signal orange is the swatch. It fills the band under the hero and the footer, and the top edge of both bands is the Franklin Mountains seen from central El Paso, the one local landmark, used as a shape rather than an illustration. The same orange marks every action. Bone label stock carries the things a visitor reads closely or fills in: the photo label in the hero, the four material labels, and the quote form. Kraft sand prints the small keys on the dark ground.

Motion is printing. The hero photo prints in 48 visible layers inside its label with a layer counter on the label's foot; the mountain band, gallery photos, and material labels print up from the bed when they enter. Everything is visible without JavaScript or motion.

**Key Characteristics:**
- Dark spool-black ground, bone label stock, one orange swatch, kraft sand keys.
- Die-cut labels: 8px corners, solid fills, no borders, no shadows.
- Condensed 800 uppercase for headlines and material codes; tracked small-caps keys over values.
- Orange bands whose top edge is the Franklin ridge open and close the page.
- Owner photos only.

## Colors

Four inks on a dark spool, plus two working tones for text on bone stock.

### Primary
- **Signal Orange** (#ff6b1a): primary buttons, the header Quote cell, the active nav underline, the hero and footer swatch bands, the PLA swatch, service icons, FAQ plus icons, the active print layer, and a hovered gallery caption. Spool-black text on it is 6.5:1.

### Secondary
- **Kraft Sand** (#cfae82): keys and small annotations on the dark ground (typical use, about facts, peak label, step numerals, price "from"), the PETG swatch, and placeholder outlines.

### Neutral
- **Spool Black** (#14120e): page ground and text on bone or orange.
- **Spool Raised** (#1c1914): gallery tiles and their caption rows.
- **Bone Stock** (#ede7db): label stock, headings and emphasized text on dark.
- **Worn Bone** (#b3ab9d): secondary body copy on dark; the resin swatch.
- **Stock Ink Soft** (#625b50): keys, hints, and placeholders on bone stock only (never on the dark ground).
- **Orange Ink** (#b8400a): error text and error outlines on bone stock, where Signal Orange would be unreadable.
- **Print Bed** (#d9d2c4): the slot behind the hero photo while it prints.

### Named Rules
**The Swatch Rule.** Orange is the swatch: actions, the two mountain bands, and active states. It never colors headline words.

**The Stock Rule.** Bone stock is for things read closely or filled in. On bone, text is spool black, keys are Stock Ink Soft, and errors are Orange Ink.

## Typography

**Display and Code Font:** Archivo at 62% width, weight 800 (fallback Arial Narrow)
**Body Font:** Archivo at 100% width (fallback Arial)
**Key Font:** Archivo 700, 0.75rem, 0.08em tracking, uppercase, tabular numerals

**Character:** One variable family, set the way a label sets it: a giant condensed code, a plain readable description, and tiny tracked keys.

### Hierarchy
- **Display** (800, clamp(3.5rem, 15.5vw, 6rem), 0.86): the hero headline, one phrase per line.
- **Headline** (800, clamp(2.75rem, 10vw, 4.5rem), 0.9): section titles.
- **Code** (800, 2.5rem on phones, 4rem from 1100px, 0.85): material codes printed on their swatch.
- **Title** (800, 1.75rem, 1; 1.5rem for steps and prices): service, step, and price names.
- **Body** (400, 1.0625rem, 1.6): paragraphs at 36–65ch; ledes at 1.125rem in Worn Bone.
- **Key** (700, 0.75rem, 0.08em, uppercase): the small label over every spec value.

### Named Rules
**The Key-Over-Value Rule.** Small facts are a key over a value, like a spec row. No eyebrow labels above headings.

## Layout

Mobile-first. A centered column (max 1200px) with a 16px gutter on phones and 32px from 640px. Sections get 80px of vertical padding on phones and 112px from 900px, separated by a faint rule. Labels sit in grids with a 12px gap (price and form cells use 1px gaps that read as rules): one column on phones, two from 640px, three or four from 1100px. From 1100px the hero splits 7fr/5fr (headline left, photo label right), and the gallery and quote sections split 4fr/8fr with a sticky heading column. The header is a sticky strip of cells: 56px tall on phones, 64px on desktop; under 360px its cells tighten so nothing scrolls sideways. The ridge on top of each orange band is 88px tall on phones, 120px from 640px, and 168px from 900px.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes from stock: bone labels sit on the dark spool, raised labels are one step lighter than the ground, and the orange bands are the loudest plane. Focus on bone stock is a 2px inset spool-black ring.

### Named Rules
**The Die-Cut Rule.** A label is a solid fill with 8px corners. No borders around labels, no shadows, and no colored stripes along a card's edge.

## Shapes

Labels have 8px corners; buttons, toggles, and file buttons have 4px corners. The Franklin ridge is the only organic shape and only ever appears as the top edge of an orange band. Material swatches are solid blocks inside their label, with the code set at the bottom-left like a printed spool label.

## Components

### Buttons
- **Shape:** 4px corners, 52px tall, uppercase 700 at 0.9375rem with 0.06em tracking.
- **Primary:** orange with spool-black text and an arrow that slides 4px on hover; hover mixes 18% bone into the orange.
- **Line:** 1px bone border, bone text; hover fills bone at 10%.
- **Focus:** 2px outline offset 3px, bone on dark, spool black on bone or orange.

### Header strip
Cells divided by strong rules: stacked wordmark, section links with a 3px orange underline on the active one (desktop), an EN/ES toggle with the active language inverted to bone, an orange Quote cell, and a menu cell on phones.

### Photo label (signature)
A bone label holding the hero photo: a top row with the shop name and "Lot 79915" (the pickup ZIP), the photo on a print-bed slot, and a foot row with the item name and a layer counter. The photo prints in 48 stepped layers behind an orange active-layer line.

### Swatch band (signature)
Full-bleed orange, its top edge the Franklin ridge, carrying spec cells (key over value, spool-black text): materials, pickup, orders, quotes. The footer is the same band, closing the page.

### Material labels
Bone labels with a solid swatch block (orange, sand, spool black, worn bone) and the material code printed on it, then "What it's like" and "Good for" spec rows. Code beside specs on phones; code on top from 1100px.

### Service entries
Unfilled entries under a strong hairline, like rows on a spec sheet: a 36px orange line icon beside the condensed name, the description, then "Typical use" as a key over its value (key | value from 640px). From 640px each entry spans three subgrid rows so the "Typical use" rules line up across a row.

### Price label
One bone label split into cells by 1px stock-colored gaps (the same construction as the quote form): the name, a huge condensed amount with its unit as a small key ("from", "/ hour", "/ piece"), then the description in Stock Ink Soft. Placeholders are outlined in spool black.

### Inputs / Fields
The quote form is a bone label split into cells by 1px stock-colored gaps. Keys sit on top in Stock Ink Soft; inputs are borderless. Focus brightens the cell and draws a 2px inset spool-black ring. Errors draw a 2px Orange Ink ring and print a message under the field. Status prints inline under the submit button.

### Gallery tile
A raised label: the photo above a caption row. Hover zooms the photo 4% and turns the caption orange. Opens a full-screen dialog lightbox with arrow, keyboard, and swipe navigation.

## Do's and Don'ts

### Do:
- **Do** keep to the inks: spool black (#14120e), bone stock (#ede7db), signal orange (#ff6b1a), kraft sand (#cfae82).
- **Do** set facts as a key (0.75rem, 700, tracked, uppercase) over a value.
- **Do** use 8px corners on labels and 4px on controls.
- **Do** keep motion to "printing": stepped reveals from the bottom up, and everything visible under reduced motion.
- **Do** write every string twice, English then Spanish, as sibling `lang` elements.

### Don't:
- **Don't** add shadows, glows, gradients, or neon edges. The owner ruled out a sci-fi look.
- **Don't** put colored stripes along the top or side of a card.
- **Don't** color headline words orange.
- **Don't** use stock photos. Only the owner's prints.
- **Don't** soften into crafty or cute styling (pastels, doodles, script fonts).

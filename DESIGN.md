---
name: El Paso 3D Printing
description: A local print shop's site set like a filament spool label on a deep teal spool.
colors:
  deep-teal: "#0c2a2c"
  teal-raised: "#12373a"
  label-stock: "#eaf2ef"
  sea-glass: "#a9c2bc"
  coral: "#ff7a5c"
  mint: "#8fc9b9"
  stock-ink-soft: "#4d6763"
  coral-ink: "#b8402a"
  print-bed: "#cfdcd8"
  rule: "rgb(234 242 239 / 0.16)"
  rule-strong: "rgb(234 242 239 / 0.38)"
  stock-rule: "rgb(12 42 44 / 0.2)"
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
    backgroundColor: "{colors.coral}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.label-stock}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  spool-label:
    backgroundColor: "{colors.label-stock}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.label}"
    padding: "10px"
  material-label:
    backgroundColor: "{colors.label-stock}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.label}"
    padding: "8px 16px 8px 8px"
  service-entry:
    backgroundColor: "transparent"
    textColor: "{colors.label-stock}"
    padding: "22px 0 28px"
  price-label:
    backgroundColor: "{colors.label-stock}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.label}"
    padding: "22px 20px 24px"
  field-cell:
    backgroundColor: "{colors.label-stock}"
    textColor: "{colors.deep-teal}"
    padding: "14px 16px 12px"
  swatch-band:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.deep-teal}"
---

# Design System: El Paso 3D Printing

## Overview

**Creative North Star: "The Spool Label"**

The site is set like the label on a filament spool: a dark spool, die-cut pale labels, a loud color swatch, huge material codes, and small spec rows that tell you exactly what you're getting. It is industrial and plain-spoken, the way a good label is, and it lets the owner's prints carry the color.

Coral is the swatch. It fills the band under the hero and the footer, and the top edge of both bands is the Franklin Mountains seen from central El Paso, the one local landmark, used as a shape rather than an illustration. The same coral marks every action. Label stock carries the things a visitor reads closely or fills in: the photo label in the hero, the four material labels, and the quote form. Mint prints the small keys on the dark ground.

Motion is printing. The hero photo prints in 48 visible layers inside its label with a layer counter on the label's foot; the mountain band, gallery photos, and material labels print up from the bed when they enter. Everything is visible without JavaScript or motion.

The Star on the Mountain, the lit star on Ranger Peak, sits on the mountain face in both bands as an outline of pale points of light. It is the one other local landmark, and it never appears anywhere else.

**Key Characteristics:**
- Dark deep-teal ground, pale label stock, one coral swatch, mint keys.
- Die-cut labels: 8px corners, solid fills, no borders, no shadows.
- Condensed 800 uppercase for headlines and material codes; tracked small-caps keys over values.
- Coral bands whose top edge is the Franklin ridge open and close the page.
- Owner photos only.

## Colors

Four inks on a dark spool, plus two working tones for text on label stock.

### Primary
- **Coral** (#ff7a5c): primary buttons, the header Quote cell, the active nav underline, the hero and footer swatch bands, the PLA swatch, service icons, FAQ plus icons, the active print layer, and a hovered gallery caption. Spool-black text on it is 6.5:1.

### Secondary
- **Mint** (#8fc9b9): keys and small annotations on the dark ground (typical use, about facts, peak label, step numerals, price "from"), the PETG swatch, and placeholder outlines.

### Neutral
- **Deep Teal** (#0c2a2c): page ground and text on label stock or coral.
- **Teal Raised** (#12373a): gallery tiles and their caption rows.
- **Label Stock** (#eaf2ef): label stock, headings and emphasized text on dark.
- **Sea Glass** (#a9c2bc): secondary body copy on dark; the resin swatch.
- **Stock Ink Soft** (#4d6763): keys, hints, and placeholders on label stock only (never on the dark ground).
- **Coral Ink** (#b8402a): error text and error outlines on label stock, where Coral would be unreadable.
- **Print Bed** (#cfdcd8): the slot behind the hero photo while it prints.

### Named Rules
**The Swatch Rule.** Coral is the swatch: actions, the two mountain bands, and active states. It never colors headline words.

**The Stock Rule.** Label stock is for things read closely or filled in. On label stock, text is deep teal, keys are Stock Ink Soft, and errors are Coral Ink.

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
- **Body** (400, 1.0625rem, 1.6): paragraphs at 36–65ch; ledes at 1.125rem in Sea Glass.
- **Key** (700, 0.75rem, 0.08em, uppercase): the small label over every spec value.

### Named Rules
**The Key-Over-Value Rule.** Small facts are a key over a value, like a spec row. No eyebrow labels above headings.

## Layout

Mobile-first. A centered column (max 1200px) with a 16px gutter on phones and 32px from 640px. Sections get 80px of vertical padding on phones and 112px from 900px, separated by a faint rule. Labels sit in grids with a 12px gap (price and form cells use 1px gaps that read as rules): one column on phones, two from 640px, three or four from 1100px. From 1100px the hero splits 7fr/5fr (headline left, photo label right), and the gallery and quote sections split 4fr/8fr with a sticky heading column. The header is a sticky strip of cells: 56px tall on phones, 64px on desktop; under 360px its cells tighten so nothing scrolls sideways. The ridge on top of each coral band is 88px tall on phones, 120px from 640px, and 168px from 900px.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes from stock: pale labels sit on the dark spool, raised labels are one step lighter than the ground, and the coral bands are the loudest plane. Focus on label stock is a 2px inset deep-teal ring.

### Named Rules
**The Die-Cut Rule.** A label is a solid fill with 8px corners. No borders around labels, no shadows, and no colored stripes along a card's edge.

## Shapes

Labels have 8px corners; buttons, toggles, and file buttons have 4px corners. The Franklin ridge is the only organic shape and only ever appears as the top edge of a coral band. Material swatches are solid blocks inside their label, with the code set at the bottom-left like a printed spool label.

## Components

### Buttons
- **Shape:** 4px corners, 52px tall, uppercase 700 at 0.9375rem with 0.06em tracking.
- **Primary:** coral with deep-teal text and an arrow that slides 4px on hover; hover mixes 18% pale into the coral.
- **Line:** 1px pale border, pale text; hover fills pale at 10%.
- **Focus:** 2px outline offset 3px, pale on dark, deep teal on label stock or coral.

### Header strip
Cells divided by strong rules: stacked wordmark, section links with a 3px coral underline on the active one (desktop), an EN/ES toggle with the active language inverted to pale, a coral Quote cell, and a menu cell on phones.

### Photo label (signature)
A pale label holding the hero photo: a top row with the shop name and "Lot 79915" (the pickup ZIP), the photo on a print-bed slot, and a foot row with the item name and a layer counter. The photo prints in 48 stepped layers behind a coral active-layer line.

### Swatch band (signature)
Full-bleed coral, its top edge the Franklin ridge with the Star on the Mountain lit on Ranger Peak (a dotted pale outline), carrying spec cells (key over value, deep-teal text): materials, pickup, orders, quotes. The footer is the same band, closing the page.

### Material labels
Pale labels with a solid swatch block (coral, mint, deep teal, sea glass) and the material code printed on it, then "What it's like" and "Good for" spec rows. Code beside specs on phones; code on top from 1100px.

### Service entries
Unfilled entries under a strong hairline, like rows on a spec sheet: a 36px coral line icon beside the condensed name, the description, then "Typical use" as a key over its value (key | value from 640px). From 640px each entry spans three subgrid rows so the "Typical use" rules line up across a row.

### Price label
One pale label split into cells by 1px stock-colored gaps (the same construction as the quote form): the name, a huge condensed amount with its unit as a small key ("from", "/ hour", "/ piece"), then the description in Stock Ink Soft. Placeholders are outlined in deep teal.

### Inputs / Fields
The quote form is a pale label split into cells by 1px stock-colored gaps. Keys sit on top in Stock Ink Soft; inputs are borderless. Focus brightens the cell and draws a 2px inset deep-teal ring. Errors draw a 2px Coral Ink ring and print a message under the field. Status prints inline under the submit button.

### Gallery tile
A raised label: the photo above a caption row. Hover zooms the photo 4% and turns the caption coral. Opens a full-screen dialog lightbox with arrow, keyboard, and swipe navigation.

## Do's and Don'ts

### Do:
- **Do** keep to the inks: deep teal (#0c2a2c), label stock (#eaf2ef), coral (#ff7a5c), mint (#8fc9b9).
- **Do** set facts as a key (0.75rem, 700, tracked, uppercase) over a value.
- **Do** use 8px corners on labels and 4px on controls.
- **Do** keep motion to "printing": stepped reveals from the bottom up, and everything visible under reduced motion.
- **Do** write every string twice, English then Spanish, as sibling `lang` elements.

### Don't:
- **Don't** add shadows, glows, gradients, or neon edges. The owner ruled out a sci-fi look.
- **Don't** put colored stripes along the top or side of a card.
- **Don't** color headline words coral.
- **Don't** use stock photos. Only the owner's prints.
- **Don't** soften into crafty or cute styling (pastels, doodles, script fonts).

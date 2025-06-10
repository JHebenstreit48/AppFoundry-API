## Positioning & Alignment in React Native

---

### justifyContent

The <span class="codeSnip">justifyContent</span> property controls **how children are distributed along the Main Axis**.

The Main Axis is determined by the <span class="codeSnip">flexDirection</span> property.
In React Native, it defaults to **column** (vertical), so <span class="codeSnip">justifyContent</span> aligns items **vertically** by default.
It manages spacing between, around, or at the ends of items.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">flex-start</td>
      <td class="tableCell">Items packed toward the start of the Main Axis</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">center</td>
      <td class="tableCell">Items centered along the Main Axis</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">flex-end</td>
      <td class="tableCell">Items packed toward the end of the Main Axis</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">space-between</td>
      <td class="tableCell">Evenly spaced items; first item at start, last at end</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">space-around</td>
      <td class="tableCell">Even spacing with equal space around each item</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">space-evenly</td>
      <td class="tableCell">Equal spacing between all items, including edges</td>
    </tr>
  </tbody>
</table>

---

### alignItems

The <span class="codeSnip">alignItems</span> property controls **how children are aligned along the Cross Axis** — perpendicular to the Main Axis.

- If <span class="codeSnip">flexDirection</span> is **column**, the Cross Axis is **horizontal**.
- If <span class="codeSnip">flexDirection</span> is **row**, the Cross Axis is **vertical**.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">flex-start</td>
      <td class="tableCell">Align items to the start of the Cross Axis</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">center</td>
      <td class="tableCell">Center items along the Cross Axis</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">flex-end</td>
      <td class="tableCell">Align items to the end of the Cross Axis</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">stretch</td>
      <td class="tableCell">Stretch items to fill the Cross Axis</td>
    </tr>
  </tbody>
</table>

---

### Default Cross Axis Stretching

In an example where a parent <View> uses <span class="codeSnip">flexDirection: 'row'</span> and contains three child boxes, the child elements stretch **vertically** by default. This is because the Cross Axis is vertical when the Main Axis is horizontal.

By default, <span class="codeSnip">alignItems</span> is set to <span class="codeSnip">'stretch'</span>, so each child box expands to fill the height of the parent container.

If the parent has a set height — for example, <span class="codeSnip">height: 300</span> — the child boxes will stretch vertically to match that height unless they explicitly set their own height.

This stretching behavior happens **regardless of the number of children** unless <span class="codeSnip">alignItems</span> is overridden.

---

### flexDirection

The <span class="codeSnip">flexDirection</span> property controls **the direction in which child components are laid out** inside a container.

It defines the Main Axis and determines whether the layout is horizontal or vertical.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">row</td>
      <td class="tableCell">Lays out children from left to right (horizontal)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">row-reverse</td>
      <td class="tableCell">Lays out children from right to left (horizontal, reversed order)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">column</td>
      <td class="tableCell">Lays out children from top to bottom (vertical, default)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">column-reverse</td>
      <td class="tableCell">Lays out children from bottom to top (vertical, reversed order)</td>
    </tr>
  </tbody>
</table>

- <span class="codeSnip">row</span> and <span class="codeSnip">column</span> define the **standard** flow of children.
- <span class="codeSnip">row-reverse</span> and <span class="codeSnip">column-reverse</span> are useful when you want to **reverse the layout order** without changing the order of elements in the code.

---

### Summary

<span class="codeSnip">justifyContent</span> = positions children **along** the Main Axis (primary layout direction).
<span class="codeSnip">alignItems</span> = aligns children **across** the Cross Axis (perpendicular to the layout direction).
Layout behavior mirrors **CSS Flexbox**, but React Native defaults to a **column** layout (<span class="codeSnip">flexDirection: 'column'</span>) — unlike the web where it defaults to **row**.

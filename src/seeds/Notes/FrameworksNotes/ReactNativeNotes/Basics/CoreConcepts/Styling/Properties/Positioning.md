## Positioning & Alignment in React Native

---

### <span class="codeSnip">justifyContent</span>

The <span class="codeSnip">justifyContent</span> property controls **how children are distributed along the Main Axis**.

- The Main Axis is determined by the <span class="codeSnip">flexDirection</span> property.
  - In React Native, it defaults to **column** (vertical), so <span class="codeSnip">justifyContent</span> aligns items **vertically** by default.
- It manages spacing between, around, or at the ends of items.

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

### <span class="codeSnip">alignItems</span>

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

### Summary

- <span class="codeSnip">justifyContent</span> = positions children **along** the Main Axis (primary layout direction).
- <span class="codeSnip">alignItems</span> = aligns children **across** the Cross Axis (perpendicular to the layout direction).
- Layout behavior mirrors **CSS Flexbox**, but React Native defaults to a **column** layout (`flexDirection: 'column'`) — unlike the web where it defaults to **row**.

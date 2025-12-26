# SVG Map Implementation Guide

## Step 1: Finding/Obtaining the Oregon County SVG Map

### Free Sources for Oregon County Maps:

1. **Wikimedia Commons** (Recommended - Free, Public Domain/CC)
   - URL: https://commons.wikimedia.org/wiki/Category:SVG_maps_of_Oregon
   - Search for "Oregon counties blank map" or similar
   - Look for files with individual county paths
   - Download the SVG file

2. **MapSVG**
   - URL: https://mapsvg.com/maps/usa-or
   - Free blank SVG vector map of Oregon
   - Commercial use allowed

3. **Free Vector Maps**
   - URL: https://freevectormaps.com/united-states/oregon
   - Multiple formats available (AI, EPS, PDF, SVG)

4. **Ultimaps**
   - URL: https://ultimaps.com/blank-maps/united-states-oregon/
   - High-resolution formats including SVG

## Step 2: Preparing the SVG File

Once you download an SVG, you need to ensure each county is a separate path element with identifiable attributes.

### Option A: Use an existing well-structured SVG
Look for SVG files where each county already has:
- Separate `<path>` elements
- `id` or `data-name` attributes with county names

### Option B: Manually edit the SVG
1. Open the SVG in a text editor or vector editor (like Inkscape - free)
2. Find the path elements for each county
3. Add `id` attributes to each path, e.g., `id="multnomah"`, `id="clackamas"`, etc.

Example SVG structure you want:
```xml
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <path id="multnomah" d="M 100,100 L 150,100..." class="county-path" />
  <path id="clackamas" d="M 150,100 L 200,100..." class="county-path" />
  <!-- More counties... -->
</svg>
```

## Step 3: Integration Strategy

### Approach 1: Inline SVG in React Component (Recommended)

**Pros:**
- Full control over styling and interactivity
- Can add event handlers directly
- No additional HTTP requests
- Easy to style with CSS

**Implementation:**
1. Copy the SVG content into a React component
2. Add `onClick` handlers to each path
3. Use conditional classes for selected state
4. Style with CSS

### Approach 2: Import SVG as a Module

**Pros:**
- Keeps component file cleaner
- Can use SVG as a React component

**Implementation:**
1. Save SVG in `/src/assets/oregon-counties.svg`
2. Import and render as component
3. Add interactivity via refs or DOM manipulation

## Step 4: CSS Styling for Hover and Selected States

```css
.county-path {
  fill: #e5e7eb;              /* Default light gray */
  stroke: #6b7280;             /* Border color */
  stroke-width: 1;
  cursor: pointer;
  transition: fill 0.2s ease;
}

.county-path:hover {
  fill: #bfdbfe;              /* Light blue on hover */
}

.county-path.selected {
  fill: #60a5fa;              /* Darker blue when selected */
  stroke: #2563eb;
  stroke-width: 2;
}
```

## Step 5: React Component Implementation

See the component code that will be created in:
- `src/components/OregonMap.tsx` - Main map component
- Update `src/components/MapArea.tsx` - To use the new interactive map

## Alternative: Generate SVG from GeoJSON

If you can't find a good SVG with individual counties, you can:

1. Get Oregon county GeoJSON from US Census Bureau
2. Use a tool like `geojson2svg` or `d3-geo` to convert to SVG paths
3. This is more complex but gives you complete control

### Tools for GeoJSON to SVG conversion:
- **mapshaper** (https://mapshaper.org/) - Online tool
- **geojson2svg** (npm package)
- **D3.js** - JavaScript library for geographic projections

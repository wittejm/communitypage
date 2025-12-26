# Next Steps: Implementing the Interactive Oregon SVG Map

## What's Been Done ✅

I've set up the complete infrastructure for an interactive SVG map:

1. **Created `OregonMap.tsx`** - React component ready to receive SVG paths
2. **Added CSS styling** with the exact behavior you requested:
   - Light blue (`#bfdbfe`) on hover
   - Darker blue (`#60a5fa`) when clicked/selected
   - Smooth transitions
3. **Wired up interactivity** - Clicking a county (or the sidebar) updates the entire UI
4. **Created guides**:
   - `MAP_IMPLEMENTATION_GUIDE.md` - Detailed technical guide
   - This file - Simple next steps

## How to Complete the SVG Map (3 Steps)

### Step 1: Download the Oregon County SVG

Pick one of these free sources:

**Option 1: Wikimedia Commons (Recommended)**
1. Go to: https://commons.wikimedia.org/wiki/Category:SVG_maps_of_Oregon
2. Look for files like "Oregon counties blank map" or "Blank map of Oregon"
3. Click the file, then click "Download" to get the SVG

**Option 2: MapSVG**
1. Go to: https://mapsvg.com/maps/usa-or
2. Download the free Oregon SVG map

**Option 3: Free Vector Maps**
1. Go to: https://freevectormaps.com/united-states/oregon
2. Download in SVG format

### Step 2: Prepare the SVG

Open the downloaded SVG file in a text editor (VS Code, TextEdit, Notepad, etc.)

Look for the structure - you should see something like:
```xml
<svg viewBox="..." xmlns="...">
  <path d="M 123,456 L 789,..." />
  <path d="M 234,567 L 890,..." />
  ...
</svg>
```

Each `<path>` represents one county. You need to identify which path is which county and add IDs:

**Option A: If the SVG already has labels/IDs** - Great! Just note the naming pattern

**Option B: If paths are unlabeled** - You'll need to:
1. Open the SVG in a visual editor like:
   - **Inkscape** (free): https://inkscape.org/
   - **Figma** (free online): https://figma.com
   - **Adobe Illustrator** (paid)
2. Click each path to identify which county it represents
3. Add an `id` attribute to each path: `id="multnomah"`, `id="clackamas"`, etc.

### Step 3: Add the Paths to OregonMap.tsx

Open `src/components/OregonMap.tsx` and replace the placeholder content.

**Quick Method** (replace entire SVG):
```tsx
export function OregonMap({ selectedCounty, onSelectCounty }: OregonMapProps) {
  return (
    <svg viewBox="..." className="oregon-map" xmlns="http://www.w3.org/2000/svg">
      {/* Paste all your county paths here */}
      <path
        id="multnomah"
        d="M 123,456 L 789,..." {/* Your real path data */}
        className={`county-path ${selectedCounty === 'Multnomah' ? 'selected' : ''}`}
        onClick={() => onSelectCounty('Multnomah')}
      />
      <path
        id="clackamas"
        d="M 234,567 L 890,..." {/* Your real path data */}
        className={`county-path ${selectedCounty === 'Clackamas' ? 'selected' : ''}`}
        onClick={() => onSelectCounty('Clackamas')}
      />
      {/* Repeat for all 36 counties */}
    </svg>
  )
}
```

**IMPORTANT:** Make sure the county names in the `onClick` handlers match EXACTLY with the names in `src/data/counties.ts`:
- Baker
- Benton
- Clackamas
- Clatsop
- ... (see the full list in counties.ts)

## Test It!

1. Save the file
2. Run `npm run dev`
3. Hover over counties - should turn light blue
4. Click a county - should turn darker blue and show content
5. Click counties in the sidebar - map should update to match

## Troubleshooting

**Problem:** Counties don't match with the county list
- Check that county names are spelled exactly as in `src/data/counties.ts`
- County names are case-sensitive

**Problem:** Hover/click doesn't work
- Make sure each path has `className="county-path"`
- Make sure each path has the `onClick` handler

**Problem:** SVG looks weird/distorted
- Check the `viewBox` attribute matches the original SVG
- Ensure the SVG has `width: 100%; height: 100%` (already in CSS)

**Problem:** Can't find a good SVG
- Let me know and I can help convert GeoJSON data to SVG paths

## Alternative: I Can Help More!

If you share the SVG file you download (or its URL), I can help you:
1. Parse it and identify the county paths
2. Generate the complete React component code
3. Ensure all 36 counties are properly mapped

Just paste the SVG content or send the file!

## Resources

- [MAP_IMPLEMENTATION_GUIDE.md](./MAP_IMPLEMENTATION_GUIDE.md) - Detailed technical guide
- [Wikimedia Commons - Oregon Maps](https://commons.wikimedia.org/wiki/Category:SVG_maps_of_Oregon)
- [MapSVG](https://mapsvg.com/maps/usa-or)
- [Free Vector Maps](https://freevectormaps.com/united-states/oregon)

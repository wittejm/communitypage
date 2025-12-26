# Community Page for Record Expungement - Design Document

## Page Design Overview

### Layout Structure

The page consists of three main areas:

1. **Map Area (Left)** - Oregon county map
   - Default: Takes up ~3/4 of the page width
   - Selected state: Shrinks to 1/4 of the page width
   - Shows county borders
   - Interactive: clicking a county selects it
   - Highlights the selected county

2. **County List Sidebar (Right)** - Alphabetical county list
   - Fixed narrow width panel
   - Lists all Oregon counties alphabetically
   - Each county name is clickable
   - Selected county is visually highlighted

3. **County Content Area (Center-Right)** - Appears when county selected
   - Only visible when a county is selected
   - Takes up the space freed by the shrinking map (~50% width)
   - Contains:
     - County name header
     - List of community posts (scrollable)
     - Share/Post area at the bottom

### Interaction Flow

**Default State (No Selection):**
- Map: Full width (~75%)
- County List: Right sidebar (~25%)
- Content Area: Hidden

**County Selected State:**
- Map: Shrinks to ~25% width, highlights selected county
- County List: Remains same width, highlights selected county name
- Content Area: Appears, taking ~50% width between map and county list

**Selection Triggers:**
- Clicking a county region on the map
- Clicking a county name in the sidebar
- Both trigger the same state change

### Post Structure

Each county has multiple posts with:
- Title: "[County Name] Example N"
- Preview text: Lorem ipsum filler content
- Each post is a clickable card (functionality TBD)

### Share Area

Located at the bottom of the county content:
- Section title: "Share Your Experience"
- Text input field for post content
- "Post" button (non-functional for now)

## Map Implementation Strategy

### Phase 1: Placeholder Image (Current Implementation)

For initial development, we use a static placeholder image that:
- Represents the Oregon county map
- Can shrink/expand via CSS transitions
- Has defined boundaries (for future interactivity)
- Maintains aspect ratio during resize

**Benefits:**
- Quick to implement
- Allows us to develop the interaction logic independently
- Demonstrates the UX flow

**Limitations:**
- Not actually clickable by county
- No real county boundaries
- Placeholder only

### Phase 2: SVG Map Implementation (Future)

#### Option A: Inline SVG with Path Elements
**Approach:**
- Use an SVG file with each county as a separate `<path>` element
- Each path has an `id` or `data-county` attribute
- Add click handlers to each path element
- Style via CSS (fill, stroke, hover states)

**Pros:**
- Fully customizable styling
- Smooth interactions
- Can animate individual counties
- No external dependencies

**Cons:**
- Requires obtaining/creating Oregon county SVG
- More complex initial setup

**Implementation:**
```tsx
<svg viewBox="0 0 width height">
  <path
    id="multnomah"
    d="M..."
    onClick={() => handleCountySelect('Multnomah')}
    className={selectedCounty === 'Multnomah' ? 'selected' : ''}
  />
  {/* More county paths... */}
</svg>
```

#### Option B: React Map Library
**Approach:**
- Use a library like `react-simple-maps` or `react-map-gl`
- Load Oregon GeoJSON data
- Render interactive map components

**Pros:**
- Handles geographic projections
- Built-in interaction handling
- Can add tooltips, zoom, etc.

**Cons:**
- Additional dependencies
- More complex than needed
- Overkill for static county selection

#### Option C: Image Map with Area Elements
**Approach:**
- Use HTML `<map>` and `<area>` elements
- Define clickable regions with coordinates
- Overlay on static image

**Pros:**
- Works with any image
- No SVG required
- Simple HTML solution

**Cons:**
- Difficult to maintain coordinates
- Limited styling options
- Doesn't scale well
- Can't highlight individual counties easily

### Recommended Approach: SVG with Path Elements (Option A)

**Rationale:**
- Most flexible for our use case
- Can highlight selected counties visually
- Smooth transitions and animations
- Complete control over styling
- No external dependencies needed

**Implementation Steps:**
1. Obtain Oregon county boundaries SVG (from sources like simplemaps.com, census.gov, or create from GeoJSON)
2. Ensure each county is a separate path element with identifiable attributes
3. Create React component that renders the SVG
4. Add click handlers to each path
5. Implement highlight styling for selected county
6. Add CSS transitions for smooth interactions

**Data Source Options:**
- US Census Bureau TIGER/Line Shapefiles (convert to SVG)
- simplemaps.com (commercial)
- Natural Earth Data (free)
- OpenStreetMap data (free, requires processing)

### Highlighting Selected County

When a county is selected:
- SVG path gets `selected` class
- CSS applies:
  - Different fill color (e.g., highlighted blue)
  - Possible stroke weight increase
  - Smooth transition effect

```css
.county-path {
  fill: #e0e0e0;
  stroke: #333;
  stroke-width: 1;
  transition: fill 0.3s ease;
  cursor: pointer;
}

.county-path:hover {
  fill: #c0c0c0;
}

.county-path.selected {
  fill: #4a90e2;
  stroke-width: 2;
}
```

### Responsive Behavior

The map container:
- Uses CSS transitions for width changes
- Maintains aspect ratio via `aspect-ratio` or padding-bottom technique
- SVG `viewBox` ensures map scales properly
- Preserves clickability at all sizes

## Technical Architecture

### State Management

Primary state:
```tsx
const [selectedCounty, setSelectedCounty] = useState<string | null>(null)
```

### Data Structure

```tsx
interface Post {
  id: string
  title: string
  preview: string
  author?: string
  date?: string
}

interface County {
  name: string
  posts: Post[]
}
```

### Component Structure

```
App
├── Header
├── MainContent
│   ├── MapArea
│   │   └── OregonMap (placeholder → SVG)
│   ├── CountyContent (conditional)
│   │   ├── PostList
│   │   └── ShareArea
│   └── CountySidebar
│       └── CountyList
```

## Future Enhancements

1. **Real Post Functionality**
   - Backend integration
   - Post storage and retrieval
   - User authentication

2. **Enhanced Map Features**
   - Zoom capability
   - County information tooltips
   - Visual indicators for post count per county

3. **Post Features**
   - Full post view modal
   - Comments/replies
   - Voting/reactions
   - Filtering and search

4. **Accessibility**
   - Keyboard navigation for map
   - Screen reader support
   - ARIA labels for interactive elements
   - Focus management

5. **Mobile Optimization**
   - Stack layout for small screens
   - Touch-friendly interactions
   - Collapsible sections

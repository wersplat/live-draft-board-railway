# React Components

This directory contains reusable React components for the Live Draft Board application, built with TypeScript, Tailwind CSS, and accessibility in mind.

## Component Documentation

### TeamCard

A responsive card component that displays team information, draft picks, and available players. The component is fully accessible and works well on all device sizes.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| team | `Team` | Yes | - | Team data to display |
| picks | `DraftPick[]` | No | `[]` | Array of draft picks for the team |
| players | `Player[]` | No | `[]` | Array of all players (used to resolve player details) |
| isCurrentTeam | `boolean` | No | `false` | Whether this team is currently on the clock |
| onSelectPlayer | `(player: Player) => void` | No | - | Callback when a player is selected |
| isDraftInProgress | `boolean` | No | `true` | Whether the draft is currently in progress |

#### Accessibility Features
- Keyboard navigation support
- ARIA labels and roles for screen readers
- Focus management for interactive elements
- High contrast text and interactive states
- Screen reader announcements for state changes

#### Responsive Design
- Adapts layout for mobile, tablet, and desktop views
- Collapsible sections for better mobile experience
- Responsive typography and spacing
- Touch-friendly interactive elements

#### Example

```tsx
<TeamCard 
  team={team}
  picks={picks}
  players={players}
  isCurrentTeam={true}
  onSelectPlayer={(player) => handlePlayerSelect(player)}
  isDraftInProgress={isDraftInProgress}
/>
```

### PlayerList

A responsive and accessible component for displaying a sortable list of players with selection capabilities. The component includes loading states, empty states, and supports keyboard navigation.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| players | `Player[]` | No | `[]` | Array of players to display |
| onSelectPlayer | `(player: Player) => void` | No | - | Callback when a player is selected |
| isLoading | `boolean` | No | `false` | Whether the component is in a loading state |
| emptyStateMessage | `string` | No | `'No players available'` | Message to display when no players are available |
| showTeam | `boolean` | No | `true` | Whether to show the team column |
| showPosition | `boolean` | No | `true` | Whether to show the position column |
| maxHeight | `string \| number` | No | `'none'` | Maximum height of the scrollable container |
| showDraftButton | `boolean` | No | `false` | Whether to show the draft button |
| isDraftInProgress | `boolean` | No | `true` | Whether the draft is currently in progress (affects button states) |

#### Accessibility Features
- Keyboard navigable rows and buttons
- ARIA live regions for dynamic content updates
- Screen reader announcements for loading states and updates
- Proper heading structure and table semantics
- Focus management for interactive elements

#### Responsive Design
- Horizontally scrollable table on small screens
- Responsive padding and spacing
- Collapsible columns on mobile
- Touch-friendly interactive elements
- Optimized typography for all screen sizes

#### Example

```tsx
<PlayerList 
  players={availablePlayers}
  onSelectPlayer={handlePlayerSelect}
  isLoading={isLoadingPlayers}
  showTeam={true}
  showPosition={true}
  maxHeight="calc(100vh - 300px)"
  showDraftButton={isDraftInProgress}
  isDraftInProgress={isDraftInProgress}
  emptyStateMessage="No players available for drafting"
/>
```

## Type Definitions

### Team

```typescript
type Team = {
  id: string;
  name: string;
  logo: string | null;
  created_at: string;
};
```

### Player

```typescript
type Player = {
  id: string;
  name: string;
  position: string;
  team: string;
  available: boolean;
  photo_url?: string | null;  // URL to player's photo (optional)
  created_at: string;
};
```

### DraftPick

```typescript
type DraftPick = {
  id: string;
  pick_number: number;
  team_id: string;
  player_id: string | null;
  player_name?: string;      // Resolved player name (optional)
  player_position?: string;  // Resolved player position (optional)
  created_at: string;
};
```

## Best Practices

1. **Props and Types**
   - Always provide default values for optional props
   - Use TypeScript types for all props and state
   - Document complex props with JSDoc comments

2. **Accessibility**
   - Ensure all interactive elements are keyboard navigable
   - Add proper ARIA attributes and roles
   - Provide text alternatives for non-text content
   - Test with screen readers and keyboard navigation

3. **Responsive Design**
   - Design mobile-first
   - Use Tailwind's responsive utilities
   - Test on various screen sizes and devices
   - Ensure touch targets are at least 44x44px

4. **Performance**
   - Use `React.memo` for components that don't need to re-render often
   - Implement virtualization for long lists
   - Lazy load images and other non-critical resources

5. **State Management**
   - Lift state up when needed for shared state
   - Use context for global state that doesn't change often
   - Keep component state local when possible

6. **Code Organization**
   - Keep components small and focused on a single responsibility
   - Group related components in feature folders
   - Use consistent naming conventions
   - Add PropTypes or TypeScript interfaces for all props

7. **Testing**
   - Write unit tests for business logic
   - Add integration tests for critical user flows
   - Test edge cases and error states
   - Include accessibility tests in your test suite

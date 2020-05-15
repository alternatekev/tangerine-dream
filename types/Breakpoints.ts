export enum Breakpoints {
  Large = '@media(min-width: 1024px)',
  Medium = '@media(min-width: 768px)',
  Small = '@media(max-width: 768px)',
  XSmall = '@media(max-width: 460px)'
}

export const BreakpointProps = {
  Large: {
    minWidth: 1024,
  },
  Medium: {
    minWidth: 768
  },
  Small: {
    maxWidth: 768
  },
  NotSmall: {
    minWidth: 768
  },
  XSmall: {
    maxWidth: 460
  },
  NotXSmall: {
    minWidth: 460
  }
}

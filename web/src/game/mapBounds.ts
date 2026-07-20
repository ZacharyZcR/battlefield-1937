import type { Campaign } from './campaigns'

/** Playable battlefield extents. Map builders and gameplay should read this instead of magic numbers. */
export type MapBounds = {
  halfWidth: number
  halfDepth: number
}

export const DEFAULT_MAP_BOUNDS: MapBounds = {
  halfWidth: 28,
  halfDepth: 58,
}

export const boundsForCampaign = (campaign: Campaign): MapBounds => ({
  halfWidth: campaign.bounds?.halfWidth ?? DEFAULT_MAP_BOUNDS.halfWidth,
  halfDepth: campaign.bounds?.halfDepth ?? DEFAULT_MAP_BOUNDS.halfDepth,
})

/**
 * Minimal webhooks module for Control Plane API
 * In production, this would emit webhook events to configured endpoints
 * For now, it just logs events for debugging
 */

export async function emitEvent(
  projectId: string,
  eventType: string,
  data: Record<string, unknown>
): Promise<void> {
  // Fire and forget - log the event
  console.log(`[Webhook] Event: ${eventType} for project: ${projectId}`, data)
}

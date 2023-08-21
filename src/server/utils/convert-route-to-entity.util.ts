const mapping: Record<string, string> = {
  attendances: 'attendance',
  events: 'event',
  platforms: 'platform',
  roles: 'role',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

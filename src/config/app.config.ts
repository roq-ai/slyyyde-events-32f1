interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Platform Owner'],
  customerRoles: [],
  tenantRoles: ['Platform Owner', 'Event Organizer'],
  tenantName: 'Platform',
  applicationName: 'Slyyyde Events',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

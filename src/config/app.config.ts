interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager', 'Inventory Manager'],
  tenantName: 'Organization',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage personal user data', 'Place orders', 'Check inventory status', 'Track order status'],
  ownerAbilities: [
    'Manage user information',
    'Manage organization details',
    'Manage product and inventory',
    'Manage orders and operations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/268c4831-dcca-41f4-b97a-ea760f8dc50c',
};

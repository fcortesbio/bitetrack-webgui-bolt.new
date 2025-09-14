// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://ubuntu-sandbox.ddnsfree.com/bitetrack',
  TIMEOUT: 10000,
} as const;

export const ENDPOINTS = {
  // Authentication
  SELLER_STATUS: '/auth/seller-status',
  LOGIN: '/auth/login',
  ACTIVATE: '/auth/activate',
  RECOVER: '/auth/recover',
  RESET: '/auth/reset',
  
  // Sellers
  SELLERS: '/sellers',
  SELLERS_PENDING: '/sellers/pending',
  
  // Customers
  CUSTOMERS: '/customers',
  
  // Products
  PRODUCTS: '/products',
  
  // Sales
  SALES: '/sales',
  SALES_SETTLE: '/sales/:id/settle',
} as const;

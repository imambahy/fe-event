interface DebugUserInfo {
  id?: number;
  role?: string;
  email?: string;
  name?: string;
}

export function debugUserInfo(pageName: string, user: DebugUserInfo | null, isLoading: boolean, isAuthenticated: boolean) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`👤 ${pageName} - User info:`, {
      user: user ? { 
        id: user.id, 
        role: user.role, 
        email: user.email,
        name: user.name,
      } : null,
      isLoading,
      isAuthenticated,
    });
  }
}

export function debugApiCall(endpoint: string, params?: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🔗 API Call: ${endpoint}`, params ? { params } : '');
  }
}

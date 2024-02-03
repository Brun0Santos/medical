import { createContext, ReactNode, useState } from 'react';

interface TokenProviderProps {
  children?: ReactNode;
}

interface TokenProps {
  userId: string;
  login: string;
  email: string;
  token: string;
  role: string;
}

interface ContextToken {
  token: TokenProps | null;
  setToken: (token: TokenProps) => void;
}

export const LoginContext = createContext<ContextToken>({
  setToken: () => {},
  token: { userId: '', email: '', login: '', role: '', token: '' },
});

export function TokenProvider({ children }: TokenProviderProps) {
  const [token, setToken] = useState<TokenProps | null>(null);

  return <LoginContext.Provider value={{ token, setToken }}>{children}</LoginContext.Provider>;
}

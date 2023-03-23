import { Context, createContext } from 'react';

import { User } from 'firebase/auth';

export const CurrentUserContext: Context<User | null> = createContext<User | null>(null);


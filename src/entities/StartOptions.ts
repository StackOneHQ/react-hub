import { Account } from './Account';

export interface StartOptions {
    sessionToken: string;
    apiUrl?: string;
    onSuccess?: (account: Account) => void;
    onCancel?: () => void;
    onClose?: () => void;
}

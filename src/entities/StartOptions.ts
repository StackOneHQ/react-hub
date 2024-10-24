import { Account } from './Account';
import { HubStyles } from './HubStyles';

export interface StartOptions {
    sessionToken: string;
    apiUrl?: string;
    styles?: HubStyles;
    onSuccess?: (account: Account) => void;
    onCancel?: () => void;
    onClose?: () => void;
}

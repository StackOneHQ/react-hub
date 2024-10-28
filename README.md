# StackOne Hub For React

Allow your users to quickly integrate with several services via StackOne. The `@stackone/react-hub` introduces an easy-to-use React hook to be able to embed the StackOne integrations hub into your SaaS application.


## Install

```
# NPM
npm install --save @stackone/react-hub

# Yarn
yarn add @stackone/react-hub
```

## Usage
Use React hook to start the Connect flow. Listen to the callbacks to know when an account has been linked or whether
the flow has been cancelled. The callback will give you the information about the account added/updated - you may
also retrieve this information by using webhooks or the API.

```jsx
import { useStackOneHub } from '@stackone/react-hub';

const LinkAccountButton = () => {
  const { startConnect } = useStackOneHub();

  const startFlow = useCallback(async () => {
    const sessionToken = await retrieveConnectSessionToken();
    startConnect({ sessionToken });
  }, [startConnect]);

  return (
    <button onClick={startFlow}>Connect Account</button>
  );
};
```

### Connect Options
When starting the flow, you may pass a few options:
```jsx
const { startConnect } = useStackOneHub();

startConnect(options)
```

### Style Options
You may pass a few style options to customize the Connect flow.
All of the following are optional.
```jsx
// Example of styles object
const styles = {
  inline: {
    containerId: 'my-container-id',
    height: '500px',
    width: '300px',
  },
  options: {
    back: false,
    close: false,
    bgColor: 'white',
  },
};
```

| Name                    | Type        | Required    | Description         |
| ----------------------- | ----------- | ----------- | ------------------- |
| **sessionToken**        | string      | **Yes**     | Connect session token created in the backend. The session token allows users to manage their accounts in the frontend. You may limit a connect session token to selected categories or to a given service
| **apiUrl**              | string      | No          | Which API instance should it connect to. It will automatically infer it from your connect session.
| **styles**              | HubStyles      | No          | Customize the aspect of the Connect flow.
| **onSuccess(account)**  | function    | No          | Called when an account is successfully linked. The `account` param gives you information about the linked account.
| **onCancel()**          | function    | No          | Called when the connect flow is closed without an account being linked.
| **onClose()**           | function    | No          | Called every time the connect flow is closed regardless of whether an account has been linked or not.

## Contribute & Release

This repose uses [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/). The repo use semantic-release and the package version is automatically determined based on the commit messages.

## Release

Use the Manual release workflow to trigger a release. The package version and changelog will automatically be generated based on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

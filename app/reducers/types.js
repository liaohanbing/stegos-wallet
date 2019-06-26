import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type SettingsStateType = {
  isPasswordSet: boolean,
  password: string,
  isSendBugReport: boolean,
  isTermsAccepted: boolean
};

export type NodeStateType = {
  isStarted: boolean,
  isConnected: boolean,
  isSynced: boolean,
  syncingProgress: number,
  apiToken: string | null
};

export type State = { settings: SettingsStateType, node: NodeStateType };

export type Action = {
  +type: string,
  payload: any
};

export type GetState = () => { ...State };

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

import React, { ReactChild, ReactChildren, Reducer } from "react";
import { AnyAction } from "redux";
import { RouterState } from "connected-react-router"

export interface ChildProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export interface KeywrodsState {
  keywords: KeywordsType[] | null;
  loading: boolean;
  error: Error | null
}

export interface RootState {
  keywords: KeywrodsState
  router: Reducer<RouterState<unknown>, AnyAction>
}

export interface KeywordsType {}

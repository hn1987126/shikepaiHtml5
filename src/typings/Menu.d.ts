import React, { ComponentClass } from 'react';

export interface MENU {
  path?: string;
  title: string;
  component?: React.LazyExoticComponent<ComponentClass | FunctionComponent>;
  redirect?: string;
}

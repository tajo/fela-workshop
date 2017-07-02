import React from 'react';
import { StyleProvider } from 'cf-style-provider';
import BasicSyntax from './01-basic-syntax/';
import DynamicStyles from './02-dynamic-styles/';
import MediaQueries from './03-media-queries/';
import Fonts from './04-fonts/';
import Selectors from './05-selectors/';
import Prefixes from './06-prefixes/';
import Fallbacks from './07-fallbacks/';
import Polished from './08-polished/';
import Gotchas from './09-gotchas/';
import Keyframes from './10-keyframes/';
import './styles.css';

export default () =>
  <div>
    <BasicSyntax />
    <DynamicStyles />
    <MediaQueries />
    <Fonts />
    <Selectors />
    <Prefixes />
    <Fallbacks />
    <Polished />
    <Gotchas />
    <Keyframes />
  </div>;

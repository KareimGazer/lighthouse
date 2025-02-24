/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {FunctionComponent} from 'preact';

import {ReportRendererProvider} from './wrappers/report-renderer';
import {Sidebar} from './sidebar/sidebar';
import {Summary} from './summary/summary';
import {FlowResultContext, useCurrentLhr} from './util';
import {Report} from './wrappers/report';

const Content: FunctionComponent = () => {
  const currentLhr = useCurrentLhr();

  return (
    <div className="Content">
      {
        currentLhr ?
          <Report/> :
          <Summary/>
      }
    </div>
  );
};

export const App: FunctionComponent<{flowResult: LH.FlowResult}> = ({flowResult}) => {
  return (
    <FlowResultContext.Provider value={flowResult}>
      <ReportRendererProvider>
        <div className="App">
          <Sidebar/>
          <Content/>
        </div>
      </ReportRendererProvider>
    </FlowResultContext.Provider>
  );
};

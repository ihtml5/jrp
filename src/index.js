import React, { Fragment } from "react";
import { render } from "react-dom";
import { Connect } from "./components";
import { LOGO, data } from "./constants";
import "./jrp.css";
const VIEWPATHS = ["downloadeUrl", "downloadMd5"];
const CNTPATHS = ["tag"];

const App = () => (
  <div>
    <Connect data={data.view} path={VIEWPATHS} key="view">
      {({ downloadeUrl, downloadMd5, appName }) => (
        <Fragment>
          <div className="jrp-field">
            <span className="jrp-field">downloadeUrl::</span>
            <a href={downloadeUrl} alt="downloadUrl" title="downloadUrl">
              {downloadeUrl}
              {appName}
            </a>
          </div>
          <div>
            <span className="jrp-field">downloadMd5:::</span>
            {downloadMd5}
          </div>
          <div>
            <span className="jrp-field">appName</span>
            {appName}
          </div>
        </Fragment>
      )}
    </Connect>
    <Connect data={data.content} path={CNTPATHS} key="content">
      {({ tag }) => (
        <div>
          <span className="jrp-field">tag:::</span>
          {tag}
        </div>
      )}
    </Connect>
    <div>
      <img src={LOGO} alt="logo" title="logo" />
    </div>
    <h2>Welcome to jscalpel</h2>
  </div>
);

render(<App />, document.getElementById("root"));

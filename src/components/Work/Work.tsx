import React, { useState } from "react";
import IWork from "./IWork";
import "./Work.css";
import workData from "./work.json";
import ReactJson from "react-json-view";
const Fade = require("react-reveal/Fade");

function Work() {
  const [jobs] = useState<Array<IWork>>(workData.work);
  const [simpleView, setSimpleView] = useState<boolean>(false);

  function toggleSimpleView(): void {
    setSimpleView(!simpleView);
  }

  return (
    <div className="work" id="work">
      <div className="work-bg">
        <h2 className="h1 mb-5 hr mt-5 mt-md-0">{"<Work />"}</h2>
        <div className="d-flex justify-content-end">
          <Fade>
            <p onClick={toggleSimpleView} className="simple-view-btn">
              {simpleView ? "Back to JSON view" : "I don't understand"}
            </p>
          </Fade>
        </div>

        {!simpleView && (
          <Fade>
            <ReactJson
              src={jobs}
              theme="twilight"
              displayDataTypes={false}
              displayObjectSize={false}
              enableClipboard={false}
            />
          </Fade>
        )}
        {simpleView &&
          jobs.map((job, i) => {
            return (
              <>
                <div>
                  <h3>{job.company}</h3>
                  <p className="h5">{job.description}</p>
                  <p>{`${job.from} - ${
                    job.isCurrentJob ? "present" : job.to
                  }`}</p>
                </div>
                {i !== jobs.length - 1 && <hr className="my-5" />}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Work;

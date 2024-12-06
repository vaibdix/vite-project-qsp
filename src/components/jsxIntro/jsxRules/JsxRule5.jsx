import React, { Fragment } from 'react';
// import Tinku, { Fragment } from 'react';


const JsxRule5 = () => {
  return (
    <>
    <div>
      <h4>Rule 5 </h4>
      <p>Fragments are empty angular braces</p>
      <p>"<> </>"</p>

      <h6>we cannot write key with empty fragment but can use with React.Fragment or Fragment</h6>
      <p>
        "<React.Fragment>
          No Addition of extra nodes which increases performace
        </React.Fragment>"
      </p>
      <p>
        "<Fragment>
          destructured fragments
        </Fragment>"
      </p>
      <p>
        {/* <Tinku.Fragment>Tinku Fragment as importing default import names can be changed</Tinku.Fragment> */}
      </p>
    </div>
    </>
  );
};

export default JsxRule5;

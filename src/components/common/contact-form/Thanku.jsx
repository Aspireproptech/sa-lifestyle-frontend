import React from "react";

const Thanku = () => {
  return (
    <div className="p-5">
      <div className="thanku-box">
        <h2> THANK YOU FOR CONTACTING US! </h2>
        <div>
          <i class="fa fa-commenting-o fa-5x" aria-hidden="true"></i>
        </div>
        <h5 className="mt-4"> We have recieved your message.</h5>
        <h5> We will reach you immediately.</h5>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1mx7ZpbxQRQkupHyuJh7d6fo6zFKfklW6/view?usp=sharing"
            )
          }
        >
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Thanku;

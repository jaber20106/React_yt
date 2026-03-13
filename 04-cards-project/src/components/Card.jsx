import React from "react";
import { Bookmark } from "lucide-react";

const card = (props) => {
  console.log(props.company);

  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg"
            alt=""
          />
          <button>
            Save <Bookmark size={10} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.dateposted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>Mumbai, India</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;

import "./head.css";
import logoImg from "../../assets/logo-nav.png";

function Head() {
  return (

    <div className="head">

      <div className="text-container">
        {/* <h1 className="heading">FeminineBot</h1> */}
        <h1 className="luxe-hero-title">FeminineBot</h1>
        <p className="headdesc">
          A friendly & intelligent{" "}
          <span className="health">healthcare</span> assistant for women
        </p>
      </div>
    </div>

  );
}



export default Head;
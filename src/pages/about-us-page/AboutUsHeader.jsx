import Hero_Cad from "../../assets/blog.png";

import "./New folder/aboutUsHeader.css";
function AboutUsHeader() {
  return (
    <>
      <header className="d-flex  flex-row justify-content-center">
          <div className="content1 ">
            <h1 className="">About US</h1>
            <p>
              improving everyday life, while creating a more
              sustainable world.
            </p>
          </div>
            <img
              src={Hero_Cad}
              className="header-img"
              alt="img"
              style={{ width: "400px", height: "400px" }}
            />
      </header>

    </>
  );
}

export default AboutUsHeader;

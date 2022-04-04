import apples from "../data/apples.jpg";
import candy from "../data/candy.jpg";
import dairy from "../data/dairy.jpg";
import meat from "../data/meat.jpg";
import vegetables from "../data/vegetables.jpg";
import "./CategorySection.css";

export default function CategorySection() {
  return (
    <div className="container-fluid mt-2">
      <div className="row gx-3" style={{ maxHeight: "500px" }}>
        <div className="col-sm-6 col-m-12 my-1 ">
          <div class="cardoverflow-hidden" style={{ width: "auto" }}>
            <img
              class="card-img"
              style={{
                borderRadius: "10px",
              }}
              src={apples}
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-sm-6 col-m-12 ">
          <div class="card border" style={{ width: "auto" }}>
            <img
              class="card-img"
              style={{
                borderRadius: "10px",
              }}
              src={vegetables}
              alt="Card image cap"
            />
          </div>
        </div>
      </div>

      <div className="row gx-3 " style={{ maxHeight: "500px" }}>
        <div className="col-sm-6 col-m-12 my-1">
          <div class="card" style={{ width: "auto" }}>
            <img
              class="card-img"
              style={{ borderRadius: "10px", height: "max-content" }}
              src={dairy}
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-sm-6 col-m-12">
          <div class="card" style={{ width: "auto" }}>
            <img
              class="card-img"
              style={{ borderRadius: "10px", height: "max-content" }}
              src={meat}
              alt="Card image cap"
            />
          </div>
        </div>
      </div>

      <div className="row gx-3" style={{ maxHeight: "500px" }}>
        <div className="col-sm-6 col-m-12 my-1">
          <div class="card" style={{ width: "auto" }}>
            <img
              class="card-img"
              style={{ borderRadius: "10px", height: "max-content" }}
              src={apples}
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-sm-6 col-m-12">
          <div class="card" style={{ width: "auto" }}>
            <img
              class="card-img"
              style={{ borderRadius: "10px", height: "max-content" }}
              src={candy}
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

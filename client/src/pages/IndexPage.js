// import Post from "../Post";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
let img = require("../../src/item_6321f9d69ce411663171030.jpg");

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [company, setcompany] = useState("all");
  const [type, settype] = useState("all");
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <img className="main_img" src={img} alt="" />
      <section className="galearys">
        <div className="container">
          <h1>المعرض</h1>
          <p>القبلاوي للسيراميك</p>
          <div className="galeary">
            <ul className="company">
              <li
                className={company === "all" ? "active" : ""}
                data-type="all"
                onClick={() => setcompany("all")}
              >
                الكل
              </li>
              <li
                className={company === "زنوبيا" ? "active" : ""}
                data-type="زنوبيا"
                onClick={() => setcompany("زنوبيا")}
              >
                زنوبيا
              </li>
              <li
                className={company === "اشبيليا" ? "active" : ""}
                data-type="two"
                onClick={() => setcompany("اشبيليا")}
              >
                اشبيليا
              </li>
            </ul>
            <ul className="type">
              <li
                className={type === "all" ? "active" : ""}
                data-type="all"
                onClick={() => settype("all")}
              >
                الكل
              </li>
              <li
                className={type === "اول" ? "active" : ""}
                data-type="زنوبيا"
                onClick={() => settype("اول")}
              >
                اول
              </li>
              <li
                className={type === "ثاني" ? "active" : ""}
                data-type="two"
                onClick={() => settype("ثاني")}
              >
                ثاني
              </li>
              <li
                className={type === "ثالث" ? "active" : ""}
                data-type="two"
                onClick={() => settype("ثالث")}
              >
                ثالث
              </li>
            </ul>
            <div class="content">
              {posts.length > 0 &&
                posts.map((post) => {
                  if (
                    (type != post.summary && type != "all") ||
                    (company != post.title && company != "all")
                  ) {
                    return <></>;
                  }
                  return (
                    <div className="box show">
                      <div className="image">
                        <Link to={`/post/${post._id}`}>
                          <img
                            src={"http://localhost:4000/" + post.cover}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="text">
                        <h4 data-type="one">{post.title}</h4>
                        <h4>{post.summary}</h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <button className="more" id="more">
            عرض المزيد
          </button>
        </div>
      </section>
    </>
  );
}

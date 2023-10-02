import { Link } from "react-router-dom";
// لم اعد استخدمها ووضعت المحتويابدلا من ذلك في ال indexpage
export default function Post({ _id, title, summary, cover, content }) {
  if (true) {
    return (
      <div className="box show">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/" + cover} alt="" />
          </Link>
        </div>
        <div class="text">
          <h4 data-type="one">{title}</h4>
          <h4>{summary}</h4>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

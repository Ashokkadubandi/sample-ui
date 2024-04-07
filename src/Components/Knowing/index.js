import "./index.css";

const KnowData = (props) => {
  const { each } = props;
  const { topHeading, bottomPaper, content } = each;

  return (
    <li className="know-data-card">
      <div className="top-know-ul">
        <h1 className="know-heading">{topHeading}</h1>
      </div>
      <ul className="ul-content-know">
        {content.map((each) => (
          <li className="know-list">{each}</li>
        ))}
      </ul>
      <div className="top-know-ul">
        <h1 className="know-heading">{bottomPaper} Papers</h1>
      </div>
    </li>
  );
};

export default KnowData;

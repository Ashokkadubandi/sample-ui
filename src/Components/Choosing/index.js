import "./index.css";

const Choose = () => (
  <div className="choosing-view">
    <div className="text-view">
      <h1 className="heading">Become ACCA in 18 months</h1>
      <p className="descript">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin
      </p>
      <ul className="card-slips">
        <li className="sample-card">
          <h1 className="card-text">Aca</h1>
          <p className="card-para">1025655</p>
        </li>
        <li className="sample-card">
          <h1 className="card-text">Aca</h1>
          <p className="card-para">1025655</p>
        </li>
        <li className="sample-card">
          <h1 className="card-text">Aca</h1>
          <p className="card-para">1025655</p>
        </li>
        <li className="sample-card">
          <h1 className="card-text">Aca</h1>
          <p className="card-para">1025655</p>
        </li>
      </ul>
    </div>
    <form className="form-view">
      <h1 className="form-heading">Approving to ACCA</h1>
      <input placeholder="Number" />
      <input placeholder="Email ID" />
      <select>
        <option>Random1</option>
        <option>Random2</option>
      </select>
      <select>
        <option>Random1</option>
        <option>Random2</option>
      </select>
      <button className="request">Request Call Back</button>
    </form>
  </div>
);
export default Choose;

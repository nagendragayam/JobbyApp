import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br /> Fits Your Life
        </h1>
        <p>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs" className="retry-btn-link">
          <button
            className="find-jobs-btn"
            type="button"
            onClick={onClickFindJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home

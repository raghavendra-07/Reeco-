import Header from '../Header'
import ItemDetails from '../ItemDetails'
import AllItems from '../AllItems'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="nav-h">
      <div className="nav-con">
        <p className="para">
          Orders : <span className="para-span">order 32457ABC</span>
        </p>
        <div className="nav-menu-con">
          <h1 className="head">Order 32457ABC</h1>
          <div className="btn-con">
            <button className="back-btn" type="button">
              Back
            </button>
            <button className="order-btn" type="button">
              Approve order
            </button>
          </div>
        </div>
      </div>
    </div>
    <ItemDetails />
    <AllItems />
  </div>
)

export default Home

import {useState} from 'react'
// import EditPopup from './EditPopup';

import './index.css'

const SingleItem = props => {
  const {eachItemDetails} = props
  const {imageUrl, productName, brand, price} = eachItemDetails

  const [status, setStatus] = useState('') // To track the status of the product

  const [modal, setModal] = useState(false)

  const handleMarkAsApproved = () => {
    setStatus(<p className="approve-word">Approved</p>)
  }

  const handleMarkAsMissing = (urgent = false) => {
    setStatus(
      urgent ? (
        <p className="missing-urgent-btn">Missing - Urgent</p>
      ) : (
        <p className="missing-btn">Missing</p>
      ),
    )
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <li className="menu-list-con">
      <div className="menu-items">
        <div className="img-url-con">
          <img className="img-url" src={imageUrl} alt="img" />
        </div>
        <div className="item-con-status">
          <p className="text-para">Product name</p>
          <p className="para">{productName}</p>
        </div>
        <div className="item-con">
          <p className="text-para">Brand</p>
          <p>{brand}</p>
        </div>
        <div className="item-con">
          <p className="text-para">Price</p>
          <p>{price}</p>
        </div>
        <div className="item-con">
          <p className="text-para">Quantity</p>
        </div>
        <div className="item-con">
          <p className="text-para">Total</p>
        </div>
        <div className="item-con">
          <p className="text-para">Status</p>
          <div>
            <p>{status}</p>
          </div>
          <div className="button-con">
            <button
              onClick={handleMarkAsApproved}
              className="icon-btn"
              type="button"
            >
              <img
                className="icons"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmBNpI4p0AGNFKkGvNTp3NxAwUjPzpCMP6Q&usqp=CAU"
                alt="right-icon"
              />
            </button>
            <button onClick={toggleModal} type="button">
              <img
                className="icons"
                src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-gray-cross-symbol-free-illustration-image_1280885.jpg"
                alt="cross-icon"
              />
            </button>
            <button className="icon-btn" type="button">
              <p>Edit</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        {modal && (
          <div className="modal">
            <li onClick={toggleModal} className="overlay">
              <div className="modal-content">
                <h1>Missing product</h1>
                <p>Is Chicken Breast Fillets, Boneless... urgent?</p>
                <button
                  className="close-modal"
                  onClick={toggleModal}
                  type="button"
                >
                  <img
                    className="icons"
                    src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-gray-cross-symbol-free-illustration-image_1280885.jpg"
                    alt="cross-icon"
                  />
                </button>
                <button
                  onClick={() => handleMarkAsMissing(false)}
                  className="missing-btn"
                  type="button"
                >
                  Missing
                </button>
                <button
                  onClick={() => handleMarkAsMissing(true)}
                  className="missing-urgent-btn"
                  type="button"
                >
                  Mark as Missing - Urgent
                </button>
              </div>
            </li>
          </div>
        )}
      </div>
    </li>
  )
}

export default SingleItem

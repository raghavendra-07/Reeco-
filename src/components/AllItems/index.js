import {Component} from 'react'

import SingleItem from '../SingleItem'

import './index.css'

const itemDetails = [
  {
    id: 1,
    image_url:
      'https://drive.google.com/file/d/17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV/view?usp=drive_link',
    product_name:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid ',
    brand: 'Hormel Black LabelMany',
    price: '$60.67 / 6*1LB',
  },

  {
    id: 2,
    image_url:
      'https://drive.google.com/file/d/17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV/view?usp=drive_link',
    product_name:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid ',
    brand: 'Hormel Black LabelMany',
    price: '$60.67 / 6*1LB',
  },

  {
    id: 3,
    image_url:
      'https://drive.google.com/file/d/17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV/view?usp=drive_link',
    product_name:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid ',
    brand: 'Hormel Black LabelMany',
    price: '$60.67 / 6*1LB',
  },

  {
    id: 4,
    image_url:
      'https://drive.google.com/file/d/17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV/view?usp=drive_link',
    product_name:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid ',
    brand: 'Hormel Black LabelMany',
    price: '$60.67 / 6*1LB',
  },

  {
    id: 5,
    image_url:
      'https://drive.google.com/file/d/17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV/view?usp=drive_link',
    product_name:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid ',
    brand: 'Hormel Black LabelMany',
    price: '$60.67 / 6*1LB',
  },
]

class AllItems extends Component {
  //  state = {isRightIcon: false}

  render() {
    return (
      <div className="all-main-con">
        <div className="search-add-con">
          <div className="search-con">
            <input className="input" type="search" placeholder="Search...." />
            <img
              className="search-image"
              src="https://image.pngaaa.com/973/2811973-middle.png"
              alt="search"
            />
          </div>
          <div className="btn-con">
            <button className="add-btn" type="button">
              Add Item
            </button>
            <img
              className="print-img"
              src="https://cdn-icons-png.flaticon.com/512/4020/4020167.png"
              alt="print"
            />
          </div>
        </div>
        <div className="menu-items-con">
          <div>
            <ul className="ul-list">
              {itemDetails.map(eachItem => (
                <SingleItem
                  eachItemDetails={eachItem}
                  onClickRight={this.onClickRightIcon}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AllItems

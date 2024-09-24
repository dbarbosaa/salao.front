
//Select 2 Data Sources

export const Mens = [
    { value: "Foot wear", label: "Foot wear" },
    { value: "Top wear", label: "Top wear" },
    { value: "Bootom wear", label: "Bootom wear" },
    { value: "Men's Groming", label: "Men's Groming" },
    { value: "Accessories", label: "Accessories" }
];

export const women = [
    { value: "Western wear", label: "Western wear" },
    { value: "Foot wear", label: "Foot wear" },
    { value: "Top wear", label: "Top wear" },
    { value: "Bootom wear", label: "Bootom wear" },
    { value: "Beuty Groming", label: "Beuty Groming" },
    { value: "Accessories", label: "Accessories" },
    { value: "jewellery", label: "jewellery" }
];

export const children = [
    { value: "Boys clothing", label: "Boys clothing" },
    { value: "girls Clothing", label: "girls Clothing" },
    { value: "Toys", label: "Toys" },
    { value: "Baby Care", label: "Baby Care" },
    { value: "Kids footwear", label: "Kids footwear" }
];

export const Electronics = [
    { value: "Mobiles", label: "Mobiles" },
    { value: "Laptops", label: "Laptops" },
    { value: "Gaming & Accessories", label: "Gaming & Accessories" },
    { value: "Health care Appliances", label: "Health care Appliances" }
];

export const Extra = [
    { value: "Stationery", label: "Stationery" },
    { value: "Books", label: "Books" },
    { value: "Gaming", label: "Gaming" },
    { value: "Music", label: "Music" },
    { value: "Exercise & fitness", label: "Exercise & fitness" }
];

export const Brand = [
    { value: "Wallmart", label: "Wallmart" },
    { value: "Catseye", label: "Catseye" },
    { value: "Moonsoon", label: "Moonsoon" },
    { value: "Textmart", label: "Textmart" }
];

export const Type = [
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
    { value: "Extra Large", label: "Extra Large" }
];

//Products Data Sources

import ecommerce1 from '../../../../../assets/img/ecommerce/01.jpg';
import ecommerce2 from '../../../../../assets/img/ecommerce/02.jpg';
import ecommerce3 from '../../../../../assets/img/ecommerce/03.jpg';
import ecommerce6 from '../../../../../assets/img/ecommerce/06.jpg';
import ecommerce4 from '../../../../../assets/img/ecommerce/04.jpg';
import ecommerce5 from '../../../../../assets/img/ecommerce/05.jpg';
import ecommerce9 from '../../../../../assets/img/ecommerce/09.jpg';
import ecommerce11 from '../../../../../assets/img/ecommerce/11.jpg';
import ecommerce7 from '../../../../../assets/img/ecommerce/07.jpg';


export const productData = [
    {
        id: 1,
        pic: ecommerce1,
        badgecolor: 'pink',
        title: 'FLOWER POT',
        price: '$26',
        altprice: '$59'
    },
    {
        id: 2,
        pic: ecommerce2,
        badgecolor: '',
        wishicon: <i className="mdi mdi-heart text-danger ms-auto wishlist"></i>,
        title: 'CHAIR',
        price: '$35',
        altprice: '$79'
    },
    {
        id: 3,
        pic: ecommerce3,
        badgecolor: 'success',
        title: 'HIKING BOOTS',
        price: '$25',
        altprice: '$59'
    },
    {
        id: 4,
        pic: ecommerce6,
        badgecolor: 'success',
        title: 'COLLEGE BAG',
        price: '$35',
        altprice: '$69'
    },
    {
        id: 5,
        pic: ecommerce4,
        badgecolor: '',
        wishicon: <i className="mdi mdi-heart ms-auto wishlist text-danger"></i>,
        title: 'HEADPHONES',
        price: '$46',
        altprice: '$89'
    },
    {
        id: 6,
        pic: ecommerce5,
        badgecolor: '',
        title: 'CAMERA LENS',
        price: '$159',
        altprice: '$299'
    },
    {
        id: 7,
        pic: ecommerce9,
        badgecolor: 'purple',
        wishicon: <i className="mdi mdi-heart ms-auto wishlist text-danger"></i>,
        title: 'CAMERA',
        price: '$129',
        altprice: '$189'
    },
    {
        id: 8,
        pic: ecommerce11,
        badgecolor: '',
        title: 'HANDBAG',
        price: '$19',
        altprice: '$39'
    },
    {
        id: 9,
        pic: ecommerce7,
        badgecolor: 'info',
        wishicon: <i className="mdi mdi-heart ms-auto wishlist text-danger"></i>,
        title: 'LAPTOP',
        price: '$89',
        altprice: '$120'
    }
];
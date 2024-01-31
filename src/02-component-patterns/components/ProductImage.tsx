import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)

    let imgToShow: string = noImage

    if (img) {
        imgToShow = img
    }

    if (product.img) {
        imgToShow = product.img
    }

    if (!img && !product.img) {
        imgToShow = noImage
    }

    return (
        <img src={imgToShow} alt="product img" className={styles.productImg} />
    )
}

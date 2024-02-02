import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {

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
        <img
            src={imgToShow} alt="product img"
            className={`${styles.productImg} ${className}`}
            style={style}
        />
    )
}

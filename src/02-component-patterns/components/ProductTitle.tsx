import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext(ProductContext)

    const { title: productTitle } = product

    let titleToShow: string = productTitle

    if (productTitle) {
        titleToShow = productTitle
    }

    if (title) {
        titleToShow = title
    }

    if (!title && !productTitle) {
        titleToShow = 'No hay titulo'
    }

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{titleToShow}</span>
    )
}
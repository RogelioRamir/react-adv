import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title }: { title?: string }) => {

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
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'


import styles from '../styles/styles.module.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <br />
            <div className={styles.wrapperCards}>

                <ProductCard product={product}>

                    <ProductCard.Image/>

                    <ProductCard.Title title={'cafe'} />

                    <ProductCard.Buttons />

                </ProductCard>

                <ProductCard product={product}>

                    <ProductImage/>

                    <ProductTitle />

                    <ProductButtons />

                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage;
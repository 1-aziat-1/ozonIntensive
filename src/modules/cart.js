import randerCart from "./randerCart";
import postData from "./postData";

const cart = () => {

    const cartBtn = document.querySelector('#cart'),
        cartModal = document.querySelector('.cart'),
        cartClose = cartModal.querySelector('.cart-close'),
        cartTotal = cartModal.querySelector('.cart-total > span'),
        goodsWrapper = document.querySelector('.goods'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartSendBtn = cartModal.querySelector('.cart-confirm');

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')): []


        cartModal.style.display = 'flex';

        randerCart(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        },0)
    }

    const closeCart = () => {
        cartModal.style.display = '';
    }


    cartClose.addEventListener('click', closeCart);
    cartBtn.addEventListener('click', openCart);

    goodsWrapper.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-primary')){
                const card = event.target.closest('.card')
                const key = card.dataset.key;
                const goods = JSON.parse(localStorage.getItem('goods'))
                const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []
                const goodItem = goods.find((item) => {
                    return item.id === +key
                })
                
                
                cart.push(goodItem)

                localStorage.setItem('cart', JSON.stringify(cart))
            }
    })

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')){
            const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')): []

            const card = event.target.closest('.card')
            const key = card.dataset.key;
            const index = cart.findIndex((item) => {
                return item.id === +key
            })

            cart.splice(index, 1)
            

            localStorage.setItem('cart', JSON.stringify(cart))

            randerCart(cart);

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            },0)
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')): []

        postData(cart).then(() => {
            localStorage.removeItem('cart');

            randerCart([]);


            cartTotal.textContent = 0
        })
    })
}

export default cart
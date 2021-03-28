import {useState, useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'
//components
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
//redux
import {useAppSelector, useAppDispatch} from '../../../hooks'
import {updateProductList, removeFromProductList} from '../../../slices/productListSlice'
import {updateCategoryList} from '../../../slices/categoryListSlice'
import {updateModal} from '../../../slices/modalSlice'
//functions
import {numberWithCommas} from '../../../functions/numberWithCommas';
let _ = require('lodash');
//icons
import {BsThreeDotsVertical, BsFillTrashFill, BsPencil} from 'react-icons/bs'
//spring
import {useSpring, animated} from 'react-spring'



export default function ProductList() {
    const dispatch = useAppDispatch()
    const productList = useAppSelector(state => state.productList.value)
    const modal = useAppSelector(state => state.modal.value)

    const [AddProductModal, setAddProductModal] = useState(false);
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        //Get products
        axios.get('/api/products/getAll')
        .then(response => {
            
        }).catch(error => console.log(error))
        //Get categories
        axios.get('/api/categories/getAll')
        .then(response => {
            dispatch(updateCategoryList(response.data))
        }).catch(error => console.log(error))
    }, [])

    return (
        <div className="w-full p-4">            
            <button className="mb-4 p-2 rounded text-xl text-gray-200 bg-blue-800 focus:outline-none" onClick={() => dispatch(updateModal('addProduct'))}>Add Product</button>

            <div className="w-full p-4 rounded bg-white">
                <h1 className="py-2 text-2xl text-gray-600">Products</h1>
                <div className="flex justify-between p-2 py-3 rounded text-gray-200 bg-blue-600">
                    <h1 className="w-3/12">Product Name</h1>
                    <h1 className="w-2/12">Category</h1>
                    <h1 className="w-2/12">Price</h1>
                    <h1 className="w-1/12">Actions</h1>
                </div>
                <div>
                {productList.map(product => 
                    <Product key={product._id} product={product} setProductData={setProductData} />
                )}
                </div>
            </div>

            {modal === 'addProduct' && <AddProduct /> }
            {modal === 'editProduct' && <EditProduct product={productData} /> }
        </div>
    )
}

const Product = ({product, setProductData}) => {
    const dispatch = useAppDispatch()
    const productList = useAppSelector(state => state.productList.value)
    const modal = useAppSelector(state => state.modal.value)

    const [actionView, setActionView] = useState(false);

    const removeProduct = (product) => {
        const payload = {
            productId: product._id
        }
        axios.delete('/api/products/remove', {params: payload})
        .then(response => {
            let ind = _.findIndex(productList, {_id: product._id});
            dispatch(removeFromProductList(ind));
        }).catch(error => console.log(error))
    }

    return (
        <div className="flex justify-between items-center">
            <div className="w-3/12 flex items-center gap-2">
                <div className="w-16 h-16 relative">
                    <Image className="object-contain" src={product.imgUrl ? product.imgUrl : 'https://via.placeholder.com/50'} layout="fill" />
                </div>
                <h1>{product.name}</h1>
            </div>
            <h1 className="w-2/12">{product.category}</h1>
            <h1 className="w-2/12">{numberWithCommas(parseInt(product.price, 10))} VND per {product.measurement}</h1>
            <div className="w-1/12">
                <div className="relative">
                    <BsThreeDotsVertical className="p-2 text-4xl cursor-pointer" onClick={actionView ? () => setActionView(false) : () => setActionView(true)} />
                    {actionView &&
                        <Icon color={'red-600'} iconName={BsFillTrashFill} position={'-translate-x-full'}
                        cta={() => removeProduct(product)} />
                    }
                    {actionView &&
                        <Icon color={'green-600'} iconName={BsPencil} position={'translate-x-full'}
                        cta={() => {
                            dispatch(updateModal('editProduct'));
                            setProductData(product);
                        }} />
                    }
                </div>
            </div>
        </div>
    )
}

const Icon = ({color, iconName, position, cta}) => {
    const Icon = iconName;

    //anims
    const popUp = useSpring({opacity: '1', from: {opacity: '0'}});

    return (
        <animated.div style={popUp} className={`absolute top-0 transform ${position} p-2 rounded-full text-2xl text-${color} bg-gray-200
            cursor-pointer hover:text-gray-200 hover:bg-${color}`} onClick={cta} >
            <Icon />
        </animated.div>
    )
}
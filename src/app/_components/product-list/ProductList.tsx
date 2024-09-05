import { Product } from "@/types/product";
import Link from "next/link";

interface IProductlistProps {
    products: Product[],
    title: string,
    subTitle?: string,
}

const ProductList = ({ products, title, subTitle }: IProductlistProps) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
                    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Browse all products
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                <p className="mt-4 text-gray-500 text-xl">
                    {subTitle}
                </p>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 mt-6">
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`} className="group text-sm">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                    alt={product?.imageAlt || product.name}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
                            <p className="italic text-gray-500">{product.availability}</p>
                            <p className="mt-2 font-medium text-gray-900">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList;
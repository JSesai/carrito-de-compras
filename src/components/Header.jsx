import { useMemo } from "react"


export default function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }) {
    //state derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart] ) //use memo para optimizar el rendimiento, solo se ejecuta si la dependencia que tiene cambia
    //state derivado
    const total = useMemo( () =>  cart.reduce((acc, product) => acc + (product.price * product.cantidad), 0) , [cart]) //use memo para optimizar el rendimiento, solo se ejecuta si la dependencia que tiene cambia

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src='img/logo.svg' alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src='img/carrito.png' alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ?
                                    <p className="text-center">El carrito esta vacio</p>
                                    :
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(articulo => (
                                                    <tr key={articulo.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`img/${articulo.image}.jpg`} alt="imagen guitarra" />
                                                        </td>
                                                        <td>{articulo.name}</td>
                                                        <td className="fw-bold">
                                                            {articulo.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={()=> decreaseQuantity(articulo.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {articulo.cantidad}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={()=> increaseQuantity(articulo.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(articulo.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>

                                        <p className="text-end">Total pagar: <span className="fw-bold"> {total} </span></p>
                                        <button onClick={clearCart} className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>

                                    </>

                                }

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

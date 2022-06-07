import React, { useEffect, useRef, useContext } from "react";
import { useLocation } from "wouter";
import Context from "context/userContext";
import useUser from "hooks/useUser";
import { Container } from "react-bootstrap";
import { SvgImage } from "./svgImage";

export default function PremiumPage() {
    const { currentUser, isPremium } = useContext(Context)
    const [, navigate] = useLocation()
    const { addPremium } = useUser();
    const paypal = useRef()

    if (!currentUser) navigate('/login')

    useEffect(() => {
        if (window.myButton) window.myButton.close();
        window.myButton = window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Subcription to gamovie",
                            amount: {
                                currency_code: "EUR",
                                value: "2.99"
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                addPremium();
            },
            onError: (err) => {
                console.log(err)
            }
        })
        window.myButton.render(paypal.current);
    }, [addPremium])

    return <Container>
        <div className="d-flex flex-column mt-5">
            <h2 className="text-center mb-5">¿Quién no quiere ser premium?</h2>
            <SvgImage className="m-3" />
            <div className="d-flex align-self-center m-4">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="text-center">Reviews</h2>
                        <p className="text-justify">Como usuario premium prodrás, a diferencia de los usuarios normales, dejar reviews en tus películas y juegos favoritos.</p>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="text-center">Cine</h2>
                        <p className="text-justify">Disponemos de promociones, las cuales cambian temporalmente, con los cines mas famosos para obtener descuentos en entradas de cine.</p>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="text-center">Videojuegos</h2>
                        <p className="text-justify">Al igual que con las películas los Videojuegos tambien disponen de promociones con páginas como Eneba para obtener keys a un precio inigualable.</p>
                    </div>
                </div>
            </div>
            {isPremium ? <h2 className="text-center"><b>Ya eres PREMIUM!</b></h2> : <div ref={paypal} className="align-self-center"></div>}
        </div>
    </Container>

}
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promotion(){

    return(
        <main>
            <section>
                <div className="container">
                    <div className="mt30 mb30">
                        <Card  title="Página de Promoção"/>
                    </div>
                        <div className="dflex">
                        <Link to="/sub">
                            <Button text="Quero Participar"></Button>
                        </Link>
                        </div>  
                </div>
            </section>
        </main>
    )
}
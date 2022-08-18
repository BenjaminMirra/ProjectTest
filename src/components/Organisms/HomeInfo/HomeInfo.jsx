import React from 'react'
import FotoSeccionHome1 from '../../Utils/images/fotoSeccionHome1.png'
import FotoSeccionHome2 from '../../Utils/images/fotoSeccionHome2.png'
import FotoSeccionHome3 from '../../Utils/images/fotoSeccionHome3.png'
import './HomeInfo.css'

export const HomeInfo = () => {

    return (
        <div className="homeInfo">
            <div className="homeInfo-content">
                <img src={FotoSeccionHome1} alt="" />
                <div className="homeInfo-content-text">
                    <h1>Título Número 1</h1>
                    <p>La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos.
                    </p>
                </div>
            </div>
            <div className="homeInfo-content homeInfo-content-second">
                <div className="homeInfo-content-text">
                    <h1>Título Número 2</h1>
                    <p>La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos.
                    </p>
                </div>
                <img src={FotoSeccionHome2} alt="" />
            </div>
            <div className="homeInfo-content">
                <img src={FotoSeccionHome3} alt="" />
                <div className="homeInfo-content-text">
                    <h1>Título Número 3</h1>
                    <p>La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos.
                    </p>
                </div>
            </div>
        </div>
    )
}

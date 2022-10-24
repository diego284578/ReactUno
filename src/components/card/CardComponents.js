import './CardComponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardComponents({icons}) {
    return (
        
            <div className="col-sm-4">

                <div className="daire">
                    <div className="bar">
                        <div className="bg-dark text-white">
                           {icons}
                        </div>
                    </div>
                    
                </div>
                <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium laborum illum, eligendi labore veniam a non iusto sint dolorum illo fugit iure magnam, nihil, deleniti quis saepe provident doloremque.</p>
            </div>


       
    )
}
export default CardComponents;
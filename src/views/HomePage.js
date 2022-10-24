import '../App.css';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
// import axios from "axios";


function HomePage() {


    // const AxiosPeticion = async () => {

    //     let response = await axios.get('https://jsonplaceholder.typicode.com/users');

    //     console.log(response);
    // }

    // AxiosPeticion()



    return (
        <div className="body">
            <div className="Header">
                <Header />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    );
}

export default HomePage;

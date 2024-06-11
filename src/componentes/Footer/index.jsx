import './Footer.css'


const Footer = () => {
// Recordar importar desde aqui las imagenes y no en el css por temas de rutas de React

    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href='https://www.aluracursos.com/'> 
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href='https://www.aluracursos.com/'> 
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='https://www.aluracursos.com/'> 
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>

        <img  className='footer-logo' src='/img/Logo.png' alt='org' /> 

        <div className='footer-subtitulo' >
            <p>Desarrollado por: <strong>Andrea Campo</strong></p>
        </div>
    </footer>





}

export {Footer}

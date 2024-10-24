import { useState } from 'react';
import Rodal from 'rodal';  
import 'rodal/lib/rodal.css';  

// eslint-disable-next-line react/prop-types
const ExampleModal = ({children, element, height, width}) => {  
    const [visible, setVisible] = useState(false);  

    const showModal = () => {  
        setVisible(true);  
    };  

    const hideModal = () => {  
        setVisible(false);  
    };  

    return (  
        <div>  
            <button onClick={showModal}>{children}</button>  
            <Rodal visible={visible} onClose={hideModal} height={height} width={width}>  
                <div>{element}</div>
            </Rodal>  
        </div>  
    );  
};  

export default ExampleModal;
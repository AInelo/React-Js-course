
const Header = ({title}) => {
    const hearderStyle = {
        backgroundColor: 'royalblue', 
        color: '#fff'

    };
   
    
    return (
        <header style={hearderStyle} >
            <h1>{title}</h1>
        </header>
        
    )
}


// When the component doesn't receive any Props of Parent component,
// It will use the default Props here

Header.defaultProps = {
    title: "Default title"
}



export default Header;

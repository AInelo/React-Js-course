
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
export default Header;

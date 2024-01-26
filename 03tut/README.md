# Functionnal Components

1. How to Add functionnal components
 a. Create the file Function.js
 ```bash
    const Funtion = () => {
        const today = new Date();
        return (
            <footer>
                <p>Copyright &copy; {today.getFullYear()}</p>
            </footer>
        )
    }
    export default Function;
 ```
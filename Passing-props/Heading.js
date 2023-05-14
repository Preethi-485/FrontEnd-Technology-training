function Heading(props){
    console.log(props);
    return(
        <div className="heading">
            <h1>Hello there indeed, {props.name},{props.color}</h1>
        </div>
    );
};
export default Heading;
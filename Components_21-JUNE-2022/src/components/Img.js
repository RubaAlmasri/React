import './style.css';


function Img() {
    return (
        <>
            <img src="https://picsum.photos/200" alt="img" />
            <input type="checkbox" className="lab"></input>
            <label class="form-check-label" className="lab" >HTML</label><br></br>
            <img src="https://picsum.photos/201" alt="img" />
            <input type="checkbox" className="lab"></input>
            <label class="form-check-label" className="lab" >PHP</label><br></br>
            <img src="https://picsum.photos/202" alt="img" />
            <input type="checkbox" className="lab"></input>
            <label class="form-check-label" className="lab" >CSS</label><br></br>
        </>
    )
}

export default Img;

import './style.css';


function Img() {
    return (
        <>
        <ul className="list-group">

            <li class="list-group-item">
                <img src="https://picsum.photos/200" alt="img" />
                <input type="checkbox" className="lab"></input>
                <label class="form-check-label" className="lab" >HTML</label>
            </li>
            <li class="list-group-item">
                <img src="https://picsum.photos/201" alt="img" />
                <input type="checkbox" className="lab"></input>
                <label class="form-check-label" className="lab" >PHP</label>
            </li>
            <li class="list-group-item">
                <img src="https://picsum.photos/202" alt="img" />
                <input type="checkbox" className="lab"></input>
                <label class="form-check-label" className="lab" >CSS</label><br></br>
            </li>
            </ul>
        </>
    )
}

export default Img;

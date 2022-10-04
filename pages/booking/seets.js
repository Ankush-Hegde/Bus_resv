

import styles from '../../styles/Home.module.css'
import Image from 'next/image'



export default function Home() {
    return (
    <div>
      <div className={styles.main}>
      <div className="theatre">
        <div className="screen-side">
            <h3 className="select-text">Please select a seat</h3>
        </div>
        <div className="exit exit--front">
        </div>
        <ol className="cabin">
            <li className="row row--1">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="1A" />
                        <label for="1A">1A</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="1B" />
                        <label for="1B">1B</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="1C" />
                        <label for="1C">1C</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" disabled id="1D" />
                        <label for="1D">Occupied</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="1E" />
                        <label for="1E">1E</label>
                    </li>
                </ol>
            </li>
            <li className="row row--2">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="2A" />
                        <label for="2A">2A</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="2B" />
                        <label for="2B">2B</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="2C" />
                        <label for="2C">2C</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="2D" />
                        <label for="2D">2D</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="2E" />
                        <label for="2E">2E</label>
                    </li>
                </ol>
            </li>


            <li className="row row--3">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="3A" />
                        <label for="3A">3A</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="3B" />
                        <label for="3B">3B</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="3C" />
                        <label for="3C">3C</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="3D" />
                        <label for="3D">3D</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="3E" />
                        <label for="3E">3E</label>
                    </li>
                </ol>
            </li>


            <li className="row row--4">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="4A" />
                        <label for="4A">4A</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="4B" />
                        <label for="4B">4B</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="4C" />
                        <label for="4C">4C</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="4D" />
                        <label for="4D">4D</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="4E" />
                        <label for="4E">4E</label>
                    </li>
                </ol>
            </li>


            <li className="row row--5">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="5A" />
                        <label for="5A">5A</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="5B" />
                        <label for="5B">5B</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="5C" />
                        <label for="5C">5C</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="5D" />
                        <label for="5D">5D</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="5E" />
                        <label for="5E">5E</label>
                    </li>
                </ol>
            </li>


            <li className="row row--6">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="6A" />
                        <label for="6A">6A</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="6B" />
                        <label for="6B">6B</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="6C" />
                        <label for="6C">6C</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="6D" />
                        <label for="6D">6D</label>
                    </li>
                    <li className="seat">
                        <input type="checkbox" id="6E" />
                        <label for="6E">6E</label>
                    </li>
                </ol>
            </li>


            <li className="row row--7">
                <ol className="seats" type="A">
                    <li className="seat">
                        <input type="checkbox" id="7A" />
                        <label for="7A">7A</label>
                    </li>
                    <li className="lseat">
                        <input type="checkbox" id="7B" />
                        <label for="7B">7B</label>
                    </li>
                    <li className="lseat">
                        <input type="checkbox" id="7C" />
                        <label for="7C">7C</label>
                    </li>
                    <li className="lseat">
                        <input type="checkbox" id="7D" />
                        <label for="7D">7D</label>
                    </li>
                    <li className="lseat">
                        <input type="checkbox" id="7E" />
                        <label for="7E">7E</label>
                    </li>
                    <li className="lseat">
                        <input type="checkbox" id="7F" />
                        <label for="7F">7F</label>
                    </li>
                </ol>
            </li>
        </ol>



    </div>
      </div>
    </div>
    )
}
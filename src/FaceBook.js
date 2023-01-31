import './FaceBook.css';
import profiles from './data/berlin.json';

import IdCard from './IdCard';
import { Component } from 'react';

class FaceBook extends Component  {

    state = {
        profileList: profiles.map(el =>  <IdCard {...el} />),
        countryList: profiles.map(el => el.country).filter((el, i, arr) => !arr.includes(el, i+1))
    }
    
    colorSelectedCountry = (e) => {
        this.setState({
            profileList: profiles.map(el =>  {
                // console.log(e.target.textContent, el.country === e.target.textContent);
                if(el.country === e.target.textContent)
                    return <IdCard {...el} isSelected={true} />
                else
                    return <IdCard {...el} isSelected={false} />
            })
        });
    }

    render() {
        return (
            <article className="facebook-article">
                <ul className="country-buttons">
                    {this.state.countryList.map((el, i) =>
                        <li key={i}>
                            <button onClick={this.colorSelectedCountry}>{el}</button>
                        </li>
                    )}
                </ul>
                <hr />
                <ul>
                    {this.state.profileList.map((el, i) =>
                        <li key={i}>
                            {el}
                        </li>
                    )}
                </ul>
            </article>
        )
    }
}

export default FaceBook;
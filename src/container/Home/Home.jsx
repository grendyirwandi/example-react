import React,{Component} from 'react';
import Bio from '../Bio/Bio'

class Home extends Component{
    state = {
        showComponent: true
    }

    render(){
        return(
            <div>
                <p>Biodata</p>
                <hr/>
                <Bio />
            </div>
        )
    }
}
export default Home
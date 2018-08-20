import React,{Component}  from 'react';
import { Form, Input, Tooltip,Button,Card} from 'antd'
import Addname from './addname.js';
import Ingredients from  './ingredients.js';
import  './index.less';
class Recipeadd extends Component{
    
    render(){
   
        return(
            <Card>
            <div className='recipeadd'>
          {/* <Addname/>*/}
                
          <Ingredients></Ingredients>
            </div>
            </Card>
        )
    }

}

export default  Recipeadd;
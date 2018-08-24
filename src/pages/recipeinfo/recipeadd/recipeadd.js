import React,{Component}  from 'react';
import { Form, Input, Tooltip,Button,Card} from 'antd'
import Addname from './addname.js';
import Ingredients from  './ingredients.js';
import Steps from './steps.js';
import Auxiliary   from './auxiliary.js'
import  './index.less';
class recipeadd extends Component{
    
    render(){
   
        return(
            <Card>
            <div className='recipeadd'>
          {/* <Addname/>*/}
                
               {/*  <Ingredients></Ingredients>*/}
               {/*   <Auxiliary></Auxiliary>*/}
               <Steps></Steps>
            </div>
            </Card>
        )
    }

}

export default  recipeadd;
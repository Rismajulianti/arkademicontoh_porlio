import React , {Component} from "react";
import"./leanding.css";
import TopName from"./component/topName";
import Description from"./component/description";
import Form from"./component/form";
import ScrollDown from"./component/scrollDown";

class Landing extends Component{
    render(){
        return (
            <div class="wrapper with-image ">
                <div class="flex-wrapper">
                    {/*top name*/}
                   <TopName
                       name="risma"
                   ></TopName>
                      {/*--*/}
                        {/*description*/}
                  <Description>
                  </Description>
                      {/*--*/}
                        {/*Form*/}
                            <Form/>
                      {/*--*/}
                        {/*scroll down*/}
                    <ScrollDown/>
                  {/*--*/}
                </div>
                <div class="opacity">
                </div>
            </div>   
        )
    }
}
export default Landing;
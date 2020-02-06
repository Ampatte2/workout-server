import React from 'react'
import {CollDiv, InsDiv,CollapseButton, ListItem} from "../style/styledcomponents"

export default class Collapsible extends React.Component {
    constructor(props){
        super(props)
        this.state={
            collDiv:{height:0, visibility:"hidden"},
            insDiv:{height:0, visibility:"hidden"}
        }

    }

    //changes height and visibility to make collapse function work for both video and instructions
    onClick(div){

        let height;

        if(this.state[div].visibility==="hidden"){
            if(div==="insDiv"){
                height="15vh"
            }else{
                height="32vw";
            }
            this.setState({[div]:{height:height, visibility:"visible"}})
        }else{
            this.setState({[div]:{height:0, visibility:"hidden"}})
        }
        
    }
    
    render() {
        
        return (
            <>
                <CollapseButton onClick={()=>this.onClick("collDiv")}>Video</CollapseButton>
                    <CollDiv visibility={this.state.collDiv.visibility} height={this.state.collDiv.height}>
                        <iframe
                            style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                            }}
                            src={`https://www.youtube.com/embed/${this.props.item.video}`}
                            frameBorder="0" title={this.props.index2}
                        />
                    </CollDiv>

            <CollapseButton onClick={()=>this.onClick("insDiv")}>Instructions</CollapseButton>
                <InsDiv visibility={this.state.insDiv.visibility} height={this.state.insDiv.height}>
                    {this.props.item.instructions.map((i, index3)=>{return <ListItem visibility={this.state.insDiv.visibility} height={this.state.insDiv.height} key={index3}>{i}</ListItem>})}
                </InsDiv>
            </>
        )
    }
}

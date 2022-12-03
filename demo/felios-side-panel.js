{   
    const NAME ="FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "Simplified Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS= {};
    const UI = "Single Side-Panel"
    const LICENSE= "MIT";
    const COPYRIGHT= "(c) 2021 Humphrey Pietersen";
}

Component.SidePanel=  new felios("felios-side-panel",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">Panel</a>
                <div class="panel">
                    <h4>Side Panel</h4>
                    <a id="killAction" href="#" class="button">Close</a>
                </div>
            `,
            state:{
               toggle: true
            },
            style:`
       
            
                #felios-side-panel button { 
                    display:block; 
                }
                .panel {
                    right:-200vw;
                    transition: cubic-bezier(.45,-0.01,0,1) 250ms right;
                } 
                
                #felios-side-panel .button.active + div.panel{
                   right:0;
                }
                .panel{
                top:0;
                    position: fixed;
                    width:280px;
                    color: var(--onsolid-dark);
                    min-height:100vh;
                    background: rgb(20,20,20);
                    color:rgb(200,200,200);
                    padding:1em;
                    // box-shadow:1px 1px 20px 2000px rgba(0,0,0,0.5);
                    z-index:100;
                    
                }
            `
        }
    ]
);

doComponentAction(Component.SidePanel,
    Component.SidePanel.fkillAction.addEventListener("click",function(e){
    e.preventDefault();
      if(Component.SidePanel.state.toggle === false){
              Component.SidePanel.fAction.classList.remove("active");
              // set it to true just as in the default state
              Component.SidePanel.setState({toggle:true});
              Component.SidePanel.update();
    }

}),null);


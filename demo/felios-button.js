{   
    const NAME ="FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "A Basic Retro Native Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS= {};
    const UI = "Single Switch Toggle"
    const LICENSE= "MIT";
    const COPYRIGHT= "(c) 2021 Humphrey Pietersen";
}

Component.Button=  new felios("felios-button",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">Button</a>
            `,
            state:{
               toggle: true
            },
            style:`
                #felios-button .button,
                body button, 
                body .button
                    {
                        display:inline-flex;
                        flex-direction:row;
                        align-items:center;
                           background: rgba(40,40,40,0.9);
                        color: rgba(200,200,200,1);
                        border:none;
                        outline:none;
                        filter:blur(80%);
                        padding: .53em 2em;
                        min-height: 32px;
                        min-width:1%;
                        
                        font-weight: 700;
                        text-decoration: none;
                        border-radius: 4px;
                        
                }
            `
        }
    ]
);

Component.Button.fAction.addEventListener("click",function(e){
       e.preventDefault();
    if(Component.Button.state.toggle === true){
     Component.Button.fAction.classList.add("active");      
        Component.Button.fAction.innerHTML="Loading"
         e.stopPropagation();
       
    }else{
      Component.Button.fAction.innerHTML="Button"
        Component.Button.fAction.classList.remove("active");      
    }
  
})


toggleState(Component.Button, 
        {
          on:true, 
          off:false
        }
);


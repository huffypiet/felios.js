{   
    const NAME ="FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "Simplified Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS= {};
    const UI = "Single Switch Toggle"
    const LICENSE= "MIT";
    const COPYRIGHT= "(c) 2021 Humphrey Pietersen";
}

Component.SnackBar=new felios("felios-snackbar",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">Trigger Snacks</a>
                <div class="wrap">
                  <div class="snackbar">
                    <h4>Reached bottom of Page!</h4>
                </div>
                </div>
            `,
            state:{
               toggle: true
            },
            style:`
                 #felios-snackbar{
                    position:relative;
                    display:flex;
                    margin-bottom:60px;
                 }
                 
                #felios-snackbar  div.wrap{
                     position:absolute;
                   display:grid;
                   width:100%;
                   height:40px;
                   gap:1em;
                   margin-top:3em;
                   place-content:center;
                   justify-items:center;
        
                }
                
                
                .snackbar {
                    display:flex;
                    position:fixed;
                    min-width:180px;
                    min-height:24px;
                    flex-direction:row;
                    align-items:center;
                    justify-content:center;
                    line-height:1.2;
                    color: rgb(180,180,180);
                    background: rgb(50,50,50);
                    border-radius: 48px;
                    white-space:nowrap;
                    opacity: 0;
                    bottom:0;
                    padding:0 2em;
                    box-shadow:1px 1px 30px -10px rgba(0,0,0,0.6);
                    transform-style:preserve-3d;
                    transform: perspective(20cm) translateY(0%) translateX(0px) translateZ(0px);
                    transition: cubic-bezier(1,.18,0,1.24)  350ms all;
                    z-index:100;
                } 
                
                #felios-snackbar .button.active + div div.snackbar{
                    display:flex;
                    max-width:240px;
                    
                    opacity:1;
                    
                    transform-origin:center center;
                    transform: perspective(20cm) translateY(-100%) translateX(0%) translateZ(0px);
                    transition: ease-in-out 250ms all;
                    z-index:100;
                }

                  .snackbar h4{
                      display:inline-block;
                      text-align:center;
                   
                  }
             
            `
        }
    ]
);

doComponentAction(Component.SnackBar,
    function(){
        setTimeout(function(){
        if(Component.SnackBar.state.toggle === false){
          Component.SnackBar.fAction.classList.remove("active");
          Component.SnackBar.setState({toggle:true});
          Component.SnackBar.update();
        }
        },2000)
 },null);


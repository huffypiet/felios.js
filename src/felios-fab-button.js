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

Component.Fab=  new felios("felios-fab-button",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">F</a>
                <div class="fab-options">
                  <span class="fab-option-items">
                        <a  class="fab-option-item" id="Action" href="#" class="button">a</a>
                        <a class="fab-option-item" id="Action" href="#" class="button">b</a>
                        <a class="fab-option-item" id="Action" href="#" class="button">c</a>
                        <a class="fab-option-item" id="Action" href="#" class="button">d</a>
                  </span>
                </div>
            `,
            state:{
               toggle: true
            },
            style:`
                #felios-fab-button{
                    position:fixed !important;
                    display:flex;
                    flex-flow:column;
                    justify-content:center;
                    right:3em;
                    bottom:3em;
                }
                #felios-fab-button .button{ 
                    display:flex;
                    padding:0;
                    flex-flow:column;
                    width:50px;
                    height:50px;
                    text-align:center;
                    justify-content:center;
                    box-shadow:1px 1px 30px -10px rgba(0,0,0,1);
                    border-radius:100px;
                    z-index:1;
                }
                    
                #felios-fab-button .active { content:"x"}

               #felios-fab-button .fab-options .fab-option-items{
           
                    display:flex;
                    flex-flow:column;
                    justify-content:center;
                    width:0px;
                    height:100%;
                    overflow:hidden;
                    top:-50px;
                    z-index:-1;
                }

               #felios-fab-button .fab-options .fab-option-item{
                    display:flex;
                  
                    justify-content:center;
                    align-items:center;
                    text-align:center;
                    width:40px;
                    height:40px;
                    border-radius: 48px;
                    
                    transition: cubic-bezier(.45,-0.01,0,1) 700ms right;
                }

               #felios-fab-button .button.active + div.fab-options .fab-option-items{
                    overflow:none;
                    transform:translateY(-100%);
                    bottom:0;
                    left:0;
               }

                #felios-fab-button .button.active + div.fab-options .fab-option-items .fab-option-item{
               
                    
                    align-items:center;
                    text-align:center;
                    background: rgb(20,20,20,1);
                    color: white;
                    text-decoration: none;
                    box-shadow:1px 1px 30px -10px rgba(0,0,0,1);
                    transition: cubic-bezier(.45,-0.01,0,1) 250ms all;
                }
            `
        }
    ]
);

doComponentAction(Component.Fab,null,null);


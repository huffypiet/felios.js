{   
    const NAME ="FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "A Basic Retro Native Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS= {};
    const UI = "Alert UI"
    const LICENSE= "MIT";
    const COPYRIGHT= "(c) 2021 Humphrey Pietersen";
}


Component.AlertSuccess =  new felios("felios-alert-success",
    [ 
        {
            template:`
                <a>This is an awesome Alert! <i id="Action">close</i></a>
            `,
            state:{
               toggle: true
            },
            style:`

                #felios-alert-success {
                    position:relative;
                    display:flex;
                    flex-flow: row;
                    align-items:center;
                    background: limegreen;
                    height: 40px;
                    border-radius: 4px;
                    width:inherit;
                    margin:1em 0;
                    padding:0px 1em;
                    color: var(--onsolid-dark);
               
                }
                 #felios-alert-success.hide{
                     display:none;
                 }
                #felios-alert-success #Action{
                    display:inline-block;
                    position:absolute;
                    right:40px;
                    cursor: pointer;
                }
                `
        }
    ]
);

doComponentAction(Component.AlertSuccess,
function(){return Component.AlertSuccess
.root.classList.add("hide")},null);


Component.AlertInfo=  new felios("felios-alert-info",
    [ 
        {
            template:`
                <a>This is an awesome Alert! <i id="Action">close</i></a>
            `,
            state:{
               toggle: true
            },
            style:`

                    #felios-alert-info {
                        position:relative;
                        display:flex;
                        flex-flow: row;
                        align-items:center;
                        background: skyblue;
                        height: 40px;
                        width:inherit;
                        border-radius: 4px;
                      
                        margin:1em 0;
                           color: var(--onsolid-dark);
                        padding:0px 1em;
               
                }
                  #felios-alert-info.hide{
                     display:none;
                 }

                   #felios-alert-info #Action{
                    display:inline-block;
                    position:absolute;
                    right:40px;
                    cursor: pointer;
                }
                `
        }
    ]
);

doComponentAction(Component.AlertInfo,
function(){return Component.AlertInfo
.root.classList.add("hide")},null);

Component.AlertWarning=  new felios("felios-alert-warning",
    [ 
        {
            template:`
                <a>This is an awesome Alert! <i id="Action">close</i></a>
            `,
            state:{
               toggle: true
            },
            style:`

                #felios-alert-warning {
                    position:relative;
                    display:flex;
                    flex-flow: row;
                    align-items:center;
                    background: orange;
                    height: 40px;
                    width:inherit;
                    border-radius: 4px;
                    
                       color: var(--onsolid-dark);
                    padding:0px 1em;
                    margin:1em 0;
               
                }
                  #felios-alert-warning.hide{
                     display:none;
                 }

                   #felios-alert-warning #Action{
                    display:inline-block;
                    position:absolute;
                    right:40px;
                    cursor: pointer;
                }
                `
        }
    ]
);

doComponentAction(Component.AlertWarning,
function(){return Component.AlertWarning
.root.classList.add("hide")},null);

Component.AlertDanger=  new felios("felios-alert-danger",
    [ 
        {
            template:`
                <a>This is an awesome Alert! <i id="Action">close</i></a>
            `,
            state:{
               toggle: true
            },
            style:`

                #felios-alert-danger{
                    position:relative;
                    display:flex;
                    flex-flow: row;
                    align-items:center;
                    background: orangered;
                    height: 40px;
                    width:inherit;
                    padding:0px 1em;
                       color: var(--onsolid-dark);
                    border-radius: 4px;
                     margin:1em 0;
                }
                  #felios-alert-danger.hide{
                     display:none;
                 }

                   #felios-alert-danger #Action{
                    display:inline-block;
                    position:absolute;
                    right:40px;
                    cursor: pointer;
                }
                `
        }
    ]
);

doComponentAction(Component.AlertDanger,
function(){return Component.AlertDanger.root
.classList.add("hide")},null);



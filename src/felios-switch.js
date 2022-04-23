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

Component.Switch=  new felios("felios-switch",
    [ 
        {
            template:`
            <span id="Action" class="holder">
                <span class="knob"></span>
            </span>
            `,
            state:{
                toggle: true
            },
            style:`
                #felios-switch { 
                    display:flex; 
                }
                .holder{
                    display:flex;
                    width: 60px;
                    height:30px;
                    background: rgb(180,180,180);
                    border-radius: 16px;
                    transition:cubic-bezier(.46,.03,0,1.17) 350ms all;
                }

                .holder span{
                    display:block;
                    height:30px;
                    width:30px;
                    background: rgb(180,180,180);
                    border-radius: 16px;
                    border-radius: 16px;
                    margin-left:0;
                    opacity:0.2;
                    box-shadow:1px 1px 20px 2000px rgba(0,0,0,0.5);
                    transition:cubic-bezier(.46,.03,0,1.17) 350ms left;
                }

                .holder.active{
                   background: rgb(0,255,140);
                }

                .holder.active > .knob{
                    margin-left: auto;
                    opacity:1
                }
                `
        }
    ]
);

doComponentAction(Component.Switch,
    Component.Switch.fAction.addEventListener("mouseup",function(e){
    e.preventDefault();
    if(Component.Switch.state.toggle === true){
        Component.Switch.fAction.classList.add("active");
        let mode = {
            dark:{
                background: "black",
                foreground: "rgb(212,212,212,1)",
                onsolid:"black"
            }
        }
        window.document
        .querySelector("style")
        .innerHTML +=
        `  :root{
            --background-dark:${mode.dark.background};
            --foreground-dark:${mode.dark.foreground};
            --onsolid-dark:${mode.dark.onsolid};
        }
        body{
            background: var(--background-dark);
            color: var(--foreground-dark)
           }`;
    }else{
        Component.Switch.fAction.classList.remove("active");
           let mode = {
            
             light:{
                background: "white",
                foreground: "black",
                onsolid:"black"
            },
        }
        window.document
        .querySelector("style")
        .innerHTML +=
        `:root{
            --background-light:${mode.light.background};
            --foreground-light:${mode.light.foreground};
            --onsolid-light:${mode.light.onsolid};
        }
        body{  
            background: var(--background-light);
            color: var(--foreground-light)}`;
        }
}),null)


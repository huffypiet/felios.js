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

Component.Progress=  new felios("felios-progress",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">Trigger Progress Loader</a>
                <span class="progress">
                    <span class="track">
                        <span class="fill"></span>
                    </span>
                </span>
            `,
            state:{
               completion:0,
               toggle: true
            },
            style:`
               
                #felios-progress button { 
                    display:flex; 
                 transition: ease-in-out 250ms all;
                }
              
                .progress {
                    opacity:0;
                    display:none;
                    visibility:hidden;
                     
                } 
                
                
                #felios-progress .button.active + .progress{
                    display:flex;
                    position:fixed;
                    align-items:center;
                    left:50%;
                    transform: translateX(-50%);
                    width:44vw;
                    height:12vh;
                    top:39vh;
                    line-height:1;
                    color: rgb(180,180,180);
                    background: rgb(30,30,30);
                    opacity:1;
                       visibility:visible;
                    border-radius:12px;
                    box-shadow:
                        1px 1px 30px 20000px rgba(255,255,255,1),
                        1px 1px 30px 20000px rgba(255,255,255,1),
                        1px 1px 30px -10px rgba(0,0,0,0.6);
                    transition: ease-in-out 250ms all;
                    animation: zoom-in ease-in-out 300ms forward;
                   
                    z-index:100;
                }

                .progress > *{
                    margin:1em;
                }
                
                .progress .track{
                    display:flex;
                    flex-flow:row;
                    flex-direction:row;
                    justify-content:flex-start;
                    align-items:center;
                    background: #eaeaeaea;
                    width:80%;
                    height: 16px;
                    border-radius:12px;
                    margin: 0px auto;
                }
                 .progress .track[data-completion="100%"] span.fill{
                    display:block;
                    background: RoyalBlue;
                    width: 0%;
                    height: 70%;
                    margin:0 .2rem;
                    border-radius:12px;
                    animation:completion-100 ease-in-out 700ms forwards;
                }
                    .progress .track[data-completion="50%"] span.fill{
                    display:block;
                                background: RoyalBlue;
                    width: 0%;
                    height: 70%;
                    margin:0 .2rem;
                    border-radius:12px;
                    animation:completion-50 ease-in-out 700ms forwards;
                }
                
                
                @keyframes completion-100{
                    0%{
                        width:0%;
                    }
                     100%{
                        width:100%;
                    }
                }
                 @keyframes completion-50{
                    0%{
                        width:0%;
                    }
                     100%{
                        width:50%;
                    }
                }

            `
        }
    ]
);


doComponentAction(Component.Progress,
    function(){
        if(Component.Progress.state.toggle === true){
            
            Component.Progress.fAction.classList.add("active");
        
                   Component.Progress.setState({completion:"100%"});
                    setInterval(function(){
                              Component.Progress.root.querySelector(".track")
                              .dataset.completion = Component.Progress.state.completion;
                       },1);
                   setTimeout(function(){
                            if(Component.Progress.state.toggle === false){
                            Component.Progress.fAction.classList.remove("active");
                            Component.Progress.setState({toggle:true});
                            Component.Progress.update();
                            }
                   },2000)
                       
                    Component.Progress.update();
    }
 }, Component.Progress.fAction.classList.remove("active"));


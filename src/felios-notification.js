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

Component.Notification=  new felios("felios-notification",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">Trigger Notification</a>
                <div class="notify">
                    <h4> Something awesome just happened!</h4>
                    <span class="actions">
                       <a href="#" class="button">Dismiss</a>
                       <a href="#" class="button">Save</a>
                    </span>
                </div>
            `,
            
            state:{
               toggle: true
            },
            
            style:`
                #felios-notification button { 
                    display:flex; 
                }
                .notify {
                    display:none;
                } 
                #felios-notification .button.active + div.notify{
                    display:flex;
                    opacity:1;
                    transform-origin:center center;
                    transform: perspective(20cm) translateY(0%) translateX(0%) translateZ(0px);
                    transition: ease-in-out 250ms all;
                    z-index:100;
                }
                
                .notify{
                position:relative;
                    display:flex;
                    position:fixed !important;
                    min-width:270px;
                    flex-direction:row;
                    align-items:center;
                    justify-content:flex-space-between;
                    min-height:90px;
                    right:1vw;
                    top:3vh;
                    line-height:1.5;
                     color: rgb(180,180,180);
                    background: rgb(30,30,30);
                    transform-style:preserve-3d;
                    transform: perspective(20cm) translateY(0%) translateX(1000px) translateZ(0px);
                    border-radius: 16px;
                    box-shadow:1px 1px 30px -10px rgba(0,0,0,0.6);
                    opacity: 0;
                    transition: cubic-bezier(1,.18,0,1.24)  350ms all;
                    z-index:100;
                    font-size:70%;
                }
                  .notify h4{
                      position:aboslute;
                      display:inline-block;
                      width:50%;
                      margin-left:2em;
                      overflow:hidden;
                  }
                .notify .actions{
                    position:aboslute;
                    display:block;
                    width:100px;
                    transform:translateX(30px);
                    font-size: 10px;
                }
                 .notify .actions a{
                 text-align:center;
                   justify-content:center;
                   
                     align-items:center;
                     min-height:12px;
                     min-width:42px;
                 }
                  .notify .actions a:last-child{
                     margin-top:.5em;
                 }
              
            `
        }
    ]
);


doComponentAction(Component.Notification,
    function(){
        setTimeout(function(){
        if(Component.Notification.state.toggle === false){
          Component.Notification.fAction.classList.remove("active");
          Component.Notification.setState({toggle:true});
          Component.Notification.update();
        }
        },3430)
 },null);


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

Component.Modal=  new felios("felios-modal",
    [ 
        {
            template:`
                <a id="Action" href="#" class="button">Modal</a>
                <div class="modal">
                    <h4> Success!
                    <br> I am a modal</h4>
                   <span class="modal-actions dialogue">
                    <a id="killAction" href="#" class="button">Close</a>
                    <a  href="#" class="button">Ok</a>
                   </span>
                </div>
            `,
            
            state:{
               toggle: true
            },
            
            style:`
           #felios-modal .modal{
            content:"";
            display:flex;
            position:fixed !important;
            min-width:240px;
            min-height:120px;
            flex-direction:column;
            text-align:center;
            top:39vh;
            left:50%;
            margin-left: calc((240px/2)*-1);
            line-height:1.7;
            color: rgb(180,180,180);
            background: rgb(30,30,30);
            transform-style:preserve-3d;
            transform: perspective(19cm) translateY(0) translateX(0) translateZ(-100px);
            border-radius: 16px;
            box-shadow:1px 1px 20px 2000px rgba(0,0,0,0.5);
            opacity: 0;
            overflow:hidden;
            animation: zoom-in ease-in-out 300ms forward;
            transition: ease-in-out 250ms all;
            z-index:10000;
        }
        
        #felios-modal .button.active + div.modal{
            display:flex;
            opacity:1;
           
            transform-origin:center center;
            transform: perspective(20cm) translateY(0%) translateX(0%) translateZ(0px);
            transition: ease-in-out 250ms all;
      
        }

        #felios-modal h4{
            display:block;
                width:100%;
                margin-top:.4em;
                
            }
            
        #felios-modal .modal-actions{
            position:absolute;
            width:100%;
            white-space:nowrap;
            
            bottom:0;
        }
          #felios-modal .modal-actions .button{
           width:28%;
           font-size:80%;
           border-radius:12px;
           justify-content:center !important;
        }
            #felios-modal .modal-actions.dialogue .button:first-child{
               border-top-left-radius:0 !important;
            border-top-right-radius:0 !important;
           border-bottom-right-radius:0 !important;
          
        }
         #felios-modal .modal-actions.dialogue .button:last-child{
                    border-top-right-radius:0 !important;
            border-top-left-radius:0 !important;
           border-bottom-left-radius:0 !important;
        }

        @keyframes zoom-in{
            0%{
                
                transform: scale(2,2);
            }
             100%{
                transform: scale(1,1);
            }
        }
        @-webkit-keyframes zoom-in{
            0%{
                transform: scale(2,2);
            }
             100%{
                transform: scale(1,1);
            }
        }
            `
        }
    ]
);

doComponentAction(Component.Modal,
    Component.Modal.fkillAction.addEventListener("click",function(e){
    e.preventDefault();
      if(Component.Modal.state.toggle === false){
          Component.Modal.fAction.classList.remove("active");
          // set it to true just as in the default state
          Component.Modal.setState({toggle:true});
          Component.Modal.update();
    }

}),null);

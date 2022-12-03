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

Component.Menu =  new felios("felios-menu",
    [ 
        {
            template:`
               <a class="brand" href="#">Felios</a>
                <div class="felios-searchform">
                    <input type="text" value="" placeholder="Type in your search...">
                    <button><i>Search</i></button>
                </div>
                <ul class="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="link-drop">Products</a>
                        <div class="mega-menu">
                           <div>
                             <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                           </div>
                            <div>
                             <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                           </div>
                            <div>
                             <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                           </div>
                        </div>
                    </li>
                    <li><a href="#">Support</a></li>
                </ul>
                  <a class="menuicon" href="#">Menu <i></i></a>
            `,
            state:{
               toggle: true
            },
            style:`
                html{
                    font-family: "Raleway", Helvetica, sans-serif;
                }
                
                body{
                    overflow:hidden;
                    overflow-y:scroll;
                    max-width:70vw;
                    margin:0 auto;
                
                }
            
             ::placeholder, input[value]{
                     color: rgba(160, 160,160,1);
                }
                #felios-menu{
                    position:relative;
                    display:flex;
                    flex-flow: row;
                    align-items:center;
                    background: rgba(40,40,40,0.9);
                    height: 45px;
                     border-radius: 4px;
                             width:400px;
                    width:inherit;
                    margin:1em 0;
                    padding:0px 1em;
                   
                    color: var(--onsolid-dark);
                }
                .mega-menu{
                    position:absolute;
                    display:none;
                }
                 #felios-menu.hide{
                     display:none;
                 }
                 
                #felios-menu #Action{
                    display:inline-block;
                    position:absolute;
                    right:40px;
                    cursor: pointer;
                }
                
                #felios-menu .brand{
                    font-weight: bold;
                }
                
                 #felios-menu .felios-searchform {
                     margin-left: 2em;
                     white-space:nowrap;
                 }
                 
                 #felios-menu  a{
                    color:rgba(200,200,200,1);
                    text-decoration:none;
                }
                
                #felios-menu button{
                    background: rgba(214,214,214,0.2);;
                    border:none;
                    outline:none;
                    height: 32px;
                    min-width:80px;
                        color:rgba(234,234,234,0.7);
                    border-radius: 4px;
                }
                  #felios-menu.emerald{
                      backgournd: green !important;
                  }
                #felios-menu ul{
                    list-style:none;
                    margin-left:auto;
                    margin-right:1em;
                    display:flex;
                    flex-flow:row;
                  
                    justify-content:flex-end;
                }

                    #felios-menu ul li{
                        margin-left: 1em; 
                    }
                    #felios-menu   .menuicon{
                        font-weight:bold;
               
                        marign-right:0;
                        min-width:40px;
                    }
                    
                    @media(max-width:990px){
                    body{
                                max-width:93vw;
                    margin:0 auto;
                       }
                        .menu-items{
                            display:none !important;
                        }
                        .menuicon{
                            margin-left:auto;
                        }
                    }
                    @media(max-width:480px){
                       
                        .felios-searchform{
                            display:none !important;
                        }
                    }
                `
        }
    ]
);

doComponentAction(Component.Menu,
    function(){return Component.Menu
    .root.classList.add("hide")},null);


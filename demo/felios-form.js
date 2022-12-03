{
    const NAME ="FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "A Basic Retro Native Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS= {};
    const UI = "Single Input Form w/ Button"
    const LICENSE= "MIT";
    const COPYRIGHT= "(c) 2021 Humphrey Pietersen";
}
    
Component.SearchForm =  new felios("felios-form",
    [ 
        {
            template:`
                <h3 id="Label">{% title %}</h3>
                <input 
                    id="Input" 
                    type="text" 
                    name="title" 
                    value="Software Developer" 
                    placeholder="Title..."/>
                <button 
                    id="Action" 
                    name="submit">
                    Send
                </button>
            `,
            state:{
                title: "Software Developer",
                name:"Tony Starks",
                toggle: false
            },
            style:`
                #felios-form { 
                color: rgba(160, 160,160,1);
                }
                input{
                    background: rgba(190, 190,190,0.1);
                    border:none;
                    line-height: 1.5;
                    min-height: 32px;
                    outline:none;
                    padding:0 1.5em;
                    border-radius: 4px;
                }
            `
        }
    ]
);

doComponentAction(Component.SearchForm,
function(){
    let observer = new MutationObserver(mutationRecords =>{
            //console.log(mutationRecords);
            if(mutationRecords.length > 1){
               // console.log(true);
            }
        })

observer.observe(Component.SearchForm.root,{
    childList:true,
    subtree:true,
    characterDataOldValue:true
})
},null);

